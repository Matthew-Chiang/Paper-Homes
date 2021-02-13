import React from 'react';
import Navbar from './NavBar'
import SignUpLoginRight from './SignUpLoginRight';
import SignUpLoginLeft from './SignUpLoginLeft';

export default function SignUpLogin({page, setPage}) {
    // const classes = useStyles();

    return(
            <div style={{display:'flex'}}>
                <SignUpLoginLeft/>
                <div style={{padding:'20px 150px'}}>
                    <SignUpLoginRight page={page} setPage={setPage}/>
                </div>
            
            </div>
    );
}

