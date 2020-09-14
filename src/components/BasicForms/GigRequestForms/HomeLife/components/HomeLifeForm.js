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
        <FormControl component="fieldset" className={classes.formControl}>
               <h3 style={{color: "red"}}>{values.children_custody_error}</h3>
               <h4> <b>Do you currently have custody (full or half) of your children? </b></h4>
            <RadioGroup
              aria-label="children_custody"
              name="children_custody"
              className={classes.group}
              value={values.children_custody}
              onChange={handleChangeRadio('children_custody')}
            >
              <FormControlLabel
                value= "15"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value= "000"
                control={<Radio color="primary" />}
                label="No"
              />
          </RadioGroup>
            <Grid item xs={12}>
                <TextField
                    required
                    id="required"
                    label="Explain"
                    fullWidth
                    onChange={handleChangeLocation('children_custody_explanation')}
                    defaultValue={values.children_custody_explanation}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    focused
                />
            </Grid>
        </FormControl>
      <br/>
        <FormControl component="fieldset" className={classes.formControl}>
                <h3 style={{color: "red"}}>{values.child_reside_error}</h3>
                <h4> <b>Do your children reside with you?</b></h4>
              <RadioGroup
                aria-label="child_reside"
                name="child_reside"
                className={classes.group}
                value={values.child_reside}
                onChange={handleChangeRadio('child_reside')}
              >
                <FormControlLabel
                  value= "15"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
                <FormControlLabel
                  value= "0000"
                  control={<Radio color="primary" />}
                  label="No"
                />
            </RadioGroup>
            <Grid item xs={12}>
                <TextField
                    required
                    id="required"
                    label="Explain"
                    fullWidth
                    onChange={handleChangeLocation('child_reside_explanation')}
                    defaultValue={values.child_reside_explanation}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    focused
                />
            </Grid>
        </FormControl>
      <br/>
          <FormControl component="fieldset" className={classes.formControl}>
                  <h3 style={{color: "red"}}>{values.reliable_transportation_error}</h3>
                  <h4> <b>Do you have reliable transportation or can you get access to reliable transportation (car, bus, ride share, family etc.) to get to and from your doctor’s appointments?</b></h4>
                <RadioGroup
                  aria-label="reliable_transportation"
                  name="reliable_transportation"
                  className={classes.group}
                  value={values.reliable_transportation}
                  onChange={handleChangeRadio('reliable_transportation')}
                >
                  <FormControlLabel
                    value="15"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="No"
                  />
              </RadioGroup>
          </FormControl>
      <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h3 style={{color: "red"}}>{values.smart_device_accessibility_error}</h3>
                    <h4> <b>Do you have, or can you get access to a smart device (laptop, tablet, cellphone with camera, etc.) for video calling with the intended parents?</b></h4>
                  <RadioGroup
                    aria-label="smart_device_accessibility"
                    name="smart_device_accessibility"
                    className={classes.group}
                    value={values.smart_device_accessibility}
                    onChange={handleChangeRadio('smart_device_accessibility')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                </RadioGroup>
                </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
                <h3 style={{color: "red"}}>{values.home_life_quality_error}</h3>
                <h4><b> How is life at home? </b></h4>
                <RadioGroup
                    aria-label="home_life_quality"
                    name="home_life_quality"
                    className={classes.group}
                    value={values.home_life_quality}
                    onChange={handleChangeRadio('home_life_quality')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label="Great"
                    />
                    <FormControlLabel
                      value="10"
                      control={<Radio color="primary" />}
                      label="Good"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio color="primary" />}
                      label="A little stressful*"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="primary" />}
                      label="Very stressful*"
                    />
                </RadioGroup>
                <Grid item xs={12}>
                <TextField
                    required
                    id="required"
                    label="Explain"
                    fullWidth
                    onChange={handleChangeLocation('home_life_quality')}
                    defaultValue={values.home_life_quality}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    focused
                />
                </Grid>
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





