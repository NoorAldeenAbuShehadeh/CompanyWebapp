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
    // heroImgContainer:{
    //     "@media (max-width: 996px)": {
    //         order:-1
    //       },
    // }
}))

export default Style

/*

      "@media (max-width: 768px)": {
        borderRight: "none",
        borderBottom: "1px solid white",
      },


*/