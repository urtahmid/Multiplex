import React from 'react';
import "../styles/cart.css"
import Helmet from "../components/Helmet/Helmet.js"
import CommonSection from "../components/UI/CommonSection.jsx"
import { Col, Container, Row } from 'reactstrap';
import tdImg from '../assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion';
import { createAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slice/cartSlice.js';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)

    const totalAmount = useSelector(state => state.cart.totalAmount)

    return <Helmet title="Cart">
        <CommonSection title="Shopping Cart"></CommonSection>
        <section>
            <Container>
                <Row>
                    <Col lg="9" >
                        {
                            cartItems.length === 0 ? <h2 className='fs-4 text-center'>No Items added to cart</h2> : <table className='table bordered'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        cartItems.map((item, index) => (
                                            <Tr item={item} key={index} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        }

                    </Col>

                    <Col lg="3">
                        <div>
                            <h6 className='d-flex align-items-center justify-content-between'>
                                Subtotal
                                <span className='fs-4 fw-bold'>${totalAmount}</span>
                            </h6>

                        </div>
                        <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                        <div>
                            <button className='buy_btn w-100'>
                                <Link to="/shop">Continue Shopping</Link>
                            </button>
                            <button className='buy_btn w-100 mt-3'>
                                <Link to="/checkout">Checkout</Link>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>
};

const Tr = ({ item }) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id));
        toast.success('Product Deleted Succesfull')
    };

    return (
        <tr>
            <td><img src={item.imgUrl} alt="" /></td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}x</td>
            <td>
                <span>
                    <motion.i
                        whileTap={{ scale: 1.2 }}
                        onClick={deleteProduct}
                        className='ri-delete-bin-line'
                    ></motion.i>
                </span>
            </td>
        </tr>
    );
}
export default Cart;
