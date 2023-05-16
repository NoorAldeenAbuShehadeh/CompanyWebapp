import { createUseStyles } from "react-jss";

const Style = createUseStyles((theme) => ({
    number:{
        fontSize:'65px',
        fontWeight:600,
        textAlign:'center',
        color:theme.colors.text
    },
    title:{
        textAlign:'center',
        fontSize:'14px',
        fontWeight:400,
        color:theme.colors.text
    },
    container:{
        backgroundColor:theme.colors.background,
        padding:'60px 40px',
        margin:'40px 0px'
    },
    itemContainer:{
        minWidth:'170px',
        margin:'20px 0px'
    }
}))

export default Style