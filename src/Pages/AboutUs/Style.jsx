import { createUseStyles } from "react-jss";

const Style = createUseStyles((theme) => ({
    contentContainer:{
        "@media (max-width: 996px)": {
            flexDirection:'column'
          },
    },
    title:{
        fontSize:'40px',
        fontWeight:600,
        color:theme.colors.background,
        marginTop:'80px',
        "& span":{
            color:theme.colors.primary
        }
    },
    description:{
        fontSize:'18px',
        fontWeight:500,
        maxWidth:'520px',
        marginTop:'40px'
    },
    heroImg:{
        "@media (max-width: 540px)": {
            width:'340px',
          },
    },
    TeamContainer:{
        marginTop:'50px'
    },
    TeamContainerTitle:{
        fontSize:'27px',
        fontWeight:600,
        color: theme.colors.background,
        paddingLeft:'30px',
        marginBottom:'40px'
    },
    EngagedWith:{
        backgroundColor: theme.colors.background
    },
    EngagedWithTitle:{
        color:theme.colors.text,
        fontSize:'35px',
        fontWeight:600,
        textAlign:'center'
    },
    EngagedWithText:{
        color:theme.colors.lightGray,
        fontSize:'17px',
        fontWeight:400,
        textAlign:'center',
        maxWidth:'760px'
    },
    logoContainer:{
        maxWidth:'948px',
    }
}))

export default Style

/*

      "@media (max-width: 768px)": {
        borderRight: "none",
        borderBottom: "1px solid white",
      },


*/