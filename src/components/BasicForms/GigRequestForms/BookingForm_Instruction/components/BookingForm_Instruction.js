import React from 'react';

import { withRouter } from "react-router-dom";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormLabel from '@material-ui/core/FormLabel';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';




const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
   
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 550,
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  menu: {
    width: 200,
  },
  palette: {
    primary: '#8A2BE2',
    secondary: '#ff4081'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  grid: {
    width: '60%',
  },
  


});


export default  withStyles(styles)(class NormalForm extends React.Component {

constructor() {
    super()
    this.state = {
    open: false,
    isHidden: true
  }

  this.handleSave_Instructions = this.handleSave_Instructions.bind(this);
  this.handleToggle = this.handleToggle.bind(this);
}



  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    // this.props.history.push(DEMO.home2);
  }



handleToggle = () => {
    this.setState({
      open: !this.state.open,
      
    })
  }



//Create a div that renders on this page with the information provided in the modal 
handleSave_Instructions = () => {
  this.setState({
    open: !this.state.open,
    isHidden: false
  })
 
}

  
  render() {
    const { values, handleChange,handleChangeAttireSelection,handleChangeAccessoriesSelection, classes } = this.props;
    const {open} = this.state

    
const Child = () => (
  <div>
      <b> Instructions:</b>  {values.instructions} 
      <br/>
      <b> Required Attire:</b>  {values.required_attire} 
      <br/>
      <b> Required Accessories:</b>  {values.required_accessories} 
      <br/>
      <b> Onsite Contact Name:</b> {values.onsite_contact_name} 
      <br/>
      <b> Onsite Contact Number:</b> {values.onsite_contact_number} 
      <br />
      <b> Additional Attire Details:</b> {values.additional_attire_details}
    </div>
  )

  
    return (
      <section className="form-v1-container">

        <h5 color> <b> Add specific instructions for the professionals </b> </h5>

        
        <div>
          <h5> <b>Events Server </b> </h5>
          <Button variant="outlined" color="primary" onClick={this.handleToggle}>
            Add/Edit Instructions
          </Button>
          <br/>
          <br/>
          <br/>
          <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"><b>Instructions</b></DialogTitle>
            <DialogContent>
              <DialogContentText>
                Add new instructions
              </DialogContentText>
              <form> 
            
              <TextField
                id="login1-name"
                label="Instructions"
                fullWidth
                dense
                autoComplete="off"
                onChange={handleChange('instructions')}
                defaultValue={values.instructions}
                margin="normal"
                variant="outlined"
                focused
              />


               <FormControl component="fieldset" className={classes.formControl}>
               <h4> <b>Required Attire</b></h4>
                  <RadioGroup
                    aria-label="Location Details"
                    name="location_details2"
                    className={classes.group}
                    value={values.required_attire}
                    onChange={handleChangeAttireSelection('required_attire')}
                  >
                    <FormControlLabel
                      value="Black Bistro"
                      control={<Radio color="primary" />}
                      label="Black Bistro"
                    />

                    <FormControlLabel
                      value="White Bistro"
                      control={<Radio color="primary" />}
                      label="White Bistro"
                    />


                    <FormControlLabel
                      value="No Preference"
                      control={<Radio color="primary" />}
                      label="No Preference"
                    />

                    <FormControlLabel
                      value="Custom"
                      control={<Radio color="primary" />}
                      label="Custom"
                    />

                  
                  </RadioGroup>
               </FormControl>



               <FormControl component="fieldset" className={classes.formControl}>
               <h4> <b>Required Accessories</b></h4>
                  <RadioGroup
                    aria-label="Location Details"
                    name="location_details2"
                    className={classes.group}
                    value={values.required_accessories}
                    onChange={handleChangeAccessoriesSelection('required_accessories')}
                  >
                    <FormControlLabel
                      value="Black Non-Slip Slippers"
                      control={<Radio color="primary" />}
                      label="Black Non-Slip Slippers"
                    />

                    <FormControlLabel
                      value="Pen"
                      control={<Radio color="primary" />}
                      label="Pen"
                    />

                    <FormControlLabel
                      value="Wine Key"
                      control={<Radio color="primary" />}
                      label="Wine Key"
                    />

                    <FormControlLabel
                      value="Black Apron"
                      control={<Radio color="primary" />}
                      label="Black Apron"
                    />

                  
                  </RadioGroup>
               </FormControl>


              <TextField
                id="login1-name"
                label="Onsite_contact_name"
                fullWidth
                autoComplete="off"
                onChange={handleChange('onsite_contact_name')}
                defaultValue={values.onsite_contact_name}
                margin="normal"
                variant="outlined"
                focused
              />
              <TextField
                id="login1-name"
                label="Onsite_contact_number"
                fullWidth
                autoComplete="off"
                onChange={handleChange('onsite_contact_number')}
                defaultValue={values.onsite_contact_number}
                margin="normal"
                variant="outlined"
                focused
              />
              <TextField
                id="login1-name"
                label="Additional_attire_details"
                fullWidth
                autoComplete="off"
                onChange={handleChange('additional_attire_details')}
                defaultValue={values.additional_attire_details}
                margin="normal"
                variant="outlined"
                focused
                multiline
                rowsMax="6"
              />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleSave_Instructions} variant="outlined" color="primary">
                 Save
                
              </Button>
            </DialogActions>
          </Dialog>
          {!this.state.isHidden && <Child />}
          <br />
    </div>
    <br/>
      </section>
    );
  }
}
)





// const Child = () => (
//   <div>
//         {values.required_attire}

//     </div>
//   )



