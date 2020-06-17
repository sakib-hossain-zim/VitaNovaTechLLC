import React from 'react';

import { withRouter } from "react-router-dom";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormControl from '@material-ui/core/FormControl';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';


import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormLabel from '@material-ui/core/FormLabel';



import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';




const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    display: 'flex',
   
  },
  card: {
    minWidth: 275,
  },
  formControlModal: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 550,
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 550,
  },
  textFieldSmall: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing(0),
    width: 125,
  },
  textFieldSmallQuantity: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing(0),
    width: 80,
  },
  textFieldSmallTime: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing(0),
    width: 250,
  },
  textFieldModal: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  field_header_spacing : {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    width: '40%',
  },
  


});










export default withStyles(styles)(class NormalForm extends React.Component {



  

  constructor() {
    super()
    this.state = {
      numChildren: 0,

      
        
        open: false,
        isHidden: true
      }
    
      this.handleSave_Instructions = this.handleSave_Instructions.bind(this);
      this.handleToggle = this.handleToggle.bind(this);
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
  


  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    // this.props.history.push(DEMO.home2);
  }


  // handleAddPosition = (e) =>  {

  // }

  handleSave = (e) => {
      //push the current updated array to the states in GigRequest Form
  }


  handleAddShift = (e) => {

  }



  render() {



    const { values, handleChange, handleChangePositionSelection, classes, handleAddPosition} = this.props;
    const {open} = this.state

    
    
        
    const Child = () => (
      <div>
          <b> Instructions:</b>  {values.positions.instructions} 
          <br/>
          <b> Required Attire:</b>  {values.positions.required_attire} 
          <br/>
          <b> Required Accessories:</b>  {values.positions.required_accessories} 
          <br/>
          <b> Onsite Contact Name:</b> {values.positions.onsite_contact_name} 
          <br/>
          <b> Onsite Contact Number:</b> {values.positions.onsite_contact_number} 
          <br />
          <b> Additional Attire Details:</b> {values.positions.additional_attire_details}
        </div>
      )


    return (

                    
         <section className="form-v1-container">


                <Typography variant="h6" gutterBottom>

                  <h5 color> <b> What kind of staff do you need ? </b> </h5>

                </Typography>


                {values.positions.map((position,idx,{shifts}) => (

                <div key={idx}>
                <Card>
                  <CardContent>
                  
                  <form onSubmit={this.handleSubmit} className="form-v1">

                  <Grid container spacing={3}>

                  
                  <Grid>
                      <FormControl className={classes.formControl}>
                      <div className = {classes.field_header_spacing}><h4><b>Position</b></h4></div>
                          <Select
                            value={position.position_name}
                            onChange={handleChangePositionSelection(idx,'position_name')}
                            input={<OutlinedInput fullWidth className={classes.textField}/>} 
                          >
                            <MenuItem value={"Event Server"}>Event Server</MenuItem>
                            <MenuItem value={"Busser"}>Busser</MenuItem>
                            <MenuItem value={"Barback"}>Barback</MenuItem>
                            <MenuItem value={"Bartender"}>Bartender</MenuItem>
                            <MenuItem value={"Dishwasher"}>Dishwasher</MenuItem>
                            <MenuItem value={"Prep Cook"}>Prep Cook</MenuItem>
                            <MenuItem value={"Line Cook"}>Line Cook</MenuItem>
                            <MenuItem value={"Set/up & Take down(general labour"}>General Labour</MenuItem>
                            <MenuItem value={"Team Lead/manager"}>Team Lead</MenuItem>

                          </Select>
                      </FormControl>
                  </Grid>

                  <br />


                  <Grid>
                    <div className = {classes.field_header_spacing}><h5> <b>Start time</b></h5></div>


                      <form className={classes.container} noValidate>
                          <TextField
                            id="datetime-local"
                            label="Start Date and Time"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            onChange={handleChange(idx,'shift1_start_time')}
                            defaultValue={position.shift1_start_time}
                            className={classes.textFieldSmallTime}
                            margin="normal"
                            variant="outlined"
                            focused
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                      </form>


                      </Grid>
                      
                      <Grid>
                      <div className = {classes.field_header_spacing}><h5> <b>End time</b></h5></div>
                      <form className={classes.container} noValidate>
                          <TextField
                            id="datetime-local"
                            label="End Date and Time"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            onChange={handleChange(idx,'shift1_end_time')}
                            defaultValue={position.shift1_end_time}
                            className={classes.textFieldSmallTime}
                            margin="normal"
                            variant="outlined"
                            focused
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                      </form>
                      </Grid>
                    
                      <Grid >
                      <div className = {classes.field_header_spacing}><h5> <b>Quantity</b></h5></div>
                        <TextField
                          id="login1-password"
                          label="Quantity"
                          fullWidth
                          type="number"
                          autoComplete="off"
                          onChange={handleChange(idx,'shift1_quantity')}
                          defaultValue={position.shift1_quantity}
                          className={classes.textFieldSmallQuantity}
                          margin="normal"
                          variant="outlined"
                          focused
                        />
                      </Grid>

                    <Grid>
                    <div className = {classes.field_header_spacing}><h5> <b>Start time</b></h5></div>
                      <TextField
                            id="datetime-local"
                            label="Start Date and Time"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            onChange={handleChange(idx,'shift2_start_time')}
                            defaultValue={position.shift2_start_time}
                            className={classes.textFieldSmallTime}
                            margin="normal"
                            variant="outlined"
                            focused
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                      </Grid>
                      
                      <Grid>
                      <div className = {classes.field_header_spacing}><h5> <b>End Time</b></h5></div>
                        <TextField
                              id="datetime-local"
                              label="Start Date and Time"
                              type="datetime-local"
                              defaultValue="2017-05-24T10:30"
                              onChange={handleChange(idx,'shift2_start_time')}
                              defaultValue={position.shift2_start_time}
                              className={classes.textFieldSmallTime}
                              margin="normal"
                              variant="outlined"
                              focused
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                      </Grid>
                    
                      <Grid >
                      <div className = {classes.field_header_spacing}><h5> <b>Quantity</b></h5></div>
                        <TextField
                          id="login1-password"
                          label="Quantity"
                          type="number"
                          fullWidth
                          autoComplete="off"
                          onChange={handleChange(idx,'shift2_quantity')}
                          defaultValue={position.shift2_quantity}
                          className={classes.textFieldSmallQuantity}
                          margin="normal"
                          variant="outlined"
                          focused
                        />
                      </Grid>
                      
                    </Grid>

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
                          onChange={handleChange(idx,'instructions')}
                          defaultValue={position.instructions}
                          margin="normal"
                          variant="outlined"
                          focused
                        />


                        <FormControl component="fieldset" className={classes.formControlModal}>
                        <h4> <b>Required Attire</b></h4>
                            <RadioGroup
                              aria-label="Location Details"
                              name="location_details2"
                              className={classes.group}
                              value={position.required_attire}
                              onChange={handleChange(idx,'required_attire')}
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
                              value={position.required_accessories}
                              onChange={handleChange(idx,'required_accessories')}
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
                          onChange={handleChange(idx,'onsite_contact_name')}
                          defaultValue={position.onsite_contact_name}
                          margin="normal"
                          variant="outlined"
                          focused
                        />
                        <TextField
                          id="login1-name"
                          label="Onsite_contact_number"
                          fullWidth
                          autoComplete="off"
                          onChange={handleChange(idx,'onsite_contact_number')}
                          defaultValue={position.onsite_contact_number}
                          margin="normal"
                          variant="outlined"
                          focused
                        />
                        <TextField
                          id="login1-name"
                          label="Additional_attire_details"
                          fullWidth
                          autoComplete="off"
                          onChange={handleChange(idx,'additional_attire_details')}
                          defaultValue={position.additional_attire_details}
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

                        

                    <br />

                    <br />
                    <br />

                  
                  </form>

                   {/* {!this.state.isHidden && <Child />} */}

                   <div color="primary"> <b>Total Cost:</b> $ {position.hourly_rate * position.shift1_quantity + position.hourly_rate * position.shift2_quantity} </div>
                  
                  <br/>
                   <Card>
                      <CardContent>
                          <div>
                          <h4><b>Instructions</b></h4>
                                <b> Instructions:</b>  {position.instructions} 
                                <br/>
                                <b> Required Attire:</b>  {position.required_attire} 
                                <br/>
                                <b> Required Accessories:</b>  {position.required_accessories} 
                                <br/>
                                <b> Onsite Contact Name:</b> {position.onsite_contact_name} 
                                <br/>
                                <b> Onsite Contact Number:</b> {position.onsite_contact_number} 
                                <br />
                                <b> Additional Attire Details:</b> {position.additional_attire_details}
                          </div>
                          <br/>



                          

                          <Button onClick={this.handleToggle} variant="outlined" color="primary">
                          Add/Edit Instructions
                          </Button>



                        </CardContent>
                  </Card>
                  </CardContent>
                  </Card>

                  <br/>
                  <br/>

                  </div>
                
                  ))}
                
                  <Button onClick={handleAddPosition} variant="outlined" color="primary">
                          Add Position
                  </Button>
                  
                  <br/>
                  <br/>

                  </section>

                    );
                  }
                }

                )


  















