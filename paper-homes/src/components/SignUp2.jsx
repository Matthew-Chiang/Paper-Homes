import React, { useState } from "react";
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

export default function SignUpPage2({page, setPage}) {
    const classes = useStyles();

    const [data, setData] = useState({});

    const writeUserData = (key, dataValue) => {
        setData({ ...data, [key]: dataValue });
    };
    // const [state, setState] = React.useState({
    //     age: '',
    //     name: 'hai',
    //   });
    
    //   const handleChange = (event) => {
    //     const name = event.target.name;
    //     setState({
    //       ...state,
    //       [name]: event.target.value,
    //     });
    //   };

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
        setPage('page3')
    };

    const goBack = () => {
        setPage('page1')
    }

    return (
        <div>
            <div>
                <h1>Which location would you like <br/> your mail forwarded to? </h1>
                <p>Select the housing shelter you’re associated with below to <br/> forward your mail to, and we’ll take care of the rest.</p>
            </div>
            <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Mail Forwarding Location</InputLabel>
                <Select
                    native
                    value={data}
                    onChange={(event) => {
                        writeUserData("mailAddress", event.target.value);}}
                    label="Mail Forwarding Location"
                    // inputProps={{
                    //     name: 'age',
                    //     id: 'outlined-age-native-simple',
                    // }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
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
