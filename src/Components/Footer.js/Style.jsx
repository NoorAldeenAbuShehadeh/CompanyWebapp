import { createUseStyles } from "react-jss"

const Style = createUseStyles((theme)=>({
    keyWord:{
        fontSize:'12px',
        backgroundColor:'rgba(196, 196, 196, 0.19)',
        border:'none',
        padding:'6px 30px'
    },
    container:{
        backgroundColor: theme.colors.background,
        padding:'70px'
    }
}))

export default Style