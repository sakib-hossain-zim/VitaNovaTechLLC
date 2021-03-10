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
    const { values, handleChangeLocation,handleChangeRadio,handleChangeLocationDetails, classes, handleChangeMealProvided, handleChangeUseBackDoor,handleChangeMiscarriageRadio,handleChangeBreastFeedingRadio,handleChangeCsectionRequirementRadio,handleChangePregnancyAbnormalitiesRadio, handleChangeChildSurvivalRadio, handleChangeAbnormalityDescriptionRadio} = this.props;

    return (


      <Fragment>
        <form onSubmit={this.handleSubmit} className="form-v1">

        <FormControl component="fieldset" className={classes.formControl}>
               <h3 style={{color: "red"}}>{values.recent_birthinfo_error}</h3>
               <h4> <b>How recently have you given birth?</b></h4>
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
                label="Less than 1 year"
              />
              <FormControlLabel
                value= "15"
                control={<Radio color="primary" />}
                label="Greater than 1 year"
              />
              <FormControlLabel
                value= "5"
                control={<Radio color="primary" />}
                label="Greater than 5 years"
              />
          </RadioGroup>
        </FormControl>
      <br/>

        <FormControl component="fieldset" className={classes.formControl}>
                <h3 style={{color: "red"}}>{values.child_survival_error}</h3>
                <h4> <b>Did the child survive?</b></h4>
              <RadioGroup
                aria-label="child_survival"
                name="child_survival"
                className={classes.group}
                value={values.child_survival}
                onChange={handleChangeChildSurvivalRadio('child_survival')}
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
        {values.child_survival_show?
        <Grid item xs={12}>
        <TextField
            required
            id="required"
            label="Brief Description"
            fullWidth
            onChange={handleChangeRadio('child_survival_explanation')}
            defaultValue={values.child_survival_explanation}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            focused
        />
       </Grid>:null
      }
      <br/>
          <FormControl component="fieldset" className={classes.formControl}>
                  <h3 style={{color: "red"}}>{values.miscarriage_info_error}</h3>
                  <h4> <b>Have you ever miscarried? If yes, please provide the week at which the event occurred, and if you choose to, a story behind it (car accident, medically necessary, etc.)</b></h4>
                <RadioGroup
                  aria-label="miscarriage_info"
                  name="miscarriage_info"
                  className={classes.group}
                  value={values.miscarriage_info}
                  onChange={handleChangeMiscarriageRadio('miscarriage_info')}
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
              </RadioGroup>
          </FormControl>
          {values.miscarriage_info_show?
          <Grid item xs={12}>
          <TextField
              required
              id="required"
              label="Brief Description"
              fullWidth
              onChange={handleChangeRadio('miscarriage_explanation')}
              defaultValue={values.miscarriage_explanation}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              focused
          />
         </Grid>:null
        }
      <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h3 style={{color: "red"}}>{values.breast_feeding_error}</h3>
                    <h4> <b>Are you currently breast-feeding?</b></h4>
                  <RadioGroup
                    aria-label="breast_feeding"
                    name="breast_feeding"
                    className={classes.group}
                    value={values.breast_feeding}
                    onChange={handleChangeBreastFeedingRadio('breast_feeding')}
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
            <br/>
            {values.breast_feeding_show?
             <FormControl component="fieldset" className={classes.formControl}>
              <h4> When will you be finished? </h4>
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
                    label="Less than 6 months"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Greater than 6 months"
                  />
              </RadioGroup> </FormControl>: null
          }
            <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h3 style={{color: "red"}}>{values.csection_requirement_error}</h3>
                    <h4> <b>Did you have or require a C-section (ceasarian section) to give birth?</b></h4>
                  <RadioGroup
                    aria-label="csection_requirement"
                    name="csection_requirement"
                    className={classes.group}
                    value={values.csection_requirement}
                    onChange={handleChangeCsectionRequirementRadio('csection_requirement')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="00000"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                </RadioGroup>
            </FormControl>
            {values.csection_requirement_show?
                <FormControl component="fieldset" className={classes.formControl}>
                <h4> How many have you had ? </h4>
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
                </RadioGroup> </FormControl>: null}
            <br/>
            <FormControl component="fieldset" className={classes.formControl}>
                    <h3 style={{color: "red"}}>{values.pregnancy_abnormalities_error}</h3>
                    <h4> <b>Did you experience any abnormalities during your pregnancy</b></h4>
                  <RadioGroup
                    aria-label="pregnancy_abnormalities"
                    name="pregnancy_abnormalities"
                    className={classes.group}
                    value={values.pregnancy_abnormalities}
                    onChange={handleChangePregnancyAbnormalitiesRadio('pregnancy_abnormalities')}
                  >
                    <FormControlLabel
                      value="15"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="0000000"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                </RadioGroup>
            </FormControl>
            {values.pregnancy_abnormalities_show?
             <FormControl component="fieldset" className={classes.formControl}>
                <h4> Select from options below </h4>
                <RadioGroup
                    aria-label="abnormality_description"
                    name="abnormality_description"
                    className={classes.group}
                    value={values.abnormality_description}
                    onChange={handleChangeAbnormalityDescriptionRadio('abnormality_description')}
                  >
                    <FormControlLabel
                      value="10"
                      control={<Radio color="primary" />}
                      label="Hypertension"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="primary" />}s
                      label="Preeclampsia"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio color="primary" />}
                      label="Gestational diabetes"
                    />
                    <FormControlLabel
                      value="005"
                      control={<Radio color="primary" />}s
                      label="Other"
                    />
                </RadioGroup> </FormControl> : null
            }
            {values.abnormality_other_show?
            <Grid item xs={12}>
            <TextField
                required
                id="required"
                label="Brief Description"
                fullWidth
                onChange={handleChangeRadio('abnormality_other_explaination')}
                defaultValue={values.abnormality_other_explaination}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                focused
            />
           </Grid>:null
          }
          <br />
          <br />


        </form>


      </Fragment>


    );
  }
}
)
