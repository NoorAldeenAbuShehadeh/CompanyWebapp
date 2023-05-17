import { createUseStyles } from "react-jss";

const Style = createUseStyles((theme)=>({
    postContainer:{
        display:'flex',
        flexDirection:(props)=>props.flexDirection,
        maxWidth:(props)=>props.flexDirection==='column'?props.maxWidth:'',
        marginTop:'50px',
        marginBottom:'50px',
        '@media (max-width: 1000px)': {
            flexDirection:'column!important',
            alignItems:'center'
          }
    },
    postImage:{
        maxWidth:(props)=>props.maxWidth,
        height:(props)=>props.flexDirection==='column'?'260px':'310px',
        borderRadius:'44px',
        margin:'0px 30px',
        '@media (max-width: 600px)': {
            maxWidth:'250px',
            height:'200px!important'
          }
    },
    postContent:{
        maxWidth:(props)=>props.maxWidth,
        padding:'20px'
    },
    publisherName:{
        fontSize:'16px',
        fontWeight:600
    },
    date:{
        fontSize:'13px',
        fontWeight:400
    },
    publisherImg:{
        width:'54px',
        height:'54px',
        borderRadius:'54px'
    },
    publisherContainer:{
        display:'flex'
    }
}))

export default Style