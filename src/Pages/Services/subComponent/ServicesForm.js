import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { handleUpload, useServicesContext } from "../Utils";
const ServiceForm = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [services,setServices]= useServicesContext();
  const [error,setError] = useState(null)
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prevState) => ({
      ...prevState,
      [name]: value,}))
    }
    
  const handleSubmit=()=>{
    setError(null)
    try{
    if(!service.title)throw new Error('please enter the title')
    if(!service.description)throw new Error('please enter the description')
    if(!service.image)throw new Error('please choose the image')
    setServices([...services, service])
    handleUpload(selectedFile,service)
    navigate("/Services")
  } catch(error){
    setError(error.toString().split(":"))
    }
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
    {
      error? <Alert key='danger' variant='danger'>
          {error[error.length-1]}
        </Alert>:<></>
    }
    </Container>
  );
};
export default ServiceForm;
