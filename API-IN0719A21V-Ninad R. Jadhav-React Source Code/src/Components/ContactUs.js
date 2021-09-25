import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent1 from './HeaderComponent1';

class ContactUs extends Component {
    render() {
        return (
            <div>
                  <HeaderComponent1/>
                  <br></br><br></br><br></br><br></br>
                <h1 style={{textAlign:`center`}}>Contact Us</h1>
                <p className="container-fluid"> Contact us at 9372828878 for any doubts or regarding ours services or the application, you can also mail us at kyn@gmail.com or visit our office at 23rd Street at San Jose, California</p>
                <br/>
                <br/>
                
                <FooterComponent/>
            </div>
        );
    }
}

export default ContactUs;