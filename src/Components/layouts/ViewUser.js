import React, { Component } from 'react'
import AdminService from '../AdminService'



class ViewUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uid: this.props.match.params.uid,
            user : {}

        }
    }

    componentDidMount(){
       AdminService.getUserById(this.state.uid).then( res => {
            this.setState({user: res.data});
        })
    }

    // back(){
    //     this.props.history.push
    // }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">  User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  First Name: </label>
                            <div> { this.state.user.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.user.lastName }</div>
                        </div>
                        <div className = "row">
                            <label>  Email : </label>
                            <div> { this.state.user.email }</div>
                        </div>
                        <div className = "row">
                            <label>  Password </label>
                            <div> { this.state.user.password }</div>
                        </div>
                        <div className = "row">
                            <label>  Gender </label>
                            <div> { this.state.user.gender }</div>
                        </div>
                        <div className = "row">
                            <label>  Age </label>
                            <div> { this.state.user.age }</div>
                        </div>
                        <div className = "row">
                            <label>  Educational Qualification </label>
                            <div> { this.state.user.education }</div>
                        </div>
                        <div className = "row">
                            <label>  City </label>
                            <div> { this.state.user.city }</div>
                        </div>
                        <div className = "row">
                            <label>  NumOfKids </label>
                            <div> { this.state.user.numOfKids }</div>
                        </div>
                    </div>
                    <button className="btn btn-info" onClick={this.userDetail} >User Details</button>
                     <button className="btn btn-danger" onClick={this.back} style={{marginLeft: "10px"}}>Back</button>
                </div>
            </div>
        )
    }
}

export default ViewUser;