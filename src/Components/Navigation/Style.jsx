import { createUseStyles } from "react-jss";

const Style = createUseStyles({
    Logo:{
        fontSize:'30px',
        fontWeight:700
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
        color:'#FFFFFFFF'
    },    
  });

  export default Style