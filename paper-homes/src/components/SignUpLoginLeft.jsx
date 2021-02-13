import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import 'date-fns';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    leftside: {
        // width: '30%',
        padding:'50px 90px',
        // paddinTop:'50px',
        height:'25%'
    },
    text: {
        color:'white'
    }
}));

export default function SignUpLoginLeft() {
    const classes = useStyles();

    return (
        <div>

        
            <div className={classes.leftside} style={{backgroundColor:'#5C7294'}}>
            <h1 className={classes.text}>Paper Homes</h1>
            <h3 className={classes.text}>Connecting you with spaces<br/> so you can go places.</h3>
            </div>
            <div >
                <img src={require('../images/img.jpg')}/>
            </div>
        </div>
    );
}
