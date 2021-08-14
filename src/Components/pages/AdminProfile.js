import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminOps from './AdminOps';

const AdminProfile= (props) => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);

    const adminData = location.state.detail;
    return (
        <div className="container ">
            <div class="jumbotron">
                <h1 class="display-4">Hello, {adminData.firstName}!</h1>
                <h3>Welcome to admin Dashboard!</h3>
                <p class="lead">Capture information about the people residing in a particular 
                    village/town/city. Information related to their age, educational qualifications and kids. </p>
                <hr class="my-4"/>
                <p></p>
                <p class="lead">
                    <h2>Buttons for operations</h2>
                </p>
            </div>
            <AdminOps adminData={adminData}/>
            
        </div>
    )
}

export default AdminProfile;