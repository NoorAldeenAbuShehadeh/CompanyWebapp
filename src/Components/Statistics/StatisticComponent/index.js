import React from 'react'
import { Container } from 'react-bootstrap'
import { useTheme } from "react-jss"
import Style from "../Styles";
const StatisticComponent = ({number, title}) => {
    const theme = useTheme();
    const classes = Style({ theme });
  return (
    <Container className={classes.itemContainer}>
        <h1 className={classes.number}>{number}</h1>
        <p className={classes.title}>{title}</p>
    </Container>
  )
}

export default StatisticComponent