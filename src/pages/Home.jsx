import { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products.js";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock.jsx";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);
  const [wirelesssProducts, setWirelesssProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProduct = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProduct = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredNewArrivalsProduct = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelesssProduct = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProduct = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredTrendingProduct);
    setBestSalesProducts(filteredBestSalesProduct);
    setNewArrivalsProducts(filteredNewArrivalsProduct);
    setWirelesssProducts(filteredWirelesssProduct);
    setPopularProducts(filteredPopularProduct);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistics & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis blanditiis magni totam fuga amet molestias nemo
                  incidunt in culpa quae!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
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
            <Col lg="12" className="">
              <h2 className="section_title text-center">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}></ProductList>
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="">
              <h2 className="section_title text-center">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts}></ProductList>
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-4 mb-3">Quality Armchair</h3>
              </div>
              <Clock></Clock>

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter_img counter_img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="">
              <h2 className="section_title text-center">New Arrivals</h2>
            </Col>
            <ProductList data={newArrivalsProducts}></ProductList>
            <ProductList data={wirelesssProducts}></ProductList>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="">
              <h2 className="section_title text-center">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts}></ProductList>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
