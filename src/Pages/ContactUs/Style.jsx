import { createUseStyles } from "react-jss"

const Style = createUseStyles((theme)=>({
    mainContainer:{
        "@media (max-width: 1056px)": {
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          },
    },
    Form:{
        maxWidth:'400px',
        margin:'50px',
        marginLeft:'90px',
        "@media (max-width: 1056px)": {
            margin:'20px'
          },
    },
    text:{
        marginLeft:'90px',
        "@media (max-width: 1056px)": {
            marginLeft:'20px',
            marginTop:'20px'
          },
        fontSize:'32px',
        fontWeight:600,
        color:theme.colors.background,
        '& span':{
            color:theme.colors.primary
        }
    }
}))

export default Style