import React, { Component } from 'react';
import AuthenticationService from '../services/AuthenticationService';

class LogoutComponent extends Component {
    
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        AuthenticationService.logout().then((res) => {
            console.log(res.data);
            this.props.history.push('/');
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LogoutComponent;