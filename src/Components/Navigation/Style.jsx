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
        marginRight:0,
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
        color:'#FFFFFF8C!important',
        textDecoration: "none"
    },
    Button:{
        borderBottom:'1px solid blue'
    },
    activeLink:{
        borderBottom:'4px solid blue',
        margin:'10px',
        color:'white!important',
        textDecoration: "none"
    },
    burgerButton:{
        backgroundColor: 'white'
    },    
    contactUS:{
        border:'1px solid blue',
        padding:'6px',
        borderRadius:'5px'
    },  
    NavLinks:{
        display:'flex',
        alignItems:'center',
        "@media (max-width: 992px)": {
            alignItems:'flex-start'
        },
    } 
  });

  export default Style