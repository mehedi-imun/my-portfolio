import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineRollback}from 'react-icons/ai';
const Blog = () => {
    return (
        <section className=' container'>
            <h2>cumming soon</h2>
            <Link className='text-center' to="/"> <AiOutlineRollback></AiOutlineRollback>home</Link>
        </section>
    );
};

export default Blog;