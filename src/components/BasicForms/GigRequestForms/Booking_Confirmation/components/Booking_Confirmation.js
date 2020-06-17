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

    var total = 0;

    for(var i=0;i<values.positions.length;i++){
      total += (values.positions[i].hourly_rate * values.positions[i].shift1_quantity + values.positions[i].shift2_quantity * values.positions[i].hourly_rate);
    }


    const ComplexList = () => (
     <div>
        {values.positions.map(position => (
          <div>
            <div><b>Position Name: {position.position_name}</b></div>
            <div>Date: {position.shift1_date}</div>
            <div>Start Time: {position.shift1_start_time}</div>
            <div>End Time: {position.shift1_end_time}</div>
            <div>Quantity: {position.shift1_quantity}</div>
            <div> Hourly Rate:$ {position.hourly_rate} </div>
            <div> Amount: {position.hourly_rate * position.shift1_quantity + position.hourly_rate * position.shift2_quantity}</div>
            <div> Booking Fee:$ {position.booking_fee} </div>
          
          </div>
         
        ))}

      </div>
      
    )
    
      
    return (

                    
         <section className="form-v1-container">

              <div>
                <Typography variant="h6" gutterBottom>

                  <h5 color> <b> Review all details before confirming  </b> </h5>

                </Typography>

                Address: {values.address}
                <br/>
                Location: Vancouver


              </div>

              <div>
                <Typography variant="h6" gutterBottom>

                   <h5 color> <b> Shifts  </b> </h5>

                </Typography>

                <div> <ComplexList/> </div>
   

               </div>



               <div>
                <Typography variant="h6" gutterBottom>

                   <h5 color> <b> Estimated Total: {total}   </b> </h5>

                </Typography>

              
               </div>

                  </section>

                   );
                  }
                }

                )


  















