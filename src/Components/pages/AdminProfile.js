import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminOps from './AdminOps';
import ListUser from '../layouts/ListUser';
import SameCity from '../layouts/SameCity';

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
                
            </div>
            <h2 className="text-center mt-4 mb-4">Information of people whose age is between 10-20 years</h2>
            <AdminOps adminData={adminData}/>
            <hr />
                <div className="container mt-4">
                    <h2 className="text-center mb-4">Get information of prople residing in same city</h2>
                    <SameCity/>
                </div>
            <hr />
            <ListUser/>
            <hr />
            
        </div>
    )
}

export default AdminProfile;