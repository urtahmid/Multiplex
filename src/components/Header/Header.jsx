import React from 'react';
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/eco-logo.png"

import { motion } from 'framer-motion'

import usr_icon from "../../assets/images/user-icon.png"
import "./Header.css"
const nav_link = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },

]
const Header = () => {
    return <header className='header'>
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <div>
                            <h1>Multiplex</h1>
                        </div>
                    </div>

                    <div className='navigation'>
                        <ul className="menu">

                            {
                                nav_link.map((item, index) => <li className="nav_items" key={index}>
                                    <NavLink className={(navClass) => navClass.isActive ? 'nav_active' : ''} to={item.path}>{item.display}</NavLink>
                                </li>)
                            }
                        </ul>
                    </div>

                    <div className="nav_icons">

                        <span className="fav_icon">
                            <i class="ri-heart-line"></i>
                            <span className='badge'>1</span>
                        </span>
                        <span className='cart_icon'>
                            <i class="ri-shopping-bag-line"></i>
                            <span className='badge'>1</span>
                        </span>

                        <span><motion.img whileTap={{ scale: 1.1 }} src={usr_icon} alt="" /></span>
                    </div>

                    <div className="mobile_menu">
                        <span><i class="ri-menu-line"></i></span>
                    </div>

                </div>
            </Row>
        </Container>
    </header>
};

export default Header;
