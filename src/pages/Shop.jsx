import React from 'react';
import Helmet from "../components/Helmet/Helmet.js"
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import "../styles/shop.css"

const Shop = () => {
    return <Helmet title="Shop">
        <CommonSection title="Products" />

        <section>
            <Container>
                <Row>
                    <Col lg="3" md="4">
                        <div className="filter_widget">
                            <select>
                                <option>Fiter By Category</option>
                                <option value="sofa">Sofa</option>
                                <option value="mobile">Mobile</option>
                                <option value="chair">Chair</option>
                                <option value="watch">Wach</option>
                                <option value="wireless">wireless</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg="3" md="3">
                        <div className="filter_widget">
                            <select>
                                <option>Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="search_box">
                            <input type="text" placeholder='Search....' />
                            <span>
                                <i class="ri-search-line"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>
};

export default Shop;
