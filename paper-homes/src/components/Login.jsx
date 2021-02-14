import React from 'react';
//import Navbar from './NavBar'
import LoginRight from './LoginRight';
import SignUpLoginLeft from './SignUpLoginLeft';

export default function SignUpLogin({data, setData}) {
    // const classes = useStyles();

    return(
            <div style={{display:'flex'}}>
                <SignUpLoginLeft/>
                <div style={{padding:'20px 150px'}}>
                    <LoginRight data={data} setData={setData}/>
                </div>
            
            </div>
    );
}

