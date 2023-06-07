import { createContext, useContext } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import StoreNewData from '../../Utils/Firebase/StoreNewData'
import UpdateData from '../../Utils/Firebase/UpdateData'

export const handleUpload = async (selectedFile, post, activeUser, id) => {
  try {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const dateOfPublish = `${day}/${month}/${year}`;
    if(selectedFile){
    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + selectedFile.name);
    const snapshot = await uploadBytes(storageRef, selectedFile);
    // console.log('File uploaded successfully!');
    const downloadURL = await getDownloadURL(storageRef);
    // console.log('Download URL:', downloadURL);
    if (id) {
      await UpdateData("News", post.id, { title: post.title, description: post.description, image: downloadURL, publisherEmail:activeUser.email, dateOfPublish });
    } else {
      await StoreNewData("News", { ...post, image: downloadURL, publisherEmail:activeUser.email, dateOfPublish });
    }
    }else if(id){
      await UpdateData("News", post.id, { title: post.title, description: post.description, image: post.image, publisherEmail:activeUser.email, dateOfPublish });
    }
    return true;
  } catch (error) {
    // console.log('Error handling upload:', error);
  }
};

export const NewsContext = createContext();

export const useNewsContext = () => {
  return useContext(NewsContext);
};