import { createUseStyles } from "react-jss";

const Style = createUseStyles((theme)=>({
    container:{
        backgroundColor: theme.colors.background,
        opacity:0.9,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingTop: theme.spacing.large,
    },
    address:{
        maxWidth:'650px',
        fontSize:'42px',
        fontWeight:700,
        color:theme.colors.text,
        textAlign:'center'
    },highlight:{
        color:theme.colors.primary
    },subAddress:{
        color:theme.colors.secondary,
        fontSize:'20px',
        maxWidth:'590px',
        textAlign:'center',
        marginTop:'30px',
        padding:'0 10px'
    },
        reviewsContainer:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            alignItems:'center',
            justifyContent:'center',
            "@media (max-width: 670px)": {
                flexDirection:'column',
              }
        },

    GetQuot:{
        margin:theme.spacing.small,
        padding:'10px',
        backgroundColor:theme.colors.darkGray,
        border:`1px solid ${theme.colors.text}`,
        marginTop:'30px',/*---------------------------- */
    },
    GetQoutTxt:{
        marginRight:'10px',
        color:theme.colors.text
    },
    numberTxt:{
        fontSize:'35px',
        fontWeight:'bold',
        color:theme.colors.lightGray,
        textAlign:'center'
    },
    subTxt:{
        fontSize:'13px',
        maxWidth:'100px',
        textAlign:'center',
        color:theme.colors.lightGray,
    },
    countContainer:{
        display:'flex',
        justifyContent:'space-between',
        width:'280px',
        margin:'30px 0',/*------------------------------ */
        "@media (min-width: 400px)": {
            margin:'30px 150px'
        },   
        marginTop:'30px',     
    },
    bestOpinion:{
        maxWidth:'230px',
        padding:'20px',
        borderRadius:'20px',
        backgroundColor:theme.colors.darkGray,
        "@media (min-width: 827px)": {
            order:-5
        },
        "@media (max-width: 827px)": {
            marginRight:'100px'
          },
          "@media (max-width: 720px)": {
            marginRight:0
          }
    },PosterName:{
        marginLeft:'10px',
        color:'white'
    },
    DoContainer:{
        backgroundColor:theme.colors.alertBackground,
        width:'230px',
        height:'238px',
        position:'relative',
        borderRadius:'20px',
        marginLeft: '70px',
        marginRight: '70px',
    },
    opinionTitle:{
        color:theme.colors.text,
        fontSize:'16px',
        fontWeight:'500',
        marginTop:'10px'
    },
    opinionDescription:{
        fontSize:'12px',
        fontWeight:'400',
        color:theme.colors.secondary,
        lineHeight:'15px'
    },circleDiv:{
        width:'44px',
        height:'44px',
        borderRadius:'44px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    AlertCont:{
        padding:'15px 20px',
        margin:0,
        borderRadius:'12px',
        position:'absolute',
        top:20,
        left:-60
    },
    AlertCont1:{
        padding:'15px 20px',
        width:'330px',
        borderRadius:'12px',
        margin:0,
        position:'absolute',
        bottom:20,
        right:-60
    },
    AlertTxt:{
        fontSize:'14px',
        padding:'5px 10px',
        margin:0,
        marginRight: '10px'
    },
    baseDevComp:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    textDevComp:{
        fontWeight:650,
        color:theme.colors.background,
    }



  }));

  export default Style