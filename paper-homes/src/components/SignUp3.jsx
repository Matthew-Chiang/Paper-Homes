import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    formControl: {
        minWidth: '400px',
    },
    nextButton: {
        width: '50px',
        boxShadow: 'none',
        color: 'white',
        backgroundColor: '#5C7294',
        margin: '10px 5px',
        width: '150px',
        '&:hover': {
            backgroundColor: '#1A2F4F',
            boxShadow: 'none',
          },
        '&:active': {
        boxShadow: 'none',
        },
    },
    formControl: {
        padding:'20px 40px',
        boxShadow: '0.5px 0.5px 10px 0.5px #888888'
    },
}));

export default function SignUpPage3({page, setPage, data, setData}) {
    const classes = useStyles();

    // const [data, setData] = useState({});

    const [state, setState] = React.useState({
        passport: false,
        drivers: false,
        birthCert: false,
        ssn: false,
        calid: false,
        none: false
      });

    useEffect(() => {
        setData({...data, 'passport': false, 'drivers': false, 'birthCert': false, 'ssn': false,  'calid': false, 'none': false});
    },[]);
    
    const writeUserData = (key, dataValue) => {
        console.log(key,dataValue)
        setData({ ...data, [key]: dataValue });
        setState({ ...state, [key]: dataValue });
        console.log(data)   
    };

      const { passport, drivers, birthCert, ssn , calid, none} = data;

    const saveForm = () => {
        axios
            .post(`http://localhost:5000/user`, {
                ...data,
            })
            .then((res) => {
                console.log(data)
                if (data['none']) {
                    setPage('page4')
                } else if (data['birthCert']== true){
                    setPage('page3Birth')
                } else if (data['ssn'] == true){
                    setPage('page3Ssn')
                } else if (data['calid'] == true){
                    setPage('page3calid')
                } else if (data['passport'] == true){
                    setPage('page3Pass')
                } else {
                    setPage('page4')
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const goBack = () => {
        setPage('page2')
    }
    
    return (
        <div>
            <div>
                <h1 style={{textAlignLast:'center'}}>Which of the following <br/>documents do you have?</h1>
                <p style={{textAlignLast:'center'}}>Don’t worry if you don’t have an ID, we can still match <br/> you with an address and help you get one.</p>
            </div>
            <div className={classes.checkboxForm} style={{textAlignLast:'center'}}>
            <FormControl required component="fieldset" className={classes.formControl}>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={data.passport} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="passport" />}
                    label="Passport"
                />
                <FormControlLabel
                    control={<Checkbox checked={data.drivers} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="drivers" />}
                    label="Driver's Lisence"
                />
                <FormControlLabel
                    control={<Checkbox checked={data.birthCert} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="birthCert" />}
                    label="Birth Certificate"
                />
                <FormControlLabel
                    control={<Checkbox checked={data.ssn} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="ssn" />}
                    label="SSN"
                />
                <FormControlLabel
                    control={<Checkbox checked={data.calid} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="calid" />}
                    label="California ID Card"
                />
                <FormControlLabel
                    control={<Checkbox checked={data.none} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="none" />}
                    label="None"
                />
                </FormGroup>
            </FormControl>
            </div>
            <div className={classes.nextButtonDiv} style={{textAlignLast:'center'}}> 
                <Button variant="contained" onClick={saveForm} className={classes.nextButton}>
                    Next
                </Button>
            </div>
            <div style={{textAlignLast:'center'}}>
                <Button
                    // className={classes.button}
                    startIcon={<ArrowBackIcon />}
                    onClick={goBack}
                >Back</Button>
            </div>
            
        </div>
    );
}
