import { createUseStyles } from "react-jss"

const Style = createUseStyles((theme)=>({
    container:{
        backgroundImage: "url('images/previewImage.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'570px',
        display:'flex',
        alignItems:'flex-end',
        maxWidth:'700px',
    },
    addressContainer:{
        paddingTop:'13px',
        maxWidth:'350px',
    },
    TbPointFilled:{
        width:'50px'
    },
    addressTitle:{
        color:theme.colors.text,
        fontSize:'25px',
        fontWeight:600
    },
    addressContent:{
        color:theme.colors.text,
        marginLeft:'45px'
    },
    info :{
        borderTop:'1px solid white',
        '& *':{
            color:theme.colors.text,
            padding :'40px 10px',
        },
        '& :not(:last-child)':{
            borderRight:"1px solid white"   
        }
    }
}))

export default Style