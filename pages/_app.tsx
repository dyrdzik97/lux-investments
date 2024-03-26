import type { AppProps } from "next/app";
import DefaultLayout from "../components/DefaultLayout/DefaultLayout";
import { AuthProvider } from "../components/FireBaseAuth/context/AuthContext";
import Loader from "../components/Loader/Loader";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DefaultLayout>
        <Loader />
        <Component {...pageProps} />
      </DefaultLayout>
    </AuthProvider>
  );
}
