import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEmployeesContext, handleUpload } from "../Utils/Utils";
import { useUserContext } from '../../../Utils/userContext'

const EmployeeForm = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [error,setError] = useState(null)
    const [employees,setEmployees]= useEmployeesContext();
    const [activeUser] = useUserContext();
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [employee, setEmployee] = useState({
      name:'',
      address:'',
      email:'',
      password:'',
      jobPosition:'',
      jobDescription:'',
      image:''
    });
    useEffect(()=>{
      if(id){
        window.scrollTo(0, 0);
        setEmployee(employees[+id])
      }
    },[])
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setEmployee((prevState) => ({
              ...prevState,
              image: reader.result,}))
        };
        reader.readAsDataURL(file);
      } else {
        setEmployee((prevState) => ({
              ...prevState,
              image: null,}))
      }
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEmployee((prevState) => ({
        ...prevState,
        [name]: value,}))
      }
    const handleSubmit=async()=>{
      setLoading(true)
      setError(null)
      try{
      if(!employee.name)throw new Error('please enter the name')
      if(!employee.address)throw new Error('please enter the address')
      if(!employee.email)throw new Error('please enter the email')
      if(!employee.password)throw new Error('please enter the password')
      if(!employee.jobPosition)throw new Error('please enter the job Position')
      if(!employee.jobDescription)throw new Error('please enter the job Description')
      if(!employee.image)throw new Error('please choose the image')
      await handleUpload(selectedFile, employee, id)
      navigate("/AboutUs")
      window.scrollTo(0,0)
    } catch(error){
      setLoading(false)
      setError(error.toString().split(":"))
      }
    }
    return (
      <Container className={`d-flex-column align-items-center`} style={{ maxWidth: "600px" }}>
      <Form>
        <Form.Group controlId="formTitle" className="m-3">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter employee name"
            value={employee.name}
            name="name"
            onChange={(e)=>handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formTitle" className="m-3">
          <Form.Label>Employee address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter employee address"
            value={employee.address}
            name="address"
            onChange={(e)=>handleChange(e)}
          />
        </Form.Group>
  
        <Form.Group controlId="formTitle" className="m-3">
          <Form.Label>Employee email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@sample.com"
            value={employee.email}
            name="email"
            onChange={(e)=>handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formTitle" className="m-3">
          <Form.Label>Employee password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter your password"
            value={employee.password}
            name="password"
            onChange={(e)=>handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formTitle" className="m-3">
          <Form.Label>job Position of the employee</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter employee job Position"
            value={employee.jobPosition}
            name="jobPosition"
            onChange={(e)=>handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="m-3">
          <Form.Label>job Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            style={{ resize: 'none' }}
            placeholder="Enter job Description"
            name="jobDescription"
            value={employee.jobDescription}
            onChange={(e)=>handleChange(e)}
          />
        </Form.Group>
  
        <Form.Group controlId="formFile" className="m-3">
          <Form.Label>Employee image</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
  
        {employee.image && (
          <Form.Group className="m-3">
            <img src={employee.image} alt="Preview" style={{ maxWidth: "200px" }} />
          </Form.Group>
        )}
  
        <Button variant="primary" className="m-3 " onClick={handleSubmit}>
          Submit
        </Button>
        {loading&&<Button variant="primary" disabled className='m-4'>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>}
      </Form>
      {
        error? <Alert key='danger' variant='danger'>
            {error[error.length-1]}
          </Alert>:<></>
      }
      </Container>
    );
}

export default EmployeeForm