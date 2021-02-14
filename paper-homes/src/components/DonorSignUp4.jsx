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
import { useHistory } from "react-router-dom";

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
    donorPages: {
        padding: '150px 0px',
        textAlign: 'center',
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
    main: {
        width: '70vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left',
    },
    addressCard:{
        padding: '20px 40px',
        borderRadius: '8px',
        boxShadow: '0.5px 2px 10px 0.5px #CFCFCF'
    },
    formControl: {
        padding:'20px 10px',
    },
}));

export default function SignUpPage3({page, setPage, data, setData}) {
    const classes = useStyles();

    // const [data, setData] = useState({});
    const [btnDisabled, setBtnDisabled] = useState(true);

    const [state, setState] = React.useState({
        acknowledge1: false,
        acknowledge2: false,
      });
    
    let history = useHistory();

    useEffect(() => {
        setData({...data, ['acknowledge1']: false});
        setData({...data, ['acknowledge2']: false});
    },[]);
    
    const writeUserData = (key, dataValue) => {
        // setData({ ...data, [key]: dataValue });
        setState({ ...state, [key]: dataValue });
        setBtnDisabled(!dataValue)
    };

    const { acknowledge2} = state;

    const saveForm = () => {
        // axios
        //     .post(`http://localhost:5000/user`, {
        //         ...data,
        //     })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
        history.push("/donorDashboard");
    };

    const goBack = () => {
        setPage('donorpage3')
    }
    
    return (
        <div className={classes.donorPages}>
            <div>
                <h1 style={{textAlign:'center'}}>You are donating your address<br/> for use.</h1>
                <p style={{textAlign:'center'}}> Please confirm the address details you've entered below. </p>
            </div>
            <div className={classes.main}>
            <div className={classes.addressCard} style={{textAlign:'center'}}>
                <h2>{data['addressStreet']}</h2>
                <p>{data['addressCity']}, CA, USA</p>
                <p>{data['addressZip']}</p>
            </div>
            <div className={classes.checkboxForm}>
            <FormControl required component="fieldset" className={classes.formControl}>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={acknowledge2} onChange={(event) => {
                        writeUserData('acknowledge2', event.target.checked);}} name="acknowledge2" />}
                    label="I confirm that I have read and agree with Paper Homes’ Terms and Conditions and Privacy Policy"
                />
                </FormGroup>
            </FormControl>
            </div>
            </div>
            <div className={classes.nextButtonDiv} style={{textAlign:'center'}}> 
                <Button variant="contained" onClick={saveForm} className={classes.nextButton} disabled={btnDisabled}>
                    Donate
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
