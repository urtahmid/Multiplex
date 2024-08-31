import React from 'react';
import productImg from "../../assets/images/arm-chair-01.jpg"
import { motion } from 'framer-motion';
import "../../styles/product-card.css"
import { Col } from "reactstrap"
const ProductCard = () => {
    return (
        <Col lg='3' md='4'>
            <div className="product_item">
                <div className="product_img">
                    <img src={productImg} alt="" />
                </div>
                <div className=' product_info p-2'>
                    <h3 className="product_name">Modern Arm Chair</h3>
                    <span className=''>Chair</span>
                </div>
             
                <div className="product_card-bottom p-2 d-flex aign-items-center justify-content-between">
                    <span className='price'>$299</span>
                    <span><i className='ri-add-line'></i></span>
                </div>
            </div>
        </Col>
    );
};

export default ProductCard;