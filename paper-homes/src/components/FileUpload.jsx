import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import "date-fns";
// import * as React from 'react'
// import CSVReader from 'react-csv-reader'

const useStyles = makeStyles((theme) => ({
    root: {},
    uploadButton: {
        backgroundColor: "#5C7294",
        color: "#fff",
        borderRadius: "25px",
        marginTop: "20px",
        boxShadow: "none",
        "&:hover": {
            backgroundColor: "#1A2F4F",
            boxShadow: "none",
        },
        "&:active": {
            backgroundColor: "#1A2F4F",
            boxShadow: "none",
        },
    },
}));

export default function FileUploader({ setCsvInfo, setImageUploaded }) {
    const classes = useStyles();
    let fileReader;

    const [uploadedFiles, setUploadedFiles] = useState(null);

    const handleFileRead = (e) => {
        const content = fileReader.result;
        console.log(content)
        setCsvInfo(content);
    };

    const handleFileInput = (e) => {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile.type)
        setUploadedFiles(uploadedFile.name);
        console.log(uploadedFile);
        if (uploadedFile.type == "text/csv" || uploadedFile.type == "application/vnd.ms-excel") {
            fileReader = new FileReader();
            fileReader.onloadend = handleFileRead;
            fileReader.readAsText(uploadedFile);
        } else if (uploadedFile.type.startsWith("image")) {
            setImageUploaded(true);
        }
    };

    return (
        <div className={classes.root}>
            <Button
                className={classes.uploadButton}
                variant="contained"
                component="label"
            >
                + Upload
                <input type="file" onChange={handleFileInput} hidden />
            </Button>
            <hr></hr>
            {uploadedFiles && <div><p>{uploadedFiles}</p> <p>File Uploaded Successfully!</p></div>}
            {/* <CSVReader
  parserOptions={{ header: true }}
  onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
/> */}
        </div>
    );
}
