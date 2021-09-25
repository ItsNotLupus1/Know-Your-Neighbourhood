import React, { Component } from 'react';
import HeaderComponent1 from './HeaderComponent1';
import FooterComponent from './FooterComponent';

class AboutUs extends Component {
    render() {
        return (
            <div>
                 <HeaderComponent1/>
                <div>
                <br></br><br></br><br></br><br></br>
             <h1 style={{textAlign:`center`}}>About US</h1>
             <div className="container-fluid"><p>Welcome to Know Your Neighbourhood, your number one source for all things stores. We're dedicated to providing you the best experience, with a focus on dependability and customer service.


We're working to turn our passion for KYN into a booming online place for searching for stores. We hope you enjoy our service as much as we enjoy offering them to you.</p> </div>  
            </div>
            <br/>
            <br/>
            <FooterComponent/>
            </div>
        );
    }
}

export default AboutUs;