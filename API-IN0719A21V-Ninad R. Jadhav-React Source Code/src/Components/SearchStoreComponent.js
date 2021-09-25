import React, {Component} from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent2 from "./HeaderComponent2";

class SearchStoreComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            searchKeyword:""
           
        }
    }

    searchKeywordHandler = (event) =>
    {
        event.preventDefault();
        this.setState({searchKeyword:event.target.value});
    }

    search = (event) =>
    {
        event.preventDefault();
        console.log(this.state.searchKeyword);
        this.props.history.push(`/searchResult/${this.state.searchKeyword}`);
    }

    render()
    {
        return(
           
            <div><HeaderComponent2/>
            <h2 className="text-center" style={{marginTop:`4/*  */0px`}}>Search Car Results</h2>
                        <div style={{marginTop:`30px`}}>
                             
                             
                             <nav className="navbar navbar-light bg justify-content-center">
                                 
                              <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchKeyword} onChange={this.searchKeywordHandler}/>
                               <br></br>
                                <button style={{marginLeft: "65px"}}onClick={this.search} className="btn btn-primary">Search </button>
            
            
                              </form>
                              
                            </nav>
                            <br></br>
                             
                             </div>
                             <br></br>
                             <FooterComponent/>
                        </div>
           
        )
    }

    }


export default SearchStoreComponent