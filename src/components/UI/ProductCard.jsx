import React from 'react';
import productImg from "../../assets/images/arm-chair-01.jpg"

import { motion } from 'framer-motion';
import "../../styles/product-card.css"
import { Col } from "reactstrap"
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slice/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ item }) => {
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            image: item.imgUrl,
        }));

        toast('Product added successfully to the cart');
    }

    return (
        <Col lg='3' md='4'>
            <div className="product_item">
                <div className="product_img">
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </div>
                <div className=' product_info p-2'>
                    <h3 className="product_name">
                        <Link to={`/shop/id${item.id}`}>{item.productName}</Link>
                    </h3>
                    <span className=''>Chair</span>
                </div>

                <div className="product_card-bottom p-2 d-flex aign-items-center justify-content-between">
                    <span className='price'>${item.price}</span>
                    <motion.span whileTap={{ scale: 1.1 }}><i className='ri-add-line' onClick={addToCart}></i></motion.span>
                </div>
            </div>
        </Col>
    );
};

export default ProductCard;