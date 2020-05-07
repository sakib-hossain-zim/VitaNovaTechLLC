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
               <h4> <b>How recently did you give birth? </b></h4>
            <RadioGroup
              aria-label="recent_birthinfo"
              name="recent_birthinfo"
              className={classes.group}
              value={values.recent_birthinfo}
              onChange={handleChangeRadio('recent_birthinfo')}
            >
              <FormControlLabel
                value= "10"
                control={<Radio color="primary" />}
                label=">1 year"
              />
              <FormControlLabel
                value= "15"
                control={<Radio color="primary" />}
                label=">5 years"
              />
              <FormControlLabel
                value= "5"
                control={<Radio color="primary" />}
                label="5+ years"
              />
          </RadioGroup>
        </FormControl>
      <br/>
        <FormControl component="fieldset" className={classes.formControl}>
                <h4> <b>Did the child survive?</b></h4>
              <RadioGroup
                aria-label="child_survival"
                name="child_survival"
                className={classes.group}
                value={values.child_survival}
                onChange={handleChangeRadio('child_survival')}
              >
                <FormControlLabel
                  value= "10"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
                <FormControlLabel
                  value= "400"
                  control={<Radio color="primary" />}
                  label="No"
                />
            </RadioGroup>
        </FormControl>
      <br/>
          <FormControl component="fieldset" className={classes.formControl}>
                  <h4> <b>Have you ever miscarried? If yes, please provide the week at which the event occurred, and if you chose to, a story behind it (car accident, medically necessary, etc.)</b></h4>
                <RadioGroup
                  aria-label="miscarriage_info"
                  name="miscarriage_info"
                  className={classes.group}
                  value={values.miscarriage_info}
                  onChange={handleChangeRadio('miscarriage_info')}
                >
                  <FormControlLabel
                    value="15"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <Grid item xs={12}>
                    <TextField
                        required
                        id="required"
                        label="Brief Description"
                        fullWidth
                        onChange={handleChangeLocation('miscarriage_explanation')}
                        defaultValue={values.miscarriage_explanation}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        focused
                    />
                   </Grid>
              </RadioGroup>
          </FormControl>
      <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h4> <b>Are you breast-feeding?</b></h4>
                  <RadioGroup
                    aria-label="breast_feeding"
                    name="breast_feeding"
                    className={classes.group}
                    value={values.breast_feeding}
                    onChange={handleChangeRadio('breast_feeding')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="Yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                </RadioGroup>
                <h3> When will you be finished? </h3>
                <RadioGroup
                    aria-label="breast_feeding_timePeriod"
                    name="breast_feeding_timePeriod"
                    className={classes.group}
                    value={values.breast_feeding_timePeriod}
                    onChange={handleChangeRadio('breast_feeding_timePeriod')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label=">6 months"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="primary" />}
                      label="6+ months"
                    />
                </RadioGroup>

            </FormControl>
            <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h4> <b>Did you have or require a C-section (ceasarian section) to give birth?</b></h4>
                  <RadioGroup
                    aria-label="csection_requirement"
                    name="csection_requirement"
                    className={classes.group}
                    value={values.csection_requirement}
                    onChange={handleChangeRadio('csection_requirement')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                </RadioGroup>
                <h3> How many have you had ? </h3>
                <RadioGroup
                    aria-label="csection_frequency"
                    name="csection_frequency"
                    className={classes.group}
                    value={values.csection_frequency}
                    onChange={handleChangeRadio('csection_frequency')}
                  >
                    <FormControlLabel
                      value="12"
                      control={<Radio color="primary" />}
                      label="1"
                    />
                    <FormControlLabel
                      value="10"
                      control={<Radio color="primary" />}
                      label="2"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="primary" />}
                      label="3+"
                    />
                </RadioGroup>
            </FormControl>
            <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h4> <b>Did you experience any abnormalities during your pregnancy</b></h4>
                  <RadioGroup
                    aria-label="pregnancy_abnormalities"
                    name="pregnancy_abnormalities"
                    className={classes.group}
                    value={values.pregnancy_abnormalities}
                    onChange={handleChangeRadio('pregnancy_abnormalities')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                </RadioGroup>
                <h3> Select from options below </h3>
                <RadioGroup
                    aria-label="abnormality_description"
                    name="abnormality_description"
                    className={classes.group}
                    value={values.abnormality_description}
                    onChange={handleChangeRadio('abnormality_description')}
                  >
                    <FormControlLabel
                      value="10"
                      control={<Radio color="primary" />}
                      label="hypertension"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="primary" />}s
                      label="preclampsia"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio color="primary" />}
                      label="gestational_diabetes"
                    />
                </RadioGroup>

            </FormControl>
            <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h4> <b>Will you complete a criminal record check ?</b></h4>
                  <RadioGroup
                    aria-label="criminalRecord_check"
                    name="criminalRecord_check"
                    className={classes.group}
                    value={values.criminalRecord_check}
                    onChange={handleChangeRadio('criminalRecord_check')}
                  >
                    <FormControlLabel
                      value="10"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="400"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                </RadioGroup>
            </FormControl>
            <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h4> <b>Will you take genetic and other record check [cost will be covered] ?</b></h4>
                  <RadioGroup
                    aria-label="geneticRecord_check"
                    name="geneticRecord_check"
                    className={classes.group}
                    value={values.geneticRecord_check}
                    onChange={handleChangeRadio('geneticRecord_check')}
                  >
                    <FormControlLabel
                      value="10"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="400"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                </RadioGroup>
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





