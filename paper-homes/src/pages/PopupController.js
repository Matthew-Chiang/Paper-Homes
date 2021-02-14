import React, { useState } from "react";
// import Navbar from "../components/NavBar";

import Popup1 from "../components/Popup1";
import Popup2 from "../components/Popup2";
import Popup3 from "../components/Popup3";
import { UserContext } from "../context/userContext";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function SignUp() {
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
    const [page, setPage] = useState(1);
    const [data, setData] = useState({});

    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderSwitch = (param, setPage) => {
        // }, user, setUser) => {
        switch (param) {
            case 1:
                return (
                    <Popup1
                        page={page}
                        setPage={setPage}
                        // data={user}
                        // setData={setUser}
                    />
                );
            case 2:
                return (
                    <Popup2
                        page={page}
                        setPage={setPage}
                        // data={user}
                        // setData={setUser}
                    />
                );
            case 3:
                return (
                    <Popup3
                        page={page}
                        setPage={setPage}
                        // data={user}
                        // setData={setUser}
                    />
                );
            default:
                return <div></div>;
        }
    };

    return (
        // <UserContext.Consumer>
        //     {({ user, setUser }) => (
        //         <div>{renderSwitch(page, setPage, user, setUser)}</div>
        //     )}
        // </UserContext.Consumer>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
            fullWidth={true}
            maxWidth="md"
        >
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
            {renderSwitch(page, setPage)}
        </Dialog>

        // , user, setUser)}
    );
}
