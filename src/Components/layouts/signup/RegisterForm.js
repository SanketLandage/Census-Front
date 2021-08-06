import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

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
        const {firstName , lastName , email ,password ,age , city , education ,gender, numOfKids} = this.state;
        const values = {firstName , lastName , email ,password ,age , city , education , gender,numOfKids};
             return(
                <FormUserDetails
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            );
    }
}


export default RegisterForm;