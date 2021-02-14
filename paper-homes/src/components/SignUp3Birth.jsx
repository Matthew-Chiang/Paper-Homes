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
        padding: '150px 0px'
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
            color: '#ACACAC',
            textDecoration: 'underline',
            // borderColor: '#0062cc',
            // boxShadow: 'none',
          },
    }
}));

export default function SignUpPage4_5({page, setPage, data, setData}) {
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
        if (data['ssn']){
            setPage('page3Ssn')
        }else if (data['calid']){
            setPage('page3calid')
        }else if (data['passport']){
            setPage('page3Pass')
        }else {setPage('page4')}
        
    };

    const goBack = () => {
        setPage('page3')
    }

    return (
        <div className={classes.donorPage1}>
            <div>
                <h1 style={{textAlign:'center'}}>We'd like to verify your ID.</h1>
                <p style={{textAlign:'center'}}> Please upload a copy of your birth certificate.</p>
            </div>
            <div className={classes.main}>
            <div className={classes.fileCard}>
            <img src={image}/>
            <FileUpload />
            </div>
            </div>
            {/* <div style={{textAlign:'center'}}>
                <a href="/" className={classes.note} >Have an ID with your address instead?</a>
            
            </div> */}
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
