import React, {Component} from "react";
import StoreServices from "../services/StoreServices";
import FooterComponent from "./FooterComponent";
import HeaderComponent2 from "./HeaderComponent2";

class SingleStoreComponent extends Component
{
    constructor(props)
        {
           super(props);
           this.state = {
               store: {},
               storeId: this.props.match.params.storeId
           } 
          
        }
        

        componentDidMount(){
            StoreServices.listSingleStore(this.state.storeId).then( res => {
                 console.log("response data from backend "+JSON.stringify(res.data));
                 this.setState({store: res.data});
             })
            }
        
       
        render()
        {
            return(
            <>
            <HeaderComponent2/>
            <br/>
            <div className = "row">
                        <table className = "table table-striped table-bordered" style={{marginLeft: "10px"}}>

                            <thead>
                            <tr>
                                <td>Store id</td>
                                <td>Store Name</td>
                                <td>Store Location</td>
                                <td>Store Phone Number</td>
                               
                            </tr>
                                
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.state.store.storeId}</td>
                                <td>{this.state.store.storeName}</td>
                                <td>{this.state.store.storeLocation}</td>
                                <td>{this.state.store.storePhoneNumber}</td>
                                
                            </tr>
 
                            </tbody>
                        </table>
                        <FooterComponent/>
                        </div>
            </>  
            )
        }
}

export default SingleStoreComponent