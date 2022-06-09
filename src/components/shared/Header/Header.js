import React, { useState } from 'react';
import './Header.css'
import { FaHome } from 'react-icons/fa';
import { AiOutlineUser, AiFillProject } from 'react-icons/ai';
import { BiBook,BiMessageSquareDetail } from 'react-icons/bi';
const Header = () => {
    const [activeNav,setActiveNav]=useState('#')
    return (
        <nav>
            <a href="#" 
            onClick={()=>setActiveNav('#')}
            className={activeNav === '#'? 'active':''}><FaHome/>
            </a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? 'active':''}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')}  className={activeNav === '#experience'? 'active':''}><BiBook/></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')}  className={activeNav === '#portfolio'? 'active':''}><AiFillProject/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact'? 'active':''}><BiMessageSquareDetail/></a>

        </nav>
    );
};

export default Header;