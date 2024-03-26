import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Loader.module.scss";

const LOADER_THRESHOLD = 200;

const Loader = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer: any;

    const start = () =>
      (timer = setTimeout(() => setLoading(true), LOADER_THRESHOLD));

    const end = () => {
      if (timer) {
        clearTimeout(timer);
      }
      setLoading(false);
      console.warn(typeof timer);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);

      if (timer) {
        clearTimeout(timer.current as number);
      }
    };
  }, [router.events]);

  if (!isLoading) return null;

  return (
    <div className={styles.loader}>
      <svg className={styles.spinner} viewBox="0 0 50 50">
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

export default Loader;
