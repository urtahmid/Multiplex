import React from 'react';
import ProductCard from './ProductCard';
import {Col, Row} from "reactstrap"
const ProductList = () => {
    return (
        <Row>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </Row>
    );
};

export default ProductList;