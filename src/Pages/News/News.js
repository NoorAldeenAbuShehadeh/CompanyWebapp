import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"
import NewsPost from "../../Components/NewsPost"
import { Container, Row } from "react-bootstrap"
import StayInLoop from "../../Components/StayInLoop"
import HeroSection from "./SubComponent/HeroSection"
import { Data,MainData } from './Utils'
const News = () => {
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.NEWS)
  }, [])  
  return (
    <Container>
      <Row>
        <HeroSection />
      </Row>
      <Row>
        <NewsPost maxWidth={'520px'} flexDirection={'row'} {...MainData}/>
      </Row>

      <Row>
        {Data.map((item,index)=><NewsPost key={index} maxWidth={'380px'} flexDirection={'column'} {...item}/>)}
      </Row>

      <Row>
        <StayInLoop />
      </Row>
    </Container>
  )
}

export default News