import './App.css';
import LoginComponent from './Components/LoginComponent';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import KYNComponent from './Components/KYNComponent';
import UserRegistrationComponent from './Components/UserRegistrationComponent';
import DashboardComponent from './Components/DashboardComponent';
import SearchResultComponent from './Components/SearchResultComponent';
import ListStoresComponent from './Components/ListStoresComponent';
import SingleStoreComponent from './Components/SingleStoreComponent';
import StorePostComponent from './Components/StorePostComponent';
import SearchStoreComponent from './Components/SearchStoreComponent';
import UpdateStoreComponent from './Components/UpdateStoreComponent';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import FacebookComponent from './Components/FacebookComponent';
import LogoutComponent from './Components/LogoutComponent';





function App() {
  return(
    <Router>
      <Switch>
        <Route path = "/home" exact component = {KYNComponent}></Route>
        <Route path="/login" component={LoginComponent}/>
        <Route path="/ListStore" component={ListStoresComponent}/> 
        <Route path="/storesList/:storeId" component={SingleStoreComponent}/>
        <Route path="/update/:storeId" component={UpdateStoreComponent}/>
        <Route path="/postStore" component={StorePostComponent}/>
        <Route path="/postUser" component={UserRegistrationComponent}/>  
        <Route path="/Dashboard" component={DashboardComponent}/>  
        <Route path="/search" component={SearchStoreComponent}/> 
        <Route path="/searchResult/:searchKeyword" component={SearchResultComponent}/> 
        <Route path = "/AboutUs" exact component = {AboutUs}/>
        <Route path = "/ContactUs" exact component = {ContactUs}/>
        <Route path = "/facebookData" exact component = {FacebookComponent}/>
        <Route path = "/logout" exact component = {LogoutComponent}/>
      </Switch>
    </Router>
    
  )
}

export default App;
