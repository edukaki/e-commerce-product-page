import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Avatar from "../Avatar"
import BtnCart from "../BtnCart"
import img from "../../img/image-avatar.png"

const Navbar = ({ cartItems }) => {
    const [show, setShow] = useState(false);

    function showSwitch() {
        return setShow(!show)
    }

    return (
        <>
            <div className="navbar container">
                <div className="logo"></div>
                <div className={show ? "links active" : "links"}>
                    <Link onClick={() => showSwitch()} to="/">Collections</Link>
                    <Link onClick={() => showSwitch()} to="/men">Men</Link>
                    <Link onClick={() => showSwitch()} to="/women">Women</Link>
                    <Link onClick={() => showSwitch()} to="/about">About</Link>
                    <Link onClick={() => showSwitch()} to="/contact">Contact</Link>
                </div>
                <div className="cart-avatar">
                    <BtnCart cartItems={cartItems} />
                    <Avatar img={img} />
                </div>
                <div onClick={() => showSwitch()} className={show ? "bars-button active" : "bars-button"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
};

export default Navbar;
