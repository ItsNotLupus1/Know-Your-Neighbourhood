import React, {Component} from "react";
import StoreServices from "../services/StoreServices";

class ListStoresComponent extends Component
{
    constructor(props)
        {
            super(props)
            this.state = {
                stores : []
            }
            this.list = this.list.bind(this)
        }

        componentDidMount(){
            this.list()

        }

       

        list()
        {
            StoreServices.listStores().then((res) => {console.log(res); this.setState({stores: res.data})});
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
                this.props.history.push("/ListStore");
            })
        }
        
   
    render()
    {
        return(
            <>
            
            <br/>
            <table>
                <tr>
                <td> Store Name </td>
                <td> Store Make </td>
                <td> Store Model </td>
                <td>Update Store</td>
                <td>View Store</td>
                <td>Delete Store</td>
                </tr>
                
                    {
                        this.state.stores.map((store) => 
                        <tr key={store.storeId}>
                            <td>{store.storeName}</td>
                            <td>{store.storeLocation}</td>
                            <td>{store.storePhoneNumber}</td>
                            <td><button onClick={ () => this.updateStore(store.storeId)} className="btn btn-info">Update </button></td>
                            <td><button onClick={ () => this.viewStore(store.storeId)} className="btn btn-info">View </button></td>
                            <td><button onClick={ () => this.deleteStore(store.storeId)} className="btn btn-info">Delete </button></td>

                        </tr>
                        )
                    }
                    
              

            </table>
            </>
        )
    }
}

export default ListStoresComponent;