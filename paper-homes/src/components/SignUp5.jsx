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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
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
        width: '550px'
    },
    addressCard: {
        padding:'20px 40px',
        margin: '50px 200px',
        boxShadow: '0.5px 0.5px 10px 0.5px #888888',
        
    },
    checkboxlist: {
        alignItems:'start',
        fontSize: 10

    }
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
        setData({ ...data, [key]: dataValue });
        setBtnDisabled(!data['acknowledge2'])
    };

    const { acknowledge1, acknowledge2} = state;

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
        history.push("/home");
    };

    const goBack = () => {
        setPage('page3')
    }
    
    return (
        <div>
            <div>
                <h1 style={{textAlignLast:'center'}}>Congratulations! Here’s your <br/> new address:</h1>
            </div>
            <div className={classes.addressCard}>
                <h2 style={{textAlignLast:'center'}}>AddressHERE</h2>
                <p style={{textAlignLast:'center'}}>City, CA, USA</p>
                <p style={{textAlignLast:'center'}}>Postal</p>
            </div>
            <div className={classes.checkboxForm} style={{textAlignLast:'center'}}>
            <FormControl required component="fieldset" className={classes.formControl}>
                <FormGroup >
                <FormControlLabel className={classes.checkboxlist}
                    control={<Checkbox checked={acknowledge1} onChange={(event) => {
                        writeUserData("acknowledge1", event.target.checked);}} name="acknowledge1" />}
                    label="I acknowledge that holding this address does not mean I am entitled to occupy its residency. I will solely use this address for the purposes of applying for government benefits and mail forwarding."
                />
                <FormControlLabel className={classes.checkboxlist}
                    control={<Checkbox checked={acknowledge2}className={classes.checkboxlist} onChange={(event) => {
                        writeUserData("acknowledge2", event.target.checked);}} name="acknowledge2" />}
                    label="I confirm that I have read and agree with Paper Homes’ Terms and Conditions and Privacy Policy"
                />
                </FormGroup>
            </FormControl>
            </div>
            <div className={classes.nextButtonDiv} style={{textAlignLast:'center'}}> 
                <Button variant="contained" onClick={saveForm} className={classes.nextButton} disabled={btnDisabled}>
                    Confirm
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
