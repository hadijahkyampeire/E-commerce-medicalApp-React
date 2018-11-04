import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../App.css';
import { AdminLoginAction } from '../../redux/Actions/auth/AuthActions';

export class AdminLogin extends Component{
    state = {
        question:'',
        username:'',
        password:''
    }

    handleInputChange =(event)=>{
        const { name, value } = event.target;
        this.setState({[name]:value});

    }
    handleAdminLogin =(event)=>{
        event.preventDefault();
        const {question,username,password}=this.state
        this.props.AdminLoginAction({question, username,password})
    }

    render(){
        const {question, username, password} = this.state;
        return(
            <div className="modal fade" id="adminModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Admin Login</h5>
                <button type="button" className="close" id="closeAdminModal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form onSubmit={this.handleAdminLogin}>
      <div className="form-group">
        <label htmlFor="question">Question</label>
        <input type="text" className="form-control" id="question" name="question" placeholder="Enter required question" value={question}  onChange={this.handleInputChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" name="username" id="adminusername" aria-describedby="username" placeholder="Enter admin user name" value={username} onChange={this.handleInputChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={password}  onChange={this.handleInputChange}/>
      </div>
      <button type="submit" className="btn btn-success .signup-btn">Admin Login</button>
    </form>
      </div>
    </div>
  </div>
</div>
         
        )
    }
}

export default connect(null, {AdminLoginAction})(AdminLogin);