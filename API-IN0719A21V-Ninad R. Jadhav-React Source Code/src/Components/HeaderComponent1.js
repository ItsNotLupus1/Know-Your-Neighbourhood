import React, { Component } from 'react';

class HeaderComponent1 extends Component {
   

    render() {
        

        return (
            
            <div style={{ backgroundColor: `black`, marginBottom:"-10px" }}>
                 <nav class="navbar navbar-expand-sm bg" style={{float:`right`}}>
  
  <ul class="navbar-nav ml-auto">
      <li class="nav-item">
          <a class="nav-link" href="/postUser" style={{padding: `12px`,marginRight:`50px`}}>
            Registration
          </a>
      </li>
      
      <li class="nav-item">
          <a class="nav-link" href="login" style={{padding: `12px` ,marginRight:`50px`}}>
            Login
          </a>
      </li>

      <li class="nav-item">
          <a class="nav-link" href="AboutUs" style={{padding: `12px` ,marginRight:`50px`}}>
            About Us
          </a>
      </li>

      <li class="nav-item">
          <a class="nav-link" href="ContactUs" style={{padding: `12px` ,marginRight:`50px`}}>
            Contact Us
          </a>
      </li>
  </ul>
</nav>

                <h2><a href="/home"><img src = "https://images.squarespace-cdn.com/content/v1/52701950e4b0976cf8dea0d5/1412011185116-APQOD76Z22HGPFYMDE7Y/ke17ZwdGBToddI8pDm48kMtiXMEMZ8ID8MVhA-T_Qc9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIfy9uRsqnknGrsPwiW8VdnsJxMq6FvgYbxptNsO-6IOIKMshLAGzx4R3EDFOm1kBS/kyn.jpg?format=1500w" width="120" height="70"></img></a></h2>
               
            </div>
           
        );
    }
}

export default HeaderComponent1;