import React from 'react';

const Navbar = () => {
    return(
        <div>
        <nav>
        <div className="row mynavbar">
        <div className="logo"/>{' '}
            <h3><strong>E-commerce Online Medicines </strong></h3>
            <ul className="main-nav">
                <li><a href="!#">About Us</a></li>
                <li><a href="!#" >How it works</a></li>
                <li><a href="!#"data-toggle="modal" data-target="#signupModal">Get Started</a></li>
            </ul>
            </div>
        </nav>
        </div>
    )
}
export default Navbar;