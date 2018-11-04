import React, { Component } from 'react';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import tablets from '../resources/images/tablets.jpg';
import syrup from '../resources/images/syrup.jpeg';
import injections from '../resources/images/injections.jpeg';
import Login from './auth/Login';
import {connect} from 'react-redux';
import { SignupAction } from '../redux/Actions/auth/AuthActions';
import  AdminLogin  from './auth/AdminLogin';

export class Landing extends Component {
    state = {
        username:'',
        email:'',
        password:'',
        passwordConf:''
    }

    handleInputChange =(event)=>{
        const { name, value } = event.target;
        this.setState({[name]:value});

    }

    handleSignup =(event)=>{
        const {username, email, password, passwordConf} = this.state
        event.preventDefault();
        this.props.SignupAction({username, email, password, passwordConf}); 
    }

    render() {
        const {username, email, password, passwordConf} = this.state
        return(
            <div>
            <header>
            <nav>
            <div className="row">
            <div className="logo"/>{' '}
                <h3><strong>E-commerce Online Medicines </strong></h3>
                <ul className="main-nav">
                    <li><a href="!#">About Us</a></li>
                    <li><a href="!#" >How it works</a></li>
                    <li><a href="!#" data-toggle="modal" data-target="#adminModal">Get Started as admin</a></li>
                    <li className="dropdown"><a href="!#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownMenuLink">Sign In</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Login/>
                </div>
                    </li>
                </ul>
                </div>
            </nav>
            <br></br>
            <div className="row info">
            <h3>What We Do</h3>
            <p>Provide an online platform for people to order medicines <br/>
            rather than spending time in lines waiting.</p>
            <button className="btn getstarted" data-toggle="modal" data-target="#signupModal"> Get started as user <i className="fa fa-arrow-right"/></button>
            </div>
            <div className="row info2">
            <h3>Why We Do</h3>
            <p>With a fast growing world, people are becoming busy every <br/>
            other second but still diseases are existing <br/>
            so this helps busy people order for medical services.</p>
            </div>
            </header>
            <section className="section-medicine">
            <div className="row">
            <ul className="medicine-showcase">
                <li>
                    <figure className="medicine-photo">
                        <img src={tablets} alt="Tablets"/>
                    </figure>
                </li>
                <li>
                    <figure className="medicine-photo">
                    <img src={syrup} alt="Cirup"/>
                    </figure>
                </li>
                <li>
                    <figure className="medicine-photo">
                    <img src={injections} alt="injections"/>
                    </figure>
                </li>
                </ul>
            </div>
            </section>
            <footer>
            <div className="row">
            <h4>Find Us<br/>On</h4>
            <a href="https://web.facebook.com/kyampeire.hadija"><FacebookLoginButton>
            <span>facebook</span>
            </FacebookLoginButton></a>
            <a href="mailto:hadijah.kyampeire@andela.com"><GoogleLoginButton>
            <span>Send me an email</span>
            </GoogleLoginButton>
            </a>
            <a href="https://twitter.com/KyampeireH"><TwitterLoginButton>
            <span>twitter</span>
            </TwitterLoginButton></a>
            </div>

            </footer>
            <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Signup User</h5>
                <button type="button" className="close" id="closeSignupModal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form onSubmit={this.handleSignup}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" name="username" placeholder="haddy" value={username}  onChange={this.handleInputChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={this.handleInputChange}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" value={password}  onChange={this.handleInputChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="confirmInputPassword1">Confirm Password</label>
        <input type="password" className="form-control" name="passwordConf" id="confirmInputPassword1" placeholder="Password again" value={passwordConf}  onChange={this.handleInputChange}/>
      </div>
      <button type="submit" className="btn btn-success .signup-btn">SignUp</button>
    </form>
      </div>
    </div>
  </div>
</div>
<AdminLogin/>
</div>
            
        );
    }
}
export default connect(null,{SignupAction})(Landing);