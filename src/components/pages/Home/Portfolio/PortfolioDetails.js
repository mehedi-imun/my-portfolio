import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import IMG1 from '../../../../assets/portfolio1.jpg'
import IMG2 from '../../../../assets/portfolio2.jpg'
import IMG3 from '../../../../assets/portfolio3.jpg'
import IMG4 from '../../../../assets/portfolio4.jpg'
import IMG5 from '../../../../assets/portfolio5.png'
import drill2 from '../../../../assets/portfolio/drill2.png'
import drill3 from '../../../../assets/portfolio/drill3.png'
import warehouse2 from '../../../../assets/portfolio/warehouse2.png'
import warehouse3 from '../../../../assets/portfolio/warehouse3.png'
import weddin2 from '../../../../assets/portfolio/weddin2.png'
import weddin3 from '../../../../assets/portfolio/weddin3.png'
import review2 from '../../../../assets/portfolio/weddin2.png'
import review3 from '../../../../assets/portfolio/weddin3.png'
import lucky2 from '../../../../assets/portfolio/lucky2.png'
import { AiOutlineRollback } from 'react-icons/ai';

const PortfolioDetails = () => {
    const {id} = useParams()
    
    const data = [
        {
            id:1,
            img:IMG1,
            imgSecond:drill2,
            imgThird:drill3,
            title:'drill bits manufacturer',
            demo:'https://drillco-87862.web.app/',
            front:'https://github.com/mahedi-imun/DRILLCO---A-drill-bit-manufacturer',
            back:'https://github.com/mahedi-imun/-DRILLCO-A-drill-bit-manufacturer-server',
            description:'❖ Website including admin panel to make an admin or remove admin. ',
            description2:'❖ Users can purchase products with a credit card.',
            description3:' ❖ User clicks profile, and updates her profile, with additional personal information',
            Technology:'MongoDB, Express.Js, React, Node.Js, Tailwind, Firebase, Html, CSS',
        },
        {
            id:2,
            img:IMG2,
            imgSecond:warehouse2,
            imgThird:warehouse3,
            title:'warehouse management',
            demo:'https://electranext-6bbbe.firebaseapp.com/',
            front:'https://github.com/mahedi-imun/electraNext-warehouse',
            back:'https://github.com/mahedi-imun/electraNext-warehouse-server',
            description:'❖ On This website users can create an account. ',
            description2:'❖ On this website users can manage inventory, add a new product, and delete any product.',
            description3:' ❖ use jwt- for secured API',
            Technology:'MongoDB, Express.Js, React, Node.Js, Bootstrap, Html, CSS.',


        },
        {
            id:3,
            img:IMG3,
            imgSecond:weddin2,
            imgThird:weddin3,
            title:'wedding photography',
            demo:'https://snapshots-studio.web.app/',
            front:'https://github.com/mahedi-imun/electraNext-warehouse',
            description:'❖ Including booking any photography service.',
            description2:'❖ on this website using react firebase authentication, login, or sign-up system.',
            description3:'❖ including blog and about me page.',
            Technology: 'React, Html, CSS, Bootstrap, Firebase, React-Leaflet.'
        },
        {
            id:4,
            img:IMG4,
            imgSecond:review2,
            imgThird:review3,
            title:'product analytics',
            demo:'https://bike-review.netlify.app/',
            front:'https://github.com/mahedi-imun/product-analytics-and-customer-reviews-',
            description:'❖ this web site is mobile responsive',
            description2:' ❖ i will use custom hook , because Don t repeat myself.',
            description3:' ❖ product analysis and show customer review have three blogs,dashboard sell analysis',
            Technology:'rect, react route, tailwind, rechart, font awesome icon',
        },
        {
            id:5,
            img:IMG5,
            imgSecond:lucky2,
            imgThird:IMG5,
            title:'lucky-product',
            front:'https://github.com/mahedi-imun/lucky-product',
            demo:'https://body-spray-shop.netlify.app/',
            description:'❖This is a body spray shop  project you can get random product '
        },
       
    ]
    const items= data.find(item => item.id == id  )
 
    
    
    return (
        <section className=''>
            <Link className='text-center' to="/"> <AiOutlineRollback></AiOutlineRollback>home</Link>
           <div className='container portfolio_container'>
           <article className='portfolio_items'>
                    <div className='portfolio_item-imgs'>
                        <img src={items.img} alt="" />
                        <img src={items.imgSecond} alt="" />
                        <img src={items.imgThird} alt="" />
                        
                    </div>
                    <h3>{items.title}</h3>
                    <h2 className='text-primary'>Overview</h2>
                    <div className='desc'>
                    <p> {items.description} </p>
                    <p> {items.description2} </p>
                    <p> {items.description3} </p>
                    </div>
                    <div className="portfolio_item-cta">
                        <a href={items.demo} target="_blank" rel="noreferrer" className='btn'>Live Demo</a>
                        <a href={items.front} target="_blank" rel="noreferrer" className='btn'>Frontend code</a>
                        <a href={items.back} target="_blank" rel="noreferrer" className='btn'>Backend code</a>
                    </div>

                </article>
           
           </div>
        </section>
    );
};

export default PortfolioDetails;