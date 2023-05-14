import { createUseStyles } from "react-jss"

const Style = createUseStyles((theme)=>({
    container:{
        maxWidth:'380px',
        minWidth:'320px',
        borderRadius:'15px',
        padding:'30px',
        margin:'10px'
    },
    image:{
        margin:'10px',
        height:'100px'
    },
    title:{
        fontSize:'19px',
        fontWeight:'bold',
        color: theme.colors.background,
    },
    description:{
        fontSize:'14px',
        textAlign:'center',
        maxWidth:'850px',
        marginBottom:'30px'
    },
    Selected:{
        boxShadow: '0px 4px 250px rgba(0, 0, 0, 0.15)',
    },
    mainTitle:{
        marginBottom:'20px',
        fontSize:'27px',
        fontWeight:'bold',
        color: theme.colors.background,
        textAlign:'center',
        '& span':{color:theme.colors.primary}
    },
    AboutContainer:{
        marginTop:'80px',
        marginBottom:'80px'
    }
}))


export default Style