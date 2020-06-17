import React, {Fragment} from 'react';
import QueueAnim from 'rc-queue-anim';
import BookingForm_Location from '../../components/BasicForms/GigRequestForms/Booking_Location';
import AboutYouForm from '../../components/BasicForms/GigRequestForms/AboutYou';
import BackgroundForm from '../../components/BasicForms/GigRequestForms/Background';
import PreviousPregnanciesForm from '../../components/BasicForms/GigRequestForms/PreviousPregnancies';
import HomeLifeForm from '../../components/BasicForms/GigRequestForms/HomeLife';
import SurrogacySpecificsForm from '../../components/BasicForms/GigRequestForms/SurrogacySpecifics';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookingForm_Shifts from '../../components/BasicForms/GigRequestForms/BookingForm_Shifts';
import BookingForm_Instruction from '../../components/BasicForms/GigRequestForms/BookingForm_Instruction';
import Booking_Confirmation from '../../components/BasicForms/GigRequestForms/Booking_Confirmation';

import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit,
  },
  root: {
   display: "flex",
   flexDirection: "column",
   padding: theme.spacing(4, 4),
   width: "700px",


    
  },

});

var final_value = 0; 



function getSteps() {
  return ['Pre-screen', 'About you','Background','Previous Preganancies','Home Life', 'Surrogacy Specifics'];
}









class GigRequest extends React.Component {
  constructor() {
    super();
  this.state = {
    activeStep: 0,
    event_name:"",
    address: "",
    parking: "",
    mealProvided: false,
    useBackdoor: false,
    additional_location_details: "",
    payment_method: "",
    birth: "0",
    us_residence: "0",
    tobacco_products_use: "0",
    drug_use: "0",
    injections_use: "0",
    doctors_orders: "0",
    criminalRecord_check: "0",
    geneticRecord_check: "0",
    age_range: "0",
    exercise_frequency: "",
    alcohol_frequency: "0",
    marijuana_frequency: "0",
    tattoo_time: "",
    tattoo_time_show: "",
    prescription_medication: "",
    other_prescription_medication: "",
    prescription_show: false,
    government_support: "",
    reliable_income_source: "0",
    convicted_of_crime: "0",
    convicted_of_crime_show: false,
    crime_explanation: "",
    recent_birthinfo: "0",
    child_survival: "0",
    miscarriage_info: "0",
    miscarriage_explanation: "",
    miscarriage_info_show: "",
    breast_feeding: "0",
    breast_feeding_timePeriod: "0",
    breast_feeding_show: false,
    csection_requirement: "",
    csection_requirement_show: "",
    csection_frequency: "0",
    pregnancy_abnormalities: "0",
    pregnancy_abnormalities_show: false,
    abnormality_description: "0",
    children_custody: "",
    children_custody_explanation: "",
    child_reside: "",
    child_reside_explanation: "",
    reliable_transportation: "0",
    smart_device_accessiblity: "0",
    home_life_quality: "",
    home_life_quality_explanation: "",
    medical_history: "",
    surrogate_gestational_carrier: "0",
    current_agency: "",
  

    



    positions: [{
      position_name: "",
      shift1_date: "",
      shift1_start_time:"",
      shift1_end_time:"",
      shift1_quantity: 0,
      shift2_date: "",
      shift2_start_time:"",
      shift2_end_time:"",
      shift2_quantity: 0,
      instructions: "NONE",
      required_attire: "NONE",
      required_accessories: "NONE",
      onsite_contact_name: "NONE",
      onsite_contact_number: "NONE",
      additional_attire_details: "NONE",
      hourly_rate: 21.87,
      total : 0,
      booking_fee: 15
    }
    ]
  }
  this.handleChangeRadio = this.handleChangeRadio.bind(this);
  };

      


