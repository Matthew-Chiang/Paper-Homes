import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
import Select from '@material-ui/core/Select';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    // checkboxForm: {
    //     padding:'20px',
    // },
    formControl: {
        margin: theme.spacing(3),
        padding:'20px 40px',
        boxShadow: '0.5px 0.5px 10px 0.5px #888888'
    },
}));

export default function SignUpPage3({page, setPage}) {
    const classes = useStyles();

    const [data, setData] = useState({});

    const [state, setState] = React.useState({
        passport: false,
        drivers: false,
        birthCert: false,
        ssn: false,
        calid: false,
        none: false
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const { passport, drivers, birthCert, ssn , calid, none} = state;
      const error = [passport, drivers, birthCert, ssn, calid, none].filter((v) => v).length !== 0;

    const writeUserData = (key, dataValue) => {
        setData({ ...data, [key]: dataValue });
    };

    const saveForm = () => {
        axios
            .put(`http://localhost:5000/user`, {
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
                <h1>Which of the following <br/>documents do you have?</h1>
                <p>Don’t worry if you don’t have an ID, we can still match <br/> you with an address and help you get one.</p>
            </div>
            <div className={classes.checkboxForm}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={passport} onChange={handleChange} name="passport" />}
                    label="Passport"
                />
                <FormControlLabel
                    control={<Checkbox checked={drivers} onChange={handleChange} name="drivers" />}
                    label="Driver's Lisence"
                />
                <FormControlLabel
                    control={<Checkbox checked={birthCert} onChange={handleChange} name="birthCert" />}
                    label="Birth Certificate"
                />
                <FormControlLabel
                    control={<Checkbox checked={ssn} onChange={handleChange} name="ssn" />}
                    label="SSN"
                />
                <FormControlLabel
                    control={<Checkbox checked={calid} onChange={handleChange} name="calid" />}
                    label="California ID Card"
                />
                <FormControlLabel
                    control={<Checkbox checked={none} onChange={handleChange} name="none" />}
                    label="None"
                />
                </FormGroup>
            </FormControl>
            </div>
            <div className={classes.nextButtonDiv}> 
                <Button variant="contained" onClick={saveForm} className={classes.nextButton}>
                    Next
                </Button>
            </div>
            <Button
                // className={classes.button}
                startIcon={<ArrowBackIcon />}
                onClick={goBack}
            >Back</Button>
        </div>
    );
}
