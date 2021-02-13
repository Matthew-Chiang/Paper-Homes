import React, {useState} from 'react';
import Navbar from '../components/NavBar'

import SignUpPage2 from '../components/SignUp2'
import SignUpPage3 from '../components/SignUp3';
import SignUpLogin from '../components/SignUpLogin';

export default function ButtonAppBar() {
    // const classes = useStyles();
    const [page, setPage] = useState('page1');

    const renderSwitch = (param) => {
        switch(param) {
            case 'page1':
                return <SignUpLogin page={page} setPage={setPage}/>;
            case 'page2':
                return <SignUpPage2 page={page} setPage={setPage}/>;
            case 'page3':
                return <SignUpPage3 page={page} setPage={setPage}/>;
        }
    };


    return(
        <div>
            {renderSwitch(page)}
        </div>
    );
}

