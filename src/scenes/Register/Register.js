import React, {Fragment} from 'react';
import QueueAnim from 'rc-queue-anim';
import BookingForm_Location from '../../components/BasicForms/GigRequestForms/Booking_Location';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookingForm_Shifts from '../../components/BasicForms/GigRequestForms/BookingForm_Shifts';
import BookingForm_Instruction from '../../components/BasicForms/GigRequestForms/BookingForm_Instruction';
import Booking_Confirmation from '../../components/BasicForms/GigRequestForms/Booking_Confirmation';


import Paper from '@material-ui/core/Paper';

import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const  styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });










class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email_address: "",
    password: "",
    phone: "",

    

  };



  

  handleChange = (input) => e => {
    this.setState({[input]: e.target.value});
  }


 


  handleSubmit = () => {

    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.email_address)
    console.log(this.state.password)

    var insert_data = [{
        "email": this.state.email_address,
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "password": this.state.password,
        "phone": this.state.phone,
    }]

    fetch("http://app.patternjobs.com/api/v1/users", {
        method: "POST",
        headers: { 
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        
      },
        body: JSON.stringify(insert_data),
        
      })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(insert_data) {
        this.props.history.push('/Login',this.state)
      })
      .catch(function(err) {
        console.log(err);
      })
  


    this.props.history.push('/Login',this.state)
    


  };

  



  render() {
    

    const { classes } = this.props;
   
    

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={this.handleChange('firstName')}
                  defaultValue = {this.state.firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  defaultValue = {this.state.lastName}
                  onChange={this.handleChange('lastName')}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  defaultValue={this.state.email_address}
                  onChange={this.handleChange('email_address')}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  defaultValue={this.state.password}
                  onChange={this.handleChange('password')}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick= {this.handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                 <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link> 
              </Grid>
            </Grid>
          </form>
        </div>
       
      </Container>
        
   

    );
  }
}

Register.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Register);





