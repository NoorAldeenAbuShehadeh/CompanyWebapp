import { createUseStyles } from "react-jss";

const Style = createUseStyles({
    container:{
        maxWidth:'100%'
    },
    navigationContainer:{
        borderBottom:'0.7px solid #FFFFFF',
        backgroundColor:'black',
        opacity:0.9
    },
    LogoCont:{
        display:'flex',
        alignItems:'center'
    },
    Logo:{
        color:'white',
        fontSize:'36px',
        fontWeight:700,
        '&:hover':{
            color:'white',
        }
    },
    inActiveLink:{
        borderBottom:'none',
        margin:'10px',
        color:'#FFFFFF8C!important'
    },
    Button:{
        borderBottom:'1px solid blue'
    },
    activeLink:{
        borderBottom:'4px solid blue',
        margin:'10px',
        color:'white!important'
    },
    burgerButton:{
        backgroundColor: 'white'
    }   
  });

  export default Style