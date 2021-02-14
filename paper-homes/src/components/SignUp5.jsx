import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import "date-fns";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    signUpPages: {
        padding: "150px 0px",
        textAlign: "center",
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
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
            boxShadow: "none",
        },
        "&:active": {
            boxShadow: "none",
        },
    },
    main: {
        width: "70vh",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "left",
    },
    formControl: {
        padding: "20px 40px",
        width: "1000px",
    },
    addressCard: {
        padding: "20px 40px",
        borderRadius: "8px",
        boxShadow: "0.5px 2px 10px 0.5px #CFCFCF",
    },
    checkboxlist1: {
        alignItems: "start",
        fontSize: 10,
    },
    checkboxlist2: {
        alignItems: "center",
        fontSize: 10,
    },
    formControl: {
        padding: "40px 0px 10px",
        width: "80vh",
    },
}));

export default function SignUpPage3({ page, setPage, data, setData }) {
    const classes = useStyles();

    // const [data, setData] = useState({});
    const [donateAddress, setDonateAddresss] = useState({});

    const [state, setState] = React.useState({
        acknowledge1: false,
        acknowledge2: false,
    });

    let history = useHistory();

    useEffect(() => {
        setData({ ...data, acknowledge1: false, acknowledge2: false });
        axios
            .get("http://localhost:5000/address/getLeastUsedAddress")
            .then((res) => {
                console.log(res);
                setDonateAddresss(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const writeUserData = (key, dataValue) => {
        // setData({ ...data, [key]: dataValue });
        setState({ ...state, [key]: dataValue });
        setData({ ...data, [key]: dataValue });
    };

    const { acknowledge1, acknowledge2 } = state;

    // componentDidMount=()=>{
    //     axios
    //         //.get(`http://localhost:5000/user/${this.props.data["email"]}`)
    //         .get(`http://localhost:5000/user/getAddress`)
    //         .then((res) => {
    //           const address = res.data
    //           setData({ ...data, address });
     
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    //       }

    const saveForm = () => {
        axios
            .post(`http://localhost:5000/address/incrementAddress`, {
                address: donateAddress.address,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
        history.push("/dashboard");
    };

    const goBack = () => {
        setPage("page3");
    };

    return (
        <div className={classes.signUpPages}>
            <div>
                <h1 style={{ textAlignLast: "center" }}>
                    Congratulations! Here’s your <br /> new address:
                </h1>
            </div>
            <div className={classes.main}>
                <div className={classes.addressCard}>
                    <h2 style={{ textAlignLast: "center", fontWeight: "bold" }}>
                        {donateAddress.address}
                    </h2>
                    <p style={{ textAlignLast: "center" }}>
                        {donateAddress.city}, CA, USA
                    </p>
                    <p style={{ textAlignLast: "center" }}>
                        {donateAddress.zipCode}
                    </p>
                </div>
            </div>
            <div
                className={classes.checkboxForm}
                style={{ textAlignLast: "center" }}
            >
                <FormControl
                    required
                    component="fieldset"
                    className={classes.formControl}
                >
                    <FormGroup>
                        <FormControlLabel
                            className={classes.checkboxlist1}
                            control={
                                <Checkbox
                                    checked={acknowledge1}
                                    onChange={(event) => {
                                        writeUserData(
                                            "acknowledge1",
                                            event.target.checked
                                        );
                                    }}
                                    name="acknowledge1"
                                />
                            }
                            label="I acknowledge that holding this address does not mean I am entitled to occupy its residency. I will solely use this address for the purposes of applying for government benefits and mail forwarding."
                        />
                        <FormControlLabel
                            className={classes.checkboxlist2}
                            control={
                                <Checkbox
                                    checked={acknowledge2}
                                    className={classes.checkboxlist}
                                    onChange={(event) => {
                                        writeUserData(
                                            "acknowledge2",
                                            event.target.checked
                                        );
                                    }}
                                    name="acknowledge2"
                                />
                            }
                            label="I confirm that I have read and agree with Paper Homes’ Terms and Conditions and Privacy Policy"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div
                className={classes.nextButtonDiv}
                style={{ textAlignLast: "center" }}
            >
                <Button
                    variant="contained"
                    onClick={saveForm}
                    className={classes.nextButton}
                    disabled={!(data.acknowledge2 && data.acknowledge1)}
                >
                    Confirm
                </Button>
            </div>
            <div style={{ textAlignLast: "center" }}>
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
