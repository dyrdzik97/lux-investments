import { initializeApp } from 'firebase/app'
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { uuid } from 'uuidv4'
import { IImageProps } from '../models'
import { firebaseConfig } from '../services/firebaseConfig'

export const addImageToDatabaseAndReturnPhotoUrl = async (
  image: IImageProps,
): Promise<string> => {
  await initializeApp(firebaseConfig)
  const storage = getStorage()
  const metadata = {
    contentType: 'image/jpeg',
    firebaseStorageDownloadTokens: uuid(),
  }

  const storageRef = ref(storage, `images/${image?.name}`)
  const { ref: uploadRef } = await uploadBytesResumable(
    storageRef,
    image as File,
    metadata,
  )
  const photoUrl = await getDownloadURL(uploadRef)

  return photoUrl
}
