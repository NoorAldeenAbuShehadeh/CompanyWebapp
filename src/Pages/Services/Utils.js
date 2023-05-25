import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import StoreNewData from '../../Utils/Firebase/StoreNewData'
import { createContext, useContext } from "react";

export const handleUpload = async(selectedFile, service) => {
    if (selectedFile) {
      const storage = getStorage();
      const storageRef = ref(storage, 'images/' + selectedFile.name);
      return uploadBytes(storageRef, selectedFile)
        .then((snapshot) => {
          console.log('File uploaded successfully!');
          getDownloadURL(storageRef)
            .then((downloadURL) => {
              console.log('Download URL:', downloadURL);
                StoreNewData("Services",{...service, image:downloadURL})
                return true
            })
            .catch((error) => {
              console.log('Error getting download URL:', error);
            });
        })
        .catch((error) => {
          console.log('Error uploading file:', error);
        });
    }
  };



export const ServicesContext = createContext();

export const useServicesContext = () => {
  return useContext(ServicesContext);
};