import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
    },
    signUpPages: {
      padding: '150px 0px',
      textAlign: 'center',
  },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    main: {
      padding: '40px 0px',
      width: '80vh',
      display: 'inline-block',
    },
    nextButton: {
        width: '50px',
        boxShadow: 'none',
        color: 'white',
        backgroundColor: '#5C7294',
        margin: '10px 5px',
        width: '150px',
        '&:hover': {
            backgroundColor: '#1A2F4F',
            boxShadow: 'none',
          },
        '&:active': {
        boxShadow: 'none',
        },
    },
}));

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center" width='80%'>
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

export default function SignUpPage3({page, setPage, data, setData}) {
    const classes = useStyles();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
        }, 800);
        return () => {
          clearInterval(timer);
        };
        
      }, []);
    
    useEffect(() => {
        if (progress >= 100) {
            saveForm()
        };
    },[progress])

    const saveForm = () => {
        setPage('page5')
    };

    // const goBack = () => {
    //     setPage('page3')
    // }
    
    return (
        <div className={classes.signUpPages}>
            <div>
                <h1 style={{textAlignLast:'center'}}>Let’s get you an address!</h1>
                <h3 style={{textAlignLast:'center'}}>Matching you with an address...</h3>
            </div>
            <div className={classes.main}>
            <div style={{textAlign:"-webkit-center"}}>
                <div className={classes.root}>
                <   LinearProgressWithLabel value={progress} />
                </div>
              </div>
            </div>
            

            {/* <Button
                // className={classes.button}
                startIcon={<ArrowBackIcon />}
                onClick={goBack}
            >Back</Button> */}
        </div>
    );
}
