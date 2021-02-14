import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    signup:{
        textAlign: 'justify',
        padding: '80px 0px',
        paddingBottom: '20px'
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
    },
    note2: {
        marginTop: '-5px',
        marginLeft: '5px',
        fontSize: 14,
        color: 'ACACAC',
        // textDecoration: 'underline',
        // '&:hover': {
        //     color: '#ACACAC',
        //     textDecoration: 'underline',
        //     // borderColor: '#0062cc',
        //     // boxShadow: 'none',
        //   },
    }
}));

export default function SignUpLogin({page, setPage, data, setData}) {
    const classes = useStyles();

    const [value, setValue] = useState('recepient');
    const [btnDisabled, setBtnDisabled] = useState(true);

    // setData({...data, ['type']: value});

    const writeUserData = (key, dataValue) => {
        setData({ ...data, [key]: dataValue });
        if (key == 'type'){
            setValue(dataValue);
        }
        console.log(data)
        if (key == 'email') {
           setBtnDisabled(!dataValue)
        }
    };

    useEffect((value) => {
        setData({...data, 'type': 'recepient'});
    },[]);

    const saveForm = () => {
        console.log(data)
        axios
            .post(`http://localhost:5000/user`, data)
            .then((res) => {
                console.log(res);
                if (data['type'] == 'recepient'){
                    console.log('page2')
                    setPage('page2')
                } else {setPage('donorpage2')}
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className={classes.signup}>
            <div>
                <h1 style={{padding: '1px'}}>Sign Up</h1>
            </div>
                <TextField
                    required
                    id="standard-required"
                    onChange={(event) => {
                        writeUserData("firstName", event.target.value);
                    }}
                    label="First Name"
                    variant="outlined"
                    className={classes.text2}
                    // styles={{alignSelf:'left'}}
                />
                <TextField
                    required
                    id="standard-required"
                    onChange={(event) => {
                        writeUserData("lastName", event.target.value);
                    }}
                    label="Last Name"
                    variant="outlined"
                    className={classes.text2}
                />
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
            <p className={classes.note2} style={{color:"#ACACAC", margin:'10px 5px'}}>Your password must be atleast 8 characters long.</p>
            
            <div style={{paddingTop: '2px', paddingBottom: '10px', margin:'10px 5px'}}>
                <p style={{fontSize:18}}><b>What's your situation?</b></p>
                <FormControl component="fieldset">
                {/* <FormLabel component="legend">What is your situation?</FormLabel> */}
                <RadioGroup className={classes.radio} aria-label="situation" name="sitaution" value={value} onChange={(event) => {
                        writeUserData("type", event.target.value);}}>
                    <FormControlLabel style={{marginTop:'-10px'}} value="recepient" control={<Radio />} label="I don't have an address" />
                    <FormControlLabel style={{marginTop:'-10px'}} value="donor" control={<Radio />} label="I want to donate an address" />
                </RadioGroup>
                </FormControl>
            </div>
            <div>
                <TextField
                    disabled
                    id="standard-disabled"
                    
                    label="State"
                    defaultValue="California"
                    variant="outlined"
                    className={classes.text2}
                />
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Country"
                    defaultValue="United States"
                    variant="outlined"
                    className={classes.text2}
                />
            </div>
            <p className={classes.note2}>Note: You must be located in California to be eligible to receive/donate an address.</p>
            <div className={classes.nextButtonDiv}> 
                <Button variant="contained" onClick={saveForm} className={classes.nextButton} disabled={btnDisabled}>
                    Sign Up
                </Button>
            </div>
            <div>
                <a href="/" className={classes.note} style={{paddingLeft:'160px'}}>Already have an account? Log in</a>
            
            </div>
        </div>
    );
}
