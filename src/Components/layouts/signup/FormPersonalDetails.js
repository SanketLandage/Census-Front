import React, { Component } from 'react'

export class FormPersonalDetails extends Component {
    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    formSubmit = e => {
        console.log(this.props.values);
    }
    render() {
        const {values , handleChange} = this.props;
        return (
            <div className="mt-5">
                 <div className="row ">
                    <div className="col-md-8 offset-md-2">
                        <div className=" cardo">
                            <form className="card-body" onSubmit={this.formSubmit()}>
                                 
                                   {/* Age */}
                                <div className="form-group ">
                                    <div className="row">
                                        <div className="col-sm-3 col-2 offset-sm-1 ">
                                            <label htmlFor="age">What is your Age?</label>
                                        </div>
                                        <div className="col-sm-8 col-10 ">
                                        <input type="number" className="form-control" id="lName" placeholder="Age"
                                             onChange={handleChange('age')} defaultValue ={values.age}
                                        />
                                        </div>
                                    </div>
                                </div> 

                                <div className="form-group ">
                                    <div className="row">
                                        <div className="col-sm-3 col-2 offset-sm-1 ">
                                            <label htmlFor="age">How Many Childrens do you have?</label>
                                        </div>
                                        <div className="col-sm-8 col-10 ">
                                        <input type="number" className="form-control" id="lName" placeholder="Number of Childrens"
                                             onChange={handleChange('numOfKids')} defaultValue ={values.numOfKids}
                                        />
                                        </div>
                                    </div>
                                </div> 

                                {/* Gender  */}

                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-3 col-12 offset-sm-1">What is your Gender?</legend>
                                    <div className="col-sm-8 col-10">
                                        <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="male" value="Male" checked
                                            onChange={handleChange('gender')}
                                        />
                                        <label className="form-check-label" htmlFor="male">
                                            Male
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="female" value="Female"
                                            onChange={handleChange('gender')}
                                        />
                                        <label className="form-check-label" htmlFor="female">
                                            Female
                                        </label>
                                        </div>
                                        <div className="form-check disabled">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="other" value="Other" onChange={handleChange('gender')}/>
                                        <label className="form-check-label" htmlFor="other">
                                            Other
                                        </label>
                                        </div>
                                    </div>
                                    </div>
                                </fieldset>


                                {/* City */}
                            <div className="form-group ">
                                <div className="row mt-2">
                                    <div className="col-sm-3 col-12 offset-sm-1">
                                    <label htmlFor="city">What is your residing city?</label>
                                    </div>
                                    <div className="col-sm-8 col-12">
                                    <input type="text" className="form-control" id="city" placeholder="Residing City"
                                        onChange={handleChange('city')} defaultValue ={values.city}
                                    />
                                    </div>
                                </div>
                            </div> 

                             {/* Education  */}
                             
                                {/* button */}
                                <div className="form-group mt-2 text-center">
                                 <button  type="submit" className="btn btn-dark btn-block" onClick={this.back}>Back</button>
                                </div>
                                {/* button */}
                                <div className="form-group mt-2 text-center">
                                 <button  type="submit" className="btn btn-dark btn-block" >Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default FormPersonalDetails;
