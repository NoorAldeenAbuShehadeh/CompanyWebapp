import { createUseStyles } from "react-jss"

const Style = createUseStyles((theme)=>({
    serviceContainer:{
        "@media (max-width: 992px)": {
            flexDirection:'column',
            alignItems:'center'
          },
    },
    imgContainer:{
        maxWidth:'500px',
        borderRadius:'20px',
        order:(props)=>(props.index%2===0)?-1:1,
        margin:'30px',
        "@media (max-width: 992px)": {
            order: '-1 !important'
          },
          "@media (max-width: 543px)": {
            maxWidth:'400px'
          },
          "@media (max-width: 443px)": {
            maxWidth:'300px'
          },
    },
    contentContainer:{
        margin:'30px',
        maxWidth:'500px',
    },
    btn:{
        maxWidth:'150px'
    }
}))

export default Style