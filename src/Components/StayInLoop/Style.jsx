import { createUseStyles } from "react-jss";

const Style = createUseStyles((theme)=>({
    AlertContainer:{
        marginTop:'30px',
        marginBottom:'70px'
    },
    title:{
        fontSize:'30px',
        fontWeight:600,
        color:theme.colors.background,
    },
    description:{
        fontSize:'16px',
        fontWeight: 400,
    }
}))

export default Style