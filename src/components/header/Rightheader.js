// import React from 'react'
import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import "./rightheader.css"
const Rightheader = ({Logclose}) => {
    const { account, setAccount } = useContext(LoginContext);
  return (
    <>
    <div className="rightheader">
        <div className="right_nav">
        {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )
          
          }
          { account ? <h3>Hello, {account.fname.toUpperCase()}</h3>:""
          }
        </div>
        <div className="nav_btn" onClick={()=>Logclose()}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop By category</NavLink>
            <Divider style={{ width: "100%", marginLeft: -20}} />
            <NavLink to="/">Today's Deal</NavLink>
            {
                account ? <NavLink to="/buynow">Your Order's</NavLink> :
                <NavLink to="/login">Your Order's</NavLink>
            }
            <Divider style={{ width: "100%", marginLeft: -20 }} />
            {/* <Divider/> */}
            <div className="flag">
            <NavLink to="/">Settings</NavLink>
               <img src="" alt="" />
            </div>
            <NavLink to="/">Home</NavLink>
        </div>
    </div>
    </>
  )
}

export default Rightheader