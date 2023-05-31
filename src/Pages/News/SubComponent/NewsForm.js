import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useNewsContext } from "../Utils";
import { useUserContext } from '../../../Utils/userContext'
import { handleUpload } from "../Utils";

const NewsForm = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [error,setError] = useState(null)
    const [news,setNews]= useNewsContext();
    const [activeUser] = useUserContext();
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({
      title:'',
      description:'',
      image:''
    });
    useEffect(()=>{
      if(id){
        window.scrollTo(0, 0);
        setPost(news[+id])
      }
    },[])
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPost((prevState) => ({
              ...prevState,
              image: reader.result,}))
        };
        reader.readAsDataURL(file);
      } else {
        setPost((prevState) => ({
              ...prevState,
              image: null,}))
      }
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setPost((prevState) => ({
        ...prevState,
        [name]: value,}))
      }
    const handleSubmit=async()=>{
      setLoading(true)
      setError(null)
      try{
      if(!post.title)throw new Error('please enter the title')
      if(!post.description)throw new Error('please enter the description')
      if(!post.image)throw new Error('please choose the image')
      await handleUpload(selectedFile, post, activeUser, id)
      navigate("/News")
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
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={post.title}
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
            value={post.description}
            onChange={(e)=>handleChange(e)}
          />
        </Form.Group>
  
        <Form.Group controlId="formFile" className="m-3">
          <Form.Label>Select File</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
  
        {post.image && (
          <Form.Group className="m-3">
            <img src={post.image} alt="Preview" style={{ maxWidth: "200px" }} />
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

export default NewsForm