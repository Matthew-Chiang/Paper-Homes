import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Paper } from "@material-ui/core";
import axios from "axios";
import "date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FileUpload from "../components/FileUpload";
import image from "../images/send.png";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    donorPage1: {
        padding: "150px 0px",
        textAlign: "center",
    },
    nextButton: {
        width: "50px",
        boxShadow: "none",
        color: "white",
        backgroundColor: "#5C7294",
        margin: "10px 5px",
        width: "150px",
        "&:hover": {
            backgroundColor: "#1A2F4F",
            // borderColor: '#0062cc',
            boxShadow: "none",
        },
        "&:active": {
            boxShadow: "none",
        },
    },
    main: {
        width: "50vh",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px",
    },
    fileCard: {
        height: "25vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 40px",
        borderRadius: "8px",
        backgroundColor: "#FAFAFA",
        boxShadow: "0.5px 2px 10px 0.5px #CFCFCF",
    },
    text1: {
        margin: "10px 5px",
        width: "510px",
    },
    text2: {
        margin: "10px 5px",
        width: "250px",
    },
    note: {
        marginTop: "-5px",
        fontSize: 14,
        color: "black",
        "&:hover": {
            color: "black",
        },
    },
}));

export default function SignUpPage2({ page, setPage, data, setData, address }) {
    const classes = useStyles();

    const [imageUploaded, setImageUploaded] = useState(false);

    const writeUserData = (key, dataValue) => {
        setData({ ...data, [key]: dataValue });
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
        axios
            .post(`http://localhost:5000/address/updateAddressVerification`, {
                address: address || data.addressStreet,
                verify: false,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
        setPage("donorpage4");
    };

    const goBack = () => {
        setPage("donorpage2");
    };

    console.log(address || data.addressStreet);

    return (
        <div className={classes.donorPage1}>
            <div>
                <h1 style={{ textAlign: "center" }}>
                    We'd like to verify your address.
                </h1>
                <p style={{ textAlign: "center" }}>
                    {" "}
                    Please upload a copy of your property deed or photo of ID
                    with an address below.
                </p>
            </div>
            <div className={classes.main}>
                <div className={classes.fileCard}>
                    <img src={image} />
                    <FileUpload setImageUploaded={setImageUploaded} />
                </div>
            </div>
            {/* <div style={{textAlign:'center'}}>
                <a href="" className={classes.note} >Have an ID with your address instead? No worries! You can upload a photo of your ID too!</a>
            
            </div> */}
            <div
                className={classes.nextButtonDiv}
                style={{ textAlign: "center" }}
            >
                <Button
                    variant="contained"
                    onClick={saveForm}
                    className={classes.nextButton}
                >
                    Next
                </Button>
            </div>
            <div style={{ textAlign: "center" }}>
                <Button
                    // className={classes.button}
                    startIcon={<ArrowBackIcon />}
                    onClick={goBack}
                >
                    Back
                </Button>
            </div>
        </div>
    );
}
