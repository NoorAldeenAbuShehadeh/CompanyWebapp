import { createUseStyles } from "react-jss"

const Style = createUseStyles((theme)=>({
    mainTitle:{
        fontWeight:'bold',
        fontSize:'30px',
        textAlign:'center',
        marginBottom:'20px'
    },
    generalDescription:{
        maxWidth:'550px',
        textAlign:'center',
        fontSize:'14px',
        fontWeight:400
    },
    postContainer:{
        maxWidth:'320px',
        marginBottom:'50px',
    },
    imgContainer:{
        width:'320px',
        height:'281px',
        borderRadius: '14px 14px 0px 0px',
        // objectFit: 'contain'
    },
    date:{
        fontSize:'16px',
        color: theme.colors.darkGray,
        padding:'10px 0px'
    },
    title:{
        fontSize:'18px',
        fontWeight:700
    },
    description:{
        fontSize:'16px',
        fontWeight:400,
        color: theme.colors.darkGray,
        margin:'20px 0px'
    },
    readMore:{
        textDecoration:'none',
        color:theme.colors.background,
        fontSize:'18px',
        fontWeight:600,
        textAlign:'end'
    }
})
)

export default Style