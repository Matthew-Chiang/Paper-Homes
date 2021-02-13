import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import 'date-fns';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    title: {
        paddingBottom: '40px',
        paddingTop: '75px'
    },
    selectButton: {
        width: '350px',
        padding: '8px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#ECECEC'
          },
        '&:active': {
        // boxShadow: 'none',
            backgroundColor: '#5C7294',
            color: 'white'
        },
    },
    nextButton: {
        
        width: '150px',
        boxShadow: 'none',
        color: 'white',
        backgroundColor: '#5C7294',
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
    selectButtonDiv: {
        padding: '10px'
    },
    nextButtonDiv: {
        padding: '50px'
    }
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    const [data, setData] = useState({});
    const [needAddress, setNeedAddress] = useState(null);

    const writeUserData = (key, dataValue) => {
        setData({ ...data, [key]: dataValue });
        if (dataValue == 'recepient') {
            setNeedAddress(true)
        } else setNeedAddress(false)
    };

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
    };

    return (
        <div>
            <div>
                <h1 className={classes.title}>What is your situation?</h1>
            </div>
            <div className={classes.selectButtonDiv}>
                <Button variant="outlined" className={classes.selectButton}
                    onClick={(event) => { writeUserData("type", "recepient");}}
                    style={{
                        backgroundColor: needAddress ? '#5C7294' : '#ffffff',
                        color:  needAddress ? 'white' : 'black',
                        borderColor:  needAddress ? '#5C7294' : '#A0A0A0'}}
                >
                    I need an address
                </Button>
            </div>
            <div className={classes.selectButtonDiv}>
                <Button variant="outlined" className={classes.selectButton}
                    onClick={(event) => { writeUserData("type", "donor");}}
                    style={{
                        backgroundColor: needAddress || needAddress == null ? '#ffffff' : '#5C7294',
                        color:   needAddress || needAddress == null ? 'black' : 'white',
                        borderColor:   needAddress || needAddress == null ? '#A0A0A0' : '#5C7294'}}
                >
                    I want to donate an address
                </Button>
            </div>
            <div className={classes.nextButtonDiv}> 
                <Button variant="contained" onClick={saveForm} className={classes.nextButton}>
                    Next
                </Button>
            </div>
        </div>
    );
}
