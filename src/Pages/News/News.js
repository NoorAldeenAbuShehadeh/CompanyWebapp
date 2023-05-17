import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { routeNames } from "../../Utils/Utils"
import NewsPost from "../../Components/NewsPost"
import { Container, Row } from "react-bootstrap"
const News = () => {
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.NEWS)
  }, [])
  const MainData = {
    img:'images/News1.jpg',
    title:'Lorem Ipsum is simply dummy text of the printing.',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
    publisherImg:'images/publisher1.png',
    publisherName:'publisher name',
    dateOfPublish:'20.12.2020',
  }  

  const Data = {
    img:'images/News1.jpg',
    title:'Lorem Ipsum is simply dummy text of the printing.',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
    publisherImg:'images/publisher1.png',
    publisherName:'publisher name',
    dateOfPublish:'20.12.2020',
  }  
  return (
    <Container>
      <Row>
        <NewsPost maxWidth={'520px'} flexDirection={'row'} {...MainData}/>
      </Row>

      <Row>
        {[1,2,3,4,5,6].map((item)=><NewsPost maxWidth={'330px'} flexDirection={'column'} {...MainData}/>)}
      </Row>
    </Container>
  )
}

export default News