import React from 'react';
import './Experience.css'
import {BsPatchCheckFill}from 'react-icons/bs';
const Experience = () => {
    return (
        <section id='experience'>
            <h3>What skill i have </h3>
            <h2>My Experience</h2>
           <div className="container  experience_container">
               <div className="experience_frontend">
                   <h3>Frontend Development</h3>
                   <div className="experience_content">
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>HTML</h4>
                           <small className='text-light'>Experienced</small>
                           </div>

                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>CSS</h4>
                           <small className='text-light'>Experienced</small>
                           </div>

                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>JavaScript</h4>
                           <small className='text-light'>Experienced</small>
                           </div>

                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>React</h4>
                           <small className='text-light'>Experienced</small>
                           </div>

                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>Tailwind</h4>
                           <small className='text-light'>Experienced</small>
                           </div>

                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                          <div> <h4>Bootstrap</h4>
                           <small className='text-light'>Experienced</small></div>

                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>React</h4>
                           <small className='text-light'>Experienced</small>
                           </div>

                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>react Native</h4>
                           <small className='text-light'>Familiar</small>
                           </div>
                       </article>
                   </div>
                       
               </div>
               <div className="experience_backend">
               <h3>Backend Development</h3>
                   <div className="experience_content">
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>Node.Js</h4>
                           <small className='text-light'>Comfortable</small>
                           </div>

                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                          <div>
                          <h4>Express.Js</h4>
                           <small className='text-light'>Comfortable</small>
                          </div>

                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>MongoDb</h4>
                           <small className='text-light'>Comfortable</small>
                           </div>
                       </article>
                       <article className=' experience_details'>
                           <BsPatchCheckFill className=" details_icon"/>
                           <div>
                           <h4>Next.Js</h4>
                           <small className='text-light'>Familial</small>
                           </div>
                       </article>
                   </div>
               </div>
            </div>
        </section>
    );
};

export default Experience;