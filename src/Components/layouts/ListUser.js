import React, { Component } from "react";
import AdminService from "../AdminService";
import { withRouter } from "react-router-dom";
import { Table, Button } from "reactstrap";

class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      malecnt : 0
    };

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.viewUser = this.viewUser.bind(this);
  }

  // deleteUser(uid) {
  //   if (window.confirm("Are You Sure?")) {
  //     fetch("http://localhost:8082/deleteUserById/{uid}" &uid, {
  //       method: "DELETE",
  //       // header:{'Accept':'application/json'},
  //       // 'Content-Type': 'application/json'
  //     }).then((result) => {
  //       result.json().then((resp) => {
  //         alert("User has been deleted");
  //       });
  //     });
  //   }
  // }
  deleteUser(uid) {
    AdminService.deleteUser(uid).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.uid !== uid),
      });
    });
  }

  
  componentDidMount() {
    AdminService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }
  
  addUser() {
    this.props.history.push("/addUser/_add");
  }
  viewUser(){
    this.props.history.push("/viewUser")
  }

  // viewUser(uid) {
  //   AdminService.User(uid).then((res) => {
  //     this.setState({
  //       users: this.state.users.filter((user) => user.uid !== uid),
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <h2 className="text-center">List of All users</h2>
        {/* <div className="row">
          <Button color="warning" onClick={this.addUser}>
            Add User
          </Button>
        </div> */}
        
        <div className="row">
            <div className="col-12 col-sm-12">
            <Table striped>
            <thead>
              <tr>
                <th> FirstName </th>
                <th> LastName </th>
                <th> Email </th>
                <th> Gender </th>
                <th> Password </th>
                <th> NumOfKids </th>
                <th> City </th>
                <th> Qualification </th>
                <th> Age </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.uid}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.password}</td>
                  <td>{user.numOfKids}</td>
                  <td>{user.city}</td>
                  <td>{user.educationalQualification}</td>
                  <td>{user.age}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.viewUser(user.uid)}
                    >
                      View
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => this.deleteUser(user.uid)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
            </div>
          
        </div>
      </div>
    );
  }
}

// return (

//   <div>
//   //         <h2 className="text-center">Users List</h2>
//   //         <div className="row">
//   //             <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
//   //         </div>
//   <Table striped>
//     <thead>
//       <tr>
//                 <th> FirstName </th>
//                 <th> LastName </th>
//                 <th> Email </th>
//                 <th> Gender </th>
//                 <th> Password </th>
//                 <th> Number Of Kids </th>
//                 <th> City </th>
//                 <th> Qualification </th>
//                 <th> Age </th>
//                 <th> Actions </th>
//       </tr>
//     </thead>
//     <tbody>
//               {this.state.users.map((user) => (
//                 <tr key={user.UID}>
//                   <td>{user.firstName}</td>
//                   <td>{user.lastName}</td>
//                   <td>{user.email}</td>
//                   <td>{user.gender}</td>
//                   <td>{user.password}</td>
//                   <td>{user.numOfKids}</td>
//                   <td>{user.city}</td>
//                   <td>{user.educationalQualification}</td>
//                   <td>{user.age}</td>
//                   <td>
//                       <button style={{marginTop:"6px"}} onClick={()=> this.editUser(user.UID)} className="btn btn-info">Update</button>
//                       <button style={{marginBottom:"6px"}} onClick={()=> this.deleteUser(user.UID)} className="btn btn-danger">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//   </Table>
//   </div>
//   </div>

// );

export default withRouter(ListUser);