import React from 'react'
import { Container, Placeholder } from 'react-bootstrap'

const Loading = () => {
  return (
    [1,2,3,4,5,6,7].map((index)=>
       <Container key={index}>
       <Placeholder as="p" animation="glow">
         <Placeholder xs={12} />
       </Placeholder>
       <Placeholder as="p" animation="wave">
         <Placeholder xs={12} />
       </Placeholder>
     </Container>
  )
  )
}

export default Loading