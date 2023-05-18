import { createUseStyles } from "react-jss";

const Style = createUseStyles((theme) => ({
    Container:{
        maxWidth:'430px',
    },
    title:{
        fontSize:'42px',
        fontWeight: 700,
        textAlign:'center',
        "& span":{
            color:theme.colors.primary
        },
        margin:'20px'
    },
    description:{
        fontSize:'20px',
        fontWeight:500,
        textAlign:'center'
    },
    InputGroup:{
        maxWidth:'320px'
    },
    searchInput:{
        backgroundColor:theme.colors.SearchBackground
    }
}))

export default Style