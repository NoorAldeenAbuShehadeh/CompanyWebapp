import React from 'react'
import { createUseStyles, useTheme } from "react-jss";

const Style = createUseStyles((theme)=>({
    title:{
        fontSize:'24px',
        fontWeight:600,
        color:theme.colors.background
    }
}))

const PostTitle = ({title}) => {
    const theme = useTheme();
    const classes = Style(theme)
  return (
    <h2 className={classes.title}>{title}</h2>
  )
}

export default PostTitle