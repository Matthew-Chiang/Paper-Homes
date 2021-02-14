import React , {useEffect} from 'react';
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
import Expire from '../images/HandsShow.png';
import axios from "axios"

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
  buttonWrap: {
    marginLeft: 'auto',
    marginRight:'auto',
  },
  expiryButtons: {
    margin: '10px',
    backgroundColor: '#5C7294',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1A2F4F',
      boxShadow: 'none',
    },
  '&:active': {
  boxShadow: 'none',
    }
  },
}));

export default function MaxWidthDialog({timeLeft, user, setUser}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  
  useEffect(() => {
    if (timeLeft < 2) {
      setOpen(true)
    } else {
      setOpen(false)
    }
}, []);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClick = () => {
    console.log(user)
    setUser({...user, 'createddate': "2021-02-13"})
    // user.createddate="2021-02-13"
    axios
            .post(`http://localhost:5000/user`, user.email)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    setOpen(false);
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
            Your address is expiring soon.           
            </h1>
          </DialogTitle>
          <DialogContent>
          <DialogContentText>
          Every 6 months, we'll check to see if you still need your address. Let us know if you no longer need this address or if you would like to renew it.
          </DialogContentText>        
          <div className={classes.formFlex}>
            <img src={Expire}></img>
            
          </div>
          
          <DialogActions>
            <div className={classes.buttonWrap}>
          <Button variant="contained" className={classes.expiryButtons}>
            Let it expire
          </Button>
          <Button variant="contained" className={classes.expiryButtons} onClick={handleClick}>
            Renew for 6 months
          </Button>
          </div>
        </DialogActions>
          {/* <div style={{display:'inline-block'}}>
            <PopupStepper page={page} setPage={setPage} data={data} setData={setData}/>
          </div> */}
        
          </DialogContent>
        </div>
        
      </Dialog>
    </React.Fragment>
  );
}
