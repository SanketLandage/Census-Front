import React from 'react';
import AddMember  from '../layouts/AddMember';
import MembersList  from '../layouts/MembersList';
import { useEffect} from 'react';
import { useLocation } from "react-router-dom";

function UserProfile() {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);

    const userData = location.state.detail;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 col-12">
                    <AddMember userData={userData}/>
                </div>
                <div className="col-sm-8 col-12">
                    <MembersList userData={userData}/>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
