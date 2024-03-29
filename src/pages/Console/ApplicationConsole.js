import React, {Fragment,useEffect} from 'react';
import QueueAnim from 'rc-queue-anim';
import PreScreenForm from '../../components/BasicForms/SurrogacyForms/PreScreen';
import AboutYouForm from '../../components/BasicForms/SurrogacyForms/AboutYou';
import BackgroundForm from '../../components/BasicForms/SurrogacyForms/Background';
import PreviousPregnanciesForm from '../../components/BasicForms/SurrogacyForms/PreviousPregnancies';
import HomeLifeForm from '../../components/BasicForms/SurrogacyForms/HomeLife';
import SurrogacySpecificsForm from '../../components/BasicForms/SurrogacyForms/SurrogacySpecifics';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContactUs  from '../../components/BasicForms/SurrogacyForms/ContactUs';
import CircularProgress from '@material-ui/core/CircularProgress'

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
   width:"90%",
   marginLeft: "5%"



  },
  stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "55px"
    }

});

var final_value = 0;



function getSteps() {
  return ['Pre-screen', 'About you','Background','Previous Pregnancies','Home Life', 'Surrogacy Specifics'];
}









class ApplicationConsole extends React.Component {
  constructor() {
    super();
  this.state = {
    isMobile:false,
    activeStep: 0,
    progress: 14.286,
    birth: "0",
    birth_error: "",
    us_residence: "0",
    us_residence_error: "",
    us_states_show:"",
    us_state:"",
    tobacco_products_use: "0",
    tobacco_products_use_error: "",
    drug_use: "0",
    drug_use_error: "",
    injections_use: "0",
    injections_use_error: "",
    doctors_orders: "0",
    doctors_orders_error: "",
    criminalRecord_check: "0",
    criminalRecord_check_error: "",
    geneticRecord_check: "0",
    geneticRecord_check_error: "",
    age_range: "0",
    age_range_error: "",
    exercise_frequency: "0",
    exercise_frequency_error: "",
    weekly_diet: "0",
    weekly_diet_error: "",
    other_diet: "",
    other_diet_show:"",
    alcohol_frequency: "0",
    alcohol_frequency_error: "",
    marijuana_frequency: "0",
    marijuana_option:"0",
    marijuana_option_show:false,
    marijuana_frequency_error: "",
    tattoo_time: "0",
    tattoo_duration: "0",
    tattoo_time_error: "",
    tattoo_time_show: "",
    prescription_medication: "0",
    prescription_medication_choice: "0",
    prescription_medication_error: "",
    other_prescription_medication: "",
    other_prescription_medication_error: "",
    prescription_show: false,
    government_support: "0",
    government_support_error: "",
    reliable_income_source: "0",
    reliable_income_source_error: "",
    convicted_of_crime: "0",
    convicted_of_crime_error: "",
    convicted_of_crime_show: false,
    crime_explanation: "",
    crime_explanation_error: "",
    recent_birthinfo: "0",
    recent_birthinfo_error: "",
    child_survival_show: false,
    child_survival_explanation: "",
    child_survival: "0",
    child_survival_error: "",
    miscarriage_info: "0",
    miscarriage_info_error: "",
    miscarriage_explanation: "",
    miscarriage_explanation_error: "",
    miscarriage_info_show: "",
    breast_feeding: "0",
    breast_feeding_error: "",
    breast_feeding_timePeriod: "0",
    breast_feeding_timePeriod_error: "",
    breast_feeding_show: false,
    csection_requirement: "0",
    csection_requirement_error: "",
    csection_requirement_show: "",
    csection_frequency: "0",
    csection_frequency_error: "",
    pregnancy_abnormalities: "0",
    pregnancy_abnormalities_error: "",
    pregnancy_abnormalities_show: false,
    abnormality_description: "0",
    abnormality_other_show: false,
    abnormality_other_explaination: "",
    abnormality_description_error: "",
    children_custody: "0",
    children_custody_error: "",
    children_custody_explanation: "",
    children_custody_explanation_error: "",
    children_custody_show: false,
    child_reside: "0",
    child_reside_error: "",
    child_reside_explanation: "",
    child_reside_explanation_error: "",
    child_reside_show: false,
    reliable_transportation: "0",
    reliable_transportation_error: "",
    smart_device_accessibility: "0",
    smart_device_accessibility_error: "",
    home_life_quality: "0",
    home_life_quality_error: "",
    home_life_quality_explanation: "",
    home_life_quality_explanation_error: "",
    medical_history: "0",
    medical_history_error: "",
    surrogate_gestational_carrier: "0",
    surrogate_gestational_carrier_error: "",
    current_agency: "0",
    current_agency_error: "",
  }
  this.handleChangeRadio = this.handleChangeRadio.bind(this);
  this.updatePredicate = this.updatePredicate.bind(this);
  };

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isMobile: window.innerWidth < 500});
  }


  validate = () => {
    let isError = false;
    const errors = {
      birth_error: '',
      us_residence_error: '',
      tobacco_products_use_error: '',
      drug_use_error: '',
      injections_use_error: '',
      doctors_orders_error: '',
      criminalRecord_check_error: '',
      geneticRecord_check_error: ''
    }
    if(this.state.birth === "0") {
      isError = true;
      errors.birth_error = 'Please select an option'
    }
    if(this.state.us_residence === "0") {
      isError = true;
      errors.us_residence_error = 'Please select an option'
    }
    if(this.state.tobacco_products_use === "0") {
      isError = true;
      errors.tobacco_products_use_error = 'Please select an option'
    }
    if(this.state.drug_use === "0") {
      isError = true;
      errors.drug_use_error = 'Please select an option'
    }
    if(this.state.injections_use === "0") {
      isError = true;
      errors.injections_use_error = 'Please select an option'
    }
    if(this.state.doctors_orders === "0") {
      isError = true;
      errors.doctors_orders_error = 'Please select an option'
    }
    if(this.state.criminalRecord_check === "0") {
      isError = true;
      errors.criminalRecord_check_error = 'Please select an option'
    }
    if(this.state.geneticRecord_check === "0") {
      isError = true;
      errors.geneticRecord_check_error = 'Please select an option'
    }

    this.setState({
      ...this.state,
      ...errors
  })

  return isError;
  }

  validateStep2 = () => {
    let isError2 = false;
    const errors2 = {
      age_range_error: '',
      exercise_frequency_error: '',
      weekly_diet_error: '',
      alcohol_frequency_error: '',
      marijuana_frequency_error: '',
      tattoo_time_error: '',
      prescription_medication_error: '',
    }
    if(this.state.age_range === "0") {
      isError2 = true;
      errors2.age_range_error = 'Please select an option'
    }
    if(this.state.exercise_frequency === "0") {
      isError2 = true;
      errors2.exercise_frequency_error = 'Please select an option'
    }
    if(this.state.weekly_diet === "0") {
      isError2 = true;
      errors2.weekly_diet_error = 'Please select an option'
    }
    if(this.state.alcohol_frequency === "0") {
      isError2 = true;
      errors2.alcohol_frequency_error = 'Please select an option'
    }
    if(this.state.marijuana_frequency === "0") {
      isError2 = true;
      errors2.marijuana_frequency_error = 'Please select an option'
    }
    if(this.state.tattoo_time === "0") {
      isError2 = true;
      errors2.tattoo_time_error = 'Please select an option'
    }
    if(this.state.prescription_medication === "0") {
      isError2 = true;
      errors2.prescription_medication_error = 'Please select an option'
    }

    this.setState({
      ...this.state,
      ...errors2
  })

  return isError2;

  }

  validateStep3 = () => {
    let isError3 = false;
    const errors3 = {
      government_support_error: '',
      reliable_income_source_error: '',
      convicted_of_crime_error: '',
    }
    if(this.state.government_support === "0") {
      isError3 = true;
      errors3.government_support_error = 'Please select an option'
    }
    if(this.state.reliable_income_source === "0") {
      isError3 = true;
      errors3.reliable_income_source_error = 'Please select an option'
    }
    if(this.state.convicted_of_crime === "0") {
      isError3 = true;
      errors3.convicted_of_crime_error = 'Please select an option'
    }

    this.setState({
      ...this.state,
      ...errors3
  })

  return isError3;

  }

  validateStep4 = () => {
    let isError4 = false;
    const errors4 = {
      recent_birthinfo_error: '',
      child_survival_error: '',
      miscarriage_info_error: '',
      breast_feeding_error: '',
      csection_requirement_error: '',
      pregnancy_abnormalities_error: '',
    }
    if(this.state.recent_birthinfo === "0") {
      isError4 = true;
      errors4.recent_birthinfo_error = 'Please select an option'
    }
    if(this.state.child_survival === "0") {
      isError4 = true;
      errors4.child_survival_error = 'Please select an option'
    }
    if(this.state.miscarriage_info === "0") {
      isError4 = true;
      errors4.miscarriage_info_error = 'Please select an option'
    }
    if(this.state.breast_feeding === "0") {
      isError4 = true;
      errors4.breast_feeding_error = 'Please select an option'
    }
    if(this.state.csection_requirement === "0") {
      isError4 = true;
      errors4.csection_requirement_error = 'Please select an option'
    }
    if(this.state.pregnancy_abnormalities === "0") {
      isError4 = true;
      errors4.pregnancy_abnormalities_error = 'Please select an option'
    }

    this.setState({
      ...this.state,
      ...errors4
  })

  return isError4;

  }

  validateStep5 = () => {
    let isError5 = false;
    const errors5 = {
      children_custody_error: '',
      child_reside_error: '',
      reliable_transportation_error: '',
      smart_device_accessibility_error: '',
      home_life_quality_error: '',
    }
    if(this.state.children_custody === "0") {
      isError5 = true;
      errors5.children_custody_error = 'Please select an option'
    }
    if(this.state.child_reside === "0") {
      isError5 = true;
      errors5.child_reside_error = 'Please select an option'
    }
    if(this.state.reliable_transportation === "0") {
      isError5 = true;
      errors5.reliable_transportation_error = 'Please select an option'
    }
    if(this.state.smart_device_accessibility === "0") {
      isError5 = true;
      errors5.smart_device_accessibility_error = 'Please select an option'
    }
    if(this.state.home_life_quality === "0") {
      isError5 = true;
      errors5.home_life_quality_error = 'Please select an option'
    }

    this.setState({
      ...this.state,
      ...errors5
  })

  return isError5;

  }

  validateStep6 = () => {
    let isError6 = false;
    const errors6 = {
      medical_history_error: '',
      surrogate_gestational_carrier_error: '',
      current_agency_error: '',
    }
    if(this.state.medical_history === "0") {
      isError6 = true;
      errors6.medical_history_error = 'Please select an option'
    }
    if(this.state.surrogate_gestational_carrier === "0") {
      isError6 = true;
      errors6.surrogate_gestational_carrier_error = 'Please select an option'
    }
    if(this.state.current_agency === "0") {
      isError6 = true;
      errors6.current_agency_error = 'Please select an option'
    }

    this.setState({
      ...this.state,
      ...errors6
  })

  return isError6;

  }




  getStepContent = (step,values) => {
    switch (step) {
      case 0:
        return  <PreScreenForm
            values={values}
            handleChangeLocation = {this.handleChangeLocation}
            handleChangeRadio = {this.handleChangeRadio}
            handleChangeLocationDetails = {this.handleChangeLocationDetails}
            handleChangeUseBackDoor = {this.handleChangeUseBackDoor}
            handleChangeMealProvided = {this.handleChangeMealProvided}
            handleChangeUsResidenceRadio = {this.handleChangeUsResidenceRadio}
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
          handleChangeMarijuanaRadio = {this.handleChangeMarijuanaRadio}
          handleChangeOtherDietRadio = {this.handleChangeOtherDietRadio}

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
          handleChangeChildSurvivalRadio = {this.handleChangeChildSurvivalRadio}
          handleChangeAbnormalityDescriptionRadio = {this.handleChangeAbnormalityDescriptionRadio}
    /> ;
      case 4:
      return  <HomeLifeForm
          values={values}
          handleChangeLocation = {this.handleChangeLocation}
          handleChangeRadio = {this.handleChangeRadio}
          handleChangeLocationDetails = {this.handleChangeLocationDetails}
          handleChangeUseBackDoor = {this.handleChangeUseBackDoor}
          handleChangeMealProvided = {this.handleChangeMealProvided}
          handleChangeChildrenCustodyRadio = {this.handleChangeChildrenCustodyRadio}
          handleChangeChildResideRadio= {this.handleChangeChildResideRadio}
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
        return <ContactUs
        values = {values}
        />;
      default:
        return 'Unknown step';
    }
  }



  handleNext = () => {
    const { activeStep, progress} = this.state;
    window.scroll(0,0);
    const err = this.validate();
    const err2 = this.validateStep2();
    const err3 = this.validateStep3();
    const err4 = this.validateStep4();
    const err5 = this.validateStep5();
    const err6 = this.validateStep6();

    console.log(activeStep);

    if(this.state.activeStep === 0){
      console.log('reached here')
      this.validate();
      if(!err){
        console.log('reached here 2')
        this.setState({
          activeStep: activeStep + 1,
          progress: progress + 14.285,
          birth_error: "",
          us_residence_error: '',
          tobaco_products_use_error: '',
          drug_use_error: '',
          injections_use_error: '',
          doctors_orders_error: '',
          criminalRecord_check_error: '',
          geneticRecord_check_error: '',
        })
      }
    } else if (activeStep === 1) {
      this.validateStep2();
      if(!err2){
        this.setState({
          activeStep: activeStep + 1,
          progress: progress + 14.285,
          age_range_error: '',
          exercise_frequency_error: '',
          weekly_diet_error: '',
          alcohol_frequency_error: '',
          marijuana_frequency_error: '',
          tattoo_time_error: '',
          prescription_medication_error: '',
        })
      } } else if (activeStep === 2){
        console.log("reached here in step 3")
        this.validateStep3();
        if(!err3){
          this.setState({
            activeStep: activeStep + 1,
            progress: progress + 14.285,
            government_support_error: '',
            reliable_income_source_error: '',
            convicted_of_crime_error: '',

          })
        }
      } else if (activeStep ===  3) {
        this.validateStep4();
        if(!err4){
          this.setState({
            activeStep: activeStep + 1,
            progress: progress + 14.285,
            recent_birthinfo_error: '',
            child_survival_error: '',
            miscarriage_info_error: '',
            breast_feeding_error: '',
            csection_requirement_error: '',
            pregnancy_abnormalities_error: '',
          })
        }
      }else if (activeStep ===  4) {
        this.validateStep5();
        if(!err5){
          this.setState({
            activeStep: activeStep + 1,
            progress: progress + 14.285,
            children_custody_error: '',
            child_reside_error: '',
            reliable_transportation_error: '',
            smart_device_accessibility_error: '',
            home_life_quality_error: '',
          })
        }
      }else if (activeStep ===  5) {
        this.validateStep6();
        if(!err6){
          this.setState({
            activeStep: activeStep + 1,
            progress: progress + 14.285,
            medical_history_error: '',
            surrogate_gestational_carrier_error: '',
            current_agency_error: '',
          })
        }
      }

    // if(!err) {
    //   this.setState({
    //     activeStep: activeStep + 1,
    //     birth_error: "",
    //     us_residence_error: '',
    //     tobacco_products_use_error: '',
    //     drug_use_error: '',
    //     injections_use_error: '',
    //     doctors_orders_error: '',
    //     criminalRecord_check_error: '',
    //     geneticRecord_check_error: '',
    //     age_range_error: '',
    //     exercise_frequency_error: '',
    //     alcohol_frequency_error: '',
    //     marijuana_frequency_error: '',
    //     tattoo_time_error: '',
    //     prescription_medication_error: '',
    //     other_prescription_medication_error: '',
    //     government_support_error: '',
    //     reliable_income_source_error: '',
    //     convicted_of_crime_error: '',
    //     crime_explanation_error: '',
    //     recent_birthinfo_error: '',
    //     child_survival_error: '',
    //     miscarriage_info_error: '',
    //     miscarriage_explanation_error: '',
    //     breast_feeding_error: '',
    //     breast_feeding_timePeriod_error: '',
    //     csection_requirement_error: '',
    //     csection_frequency_error: '',
    //     pregnancy_abnormalities_error: '',
    //     abnormality_description_error: '',
    //     children_custody_error: '',
    //     children_custody_explanation_error: '',
    //     child_reside_error: '',
    //     child_reside_explanation_error: '',
    //     reliable_transportation_error: '',
    //     smart_device_accessibility_error: '',
    //     home_life_quality_error: '',
    //     home_life_quality_explanation_error: '',
    //     medical_history_error: '',
    //     surrogate_gestational_carrier_error: '',
    //     current_agency_error: '',
    //   })
    // }

    //Handle sending data to backend

    // this.setState({
    //   activeStep: activeStep + 1,
    // });

    // final_value = parseInt(this.state.birth) + parseInt(this.state.us_residence) + parseInt (this.state.tobacco_products_use) + parseInt(this.state.drug_use) + parseInt(this.state.injections_use) + parseInt(this.state.doctors_orders) + parseInt(this.state.criminalRecord_check) + parseInt(this.state.geneticRecord_check)+ parseInt(this.state.age_range) + parseInt(this.state.exercise_frequency) + parseInt(this.state.alcohol_frequency) + parseInt(this.state.marijuana_frequency) + parseInt(this.state.tattoo_time) + parseInt(this.state.prescription_medication) + parseInt(this.state.other_prescription_medication) + parseInt(this.state.government_support) + parseInt(this.state.reliable_income_source) + parseInt(this.state.convicted_of_crime) + parseInt(this.state.crime_explanation) + parseInt(this.state.recent_birthinfo) + parseInt(this.state.child_survival) + parseInt(this.state.miscarriage_info) + parseInt(this.state.miscarriage_explanation) + parseInt(this.state.breast_feeding) +parseInt(this.state.breast_feeding_timePeriod) +parseInt(this.state.csection_requirement) +parseInt(this.state.csection_frequency) + parseInt(this.state.pregnancy_abnormalities) + parseInt(this.state.abnormality_description) +parseInt(this.state.children_custody) +parseInt(this.state.children_custody_explanation) + parseInt(this.state.child_reside) +parseInt(this.state.child_reside_explanation) + parseInt(this.state.reliable_transportation) + parseInt(this.state.smart_device_accessibility) + parseInt(this.state.home_life_quality) + parseInt(this.state.home_life_qulaity_explanation) + parseInt(this.state.medical_history) + parseInt(this.state.surrogate_gestational_carrier) + parseInt(this.state.current_agency)

    // console.log(this.state.address);
    // console.log(this.state.parking);
    // console.log(this.state.useBackdoor);
    // console.log(this.state.mealProvided);
    // console.log(this.state.additional_location_details);
    // console.log(this.state.us_residence);
    // console.log(this.state.birth);
    // console.log(this.state.tobacco_products_use);
    // console.log(this.state.drug_use);
    // console.log(this.state.injections_use);
    // console.log(this.state.doctors_orders);
    // console.log(this.state.criminalRecord_check);
    // console.log(this.state.geneticRecord_check);
    // console.log(this.state.exercise_frequency);
    // console.log(this.state.age_range);
    // console.log(this.state.alcohol_frequency);
    // console.log(this.state.marijuana_frequency);
    // console.log(this.state.tattoo_time);
    // console.log(this.state.prescription_medication);
    // console.log(this.state.government_support);
    // console.log(this.state.convicted_of_crime);
    // console.log(this.state.reliable_income_source);
    // console.log(this.state.recent_birthinfo);
    // console.log(this.state.child_survival);
    // console.log(this.state.miscarriage_info);
    // console.log(this.state.breast_feeding);
    // console.log(this.state.csection_requirement)
    // console.log(this.state.csection_frequency);
    // console.log(this.state.pregnancy_abnormalities);
    // console.log(this.state.children_custody);
    // console.log(this.state.child_reside);
    // console.log(this.state.reliable_transportation);
    // console.log(this.state.smart_device_accessibility);
    // console.log(this.state.home_life_quality);
    // console.log(this.state.medical_history);
    // console.log(this.state.surrogate_gestational_carrier);
    // console.log(this.state.current_agency);

    // console.log(parseInt(this.state.us_residence) + parseInt(this.state.birth));
    // console.log(parseInt(this.state.birth) + parseInt(this.state.us_residence) + parseInt (this.state.tobacco_products_use) + parseInt(this.state.drug_use) + parseInt(this.state.injections_use) + parseInt(this.state.doctors_orders) + parseInt(this.state.criminalRecord_check) + parseInt(this.state.geneticRecord_check)+ parseInt(this.state.age_range) + parseInt(this.state.exercise_frequency) + parseInt(this.state.alcohol_frequency) + parseInt(this.state.marijuana_frequency) + parseInt(this.state.tattoo_time) + parseInt(this.state.prescription_medication) + parseInt(this.state.government_support) + parseInt(this.state.reliable_income_source) + parseInt(this.state.convicted_of_crime) + parseInt(this.state.recent_birthinfo) + parseInt(this.state.child_survival) + parseInt(this.state.miscarriage_info) + parseInt(this.state.breast_feeding) +parseInt(this.state.breast_feeding_timePeriod) +parseInt(this.state.csection_requirement) +parseInt(this.state.csection_frequency) + parseInt(this.state.pregnancy_abnormalities) +parseInt(this.state.children_custody) + parseInt(this.state.child_reside) + parseInt(this.state.reliable_transportation) + parseInt(this.state.smart_device_accessibility) + parseInt(this.state.home_life_quality) + parseInt(this.state.medical_history) + parseInt(this.state.surrogate_gestational_carrier) + parseInt(this.state.current_agency))


    // for (var i=0;i<(this.state.positions).length;i++){
    //   console.log(this.state.positions[i].position_name);
    //   console.log(this.state.positions[i].shift1_date);
    //   console.log(this.state.positions[i].shift1_start_time);
    //   console.log(this.state.positions[i].shift1_end_time);
    //   console.log(this.state.positions[i].shift1_quantity);
    //   console.log(this.state.positions[i].shift2_date);
    //   console.log(this.state.positions[i].shift2_start_time);
    //   console.log(this.state.positions[i].shift2_end_time);
    //   console.log(this.state.positions[i].shift2_quantity);
    //   console.log(this.state.positions[i].required_attire);
    //   console.log(this.state.positions[i].required_accessories);
    //   console.log(this.state.positions[i].onsite_contact_name);
    //   console.log(this.state.positions[i].onsite_contact_number);
    //   console.log(this.state.positions[i].additional_attire_details);
    //   console.log(this.state.hourly_rate);
  };

  handleBack = () => {
    const { activeStep, progress } = this.state;
    this.setState({
      activeStep: activeStep - 1,
      progress: progress - 14.286
    });
  };


  handleSubmit = () => {
    // Once submit is hit use serverless to send the json data to the NoSql database in aws
  }


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

  handleChangeUsResidenceRadio = input => e => {
    if (e.target.value === '10') {
      this.setState({[input]:e.target.value})
      this.setState({us_states_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({us_states_show: false})
    }
    console.log(e.target.value);
  }
  handleChangeOtherDietRadio = input => e => {
    if (e.target.value === '000000000') {
      this.setState({[input]:e.target.value})
      this.setState({other_diet_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({prescription_show: false})
    }
    console.log(e.target.value);
  }
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

  handleChangeMarijuanaRadio = input => e => {
    if (e.target.value === '15') {
      this.setState({[input]:e.target.value})
      this.setState({marijuana_option_show: false})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({marijuana_option_show: true})
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

  handleChangeChildSurvivalRadio = input => e => {
    if (e.target.value === '400') {
      this.setState({[input]:e.target.value})
      this.setState({child_survival_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({child_survival_show: false})
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
    if (e.target.value === '00000') {
      this.setState({[input]:e.target.value})
      this.setState({csection_requirement_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({csection_requirement_show: false})
    }
    console.log(e.target.value);
  }

  handleChangePregnancyAbnormalitiesRadio = input => e => {
    if (e.target.value === '0000000') {
      this.setState({[input]:e.target.value})
      this.setState({pregnancy_abnormalities_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({pregnancy_abnormalities_show: false})
    }
    console.log(e.target.value);
  }

  handleChangeAbnormalityDescriptionRadio = input => e => {
    if (e.target.value === '005') {
      this.setState({[input]:e.target.value})
      this.setState({abnormality_other_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({abnormality_other_show: false})
    }
  }

  handleChangeChildrenCustodyRadio = input => e => {
    if (e.target.value === '000') {
      this.setState({[input]:e.target.value})
      this.setState({children_custody_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({children_custody_show: false})
    }
    console.log(e.target.value);
  }

  handleChangeChildResideRadio = input => e => {
    if (e.target.value === '0000') {
      this.setState({[input]:e.target.value})
      this.setState({child_reside_show: true})
    } else {
      this.setState({[input]:e.target.value});
      this.setState({child_reside_show: false})
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
    const { activeStep, progress } = this.state;
    const isMobile = this.state.isMobile;


    const {birth,us_residence,us_state,us_states_show,tobacco_product_use,drug_use,injection_use,doctors_orders,criminalRecord_check,geneticRecord_check,age_range,exercise_frequency,weekly_diet,other_diet,alcohol_frequency,marijuana_frequency,marijuana_option,tattoo_time,tattoo_duration,prescription_medication,prescription_medication_choice,other_prescription_medication,government_support,reliable_income_source,convicted_of_crime,crime_explanation,recent_birthinfo,child_survival,miscarriage_info,miscarriage_explanation,breast_feeding,breast_feeding_timePeriod,csection_requirement,csection_frequency,pregnancy_abnormalitites,abnormality_description,abnormality_other_explaination,abnormality_other_show,children_custody,children_custody_explanation,child_reside,child_reside_explanation,reliable_transportation,smart_device_accessibility,home_life_quality,home_life_quality_explanation,medical_history,surrogate_gestational_carrier,current_agency,other_diet_show,prescription_show,tattoo_time_show,convicted_of_crime_show,miscarriage_info_show,breast_feeding_show,csection_requirement_show,pregnancy_abnormalities_show,child_survival_show,
      marijuana_option_show,
      children_custody_show,
      child_reside_show,
      birth_error,
      us_residence_error,
      tobacco_products_use_error,
      drug_use_error,
      injections_use_error,
      doctors_orders_error,
      criminalRecord_check_error,
      geneticRecord_check_error,
      age_range_error,
      exercise_frequency_error,
      weekly_diet_error,
      alcohol_frequency_error,
      marijuana_frequency_error,
      tattoo_time_error,
      prescription_medication_error,
      other_prescription_medication_error,
      government_support_error,
      reliable_income_source_error,
      convicted_of_crime_error,
      crime_explanation_error,
      recent_birthinfo_error,
      child_survival_error,
      miscarriage_info_error,
      miscarriage_explanation_error,
      breast_feeding_error,
      breast_feeding_timePeriod_error,
      csection_requirement_error,
      csection_frequency_error,
      pregnancy_abnormalities_error,
      abnormality_description_error,
      children_custody_error,
      children_custody_explanation_error,
      child_reside_error,
      child_reside_explanation_error,
      reliable_transportation_error,
      smart_device_accessibility_error,
      home_life_quality_error,
      home_life_quality_explanation_error,
      medical_history_error,
      surrogate_gestational_carrier_error,
      current_agency_error} = this.state;
    const values = {birth,us_residence,us_state,us_states_show,tobacco_product_use,drug_use,injection_use,doctors_orders,criminalRecord_check,geneticRecord_check,age_range,exercise_frequency,weekly_diet,other_diet,alcohol_frequency,marijuana_frequency,marijuana_option,tattoo_time,tattoo_duration,prescription_medication,prescription_medication_choice,other_prescription_medication,government_support,reliable_income_source,convicted_of_crime,crime_explanation,recent_birthinfo,child_survival,miscarriage_info,miscarriage_explanation,breast_feeding,breast_feeding_timePeriod,csection_requirement,csection_frequency,pregnancy_abnormalitites,abnormality_description,abnormality_other_explaination,abnormality_other_show,children_custody,children_custody_explanation,child_reside,child_reside_explanation,reliable_transportation,smart_device_accessibility,home_life_quality,home_life_quality_explanation,medical_history,surrogate_gestational_carrier,current_agency,other_diet_show,prescription_show,tattoo_time_show,convicted_of_crime_show,miscarriage_info_show,breast_feeding_show,csection_requirement_show,pregnancy_abnormalities_show,child_survival_show,
      marijuana_option_show,
      children_custody_show,
      child_reside_show,
      birth_error,
      us_residence_error,
      tobacco_products_use_error,
      drug_use_error,
      injections_use_error,
      doctors_orders_error,
      criminalRecord_check_error,
      geneticRecord_check_error,
      age_range_error,
      exercise_frequency_error,
      weekly_diet_error,
      alcohol_frequency_error,
      marijuana_frequency_error,
      tattoo_time_error,
      prescription_medication_error,
      other_prescription_medication_error,
      government_support_error,
      reliable_income_source_error,
      convicted_of_crime_error,
      crime_explanation_error,
      recent_birthinfo_error,
      child_survival_error,
      miscarriage_info_error,
      miscarriage_explanation_error,
      breast_feeding_error,
      breast_feeding_timePeriod_error,
      csection_requirement_error,
      csection_frequency_error,
      pregnancy_abnormalities_error,
      abnormality_description_error,
      children_custody_error,
      children_custody_explanation_error,
      child_reside_error,
      child_reside_explanation_error,
      reliable_transportation_error,
      smart_device_accessibility_error,
      home_life_quality_error,
      home_life_quality_explanation_error,
      medical_history_error,
      surrogate_gestational_carrier_error,
      current_agency_error};

    return (
      <Fragment>
       <QueueAnim type="bottom" className="ui-animate">



      <h2 className="article-title">Pre-screen Questionnaire</h2>
      <Paper className = {classes.root}>
      {isMobile? (
        <div>
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" value={progress} />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="caption" component="div" color="textSecondary">{activeStep +
                `/6`}</Typography>
              </Box>
          </Box>
          <br/>

          <p style={{color:"#00e676"}}><b> {steps[activeStep]} </b></p>
        </div>

      ): (
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props} >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

      )}
          {activeStep === steps.length ? (
            <div>
              <Typography className="stepper-content">
               <p> Your Final score is: {parseInt(this.state.birth) + parseInt(this.state.us_residence)+ parseInt (this.state.tobacco_products_use) + parseInt(this.state.drug_use) + parseInt(this.state.injections_use) + parseInt(this.state.doctors_orders) + parseInt(this.state.criminalRecord_check) + parseInt(this.state.geneticRecord_check)+ parseInt(this.state.age_range) + parseInt(this.state.exercise_frequency) + parseInt(this.state.alcohol_frequency) + parseInt(this.state.marijuana_frequency) + parseInt(this.state.marijuana_option) + parseInt(this.state.tattoo_time) + parseInt(this.state.tattoo_duration) + parseInt(this.state.prescription_medication) + parseInt(this.state.government_support) + parseInt(this.state.reliable_income_source) + parseInt(this.state.convicted_of_crime) + parseInt(this.state.recent_birthinfo) + parseInt(this.state.child_survival) + parseInt(this.state.miscarriage_info) + parseInt(this.state.breast_feeding) +parseInt(this.state.breast_feeding_timePeriod) +parseInt(this.state.csection_requirement) +parseInt(this.state.csection_frequency) + parseInt(this.state.pregnancy_abnormalities) + parseInt(this.state.abnormality_description) +parseInt(this.state.children_custody) + parseInt(this.state.child_reside) + parseInt(this.state.reliable_transportation) + parseInt(this.state.smart_device_accessibility) + parseInt(this.state.home_life_quality) + parseInt(this.state.medical_history) + parseInt(this.state.surrogate_gestational_carrier) + parseInt(this.state.current_agency)} </p>
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
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleSave}
                  className = {classes.button}
                >
                  Save and Continue later
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

ApplicationConsole.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ApplicationConsole);
