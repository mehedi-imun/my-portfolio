import React from 'react';
import './Footer.css'
import {FaFacebook } from 'react-icons/fa';
import {FiInstagram,FiTwitter } from 'react-icons/fi';
import logo from '../../../assets/header_logo.png'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer id='footer'>
            <a href="/" className='footer_logo'>
                <img src={logo} alt="" />
            </a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_social">
                <a href="https://www.facebook.com/mehediimun"><FaFacebook></FaFacebook></a>
                <a href="https://twitter.com/mehediimun"><FiTwitter/></a>
                <a href="https://www.instagram.com/mehedi_imun/"><FiInstagram/></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; Copyright Mehedi Imun {year} All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;