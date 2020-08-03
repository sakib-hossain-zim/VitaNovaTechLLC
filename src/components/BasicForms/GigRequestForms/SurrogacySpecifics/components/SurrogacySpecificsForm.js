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
               <h3 style={{color: "red"}}>{values.medical_history_error}</h3>
               <h4> <b>Will you provide all your medical history (relevant to being a surrogate) </b></h4>
            <RadioGroup
              aria-label="medical_history"
              name="mdeical_history"
              className={classes.group}
              value={values.medical_history}
              onChange={handleChangeRadio('medical_history')}
            >
              <FormControlLabel
                value= "15"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value= "00"
                control={<Radio color="primary" />}
                label="No"
              />
          </RadioGroup>
        </FormControl>
      <br/>
        <FormControl component="fieldset" className={classes.formControl}>
                <h3 style={{color: "red"}}>{values.surrogate_gestational_carrier_error}</h3>
                <h4> <b>Have you been a surrogate, or gestational carrier before?</b></h4>
              <RadioGroup
                aria-label="surrogate_gestational_carrier"
                name="surrogate_gestational_carrier"
                className={classes.group}
                value={values.surrogate_gestational_carrier}
                onChange={handleChangeRadio('surrogate_gestational_carrier')}
              >
                <FormControlLabel
                  value= "15"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
                <FormControlLabel
                  value= "015"
                  control={<Radio color="primary" />}
                  label="No"
                />
            </RadioGroup>
        </FormControl>
      <br/>
          <FormControl component="fieldset" className={classes.formControl}>
                  <h3 style={{color: "red"}}>{values.current_agency_error}</h3>
                  <h4> <b>Are you with an agency currently?</b></h4>
                <RadioGroup
                  aria-label="current_agency"
                  name="current_agency"
                  className={classes.group}
                  value={values.current_agency}
                  onChange={handleChangeRadio('current_agency')}
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
      <br/>
    

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





