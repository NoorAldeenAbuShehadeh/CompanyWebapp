import { createContext, useContext } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import StoreNewData from '../../../Utils/Firebase/StoreNewData'
import UpdateData from '../../../Utils/Firebase/UpdateData'
import SignUpFirebase, {changePassword} from '../../../Utils/Firebase/SignUpFirebase'
import LogInFirebase from '../../../Utils/Firebase/LogInFirebase'
import RetrieveData from "../../../Utils/Firebase/RetrieveData";
export const Data = [
  {
    img: "images/employee11.jpg",
    jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    Position: "CEO",
    employeeName: "K.A Rishman fernando",
  },
  {
    img: "images/employee11.jpg",
    jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    Position: "CEO",
    employeeName: "K.A Rishman fernando",
  },
  {
    img: "images/employee11.jpg",
    jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    Position: "CEO",
    employeeName: "K.A Rishman fernando",
  },
  {
    img: "images/employee11.jpg",
    jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    Position: "CEO",
    employeeName: "K.A Rishman fernando",
  },
];


export const handleUpload = async (selectedFile, employee, id) => {
  const data = await RetrieveData("Users","email",employee.email)
  try {
    if(selectedFile){
    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + selectedFile.name);
    const snapshot = await uploadBytes(storageRef, selectedFile);
    console.log('File uploaded successfully!');
    const downloadURL = await getDownloadURL(storageRef);
    console.log('Download URL:', downloadURL);
    if (id) {
      await UpdateData("Employees", employee.id, {name:employee.name, address:employee.address, email:employee.email, password:employee.password, jobPosition:employee.jobPosition, jobDescription:employee.jobDescription, image: downloadURL });
      let token = await LogInFirebase(employee.email,employee.password)
      await changePassword(token.user,employee.password)
      await UpdateData("Users", data.id, {name:employee.name,email:employee.email,address:employee.address,password:employee.password,role:'employee', image: employee.image})
    } else {
      let token = await SignUpFirebase(employee.email,employee.password);
      await StoreNewData("Employees", { ...employee, image: downloadURL });
      await StoreNewData("Users",{name:employee.name,email:employee.email,address:employee.address,password:employee.password,role:'employee',image: downloadURL})
    }
    }else if(id){
      await UpdateData("Employees", employee.id, { name:employee.name, address:employee.address, email:employee.email, password:employee.password, jobPosition:employee.jobPosition, jobDescription:employee.jobDescription, image: employee.image });
      let token = await LogInFirebase(employee.email,employee.password)
      await changePassword(token.user,employee.password)
      await UpdateData("Users", data.id, {name:employee.name,email:employee.email,address:employee.address,password:employee.password,role:'employee', image: employee.image})
    }
    return true;
  } catch (error) {
    console.log('Error handling upload:', error);
  }
};

export const EmployeesContext = createContext();

export const useEmployeesContext = () => {
  return useContext(EmployeesContext);
};