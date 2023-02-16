import React from 'react';
import { FaLinkedin,FaGithub,FaFacebook } from 'react-icons/fa';
const BannerSocial = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/mehedi-imun/" target='_blank'rel="noreferrer" > <FaLinkedin/></a>
            <a href="https://github.com/mehedi-imun" target='_blank' rel="noreferrer"> <FaGithub/> </a>
            <a href="https://www.facebook.com/mehediimun" target='_blank' rel="noreferrer"><FaFacebook/></a>
            
        </div>
    );
};

export default BannerSocial;