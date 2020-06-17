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



          <Grid item xs={12}>
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
              </Grid>


            
        <FormControl component="fieldset" className={classes.formControl}>
               <h4> <b>Have you given birth before?</b></h4>
            <RadioGroup
              aria-label="Birth"
              name="parking2"
              className={classes.group}
              value={values.birth}
              onChange={handleChangeRadio('birth')}
              defaultValue= {values.birth}
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
                <h4> <b>Do you reside in the US?</b></h4>
              <RadioGroup
                aria-label="US_residence"
                name="us_residence"
                className={classes.group}
                value={values.us_residence}
                onChange={handleChangeRadio('us_residence')}
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
                  <h4> <b>Do you use tobacco products?</b></h4>
                <RadioGroup
                  aria-label="tobacco_products_use"
                  name="tobacco_products_use"
                  className={classes.group}
                  value={values.tobacco_products_use}
                  onChange={handleChangeRadio('tobacco_products_use')}
                >
                  <FormControlLabel
                    value="400"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="10"
                    control={<Radio color="primary" />}
                    label="No"
                  />
              </RadioGroup>
          </FormControl>
      <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h4> <b>Do you/have use/d recreational drugs [ex but not limited to cocaine,meth,heroine] ?</b></h4>
                  <RadioGroup
                    aria-label="drug_use"
                    name="drug_use"
                    className={classes.group}
                    value={values.drug_use}
                    onChange={handleChangeRadio('drug_use')}
                  >
                    <FormControlLabel
                      value="400"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="10"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                </RadioGroup>
            </FormControl>
            <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h4> <b>Are you comfortable taking medical injections and prescriptions?</b></h4>
                  <RadioGroup
                    aria-label="injections_use"
                    name="injections_use"
                    className={classes.group}
                    value={values.injections_use}
                    onChange={handleChangeRadio('injections_use')}
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
                    <h4> <b>Are you comfortable following a doctor's orders [inluding but not limited to medically necessary abortion,diet,exercise chages] ?</b></h4>
                  <RadioGroup
                    aria-label="doctors_orders"
                    name="doctors_orders"
                    className={classes.group}
                    value={values.doctors_orders}
                    onChange={handleChangeRadio('doctors_orders')}
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
            <FormControl component="fieldset" required = "true" className={classes.formControl}>
                    <h4> <b>Will you take genetic and other record check [cost will be covered] ?</b></h4>
                  <RadioGroup
                    aria-label="geneticRecord_check"
                    name="geneticRecord_check"
                    className={classes.group}
                    value={values.geneticRecord_check}
                    onChange={handleChangeRadio('geneticRecord_check')}
                    required = "true"
                    
              
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





