import React from 'react';
import './Banner.css'

import Cta from './Cta';
import Me from '../../../../assets/me.png'
import BannerSocial from './BannerSocial';

const Banner = () => {
    return (
        <header>

            <div className="container">
                <div className=' header_container'>
                    <div className='header_info'>
                        <h5>Hello, I'm </h5>
                        <h1>Mahedi imun anik</h1>
                        <h5 className="text-light">
                            Junior Web Developer
                        </h5>
                        <Cta></Cta>
                        <BannerSocial></BannerSocial>
                    </div>
                    <div className='me'>
                        <img src={Me} alt="" />
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Banner;