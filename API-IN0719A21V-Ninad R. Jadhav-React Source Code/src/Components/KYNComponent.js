import React, {Component} from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent1 from "./HeaderComponent1";

class KYNComponent extends Component
{
       

    render(){
        const bg = {
            overflowX: "hidden",
            width: "100%",
           
        margin: "0px",
        height: "696px",
        align: "center",
        backgroundImage:`url("https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/can-unmanned-convenience-stores-take-off-in-indonesia-jd.com-thinks-so/8506049-1-eng-GB/Can-unmanned-convenience-stores-take-off-in-Indonesia-JD.com-thinks-so.jpg")`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
          };
        
        return(
            <>
            <div style={bg}>
            <HeaderComponent1/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           
            
            
           
            


           
           </div>
           <FooterComponent/>
            </>
        )
    }
}

export default KYNComponent;