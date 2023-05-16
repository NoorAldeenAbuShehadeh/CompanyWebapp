import { createUseStyles } from "react-jss";

const Style = createUseStyles((theme) => ({
    mainContainer:{
        marginTop:'50px',
        marginBottom:'20px'
    },
    mainTitle:{
        fontWeight:'bold',
        fontSize:'30px',
        textAlign:'center',
        marginBottom:'50px'
    },
  iconContainer: {
    backgroundColor:(props)=>props.color,
    border:'none',
    width:'90px',
    height:'90px',
    borderRadius:'20px',
    '& img':{
        width:'40px',
        height:'40px'
    }
  },
  container:{
    width:'283px',
    marginBottom:'50px'
  },
  title:{
    fontSize:'22px',
    fontWeight:600,
    textAlign:'center',
    color:theme.colors.background
  },
  description:{
    fontSize:'14px',
    textAlign:'center'
  }
}))

export default Style;