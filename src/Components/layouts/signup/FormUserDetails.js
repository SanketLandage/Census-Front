import React, { Component } from 'react';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    formSubmit =(e)=>{
        e.preventDefault();
        console.log(this.props.values);
    }
    render() {
        const {values , handleChange} = this.props;
        return (
            <div className="mt-5">
                 <div className="row justify-content-center">
                    <div className="col-md-5 ">
                        <div className=" cardo">
                            <form className="card-body" onSubmit={this.formSubmit}>
                             {/* firstname */}
                                <div className="form-group ">
                                    <div className="row">
                                        <div className="col-sm-4 col-12 offset-sm-0 ">
                                            <label htmlFor="fName">First Name</label>
                                        </div>
                                        <div className="col-sm-8 col-12 ">
                                        <input type="text" className="form-control" id="fName" placeholder="First Name" 
                                            onChange={handleChange('firstName')} defaultValue ={values.firstName} required/>
                                        </div>
                                    </div>
                                </div>
                                  {/* lastName */}
                                <div className="form-group ">
                                    <div className="row">
                                        <div className="col-sm-4 col-12 offset-sm-0 ">
                                            <label htmlFor="lName">Last Name</label>
                                        </div>
                                        <div className="col-sm-8 col-12 ">
                                        <input type="text" className="form-control" id="lName" placeholder="Last Name"
                                             onChange={handleChange('lastName')} defaultValue ={values.lastName} required
                                        />
                                        </div>
                                    </div>
                                </div> 
                    <hr className="p-1"/>
                                {/* Email */}
                            <div className="form-group ">
                                <div className="row">
                                    <div className="col-sm-4 col-12 offset-sm-0 ">
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="col-sm-8 col-12 ">
                                    <input type="email" className="form-control" id="email" placeholder="Email" required
                                        onChange={handleChange('email')} defaultValue ={values.email}
                                    />
                                    </div>
                                </div>
                            </div>
                            {/* Password */}
                            <div className="form-group ">
                                <div className="row mt-2">
                                    <div className="col-sm-4 col-12 offset-sm-0">
                                    <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="col-sm-8 col-12">
                                    <input type="password" className="form-control" id="password" placeholder="Password" required
                                        onChange={handleChange('password')} defaultValue ={values.password}
                                    />
                                    </div>
                                </div>
                            </div>
                            <hr className="p-1"/>
                            <div className="form-group ">
                                    <div className="row">
                                        <div className="col-sm-4 col-12 offset-sm-0 ">
                                            <label htmlFor="age">What is your Age?</label>
                                        </div>
                                        <div className="col-sm-8 col-12 ">
                                        <input type="number" className="form-control" id="age" placeholder="Age"
                                             onChange={handleChange('age')} defaultValue ={values.age}
                                        />
                                        </div>
                                    </div>
                                </div> 

                                <div className="form-group ">
                                    <div className="row">
                                        <div className="col-sm-4 col-12 offset-sm-0 ">
                                            <label htmlFor="kids">How Many Childrens do you have?</label>
                                        </div>
                                        <div className="col-sm-8 col-12 ">
                                        <input type="number" className="form-control" id="kids" placeholder="Number of Childrens"
                                             onChange={handleChange('numOfKids')} defaultValue ={values.numOfKids}
                                        />
                                        </div>
                                    </div>
                                </div> 


                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-4 col-12 offset-sm-0">What is your Gender?</legend>
                                    <div className="col-sm-8 col-12">
                                        <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="male" value="Male" 
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
                                        <div className="form-check ">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="other" value="Other" onChange={handleChange('gender')}/>
                                        <label className="form-check-label" htmlFor="other">
                                            Other
                                        </label>
                                        </div>
                                    </div>
                                    </div>
                                </fieldset>
                                <hr className="p-1"/>
                                <div className="form-group ">
                                <div className="row mt-2">
                                    <div className="col-sm-4 col-12 offset-sm-0">
                                    <label htmlFor="city">What is your residing city?</label>
                                    </div>
                                    <div className="col-sm-8 col-12">
                                    <input type="text" className="form-control" id="city" placeholder="Residing City"
                                        onChange={handleChange('city')} defaultValue ={values.city} required
                                    />
                                    </div>
                                </div>
                            </div> 
                             {/* Education  */}
                             <div className="form-group ">
                                    <div className="row mt-2">
                                        <div className="col-sm-4 col-12 offset-sm-0">
                                            <p>What's your education ?</p>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                          <input type="radio" id="pg" name="fav_language" value="PG"
                                              onChange={handleChange('education')}
                                          />
                                          <label htmlFor="pg">Post Graduation & Above</label> <br />
                                          <input type="radio" id="ug" name="fav_language" value="UG"
                                            onChange={handleChange('education')}
                                        />
                                          <label htmlFor="ug">Under Graduation</label> <br />
                                          <input type="radio" id="hs" name="fav_language" value="School"
                                            onChange={handleChange('education')}
                                        />
                                          <label htmlFor="hs">High School</label><br />
                                        </div>
                                    </div>
                                </div>
                                {/* button */}
                                <div className="form-group mt-2 text-center">
                                 <button  className="btn btn-dark btn-block" >Register</button>
                                </div>

                            </form>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default FormUserDetails
