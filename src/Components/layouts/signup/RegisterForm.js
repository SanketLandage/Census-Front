import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

export class RegisterForm extends Component {
    state = {
        step :1,
        firstName : '',
        lastName : '',
        email : '',
        age : 0,
        password : '',
        city : '',
        education : '',
        gender : '',
        numOfKids : 0
    }

    nextStep=()=>{
        const {step} =this.state;
        this.setState({
            step : step+1
        });
        
    }

    handleChange = input => e => {
        this.setState({[input] : e.target.value})
    }
    prevStep=()=>{
        const {step} =this.state;
        this.setState({
            step : step - 1
        });
    }

    render() {
        const {step} =this.state;
        const {firstName , lastName , email ,password ,age , city , education ,gender, numOfKids} = this.state;
        const values = {firstName , lastName , email ,password ,age , city , education , gender,numOfKids};
       switch(step){
           case 1:
               return(
                   <FormUserDetails
                       nextStep = {this.nextStep}
                       handleChange = {this.handleChange}
                       values = {values}
                   />
               );

            case 2 :
                return(
                    <FormPersonalDetails
                        prevStep ={this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                );
             default :
             return(
                 <div>
                     <h2>Something went wrong</h2>
                 </div>
             )

       }
    }
}

export default RegisterForm;