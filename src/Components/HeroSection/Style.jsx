import { createUseStyles } from "react-jss";

const Style = createUseStyles({
    container:{
        backgroundColor:'black',
        opacity:0.9,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:'70px'
    },
    address:{
        maxWidth:'650px',
        fontSize:'42px',
        fontWeight:700,
        color:'white',
        textAlign:'center'
    },highlight:{
        color:'#41BBEA'
    },subAddress:{
        color:'#CECECE',
        fontSize:'20px',
        maxWidth:'530px',
        textAlign:'center',
        marginTop:'50px',
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
        padding:'10px',
        backgroundColor:'darkgray',
        border:'1px solid white',
        marginTop:'30px'/*---------------------------- */
    },
    GetQoutTxt:{
        marginRight:'10px',
        color:'white'
    },
    numberTxt:{
        fontSize:'35px',
        fontWeight:'bold',
        color:'#DBDBDB',
        textAlign:'center'
    },
    subTxt:{
        fontSize:'13px',
        maxWidth:'100px',
        textAlign:'center',
        color:'#DBDBDB'
    },
    countContainer:{
        display:'flex',
        justifyContent:'space-between',
        width:'280px',
        margin:'30px 0',/*------------------------------ */
        "@media (min-width: 400px)": {
            margin:'0 150px'
          }
    },
    bestOpinion:{
        maxWidth:'230px',
        padding:'20px',
        borderRadius:'20px',
        backgroundColor:'#454545',
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
        backgroundColor:'rgba(255, 255, 255, 0.36)',
        width:'230px',
        height:'238px',
        position:'relative',
        borderRadius:'20px',
        marginLeft: '70px',
        marginRight: '70px',
    },
    opinionTitle:{
        color:'white',
        fontSize:'16px',
        fontWeight:'500',
        marginTop:'10px'
    },
    opinionDescription:{
        fontSize:'12px',
        fontWeight:'400',
        color:'#A6A6A6',
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
        width:'310px',
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
        color:'black'
    }



  });

  export default Style