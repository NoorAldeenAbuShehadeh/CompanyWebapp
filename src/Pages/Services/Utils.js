import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import StoreNewData from '../../Utils/Firebase/StoreNewData'
import UpdateData from '../../Utils/Firebase/UpdateData'
import { createContext, useContext } from "react";

export const handleUpload = async (selectedFile, service, id) => {
    try {
      if(selectedFile){
      const storage = getStorage();
      const storageRef = ref(storage, 'images/' + selectedFile.name);
      const snapshot = await uploadBytes(storageRef, selectedFile);
      console.log('File uploaded successfully!');
      const downloadURL = await getDownloadURL(storageRef);
      console.log('Download URL:', downloadURL);
      if (id) {
        await UpdateData("Services", service.id, { title: service.title, description: service.description, image: downloadURL });
      } else {
        await StoreNewData("Services", { ...service, image: downloadURL });
      }
      }else if(id){
        await UpdateData("Services", service.id, { title: service.title, description: service.description, image: service.image });
      }
      return true;
    } catch (error) {
      console.log('Error handling upload:', error);
    }
};



export const servicesContext = createContext();

export const useServicesContext = () => {
  return useContext(servicesContext);
};