import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Switch from '@material-ui/core/Switch';
import Verify from '../images/HandsPhone.png';

const useStyles = makeStyles((theme) => ({
    form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  main: {
    padding: "0px 180px 60px",
    textAlign:"center",
    marginLeft: 'auto',
    marginRight:'auto',
  },
  formFlex: {
    display:"inline-block",
    padding: "20px",
    marginLeft: 'auto',
    marginRight:'auto',
  },
}));

export default function MaxWidthDialog({page, setPage, data, setData}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open max-width dialog
      </Button> */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
          <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
        <div className={classes.main}>
          <DialogTitle id="max-width-dialog-title">
            <h1 className={classes.heading}style={{fontFamily:'Source Sans Pro', fontWeight:"bold"}}>
            Thanks for donating!            
            </h1>
          </DialogTitle>
          <DialogContent>
          <DialogContentText>
          Thank you for your address donation to Paper Homes.
          </DialogContentText>        
          <div className={classes.formFlex}>
            <img src={Verify}></img>
            
          </div>
          
          <DialogContentText>
          Before we connect your address to an individual in need, we will be verifying your address documentation. The verification process will typically take 2-3 business days. We’ll email you when everything’s ready!          </DialogContentText>
         
          {/* <div style={{display:'inline-block'}}>
            <PopupStepper page={page} setPage={setPage} data={data} setData={setData}/>
          </div> */}
        
          </DialogContent>
        </div>
        
      </Dialog>
    </React.Fragment>
  );
}
