import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import image from '../images/img.jpg'

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
                <image src={require('../images/img.jpg')}/>
            </div>
        </div>
    );
}
