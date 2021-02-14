import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Paper } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FileUpload from './FileUpload';
import image from '../images/send.png';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    donorPage1: {
        padding: '150px 0px',
        textAlign: 'center',
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
    main: {
        width: '50vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20px',
    },
    fileCard:{
        height: '25vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 40px',
        borderRadius: '8px',
        backgroundColor: '#FAFAFA',
        boxShadow: '0.5px 2px 10px 0.5px #CFCFCF'
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
            color: 'black',
            textDecoration: 'underline'
          },
        // marginTop: "-5px"
    }
}));

export default function CsvUpload({page, setPage, data, setData}) {
    const classes = useStyles();
    
    const [value, setValue] = useState('');

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
            <div style={{paddingBottom:"30px"}}>
                <h1 style={{textAlign:'center'}}>Please upload a CSV of your properties.</h1>
                <p style={{textAlign:'center'}}> You can upload property ownership verification afterwards.</p>
                <a href="" className={classes.note} style={{textAlign:'center'}}>See how you can format your data.</a>
            </div>
            <div className={classes.main}>
            <div className={classes.fileCard}>
            <img src={image}/>
            <FileUpload />
            </div>
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
