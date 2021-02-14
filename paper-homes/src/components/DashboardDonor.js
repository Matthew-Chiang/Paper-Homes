import React, { useContext, useEffect, useState } from "react";
import ChartistGraph from "react-chartist";
import face3 from "../assets/img/faces/face-1.jpg";
import hand1 from "../assets/img/hands/HandsPhone.png";
import hand2 from "../assets/img/hands/HandsGive.png";
import hand3 from "../assets/img/hands/HandsShow.png";
import { UserContext } from "../context/userContext";
import PopupDonor from "./PopupDonor";
import { Button } from "@material-ui/core";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DonorSignUpPage3 from "../components/DonorSignUp3";

export default function DashboardDonor() {
    const userContext = useContext(UserContext);

    const [addresses, setAddresses] = useState([]);
    const [openVerification, setOpenVerification] = useState(-1);

    useEffect(() => {
        updateAddresses();
    }, []);

    const updateAddresses = () => {
        axios
            .get(
                `http://localhost:5000/address/getAddressForUser/${userContext.user.email}`
            )
            .then((res) => {
                console.log(res.data);
                setAddresses(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const renderStatusPill = (status, numUsed, index) => {
        switch (status) {
            case undefined:
                return (
                    <div className="topright">
                        <Button
                            onClick={() => {
                                setOpenVerification(index);
                            }}
                        >
                            <div
                                className="status"
                                style={{
                                    backgroundColor: "#F6C6C6",
                                    color: "#6A0404",
                                    padding: "5px 10px",
                                }}
                            >
                                <i className="fa fa-clock-o" />
                                NO DOCUMENTS SUBMITTED
                            </div>
                        </Button>
                    </div>
                );
            case false:
                return (
                    <div className="topright">
                        <div
                            className="status"
                            style={{
                                backgroundColor: "#FFF7CD",
                                color: "#B34B00",
                                padding: "5px 10px",
                            }}
                        >
                            <i className="fa fa-clock-o" />
                            PENDING VERIFICATION
                        </div>
                    </div>
                );
            case true:
                if (numUsed > 0) {
                    return (
                        <div className="topright">
                            <div
                                className="status"
                                style={{
                                    backgroundColor: "#E9FF93",
                                    color: "#066A04",
                                    padding: "5px 10px",
                                }}
                            >
                                IN USE
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="topright">
                            <div
                                className="status"
                                style={{
                                    backgroundColor: "#E9FF93",
                                    color: "#066A04",
                                    padding: "5px 10px",
                                }}
                            >
                                OPEN FOR USE
                            </div>
                        </div>
                    );
                }
            default:
                <></>;
        }
    };

    return (
        <UserContext.Consumer>
            {({ user, setUser }) => (
                <div className="main">
                    <div className="content">
                        {console.log("asdf")}
                        {console.log(user)}
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="section-title">
                                    Donated Addresses
                                </h2>
                                <PopupDonor />
                            </div>
                            {addresses.map((address, index) => (
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="card">
                                            <div className="card-header ">
                                                <h3 className="card-title">
                                                    <b>{address.address}</b>
                                                </h3>
                                                <p className="description">
                                                    {address.city}, California,
                                                    USA <br /> {address.zipCode}
                                                </p>
                                            </div>
                                        </div>
                                        {renderStatusPill(
                                            address.verified,
                                            address.numUsed,
                                            index
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div>
                                <Button
                                    variant="contained"
                                    style={{
                                        backgroundColor: "#5C7294",
                                        color: "#fff",
                                        width: "100vh",
                                    }}
                                >
                                    DONATE ANOTHER ADDRESS
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Dialog
                        open={openVerification >= 0}
                        onClose={() => {
                            setOpenVerification(-1);
                        }}
                        aria-labelledby="max-width-dialog-title"
                        fullWidth={true}
                        maxWidth="md"
                    >
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    setOpenVerification(-1);
                                }}
                                color="primary"
                            >
                                Close
                            </Button>
                        </DialogActions>
                        <DonorSignUpPage3
                            setPage={() => {
                                setOpenVerification(-1);
                                updateAddresses();
                            }}
                            data={user}
                            setData={setUser}
                            address={
                                addresses[openVerification]
                                    ? addresses[openVerification].address
                                    : null
                            }
                        />
                    </Dialog>
                </div>
            )}
        </UserContext.Consumer>
    );
}
