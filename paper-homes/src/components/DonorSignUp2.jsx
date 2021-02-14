import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Stepper, Step, StepButton } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     "& .MuiTextField-root": {
    //         margin: theme.spacing(1),
    //         width: "25ch",
    //     },
    // },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    donorPage1: {
        padding: '150px',
        textAlign: 'center',
    },
    // textField: {
    //     marginLeft: theme.spacing.unit,
    //     marginRight: theme.spacing.unit,
    //     width: 300,
    // },
    // formControl: {
    //     // margin: theme.spacing(1),
    //     minWidth: '400px',
    // },
    nextButton: {
        width: '50px',
        boxShadow: 'none',
        color: 'white',
        backgroundColor: '#5C7294',
        margin: '10px 5px',
        width: '150px',
        '&:hover': {
            backgroundColor: '#1A2F4F',
            // borderColor: '#0062cc',
            boxShadow: 'none',
          },
        '&:active': {
        boxShadow: 'none',
    },
},
    text1: {
        margin: '10px 5px',
        width: '510px',
    },
    text2: {
        margin: '10px 5px',
        width: '250px'
        },
    note: {
            marginTop: '-5px',
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

export default function SignUpPage2({page, setPage, data, setData}) {
    const classes = useStyles();

    // const [data, setData] = useState();
    // const [key, setKey] = useState();
    
    const [value, setValue] = useState('');

    // setData({...data, ['mailAddress']: value})

    useEffect(() => {
        setData({...data, 'mailAddress': value});
    },[]);

    const writeUserData = (key, dataValue) => {
        setData({ ...data, [key]: dataValue });
        setValue(dataValue);    
    };

    const saveForm = () => {
        axios
            .post(`http://localhost:5000/user`, {
               ...data
            })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
        setPage('donorpage3')
    };

    const goBack = () => {
        setPage('page1')
    }

    return (
        <div className={classes.donorPage1}>
            <div>
                <h1 style={{textAlign:'center'}}>Hi Jane! Please let us know the address you <br/>would like to donate.</h1>
            </div>
            <div>
            <div style={{textAlign:'center'}}> 
                <TextField
                    required
                    id="standard-required"
                    onChange={(event) => {
                        writeUserData("address", event.target.value);
                    }}
                    label="Street Name & Number"
                    type="address"
                    variant="outlined"
                    className={classes.text1}
                />
            </div>
            <div style={{textAlign:'center'}}>
                <TextField
                    required
                    id="standard-required"
                    onChange={(event) => {
                        writeUserData("city", event.target.value);
                    }}
                    label="City"
                    type="city"
                    variant="outlined"
                    className={classes.text2}
                />
                 <TextField
                    disabled
                    id="standard-disabled"
                    
                    label="State"
                    defaultValue="California"
                    variant="outlined"
                    className={classes.text2}
                />
            </div>
            <div style={{textAlign:'center'}}>
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Country"
                    defaultValue="United States"
                    variant="outlined"
                    className={classes.text2}
                />
                <TextField
                    required
                    id="standard-required"
                    label="Zip Code"
                    type="zipcode"
                    variant="outlined"
                    className={classes.text2}
                />
            </div>
            </div>
            <div style={{textAlign:'center'}}>  
                <a href="/" className={classes.note}>Have multiple addresses to donate?</a>
            </div>
            <div className={classes.nextButtonDiv} style={{textAlign:'center'}}> 
                <Button variant="contained" onClick={saveForm} className={classes.nextButton}>
                    Next
                </Button>
            </div>
            <div style={{textAlign:'center'}}>
                <Button
                    // className={classes.button}
                    startIcon={<ArrowBackIcon />}
                    onClick={goBack}
                >Back</Button>
            </div>
        </div>
    );
}
