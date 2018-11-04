import React, {Component} from 'react';
import { notify } from 'react-notify-toast';
import {connect} from 'react-redux';
import '../../App.css';
import { LoginAction } from '../../redux/Actions/auth/AuthActions';

export class Login extends Component{
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

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { loggedIn } = nextProps;
        if (loggedIn) {
          notify.show('logged in successfully', 'success', 3000);
          this.props.history.push('/dashboard');
          return;
        }
    }

    render(){
        const {email, password} = this.state;
        return(
            <div className="login">
            <h4>Login</h4><hr/>
            <form onSubmit={this.handleLogin}>
      <div className="form-group">
        <label htmlFor="InputEmail1">Enter Email</label>
        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={this.handleInputChange}/>
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