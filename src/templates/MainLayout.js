import React, { useState } from "react"
import logoImg from "../assets/images/logo.png"
import { NavLink } from "react-router-dom"
import ConnectWallet from "../wallet/ConnectWallet"
import Withdraw from "../wallet/Withdraw"
import ToggleChain from "../wallet/ChangeChain"


const MainLayout = (props) => {

    const [wallet, setWallet] = useState("");   
    const [status ,setStatus] = useState("");

    const onClickHome = () => {
        window.location.href='/';
        //window.location.reload(false);
    }

    return (
        <div className="app">
              
            <div className="app-header">
         
                <img className="app-logo" src={logoImg} alt="logo" />
                <div className="header-body"> 
                <Withdraw />
                {/*<NavLink className="nav-item" to={{ pathname: "https://app.ethernalElves.com"}} target="_blank">play</NavLink>*/}
                <ConnectWallet />
                </div>
              
               
            </div>
  
            
            <div className="app-body">
           
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout