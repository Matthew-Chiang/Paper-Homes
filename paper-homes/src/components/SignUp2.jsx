import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
        // margin: theme.spacing(1),
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
            // borderColor: '#0062cc',
            boxShadow: 'none',
          },
        '&:active': {
        boxShadow: 'none',
        },
    },
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
        setPage('page3')
    };

    const goBack = () => {
        setPage('page1')
    }

    return (
        <div style={{alignItems:'center'}}>
            <div>
                <h1 style={{textAlignLast:'center'}}>Which location would you like <br/> your mail forwarded to? </h1>
                <p style={{textAlignLast:'center'}}>Select the housing shelter you’re associated with below to <br/> forward your mail to, and we’ll take care of the rest.</p>
            </div>
            <div style={{textAlignLast:'center'}}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Mail Forwarding Location</InputLabel>
                <Select
                    native
                    value={value}
                    onChange={(event) => {
                        writeUserData("mailAddress", event.target.value);}}
                    label="Mail Forwarding Location"
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
            </div>
            <div className={classes.nextButtonDiv} style={{textAlignLast:'center'}} > 
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
