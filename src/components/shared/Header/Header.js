import React, { useState } from 'react';
import './Header.css'
import logo from '../../../assets/header_logo.png';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const [activeNav,setActiveNav]=useState('#');
    const navigate = useNavigate()
    return (
        <nav>
            <img onClick={()=>navigate('/')} className='header_logo' src={logo} alt="" />
           <div className='nav_item'>
           <a href="#" 
            onClick={()=>setActiveNav('#')}
            className={activeNav === '#'? 'active':''}>Home
            </a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? 'active':''}>About</a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')}  className={activeNav === '#experience'? 'active':''}>Experience</a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')}  className={activeNav === '#portfolio'? 'active':''}>Portfolio</a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact'? 'active':''}>Contact</a>
            <Link to="/blog">Blog</Link>
           </div>

        </nav>
    );
};

export default Header;