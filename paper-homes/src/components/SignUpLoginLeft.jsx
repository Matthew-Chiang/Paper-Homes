import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import 'date-fns';
import logo1 from "../assets/img/logodash2.png"

import stock from "../assets/img/signuploginimage.png"

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    leftside: {
        // width: '30%',
        padding:'10px 20px',
        paddingTop: '120px',
        // paddinTop:'50px',
        height:'40%',
        textAlign:'center'
    },
    text: {
        color:'white',
        paddingTop: '20px'
    }
}));

export default function SignUpLoginLeft() {
    const classes = useStyles();

    return (
        <div style={{width:"35%"}}>

        
            <div className={classes.leftside} style={{backgroundColor:'#5C7294'}}>
            {/* <h1 className={classes.text}>Paper Homes</h1> */}
                <img src={logo1} style={{height:"30%"}}/>
                <h3 className={classes.text}>Connecting you with spaces<br/> so you can go places.</h3>
            </div>
            <div >
                <img src={stock} style={{maxWidth:' 100%'}}/> 
            </div>
        </div>
    );
}
