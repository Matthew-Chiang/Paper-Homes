import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import 'date-fns';
// import * as React from 'react'
import CSVReader from 'react-csv-reader'

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    uploadButton: {
        backgroundColor: '#5C7294',
        color: '#fff',
        borderRadius: '25px',
        marginTop: '20px',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#1A2F4F',
            boxShadow: 'none',
          },
        '&:active': {
            backgroundColor: '#1A2F4F',
            boxShadow: 'none',
        },
    },
  }));
  
  export default function FileUploader() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Button className={classes.uploadButton}
        variant="contained"
        component="label"
        >       
         + Upload
         <input
            type="file"
            hidden
        />
        </Button>
        <CSVReader
  parserOptions={{ header: true }}
  onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
/>
      </div>
    );
  }

  
  