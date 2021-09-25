import React, {Component} from "react";
import UserServices from "../services/UserServices";
import HeaderComponent1 from "./HeaderComponent1";


class UserRegistrationComponent  extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            userName:"",
            userPassword:"",
            fullName:""
        }
    }

    userNameHandler = (event) =>
    {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({userName: event.target.value});
    }

    fullNameHandler = (event) =>
    {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({fullName: event.target.value});
    }

    userPasswordHandler = (event) =>
    {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({userPassword: event.target.value});
    }

   
    
    postUser = (event) =>
    {
        event.preventDefault();
        let user = {userName:this.state.userName, userPassword:this.state.userPassword, fullName:this.state.fullName}

        UserServices.addUser(user).then((res) => {console.log(res)
            alert("User Has been registered successfully!")
        });
    }

    

    render()
    {
        
        return(
            <div>
                <HeaderComponent1/>
           <div>
                <br></br>
                   <div className = "container">
                       <h1 style= {{textAlign: 'center'}}>Registration</h1>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                           
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Full Name : </label>
                                            <input placeholder=" Full Name" name="fullName" value={this.state.fullName} className="form-control"
                                    
                                            onChange={this.fullNameHandler}/>
                                        </div>
                                        <br/>
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
                                        <button className="btn btn-secondary" onClick={this.postUser}>Register</button>
                                        
                                    </form>
                                </div>
                            </div>  
                        </div>
</div>
                   </div><br></br>
            </div>
        )
    }
}

export default UserRegistrationComponent