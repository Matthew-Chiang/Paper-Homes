import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Switch from '@material-ui/core/Switch';
import Forms from "../images/Forms.png";
import PopupStepper from "./PopupStepper";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "fit-content",
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    main: {
        padding: "0px 60px",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
    },
    formFlex: {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        padding: "20px",
        marginLeft: "auto",
        marginRight: "auto",
    },
}));

export default function MaxWidthDialog({ page, setPage, data, setData }) {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <DialogTitle id="max-width-dialog-title">
                <h1
                    className={classes.heading}
                    style={{
                        fontFamily: "Source Sans Pro",
                        fontWeight: "bold",
                    }}
                >
                    Let's get you a birth certificate.
                </h1>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    We’ve filled out the forms you need for you with your
                    information. Print these forms out* and give them your
                    nearest homeless service provider to apply for your birth
                    certificate needed for your California ID Card!
                </DialogContentText>
                <div className={classes.formFlex}>
                    <img src={Forms}></img>
                    <div>
                        <DialogActions
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "0px 60px",
                            }}
                        >
                            <a
                                href={`http://localhost:5000/pdf/waiveFeeBirthCert/${data.firstName} ${data.lastName}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="contained"
                                    style={{
                                        backgroundColor: "#5C7294",
                                        color: "#fff",
                                        marginBottom: "20px",
                                        width: "200px",
                                        marginLeft: "5px",
                                        padding: "10px",
                                    }}
                                >
                                    Download
                                </Button>
                            </a>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: "#5C7294",
                                    color: "#fff",
                                    width: "200px",
                                    marginBottom: "20px",
                                    padding: "10px",
                                }}
                            >
                                Email
                            </Button>
                            <DialogContentText>
                                A copy of these documents will be available in
                                the “Documents” tab.
                            </DialogContentText>
                        </DialogActions>
                    </div>
                </div>

                <DialogContentText>
                    *If you don’t have access to a printer, you can email these
                    forms to yourself and ask your local homeless shelter to
                    print them.
                </DialogContentText>
                <div style={{ display: "inline-block" }}>
                    <PopupStepper
                        page={page}
                        setPage={setPage}
                        data={data}
                        setData={setData}
                    />
                </div>

                {/* <form className={classes.form} noValidate>
          </form> */}
            </DialogContent>
        </div>
    );
}
