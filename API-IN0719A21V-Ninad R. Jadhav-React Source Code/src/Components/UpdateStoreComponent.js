import React, { Component } from 'react';
import StoreServices from '../services/StoreServices';
import FooterComponent from './FooterComponent';
import HeaderComponent2 from './HeaderComponent2';

class UpdateStoreComponent extends Component {
    
    constructor(props)
    {
        super(props)
        this.state = {
            storeId:this.props.match.params.storeId,
            storeName: "",
            storeLocation: "",
            storePhoneNumber: ""
            
        }
        this.storeNameHandler = this.storeNameHandler.bind(this);
        this.storeLocationHandler = this.storeLocationHandler.bind(this);
        this.storePhoneNumber = this.storePhoneNumber.bind(this);
        this.updateStore = this.updateStore.bind(this);
        
    }

    componentDidMount()
    {
        StoreServices.getStoreById(this.state.storeId).then((res) => {
            let store = res.data;
            this.setState(
                {
                    storeName:store.storeName,
                    storeLocation:store.storeLocation,
                    storePhoneNumber:store.storePhoneNumber
                }
            )
        })
    }

    storeNameHandler = (event) =>
    {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({storeName: event.target.value});
    }

    storeLocationHandler = (event) =>
    {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({storeLocation: event.target.value});
    }

    storePhoneNumber = (event) =>
    {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({storePhoneNumber: event.target.value});
    }

    updateStore(e)
    {
        e.preventDefault();
        let store = {storeId:this.state.storeId,storeName:this.state.storeName, storeLocation:this.state.storeLocation,storePhoneNumber:this.state.storePhoneNumber}
        StoreServices.updateStore(this.state.storeId, store).then(() => {
            this.props.history.push("/searchResult/" + this.state.storeName);
        });

    }
    
    render() {
        return (
            <>
            <div>
                <HeaderComponent2/>
            </div>
           
            <div>
            
               <div>
                    <br></br>
                       <div className = "container">
                       
                            <div className = "row">
                                <div className = "card col-md-6 offset-md-3 offset-md-3">
                               
                                    <div className = "card-body">
                                        <form>
                                            <div className = "form-group">
                                                <label> Store Name </label>
                                                <input placeholder="Store Name" name="storeName"  value={this.state.storeName} className="form-control"
                                        
                                                onChange={this.storeNameHandler}/>
                                            </div>
                                            <br/>
                                            <div className = "form-group">
                                                <label> Store Location </label>
                                                <input placeholder="Car Make " name="storeLocation" value={this.state.storeLocation} className="form-control" 
                                             
                                                onChange={this.storeLocationHandler}/>
                                            </div>
                                           <br/>
                                            <div className = "form-group">
                                                <label> Store Phone Number </label>
                                                <input placeholder="Car Model" name="storePhoneNumber" value={this.state.storePhoneNumber} className="form-control" 
                                             
                                                onChange={ this.storePhoneNumber}/>
                                            </div>
    <br/>
    
    <br></br>
    
                                            <button className="btn btn-primary" onClick={this.updateStore}>Save</button>
                                            
                                        </form>
                                    </div>
                                </div>  
                            </div>
    </div>
                       </div>
                </div>
                <br/>
                <FooterComponent/>
                </>
        );
    }
}

export default UpdateStoreComponent;