  getStepContent = (step,values) => {
    switch (step) {
      case 0:
        return  <BookingForm_Location
            values={values}
            handleChangeLocation = {this.handleChangeLocation}
            handleChangeRadio = {this.handleChangeRadio}
            handleChangeLocationDetails = {this.handleChangeLocationDetails}
            handleChangeUseBackDoor = {this.handleChangeUseBackDoor}
            handleChangeMealProvided = {this.handleChangeMealProvided}
        />
        ;
      case 1:
      return  <AboutYouForm
          values={values}
          handleChangeLocation = {this.handleChangeLocation}
          handleChangeRadio = {this.handleChangeRadio}
          handleChangeLocationDetails = {this.handleChangeLocationDetails}
          handleChangeUseBackDoor = {this.handleChangeUseBackDoor}
          handleChangeMealProvided = {this.handleChangeMealProvided}
          handleChangePrescriptionRadio = {this.handleChangePrescriptionRadio}
          handleChangeTattooTimeRadio = {this.handleChangeTattooTimeRadio}
      
    /> ;
      case 2:
      return  <BackgroundForm
          values={values}
          handleChangeLocation = {this.handleChangeLocation}
          handleChangeRadio = {this.handleChangeRadio}
          handleChangeLocationDetails = {this.handleChangeLocationDetails}
          handleChangeUseBackDoor = {this.handleChangeUseBackDoor}
          handleChangeMealProvided = {this.handleChangeMealProvided}
          handleChangeConvictedofCrimeRadio = {this.handleChangeConvictedofCrimeRadio}
        
    /> ;
      case 3:
      return  <PreviousPregnanciesForm
          values={values}
          handleChangeLocation = {this.handleChangeLocation}
          handleChangeRadio = {this.handleChangeRadio}
          handleChangeLocationDetails = {this.handleChangeLocationDetails}
          handleChangeUseBackDoor = {this.handleChangeUseBackDoor}
          handleChangeMealProvided = {this.handleChangeMealProvided}
          handleChangeMiscarriageRadio={this.handleChangeMiscarriageRadio}
          handleChangeBreastFeedingRadio = {this.handleChangeBreastFeedingRadio}
          handleChangeCsectionRequirementRadio = {this.handleChangeCsectionRequirementRadio}
          handleChangePregnancyAbnormalitiesRadio = {this.handleChangePregnancyAbnormalitiesRadio}
    /> ;
      case 4:
      return  <HomeLifeForm
          values={values}
          handleChangeLocation = {this.handleChangeLocation}
          handleChangeRadio = {this.handleChangeRadio}
          handleChangeLocationDetails = {this.handleChangeLocationDetails}
          handleChangeUseBackDoor = {this.handleChangeUseBackDoor}
          handleChangeMealProvided = {this.handleChangeMealProvided}
    /> ;
    case 5:
    return  <SurrogacySpecificsForm
        values={values}
        handleChangeLocation = {this.handleChangeLocation}
        handleChangeRadio = {this.handleChangeRadio}
        handleChangeLocationDetails = {this.handleChangeLocationDetails}
        handleChangeUseBackDoor = {this.handleChangeUseBackDoor}
        handleChangeMealProvided = {this.handleChangeMealProvided}
  /> ;
      case 6: 
        return <Booking_Confirmation
        values = {values}
        />;
      default:
        return 'Unknown step';
    }
  }



