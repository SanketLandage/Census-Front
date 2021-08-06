import React from 'react';
import { Link } from 'react-router-dom';


const Login = ()  =>{


    return (
        <div>
            <div className="row ">
                <div className="col-md-6 offset-md-3">
                    <div className=" cardo">
                        <form className="card-body">
                            <div className="form-group ">
                                <div className="row">
                                    <div className="col-sm-2 col-2 offset-sm-1 ">
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="col-sm-8 col-10 ">
                                    <input type="email" className="form-control" id="email" placeholder="Email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="row mt-2">
                                    <div className="col-sm-2 col-2 offset-sm-1">
                                    <label htmlFor="password">Password:</label>
                                    </div>
                                    <div className="col-sm-8 col-10">
                                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-2 text-center">
                                <button  type="submit" className="btn btn-dark btn-block" >Login</button>
                            </div>
                            <hr />
                            <h5 className="text-center">Not Registered ?</h5>
                            <div className="form-group mt-2 text-center">
                                <Link to="/register"> <button className="btn btn-primary btn-md">Register</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

