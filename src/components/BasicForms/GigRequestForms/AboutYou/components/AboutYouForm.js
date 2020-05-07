import React, {Fragment} from 'react';

import { withRouter } from "react-router-dom";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup'


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';








const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    display: 'flex',
   
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 550,
  },
  menu: {
    width: 200,
  },
  palette: {
    primary: '#8A2BE2',
    secondary: '#ff4081'
  }

});






export default withStyles(styles) (class NormalForm extends React.Component {

  state = {
    address: "",
    parking: "",
    location_details: "",
    additional_location_details: ""
  }





  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    // this.props.history.push(DEMO.home2);
  }
  render() {
    const { values, handleChangeLocation,handleChangeRadio,handleChangeLocationDetails, classes, handleChangeMealProvided, handleChangeUseBackDoor} = this.props;
    
    return (


      <Fragment>
      <Typography variant="h6" gutterBottom>
         <h5 color> <b> Name  </b> </h5>
        </Typography>
              
        <form onSubmit={this.handleSubmit} className="form-v1">



          {/* <Grid item xs={12}>
              <TextField
                required
                id="required"
                label="First Name"
                fullWidth
                onChange={handleChangeLocation('first_name')}
                defaultValue={values.first_name}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                focused
              />
               </Grid>
         
             <Grid item xs={12}>
                <TextField
                  required
                  id="required"
                  label="Last Name"
                  fullWidth
                  onChange={handleChangeLocation('last_name')}
                  defaultValue={values.last_name}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  focused
                />
               </Grid>

               <Typography variant="h6" gutterBottom>
                  <h5 color> <b> Contact Information  </b> </h5>
               </Typography>

              <Grid item xs={12}>
              <TextField
                required
                id="required"
                label="Email Address"
                fullWidth
                onChange={handleChangeLocation('email_address')}
                defaultValue={values.email_address}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                focused
              />
               </Grid>
         
             <Grid item xs={12}>
                <TextField
                  required
                  id="required"
                  label="Phone Number"
                  fullWidth
                  onChange={handleChangeLocation('phone_number')}
                  defaultValue={values.phone_number}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  focused
                />
              </Grid> */}


            
        <FormControl component="fieldset" className={classes.formControl}>
               <h4> <b>Age Range?</b></h4>
            <RadioGroup
              aria-label="Age Range"
              name="age_range"
              className={classes.group}
              value={values.age_range}
              onChange={handleChangeRadio('age_range')}
            >
              <FormControlLabel
                value= "7"
                control={<Radio color="primary" />}
                label="18-20 years old"
              />
              <FormControlLabel
                value= "10"
                control={<Radio color="primary" />}
                label="21-24 years old"
              />
              <FormControlLabel
                value= "15"
                control={<Radio color="primary" />}
                label="25-30 years old"
              />
              <FormControlLabel
                value= "010"
                control={<Radio color="primary" />}
                label="31-34 years old"
              />
               <FormControlLabel
                value= "07"
                control={<Radio color="primary" />}
                label="35-39 years old"
              />
              <FormControlLabel
                value= "5"
                control={<Radio color="primary" />}
                label="40+ years old"
              />
          </RadioGroup>
        </FormControl>
      <br/>
        <FormControl component="fieldset" className={classes.formControl}>
                <h4> <b> Activity Level (30 mins of exercise, including spin, run, HIIT, yoga, gym, swim</b></h4>
              <RadioGroup
                aria-label="exercise_frequency"
                name="exercise_frequency"
                className={classes.group}
                value={values.exercise_frequency}
                onChange={handleChangeRadio('exercise_frequency')}
              >
                <FormControlLabel
                  value= "5"
                  control={<Radio color="primary" />}
                  label="once/wk"
                />
                <FormControlLabel
                  value= "15"
                  control={<Radio color="primary" />}
                  label="2-3/wk"
                />
                <FormControlLabel
                  value= "10"
                  control={<Radio color="primary" />}
                  label="4-5/wk"
                />
                <FormControlLabel
                  value= "010"
                  control={<Radio color="primary" />}
                  label="6+/wk"
                />
                <FormControlLabel
                  value= "0"
                  control={<Radio color="primary" />}
                  label="none"
                />
            </RadioGroup>
        </FormControl>
      <br/>
      <FormControl component="fieldset" className={classes.formControl}>
                <h4> <b> Alcohol Consumption (1 drink is equivalent to 6 oz of wine, 1 beer, 1 oz cocktail</b></h4>
              <RadioGroup
                aria-label="alcohol_frequency"
                name="alcohol_frequency"
                className={classes.group}
                value={values.alcohol_frequency}
                onChange={handleChangeRadio('alcohol_frequency')}
              >
                <FormControlLabel
                  value= "15"
                  control={<Radio color="primary" />}
                  label="No"
                />
                <FormControlLabel
                  value= "12"
                  control={<Radio color="primary" />}
                  label="1-2/wk"
                />
                <FormControlLabel
                  value= "10"
                  control={<Radio color="primary" />}
                  label="3-4/wk"
                />
                <FormControlLabel
                  value= "7"
                  control={<Radio color="primary" />}
                  label="5-6/wk"
                />
                <FormControlLabel
                  value= "5"
                  control={<Radio color="primary" />}
                  label="7+/wk"
                />
            </RadioGroup>
        </FormControl>
      <br/>
      <br/>
      <FormControl component="fieldset" className={classes.formControl}>
                <h4> <b> Marijuana Consumption (including but not limited to, edibles,pipes, vapes, buds)</b></h4>
              <RadioGroup
                aria-label="marijuana_frequency"
                name="marijuana_frequency"
                className={classes.group}
                value={values.marijuana_frequency}
                onChange={handleChangeRadio('marijuana_frequency')}
              >
                <FormControlLabel
                  value= "15"
                  control={<Radio color="primary" />}
                  label="No"
                />
                <h3> If yes, please select one of the following options </h3>
                <FormControlLabel
                  value= "7"
                  control={<Radio color="primary" />}
                  label="edibles"
                />
                <FormControlLabel
                  value= "10"
                  control={<Radio color="primary" />}
                  label="topical/oils"
                />
                <FormControlLabel
                  value= "5"
                  control={<Radio color="primary" />}
                  label="smoke/vape"
                />
            </RadioGroup>
        </FormControl>
      <br/>
          <FormControl component="fieldset" className={classes.formControl}>
                  <h4> <b>Do you have any tattoos? If so, how recent ? </b></h4>
                <RadioGroup
                  aria-label="tattoo_time"
                  name="tattoo_time"
                  className={classes.group}
                  value={values.tattoo_time}
                  onChange={handleChangeRadio('tattoo_time')}
                >
                  <FormControlLabel
                    value="15"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio color="primary" />}
                    label=">1year"
                  />
                  <FormControlLabel
                    value="10"
                    control={<Radio color="primary" />}
                    label="1-2 years"
                  />
                  <FormControlLabel
                    value="12"
                    control={<Radio color="primary" />}
                    label="3+ years"
                  />
              </RadioGroup>
          </FormControl>
      <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h4> <b>Are you currently on prescription medication (this does not include anti-biotics) ?</b></h4>
                  <RadioGroup
                    aria-label="prescription_medication"
                    name="prescription_medication"
                    className={classes.group}
                    value={values.prescription_medication}
                    onChange={handleChangeRadio('prescription_medication')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <h3> If yes, please select one of the following options </h3>
                    <FormControlLabel
                      value="015"
                      control={<Radio color="primary" />}
                      label="birth_control"
                    />
                     <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="other"
                    />
                </RadioGroup>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="required"
                    label="Other prescription medication"
                    fullWidth
                    onChange={handleChangeLocation('other_prescription_medication')}
                    defaultValue={values.other_prescription_medication}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    focused
                  />
               </Grid>
            </FormControl>
            


             {/* <div>
               <h4> <b>Location Details (Optional)</b></h4>
                <FormGroup row>
                 <FormControlLabel
                  control={
                    <Checkbox checked={values.useBackDoor} onChange={handleChangeUseBackDoor()} value="Use Back Door" color="primary" />
                  }
                  label="Use Back Door"
                 />
                 
                 <FormControlLabel
                  control={
                    <Checkbox checked={values.mealProvided} onChange={handleChangeMealProvided()} value="Meal Provided" color="primary" />
                  }
                  label="Meal Provided"
                 />
                </FormGroup>
              </div> */}
           
            {/* <div>
            <h4> <b>Additional Location Details (Optional)</b></h4>
              <TextField
                id="login1-password"
                label="Additional Location Details (Optional)"
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rowsMax="6"
                autoComplete="off"
                onChange={handleChangeLocation('additional_location_details')}
                defaultValue={values.additional_location_details}
                className={classes.textField}
              />
              
            </div> */}
            

          <br />
          <br />

        
        </form>
        
       
      </Fragment>

      
    );
  }
}
)





