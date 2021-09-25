import React,{Component} from "react";
import AuthenticationService from "../services/AuthenticationService";
import HeaderComponent1 from "./HeaderComponent1";
import FacebookLogin from 'react-facebook-login';

class LoginComponent extends Component
{
   constructor(props)
   {
       super(props)
       this.state = {
           user:"",
           userName:'',
           userPassword:'',
           errorMessage:''
       }
   }

   userNameHandler = (event) =>
   {
       event.preventDefault();
       console.log(event.target.value);
       this.setState({userName: event.target.value});
   }

   userPasswordHandler = (event) =>
   {
       event.preventDefault();
       console.log(event.target.value);
       this.setState({userPassword: event.target.value});
   }

   loginUser = (event) =>
   {
    event.preventDefault();
    let user = {userName: this.state.userName, userPassword: this.state.userPassword};
    console.log('loginuser => ' + JSON.stringify(user));


    AuthenticationService.login(user).then(() => {
      console.log("Login success");
      this.props.history.push("/Dashboard");
      window.location.reload();
    },
    error => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      this.setState({
        errorMessage: resMessage
      });
    }
  );
}

facebookResponse = (response) => {
  localStorage.setItem("user", JSON.stringify(response));
  this.setState({ ...this.state, user: response });
  this.props.history.push("/facebookData");
};


   
   render()
   {
   
    const componentClicked = () => {     console.log("Clicked!"); };

        const LoginButton = ({ facebookResponse }) => (
            <FacebookLogin  
    appId="546547280054598"
    appSecret="dfc73b6c56a55c86ebd9f9756eccfbd6"
    fields="name,email,picture"
    onClick={componentClicked}
    callback={facebookResponse} />
        );
  
   
    
       return(
           <>
           <div>
               <HeaderComponent1/>
          <div>
                <br></br>
                   <div className = "container">
                   <h1 style= {{textAlign: 'center'}}>Login</h1>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                           
                                <div className = "card-body">
                                    <form>

                                        <div className = "form-group">
                                          {this.state.errorMessage && <div className="alert alert-danger" role="alert"> {this.state.errorMessage}</div>}
                                        </div>


                                        <div className = "form-group">
                                            <label> User Name : </label>
                                            <input placeholder=" User Name" name="userName" value={this.state.userName} className="form-control"
                                    
                                            onChange={this.userNameHandler}/>
                                        </div>
                                        <br/>
                                        <div className = "form-group">
                                            <label> Password : </label>
                                            <input placeholder="Password" name="userPassword" value={this.state.userPassword} className="form-control" 
                                         
                                            onChange={this.userPasswordHandler}/>
                                        </div>
                                       <br></br>
                                        <button className="btn btn-secondary" onClick={this.loginUser}>Login</button>
                                        
                                    </form>
                                </div>
                            </div>  
                            <br/>
                            <div style={{ marginLeft: "22%",  marginTop: "5%" }}>

                            {this.state.user == false && (
                            <LoginButton facebookResponse={this.facebookResponse} />
                            )}    

</div>
                            
                        </div>

                   </div><br></br>
            </div></div>
    </>
       )
   }
}

export default LoginComponent;