  handleNext = () => {
    const { activeStep } = this.state;

    //Handle sending data to backend
    
    this.setState({
      activeStep: activeStep + 1,
    });

    final_value = parseInt(this.state.birth) + parseInt(this.state.us_residence) + parseInt (this.state.tobacco_products_use) + parseInt(this.state.drug_use) + parseInt(this.state.injections_use) + parseInt(this.state.doctors_orders) + parseInt(this.state.criminalRecord_check) + parseInt(this.state.geneticRecord_check)+ parseInt(this.state.age_range) + parseInt(this.state.exercise_frequency) + parseInt(this.state.alcohol_frequency) + parseInt(this.state.marijuana_frequency) + parseInt(this.state.tattoo_time) + parseInt(this.state.prescription_medication) + parseInt(this.state.other_prescription_medication) + parseInt(this.state.government_support) + parseInt(this.state.reliable_income_source) + parseInt(this.state.convicted_of_crime) + parseInt(this.state.crime_explanation) + parseInt(this.state.recent_birthinfo) + parseInt(this.state.child_survival) + parseInt(this.state.miscarriage_info) + parseInt(this.state.miscarriage_explanation) + parseInt(this.state.breast_feeding) +parseInt(this.state.breast_feeding_timePeriod) +parseInt(this.state.csection_requirement) +parseInt(this.state.csection_frequency) + parseInt(this.state.pregnancy_abnormalities) + parseInt(this.state.abnormality_description) +parseInt(this.state.children_custody) +parseInt(this.state.children_custody_explanation) + parseInt(this.state.child_reside) +parseInt(this.state.child_reside_explanation) + parseInt(this.state.reliable_transportation) + parseInt(this.state.smart_device_accessiblity) + parseInt(this.state.home_life_quality) + parseInt(this.state.home_life_qulaity_explanation) + parseInt(this.state.medical_history) + parseInt(this.state.surrogate_gestational_carrier) + parseInt(this.state.current_agency)
  
    console.log(this.state.address);
    console.log(this.state.parking);
    console.log(this.state.useBackdoor);
    console.log(this.state.mealProvided);
    console.log(this.state.additional_location_details);
    console.log(this.state.us_residence);
    console.log(this.state.birth);
    console.log(this.state.tobacco_products_use);
    console.log(this.state.drug_use);
    console.log(this.state.injections_use);
    console.log(this.state.doctors_orders);
    console.log(this.state.criminalRecord_check);
    console.log(this.state.geneticRecord_check);
    console.log(this.state.exercise_frequency);
    console.log(this.state.age_range);
    console.log(this.state.alcohol_frequency);
    console.log(this.state.marijuana_frequency);
    console.log(this.state.tattoo_time);
    console.log(this.state.prescription_medication);
    console.log(this.state.government_support);
    console.log(this.state.convicted_of_crime);
    console.log(this.state.reliable_income_source);
    console.log(this.state.recent_birthinfo);
    console.log(this.state.child_survival);
    console.log(this.state.miscarriage_info);
    console.log(this.state.breast_feeding);
    console.log(this.state.csection_requirement)
    console.log(this.state.csection_frequency);
    console.log(this.state.pregnancy_abnormalities);
    console.log(this.state.children_custody);
    console.log(this.state.child_reside);
    console.log(this.state.reliable_transportation);
    console.log(this.state.smart_device_accessiblity);
    console.log(this.state.home_life_quality);
    console.log(this.state.medical_history);
    console.log(this.state.surrogate_gestational_carrier);
    console.log(this.state.current_agency);

    console.log(parseInt(this.state.us_residence) + parseInt(this.state.birth));
    console.log(parseInt(this.state.birth) + parseInt(this.state.us_residence) + parseInt (this.state.tobacco_products_use) + parseInt(this.state.drug_use) + parseInt(this.state.injections_use) + parseInt(this.state.doctors_orders) + parseInt(this.state.criminalRecord_check) + parseInt(this.state.geneticRecord_check)+ parseInt(this.state.age_range) + parseInt(this.state.exercise_frequency) + parseInt(this.state.alcohol_frequency) + parseInt(this.state.marijuana_frequency) + parseInt(this.state.tattoo_time) + parseInt(this.state.prescription_medication) + parseInt(this.state.government_support) + parseInt(this.state.reliable_income_source) + parseInt(this.state.convicted_of_crime) + parseInt(this.state.recent_birthinfo) + parseInt(this.state.child_survival) + parseInt(this.state.miscarriage_info) + parseInt(this.state.breast_feeding) +parseInt(this.state.breast_feeding_timePeriod) +parseInt(this.state.csection_requirement) +parseInt(this.state.csection_frequency) + parseInt(this.state.pregnancy_abnormalities) +parseInt(this.state.children_custody) + parseInt(this.state.child_reside) + parseInt(this.state.reliable_transportation) + parseInt(this.state.smart_device_accessibility) + parseInt(this.state.home_life_quality) + parseInt(this.state.medical_history) + parseInt(this.state.surrogate_gestational_carrier) + parseInt(this.state.current_agency))
    

    for (var i=0;i<(this.state.positions).length;i++){
      console.log(this.state.positions[i].position_name);
      console.log(this.state.positions[i].shift1_date);
      console.log(this.state.positions[i].shift1_start_time);
      console.log(this.state.positions[i].shift1_end_time);
      console.log(this.state.positions[i].shift1_quantity);
      console.log(this.state.positions[i].shift2_date);
      console.log(this.state.positions[i].shift2_start_time);
      console.log(this.state.positions[i].shift2_end_time);
      console.log(this.state.positions[i].shift2_quantity);
      console.log(this.state.positions[i].required_attire);
      console.log(this.state.positions[i].required_accessories);
      console.log(this.state.positions[i].onsite_contact_name);
      console.log(this.state.positions[i].onsite_contact_number);
      console.log(this.state.positions[i].additional_attire_details);
      console.log(this.state.hourly_rate);

    }
        
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };


