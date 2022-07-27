import React from "react";
import { isWhiteSpaceLike } from "typescript";
import './App.css';
import { Link } from 'react-router-dom';

export default function Nav(){

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className="nav">
            <a href="/" className="site-title">Site Name</a>
            <ul>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                {/* <Link style={navStyle} to="/about">
                    <li>Login</li>
                </Link>
                <Link to="/profile">
                    <li>Profile</li>
                </Link> */}
            </ul>
        </nav>
    )
}