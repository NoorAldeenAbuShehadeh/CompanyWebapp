import React, { useEffect, useState } from "react"
import NewsPost from "../../../Components/NewsPost"
import { Container, Row, Col, Button } from "react-bootstrap"
import StayInLoop from "../../../Components/StayInLoop"
import HeroSection from "./HeroSection"
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../Utils/userContext'
import { useNewsContext } from "../Utils"
import RetrieveData from "../../../Utils/Firebase/RetrieveData"
import Loading from "../../../Components/Loading"
const News = () => {
  const [activeUser] = useUserContext();
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useNewsContext()
  const [searchContent,setSearchContent] = useState() 
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0,0)
    RetrieveData('News').then((response)=>{
      setNews(response)
      setLoading(false)
    })
  }, [])

  return (
    <Container>
      <Row>
        <HeroSection setSearchContent= {setSearchContent}/>
      </Row>
     { loading? <Loading />:(<>
      <Row>
        {
          (activeUser?.role==='admin' || activeUser?.role==='employee')&&
          <Col className="d-flex align-items-center justify-content-end"><Button variant="primary" onClick={()=>navigate('add')}>add New</Button></Col>
        }
      </Row>
      <Row>
        <NewsPost maxWidth={'520px'} flexDirection={'row'} {...news[0]} index={0}/>
      </Row>

      <Row>
        {news.slice(1,news.length).map((item,index)=><NewsPost key={index} maxWidth={'380px'} flexDirection={'column'} {...item} index={index}/>)}
      </Row>
      </>)}
      <Row>
        <StayInLoop />
      </Row>
    </Container>
  )
}

export default News