  handleSubmit = () => {

    let shifts = [];
    let instructions = [];

    let insert_data = [{
      "eventName": this.state.event_name,
      "location" : this.state.address,
      "parking": this.state.parking,
      "mealProvided": this.state.mealProvided,
      "useBackdoor": this.state.useBackdoor,
      "additionalInfo": this.state.additional_location_details,
      "shifts": shifts,
      "instructions": instructions
    }];

    
    for(var i=0;i<this.state.positions.length;i++){
      var shift1 = {
        "position": this.state.positions[i].position_name,
        "start": this.state.positions[i].shift1_date + this.state.positions[i].shift1_start_time,
        "end": this.state.positions[i].shift1_date + this.state.positions[i].shift1_end_time,
        "count": this.state.positions[i].shift1_quantity
      }
      var shift2={
        "position": this.state.positions[i].position_name,
        "start": this.state.positions[i].shift2_date + this.state.positions[i].shift2_start_time,
        "end": this.state.positions[i].shift2_date + this.state.positions[i].shift2_end_time,
        "count": this.state.positions[i].shift2_quantity
      }
      shifts.push(shift1);
      shifts.push(shift2);
      
    }

    // insert_data.push(shifts);

    for(var i=0;i<this.state.positions.length;i++){
      var new_instructions = {
        "position": "event-server",
		  	"attire": this.state.positions[i].required_attire,
			  "customAttire": this.state.positions[i].required_accessories,
        "additionalInfo": this.state.positions[i].additional_attire_details,
        "contacts": [{
        "name": this.state.positions[i].onsite_contact_name,
        "phone": this.state.positions[i].onsite_contact_number
        }]
      }

      instructions.push(new_instructions);


    }


    fetch("http://app.patternjobs.com/api/v1/gigs", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Bearer" + localStorage.getItem('jwtToken')
    },
      body: JSON.stringify(insert_data),
      
    })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(insert_data) {
      console.log(insert_data);
    })
    .catch(function(err) {
      console.log(err);
    })



    console.log(insert_data);
  
    
  };

  // Handle fields change
  handleChange = (idx,input) => e => {
    const val = 0;

    


    const newPosition = this.state.positions.map((position, sidx) => {
      if (idx !== sidx) return position;
      return { ...position, [input]: e.target.value};
    });

    console.log(newPosition);
    this.setState({ positions: newPosition });


    // this.setState({ [input]: e.target.value });
  };

  handleChangeRadio = input => e => {
    e.preventDefault();
    this.setState({ [input]: e.target.value });
  };

  handleChangeLocationDetails = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleChangeLocation = input => e => {
    this.setState({[input]: e.target.value});
  }


  handleChangeUseBackDoor = () => e => {
    this.setState({useBackdoor: !this.state.useBackdoor});
  }


  handleChangeMealProvided = () => e => {
    this.setState({mealProvided: !this.state.mealProvided});
  }


  handleChangePositionSelection = (idx,input) => e => {

    const newPosition = this.state.positions.map((position, sidx) => {
      if (idx !== sidx) return position;
      return { ...position, [input]: e.target.value};
    });


    console.log(newPosition);

    this.setState({ positions: newPosition });





    // this.setState({[input]: e.target.value});
  };


  



  handleChangeAttireSelection = input => e => {
    this.setState({[input]: e.target.value});
  };



  handleChangeAccessoriesSelection = input => e => {
    this.setState({[input]: e.target.value});
  };


  handleAddPosition = () => {
  
    this.setState({
      positions: this.state.positions.concat([{ position_name: "",shift1_quantity: 0, shift2_quantity:0,hourly_rate:21.87,booking_fee:15}])
      
    });

    console.log("HERERERER")
  }

  // handleChangePrescriptionRadio = input => e => {
  //   const ref = this;
  //   const run = async () => {
    
  //   const stateChange = await ref.setState({[input]:e.target.value})
  //   if(this.prescription_medication === 0) {
  //     ref.setState({prescription_show: true}
  //   }
  // }
  // }

  handleChangePrescriptionRadio = input => e => {
    if (e.target.value === '15') {
      this.setState({[input]:e.target.value})
      this.setState({prescription_show: false})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({prescription_show: true})
    }
    console.log(e.target.value);
  }

  handleChangeTattooTimeRadio = input => e => {
    if (e.target.value === '00') {
      this.setState({[input]:e.target.value})
      this.setState({tattoo_time_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({tattoo_time_show: false})
    }
    console.log(e.target.value);
  }

  handleChangeConvictedofCrimeRadio = input => e => {
    if (e.target.value === '5') {
      this.setState({[input]:e.target.value})
      this.setState({convicted_of_crime_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({convicted_of_crime_show: false})
    }
    console.log(e.target.value);
  }

  handleChangeMiscarriageRadio = input => e => {
    if (e.target.value === '5') {
      this.setState({[input]:e.target.value})
      this.setState({miscarriage_info_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({miscarriage_info_show: false})
    }
    console.log(e.target.value);
  }

  handleChangeBreastFeedingRadio = input => e => {
    if (e.target.value === '00') {
      this.setState({[input]:e.target.value})
      this.setState({breast_feeding_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({breast_feeding_show: false})
    }
    console.log(e.target.value);
  }

  handleChangeCsectionRequirementRadio = input => e => {
    if (e.target.value === '0') {
      this.setState({[input]:e.target.value})
      this.setState({csection_requirement_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({csection_requirement_show: false})
    }
    console.log(e.target.value);
  }

  handleChangePregnancyAbnormalitiesRadio = input => e => {
    if (e.target.value === '0') {
      this.setState({[input]:e.target.value})
      this.setState({pregnancy_abnormalities_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({pregnancy_abnormalities_show: false})
    }
    console.log(e.target.value);
  }

  

  

  

  // handleChangePrescriptionRadio(2).then((data) => {  
  //   if(this.state.prescription_medication === 0){
  //     this.setState({prescription_show: true})
  //     } 
  // }).catch((error) => {  
  //   console.log('Error from processDataAsycn() with async( When promise gets rejected ): ' + error);  
  // });


  // handleButtonClick = () => {
  //   const fetchUserEmail = async () => {
  //     const response = await fetch("/emails");
  //     const { email } = await response.json();
  //     this.setState({
  //       email
  //     });
  //   };
  //   fetchUserEmail();
  // };






  
 

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

   
    const {us_residence,tobacco_product_use,drug_use,injection_use,doctors_orders,criminalRecord_check,geneticRecord_check,age_range,exercise_frequency,alcohol_frequency,marijuana_frequency,tattoo_time,prescription_medication,other_prescription_medication,government_support,reliable_income_source,convicted_of_crime,crime_explanation,recent_birthinfo,child_survival,miscarriage_info,miscarriage_explanation,breast_feeding,breast_feeding_timePeriod,csection_requirement,csection_frequency,pregnancy_abnormalitites,abnormality_description,children_custody,children_custody_explanation,child_reside,child_reside_explanation,reliable_transportation,smart_device_accessibility,home_life_quality,home_life_quality_explanation,medical_history,surrogate_gestational_carrier,current_agency,prescription_show,tattoo_time_show,convicted_of_crime_show,miscarriage_info_show,breast_feeding_show,csection_requirement_show,pregnancy_abnormalities_show} = this.state;
    const values = {us_residence,tobacco_product_use,drug_use,injection_use,doctors_orders,criminalRecord_check,geneticRecord_check,age_range,exercise_frequency,alcohol_frequency,marijuana_frequency,tattoo_time,prescription_medication,other_prescription_medication,government_support,reliable_income_source,convicted_of_crime,crime_explanation,recent_birthinfo,child_survival,miscarriage_info,miscarriage_explanation,breast_feeding,breast_feeding_timePeriod,csection_requirement,csection_frequency,pregnancy_abnormalitites,abnormality_description,children_custody,children_custody_explanation,child_reside,child_reside_explanation,reliable_transportation,smart_device_accessibility,home_life_quality,home_life_quality_explanation,medical_history,surrogate_gestational_carrier,current_agency,prescription_show,tattoo_time_show,convicted_of_crime_show,miscarriage_info_show,breast_feeding_show,csection_requirement_show,pregnancy_abnormalities_show};

    return (
      <Fragment>
       <QueueAnim type="bottom" className="ui-animate">
       
      
   
      <h2 className="article-title">Pre-screen Questionnaire</h2>   
      <Paper className = {classes.root}>  
          <Stepper activeStep={activeStep} className="stepper-header">
            {steps.map((label, index) => {
              const props = {};
              const labelProps = {};
              return (
                <Step key={label} {...props}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <div>
              <Typography className="stepper-content">
               <p> Your Final score is: {parseInt(this.state.birth) + parseInt(this.state.us_residence)+ parseInt (this.state.tobacco_products_use) + parseInt(this.state.drug_use) + parseInt(this.state.injections_use) + parseInt(this.state.doctors_orders) + parseInt(this.state.criminalRecord_check) + parseInt(this.state.geneticRecord_check)+ parseInt(this.state.age_range) + parseInt(this.state.exercise_frequency) + parseInt(this.state.alcohol_frequency) + parseInt(this.state.marijuana_frequency) + parseInt(this.state.tattoo_time) + parseInt(this.state.prescription_medication) + parseInt(this.state.government_support) + parseInt(this.state.reliable_income_source) + parseInt(this.state.convicted_of_crime) + parseInt(this.state.recent_birthinfo) + parseInt(this.state.child_survival) + parseInt(this.state.miscarriage_info) + parseInt(this.state.breast_feeding) +parseInt(this.state.breast_feeding_timePeriod) +parseInt(this.state.csection_requirement) +parseInt(this.state.csection_frequency) + parseInt(this.state.pregnancy_abnormalities) + parseInt(this.state.abnormality_description) +parseInt(this.state.children_custody) + parseInt(this.state.child_reside) + parseInt(this.state.reliable_transportation) + parseInt(this.state.smart_device_accessibility) + parseInt(this.state.home_life_quality) + parseInt(this.state.medical_history) + parseInt(this.state.surrogate_gestational_carrier) + parseInt(this.state.current_agency)} </p>
              </Typography>
              <Button 
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handleSubmit} >
                Submit
              </Button>
            </div>
          ) : (
            <div>
              <Typography className="stepper-content">{this.getStepContent(activeStep, values)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        
      
      </Paper>
   
   
      </QueueAnim>

      </Fragment>
          
   

    );
  }
}

GigRequest.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(GigRequest);





