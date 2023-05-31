import { createUseStyles } from "react-jss";

const Style = createUseStyles((theme) => ({
    employeeImg:{
        width:'350px',
        height:'299px',
        borderRadius:'9px'
    },
    jobDescription:{
        maxWidth:'330px',
        fontSize:'21px',
        fontWeight:500,
        color: theme.colors.background
    },
    details:{
        fontSize:'16px',
        fontWeight:300,
        color:theme.colors.background,
        "& span":{
            color:theme.colors.employeeName
        }
    }

}));

export default Style;