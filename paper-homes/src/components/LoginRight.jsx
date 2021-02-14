import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    signup:{
        textAlign: 'justify',
        padding: '80px 0px'
    },
    title: {
        // paddingTop: '75px',
        paddingBottom: '10px',
        fontSize: 40,
        margin: '10px 5px',
    },
    
    nextButton: {
        
        width: '150px',
        boxShadow: 'none',
        color: 'white',
        backgroundColor: '#5C7294',
        margin: '10px 5px',
        width: '510px',
        '&:hover': {
            backgroundColor: '#1A2F4F',
            // borderColor: '#0062cc',
            boxShadow: 'none',
          },
        '&:active': {
        boxShadow: 'none',
        // backgroundColor: '#0062cc',
        // borderColor: '#005cbf',
        },
        marginTop: '30px'
    },
    text1: {
        margin: '10px 5px',
        width: '510px'
    },
    text2: {
        margin: '10px 5px',
        width: '250px'
    },
    note: {
        marginTop: '-5px',
        marginLeft: '5px',
        fontSize: 14,
        color: 'black',
        textDecoration: 'underline',
        '&:hover': {
            color: '#ACACAC',
            textDecoration: 'underline',
            // borderColor: '#0062cc',
            // boxShadow: 'none',
          },
    }
}));

export default function LoginRight({data, setData}) {
    const classes = useStyles();

    const [btnDisabled, setBtnDisabled] = useState(true);
    
    let history = useHistory();

    const writeUserData = (key, dataValue) => {
        setData({ ...data, [key]: dataValue });
        console.log(data)
        if (key == 'password') {
           setBtnDisabled(!dataValue)
        }
    };

    const saveForm = () => {
        console.log(data)
        history.push("/dashboard");
    };

    return (
        <div className={classes.signup}>
            <div>
                <h1 className={classes.title}>Login</h1>
            </div>
            <div>
                <TextField
                    required
                    id="standard-required"
                    onChange={(event) => {
                        writeUserData("email", event.target.value);
                    }}
                    label="Email Address"
                    variant="outlined"
                    className={classes.text1}
                />
            </div>
            <div>
                <TextField
                    required
                    id="standard-required"
                    onChange={(event) => {
                        writeUserData("password", event.target.value);
                    }}
                    label="Password"
                    type="password"
                    variant="outlined"
                    className={classes.text1}
                />
            </div>
            
            {/* <p className={classes.note} style={{color:"#ACACAC", margin:'10px 5px'}}>Your password must be atleast 8 characters long.</p> */}
            
            
            <div className={classes.nextButtonDiv}> 
                <Button variant="contained" onClick={saveForm} className={classes.nextButton} disabled={btnDisabled}>
                    Login
                </Button>
            </div>
            <div>
                <a href="/" className={classes.note}>Forgot password?</a>
                <a href="/signup" className={classes.note} style={{paddingLeft:'20px'}}>Don’t have an account? Sign up</a>
            </div>
        </div>
    );
}
