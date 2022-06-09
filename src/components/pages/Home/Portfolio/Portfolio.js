import React from 'react';
import './Portfolio.css'
import IMG1 from '../../../../assets/portfolio1.jpg'
import IMG2 from '../../../../assets/portfolio2.jpg'
import IMG3 from '../../../../assets/portfolio3.jpg'
import IMG4 from '../../../../assets/portfolio4.jpg'
import IMG5 from '../../../../assets/portfolio5.png'
const Portfolio = () => {

const data = [
    {
        id:1,
        img:IMG1,
        title:'drill bits manufacturer',
        demo:'https://drillco-87862.web.app/'
    },
    {
        id:2,
        img:IMG2,
        title:'warehouse management',
        demo:'https://electranext-6bbbe.firebaseapp.com/'
    },
    {
        id:3,
        img:IMG3,
        title:'wedding photography',
        demo:'https://snapshots-studio.web.app/'
    },
    {
        id:4,
        img:IMG4,
        title:'product analytics',
        demo:'https://bike-review.netlify.app/'
    },
    {
        id:5,
        img:IMG5,
        title:'lucky-product',
        demo:'https://body-spray-shop.netlify.app/'
    },
   
]
    return (
        <section id='portfolio'>
            <h5>My project</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {
                    data.map(data => <>
                    <article className='portfolio_item'>
                    <div className='portfolio_item-img'>
                        <img src={data.img} alt="" />
                    </div>
                    <h3>{data.title}</h3>
                    <div className="portfolio_item-cta">
                        <a href={data.demo} target="_blank" rel="noreferrer" className='btn'>Live Demo</a>
                        <a href="https://github.com/mahedi-imun" target="_blank" rel="noreferrer" className='btn btn-primary'>explore more</a>
                    </div>

                </article>
                    </>)
                }
            </div>
        </section>
    );
};

export default Portfolio;