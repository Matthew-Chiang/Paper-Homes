import React, { useState } from "react";
// import Navbar from "../components/NavBar";
import Login from "../components/Login"
import SignUpPage2 from "../components/SignUp2";
import SignUpPage3 from "../components/SignUp3";
import SignUpPage4 from "../components/SignUp4";
import SignUpPage5 from "../components/SignUp5";
import { UserContext } from "../context/userContext";
import DonorSignUpPage2 from '../components/DonorSignUp2';
import DonorSignUpPage3 from '../components/DonorSignUp3';
import DonorSignUpPage4 from '../components/DonorSignUp4';
import SignUpLogin from '../components/SignUpLogin';

export default function SignUp() {
    // const classes = useStyles();
    const [page, setPage] = useState("page1");
    const [data, setData] = useState({});

    const renderSwitch = (param, user, setUser) => {
        switch (param) {
            case "page1":
                return (
                    <SignUpLogin
                        page={page}
                        setPage={setPage}
                        data={user}
                        setData={setUser}
                    />
                );
            case "page2":
                return (
                    <SignUpPage2
                        page={page}
                        setPage={setPage}
                        data={user}
                        setData={setUser}
                    />
                );
            case "page3":
                return (
                    <SignUpPage3
                        page={page}
                        setPage={setPage}
                        data={user}
                        setData={setUser}
                    />
                );
            case "page4":
                return (
                    <SignUpPage4
                        page={page}
                        setPage={setPage}
                        data={user}
                        setData={setUser}
                    />
                );
            case "page5":
                return (
                    <SignUpPage5
                        page={page}
                        setPage={setPage}
                        data={user}
                        setData={setUser}
                    />
                );
            case "donorpage2":
                return (
                    <DonorSignUpPage2
                        page={page}
                        setPage={setPage}
                        data={user}
                        setData={setUser}
                    />
                );
            default:
                return <div></div>;
        }
    };

    return (
        <UserContext.Consumer>
            {({ user, setUser }) => (
                <div>{renderSwitch(page, user, setUser)}</div>
            )}
        </UserContext.Consumer>
    );
}
