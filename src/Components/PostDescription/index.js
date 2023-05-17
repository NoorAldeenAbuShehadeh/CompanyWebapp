import React from 'react'
import { createUseStyles, useTheme } from "react-jss";

const Style = createUseStyles((theme)=>({
    description:{
        fontSize:'16px',
        fontWeight:400,
        color:theme.colors.darkGray
    }
}))
const PostDescription = ({description}) => {
    const theme = useTheme();
    const classes = Style(theme)
  return (
    <p className={classes.description}>
        {description}
    </p>
  )
}

export default PostDescription