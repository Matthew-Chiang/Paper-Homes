import React, { useState } from "react";
// import Navbar from "../components/NavBar";

import Popup1 from "../components/Popup1";
import Popup2 from "../components/Popup2";
import Popup3 from "../components/Popup3";
import { UserContext } from "../context/userContext";

export default function SignUp() {
    // const classes = useStyles();
    const [page, setPage] = useState(1);
    const [data, setData] = useState({});

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
        <div>
            {renderSwitch(page, setPage)}
        </div>
        
            // , user, setUser)}
    );
}
