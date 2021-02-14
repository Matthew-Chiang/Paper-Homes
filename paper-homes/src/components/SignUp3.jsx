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
        setData({...data, ['passport']: false});
        setData({...data, ['drivers']: false});
        setData({...data, ['birthCert']: false});
        setData({...data, ['ssn']: false});
        setData({...data, ['calid']: false});
        setData({...data, ['none']: false});
    },[]);
    
    const writeUserData = (key, dataValue) => {
        setData({ ...data, [key]: dataValue });
        setState({ ...state, [key]: dataValue });
    };

      const { passport, drivers, birthCert, ssn , calid, none} = state;

    const saveForm = () => {
        axios
            .post(`http://localhost:5000/user`, {
                ...data,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
        setPage('page4')
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
                    control={<Checkbox checked={passport} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="passport" />}
                    label="Passport"
                />
                <FormControlLabel
                    control={<Checkbox checked={drivers} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="drivers" />}
                    label="Driver's Lisence"
                />
                <FormControlLabel
                    control={<Checkbox checked={birthCert} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="birthCert" />}
                    label="Birth Certificate"
                />
                <FormControlLabel
                    control={<Checkbox checked={ssn} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="ssn" />}
                    label="SSN"
                />
                <FormControlLabel
                    control={<Checkbox checked={calid} onChange={(event) => {
                        writeUserData(event.target.name, event.target.checked);}} name="calid" />}
                    label="California ID Card"
                />
                <FormControlLabel
                    control={<Checkbox checked={none} onChange={(event) => {
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
