import React from 'react';
import './About.css'
import { FaAward, FaUserFriends } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import aboutImg from '../../../../assets/me-about.jpg'
import { Link } from "react-router-dom";
const About = () => {
    return (
        <section id='about'>
            <h3>Get To know</h3>
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
                            <small>1+ years working</small>
                        </article>
                        <article className='about_card'>
                            <FaUserFriends className='about_icon'></FaUserFriends>
                            <h5>WORK EXPERIENCE</h5>
                            <small>Jr Full-Stack Developer at ProCorp.
                                Oct 2022 - Present
                                Hyderabad, Telangana, India
                            </small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'></VscFolderLibrary>
                            <h5>Projects</h5>
                            <small>25+</small>
                        </article>
                    </div>
                    <p>
                        I am mahaedi imun anik .Junior Web Developer. I am from Bangladesh.
                        seasoned and independent Front end developer with experience blending the design with the skill of programming to deliver an immersive and engaging user experience through efficient website development. Adept at contributing to a highly collaborative work environment, finding solutions, and determining work satisfaction.
                    </p>
                    <Link to='/#about' className='btn btn-primary'>About More</Link>

                </div>
            </div>
        </section>
    );
};

export default About;