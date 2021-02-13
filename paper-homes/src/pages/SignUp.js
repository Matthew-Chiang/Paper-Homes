import React, {useState} from 'react';
import Navbar from '../components/NavBar'

import SignUpPage2 from '../components/SignUp2'
import SignUpPage3 from '../components/SignUp3';
import SignUpPage4 from '../components/SignUp4'
import SignUpPage5 from '../components/SignUp5'
import DonorSignUpPage2 from '../components/DonorSignUp2';
import SignUpLogin from '../components/SignUpLogin';

export default function ButtonAppBar() {
    // const classes = useStyles();
    const [page, setPage] = useState('page1');
    const [data, setData] = useState({});

    const renderSwitch = (param) => {
        switch(param) {
            case 'page1':
                return <SignUpLogin page={page} setPage={setPage} data={data} setData={setData}/>;
            case 'page2':
                return <SignUpPage2 page={page} setPage={setPage} data={data} setData={setData}/>;
            case 'page3':
                return <SignUpPage3 page={page} setPage={setPage} data={data} setData={setData}/>;
            case 'page4':
                return <SignUpPage4 page={page} setPage={setPage} data={data} setData={setData}/>;
            case 'page5':
                return <SignUpPage5 page={page} setPage={setPage} data={data} setData={setData}/>;
            case 'donorpage2':
                return <DonorSignUpPage2 page={page} setPage={setPage} data={data} setData={setData}/>;
        }
    };


    return(
        <div>
            {renderSwitch(page)}
        </div>
    );
}

