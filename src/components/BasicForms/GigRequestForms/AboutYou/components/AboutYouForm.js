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
    const { values, handleChangeLocation,handleChangeRadio,handleChangeLocationDetails, classes, handleChangeMealProvided, handleChangeUseBackDoor,handleChangePrescriptionRadio,handleChangeTattooTimeRadio,handleChangeMarijuanaRadio} = this.props;

    return (


      <Fragment>


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
               <h3 style={{color: "red"}}>{values.age_range_error}</h3>
               <h4> <b>Select your age range</b></h4>
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
                <h3 style={{color: "red"}}>{values.exercise_frequency_error}</h3>
                <h4> <b>What is your weekly activity level (30 minutes of exercise including spin, running, HIIT, yoga, gym or swim)</b></h4>
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
                  label="Once per week"
                />
                <FormControlLabel
                  value= "15"
                  control={<Radio color="primary" />}
                  label="2-3 times per week"
                />
                <FormControlLabel
                  value= "10"
                  control={<Radio color="primary" />}
                  label="4-5 times per week"
                />
                <FormControlLabel
                  value= "0010"
                  control={<Radio color="primary" />}
                  label="6+ times per week"
                />
                <FormControlLabel
                  value= "0000"
                  control={<Radio color="primary" />}
                  label="None"
                />
            </RadioGroup>
        </FormControl>
      <br/>
      <FormControl component="fieldset" className={classes.formControl}>
                <h3 style={{color: "red"}}>{values.alcohol_frequency_error}</h3>
                <h4> <b>What is your weekly consumption of alcohol? (1 drink is equivalent to 6oz of wine, 335mL of beer, or 1.5 oz hard liquor)</b></h4>
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
                  label="None"
                />
                <FormControlLabel
                  value= "12"
                  control={<Radio color="primary" />}
                  label="1-2 drinks per week"
                />
                <FormControlLabel
                  value= "10"
                  control={<Radio color="primary" />}
                  label="3-4 drinks per week"
                />
                <FormControlLabel
                  value= "7"
                  control={<Radio color="primary" />}
                  label="5-6 drinks per week"
                />
                <FormControlLabel
                  value= "5"
                  control={<Radio color="primary" />}
                  label="7+ drinks per week"
                />
            </RadioGroup>
        </FormControl>
      <br/>
      <br/>
      <FormControl component="fieldset" className={classes.formControl}>
                <h3 style={{color: "red"}}>{values.marijuana_frequency_error}</h3>
                <h4> <b>Do you consume marijauna, including but not limited to, edibles, vaping, topicals etc</b></h4>
              <RadioGroup
                aria-label="marijuana_frequency"
                name="marijuana_frequency"
                className={classes.group}
                value={values.marijuana_frequency}
                onChange={handleChangeMarijuanaRadio('marijuana_frequency')}
              >
                <FormControlLabel
                  value= "15"
                  control={<Radio color="primary" />}
                  label="No"
                />
                <FormControlLabel
                  value= "00"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
            </RadioGroup>
        </FormControl>
        {values.marijuana_option_show?
          <FormControl component="fieldset" className={classes.formControl}>
          <h4> Please select from the following options: </h4>
          <RadioGroup
            aria-label="marijuana_option"
            name="marijuana_option"
            className={classes.group}
            value={values.marijuana_option}
            onChange={handleChangeRadio('marijuana_option')}
          >
            <FormControlLabel
              value= "7"
              control={<Radio color="primary" />}
              label="Edibles"
            />
            <FormControlLabel
              value= "10"
              control={<Radio color="primary" />}
              label="Topical/oils"
            />
            <FormControlLabel
              value= "5"
              control={<Radio color="primary" />}
              label="Smoke and/or vaping"
            />
            </RadioGroup> </FormControl>:null
        }
      <br/>
          <FormControl component="fieldset" className={classes.formControl}>
                  <h3 style={{color: "red"}}>{values.tattoo_time_error}</h3>
                  <h4> <b>Do you have any tattoos? If so, how recently ? </b></h4>
                <RadioGroup
                  aria-label="tattoo_time"
                  name="tattoo_time"
                  className={classes.group}
                  value={values.tattoo_time}
                  onChange={handleChangeTattooTimeRadio('tattoo_time')}
                >
                  <FormControlLabel
                    value="15"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                  <FormControlLabel
                    value="00"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
              </RadioGroup>
          </FormControl>
          {values.tattoo_time_show?
            <FormControl component="fieldset" className={classes.formControl}>
            <h4> Please select from the following options: </h4>
                   <RadioGroup
                   aria-label="tattoo_duration"
                   name="tattoo_duration"
                   className={classes.group}
                   value={values.tattoo_duration}
                   onChange={handleChangeRadio('tattoo_duration')}
                 >
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
                      </RadioGroup> </FormControl>:null
            }
      <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h3 style={{color: "red"}}>{values.prescription_medication_error}</h3>
                    <h4> <b>Are you currently on prescription medication (this does not include anti-biotics) ?</b></h4>
                  <RadioGroup
                    aria-label="prescription_medication"
                    name="prescription_medication"
                    className={classes.group}
                    value={values.prescription_medication}
                    onChange={handleChangePrescriptionRadio('prescription_medication')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="000"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />

                </RadioGroup>

            </FormControl>
            {values.prescription_show?
            <FormControl component="fieldset" className={classes.formControl}>
                  <h4> Please select from the following options: </h4>
                         <RadioGroup
                         aria-label="prescription_medication_choice"
                         name="prescription_medication_choice"
                         className={classes.group}
                         value={values.prescription_medication_choice}
                         onChange={handleChangeRadio('prescription_medication_choice')}
                       >
                         <FormControlLabel
                           value="015"
                           control={<Radio color="primary" />}
                           label="birth control"
                         />
                         <FormControlLabel
                           value="00"
                           control={<Radio color="primary" />}
                           label="other"
                         />
                         <Grid item xs={12}>
                       <TextField
                         required
                         id="required"
                         label="Other prescription medication"
                         fullWidth
                         onChange={handleChangeRadio('other_prescription_medication')}
                         defaultValue={values.other_prescription_medication}
                         className={classes.textField}
                         margin="normal"
                         variant="outlined"
                         focused
                       />
                    </Grid>
           </RadioGroup>  </FormControl> :null }
          <br />
          <br />


        </form>


      </Fragment>


    );
  }
}
)
