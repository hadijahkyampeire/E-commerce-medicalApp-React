import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../App.css';
import { LoginAction } from '../../redux/Actions/auth/AuthActions';

class Login extends Component{
    state = {
        email:'',
        password:''
    }

    handleInputChange =(event)=>{
        const { name, value } = event.target;
        this.setState({[name]:value});

    }
    handleLogin =(event)=>{
        event.preventDefault();
        const {email,password}=this.state
        this.props.LoginAction({email,password})
    }
    render(){
        const {email, password} = this.state;
        return(
            <div className="login">
            <h4>Login</h4><hr/>
            <form onSubmit={this.handleLogin}>
      <div className="form-group">
        <label htmlFor="InputEmail1">Enter Email</label>
        <input type="email" className="form-control" name="email" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={this.handleInputChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="InputPassword1">Password</label>
        <input type="password" className="form-control" name="password" id="InputPassword1" placeholder="Password" value={password}  onChange={this.handleInputChange}/>
      </div>
      <button type="submit" className="btn btn-success">Login</button>
    </form>
            </div>
         
        )
    }
}

export default connect(null, {LoginAction})(Login);