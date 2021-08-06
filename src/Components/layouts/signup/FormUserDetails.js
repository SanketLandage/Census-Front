import React, { Component } from 'react'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values , handleChange} = this.props;
        return (
            <div className="mt-5">
                 <div className="row ">
                    <div className="col-md-4 offset-md-4">
                        <div className=" cardo">
                            <form className="card-body">
                             {/* firstname */}
                                <div className="form-group ">
                                    <div className="row">
                                        <div className="col-sm-2 col-2 offset-sm-1 ">
                                            <label htmlFor="fName">First Name</label>
                                        </div>
                                        <div className="col-sm-8 col-10 ">
                                        <input type="text" className="form-control" id="fName" placeholder="First Name" 
                                            onChange={handleChange('firstName')} defaultValue ={values.firstName}/>
                                        </div>
                                    </div>
                                </div>
                                  {/* lastName */}
                                <div className="form-group ">
                                    <div className="row">
                                        <div className="col-sm-2 col-2 offset-sm-1 ">
                                            <label htmlFor="lName">Last Name</label>
                                        </div>
                                        <div className="col-sm-8 col-10 ">
                                        <input type="text" className="form-control" id="lName" placeholder="Last Name"
                                             onChange={handleChange('lastName')} defaultValue ={values.lastName}
                                        />
                                        </div>
                                    </div>
                                </div>  
                                {/* Email */}
                            <div className="form-group ">
                                <div className="row">
                                    <div className="col-sm-2 col-2 offset-sm-1 ">
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="col-sm-8 col-10 ">
                                    <input type="email" className="form-control" id="email" placeholder="Email" required
                                        onChange={handleChange('email')} defaultValue ={values.email}
                                    />
                                    </div>
                                </div>
                            </div>
                            {/* Password */}
                            <div className="form-group ">
                                <div className="row mt-2">
                                    <div className="col-sm-2 col-2 offset-sm-1">
                                    <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="col-sm-8 col-10">
                                    <input type="password" className="form-control" id="password" placeholder="Password"
                                        onChange={handleChange('password')} defaultValue ={values.password}
                                    />
                                    </div>
                                </div>
                            </div>
                                {/* button */}
                                <div className="form-group mt-2 text-center">
                                 <button  className="btn btn-dark btn-block" onClick={this.continue}>Continue</button>
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
