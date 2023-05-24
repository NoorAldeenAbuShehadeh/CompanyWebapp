import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from "react-router-dom";
import StoreNewData from '../../../Utils/Firebase/StoreNewData'
const MyForm = () => {
    const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [service, setService] = useState({
    title:'',
    description:'',
    image:''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setService((prevState) => ({
            ...prevState,
            image: reader.result,}))
      };
      reader.readAsDataURL(file);
    } else {
        setService((prevState) => ({
            ...prevState,
            image: null,}))
    }
  };
  const handleUpload = async() => {
    if (selectedFile) {
      const storage = getStorage();
      const storageRef = ref(storage, 'images/' + selectedFile.name);
      return uploadBytes(storageRef, selectedFile)
        .then((snapshot) => {
          console.log('File uploaded successfully!');
          getDownloadURL(storageRef)
            .then((downloadURL) => {
              console.log('Download URL:', downloadURL);
              setService((prevState) => ({
                ...prevState,
                image: downloadURL}))
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



  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prevState) => ({
      ...prevState,
      [name]: value,}))
    }
    
  const handleSubmit=async()=>{
    await handleUpload()
    navigate("/")
  }


  return (
    <Container className={`d-flex-column align-items-center`} style={{ maxWidth: "600px" }}>
    <Form>
      <Form.Group controlId="formTitle" className="m-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          onChange={(e)=>handleChange(e)}
        />
      </Form.Group>

      <Form.Group controlId="formDescription" className="m-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          style={{ resize: 'none' }}
          placeholder="Enter description"
          name="description"
          onChange={(e)=>handleChange(e)}
        />
      </Form.Group>

      <Form.Group controlId="formFile" className="m-3">
        <Form.Label>Select File</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

      {service.image && (
        <Form.Group className="m-3">
          <img src={service.image} alt="Preview" style={{ maxWidth: "200px" }} />
        </Form.Group>
      )}

      <Button variant="primary" className="m-3 " onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </Container>
  );
};
export default MyForm;
