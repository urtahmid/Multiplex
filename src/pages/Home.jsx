import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import heroImg from "../assets/images/hero-img.png"
import "../styles/home.css"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
const Home = () => {
    const year = new Date().getFullYear()
    return <Helmet title={'Home'}>
        <section className='hero_section'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero_content">
                            <p className="hero_subtitle">Trending product in {year}</p>
                            <h2>Make Your Interior More Minimalistics & Modern</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis magni totam fuga amet molestias nemo incidunt in culpa quae!</p>
                            <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'><Link to="/shop">SHOP NOW</Link></motion.button>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero_img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>


                </Row>
            </Container>
        </section>

        <Services></Services>

        <section className="trending_products">
            <Container>
                <Row>
                    <Col lg='12' className="text-center" >
                        <h2 className='section_title'>Trending Products</h2>
                    </Col>
                    <ProductList></ProductList>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Home;
