import React, {Component} from "react";
import StoreServices from "../services/StoreServices";
import FooterComponent from "./FooterComponent";
import HeaderComponent2 from "./HeaderComponent2";

class SearchResultComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            searchKeyword:this.props.match.params.searchKeyword,
            stores:[]
        }

               
    }

    
    componentDidMount(){
       StoreServices.searchStore(this.state.searchKeyword).then((res) => {console.log(res.data);
        this.setState({stores:res.data})});
    }
        
    

    viewStore(storeId){
        this.props.history.push(`/storesList/${storeId}`);
    }

    updateStore(storeId)
        {
            this.props.history.push(`/update/${storeId}`);
        }

    deleteStore(storeId)
    {
        StoreServices.deleteStore(storeId).then((res) => {
            console.log(res.data);
            this.props.history.push("/searchResult/" + this.state.searchKeyword);
            window.location.reload();
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
                            <td> Store Name </td>
                            <td> Store Location </td>
                            <td> Store Phone Number </td>
                            <td> View Store </td>
                            <td>Update Store</td>
                            <td>Delete Store</td>
                            </tr>
                                
                            </thead>
                            <tbody>
                            {
                        this.state.stores.map((store) => 
                        <tr key={store.storeId}>
                            <td>{store.storeName}</td>
                            <td>{store.storeLocation}</td>
                            <td>{store.storePhoneNumber}</td>
                            <td><button onClick={ () => this.viewStore(store.storeId)} className="btn btn-info">View </button></td>
                            <td><button onClick={ () => this.updateStore(store.storeId)} className="btn btn-info">Update </button></td>
                            <td><button onClick={ () => this.deleteStore(store.storeId)} className="btn btn-info">Delete </button></td>

                        </tr>
                        )
                    }
                            </tbody>
                        </table>
                        <FooterComponent/>
                        </div>
                        
            </>
        )
    }
}

export default SearchResultComponent;