import React, { useEffect } from "react"
import { Container,Row, Col, Button, Alert } from 'react-bootstrap'
import ServiceComponent from "../../../Components/ServiceComponent"
import { useTheme } from "react-jss";
import titleStyle from '../../News/Style'
import Style from '../Style'
import RetrieveData from '../../../Utils/Firebase/RetrieveData'
import DeleteItem from "../../../Utils/Firebase/DeleteItem";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../../../Utils/userContext";
import { useServicesContext } from "../Utils";
import { useState } from "react";
import Loading from '../../../Components/Loading'
const Services = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeUser] = useUserContext();
  const [services,setServices]= useServicesContext();
  const [loading, setLoading] = useState(true)
  const text = titleStyle({ theme});
  const classes = Style();
  const [deleted ,setDeleted]=useState(false)
  useEffect(() => {
    RetrieveData('Services').then((response)=>{
      setServices(response)
      setLoading(false)
    })
  }, [])

  const handleUpdate =(index)=>{
    navigate('update/'+index)
  }

  const handleDelete =(index)=>{
    try{
    setServices(services.filter((item)=>item!==services[index]))
    DeleteItem('Services',services[index].id)
    setDeleted(true)
    window.scrollTo(0,0)
    setTimeout(()=>{
      setDeleted(false)
    },2000)
    }catch(error){
      window.alert(error.toString())
    }
  }
  return (
    loading? <Loading />:
      <Container className={classes.servicesContainer}>
      <Row className="d-flex align-items-center justify-content-between">
        <Col><h2 className={text.title} style={{textAlign:'start'}}>Our <span>Services</span></h2></Col>
        {
          activeUser?.role==='admin'&&
          <Col className="d-flex align-items-center justify-content-end"><Button variant="primary" onClick={()=>navigate('add')}>add Service </Button></Col>
        }
        {
          deleted&&
          <Alert key='success' variant='success'>
          deleted successfully
        </Alert>
        }
      </Row>
      {
        services?.map((item,index)=>
        <div key={index}>
          {activeUser?.role==='admin'&&
            <Container className='d-flex justify-content-end'>
            <Button variant="danger" className='m-2' onClick={()=>handleDelete(index)}>Delete</Button>
            <Button className='m-2' onClick={()=>handleUpdate(index)}>Update</Button>
          </Container>}
          <Row key={index} className={`d-flex align-items-center justify-content-center`}>
            <ServiceComponent index={index} {...item}/>
          </Row>
        </div>
        )
      }
    </Container>
  )
}

export default Services