import React from 'react';
import './About.css'
import { FaAward,FaUserFriends } from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import aboutImg from '../../../../assets/me-about.jpg'
const About = () => {
    return (
        <section id='about'>
            <h5>Get To know</h5>
            <h2>About</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_img">
                        <img src={aboutImg} alt="" />
                    </div>

                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon'></FaAward>
                            <h5>Experience</h5>
                            <small>2+ years working</small>
                        </article>
                        <article className='about_card'>
                            <FaUserFriends className='about_icon'></FaUserFriends>
                            <h5>Clients</h5>
                            <small>20+</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'></VscFolderLibrary>
                            <h5>Projects</h5>
                            <small>25+</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae enim earum blanditiis quis soluta alias perspiciatis natus aut, omnis, qui dignissimos unde sunt dolor eaque aliquam dolorem, optio ratione!
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    );
};

export default About;