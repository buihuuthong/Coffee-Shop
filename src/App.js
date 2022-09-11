import { Card, Col, Row, Input } from 'antd';
import "antd/dist/antd.min.css";
import React from 'react';
import './App.css';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

function App() {


  return (


    <div className="container">
      <div className='header'>

        {/* Menu */}
        <Row className='menu'>
          <Col span={8}>
            <img src={require('./assets/logo.png')} className='logo' alt='My coffee shop' />
          </Col>
          <Col span={8}>
            <Row>
              <Col span={8} className='menu-item'>
                <a href='https://github.com/' style={{ color: '#FF902A' }}>About us</a>
              </Col>
              <Col span={8} className='menu-item'>
                <a href='https://github.com/' style={{ color: '#000' }}>Out Product</a>
              </Col>
              <Col span={8} className='menu-item'>
                <a href='https://github.com/' style={{ color: '#000' }}>Delivery</a>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={12}>
                <div className='search'>
                  <img src={require('./assets/search.png')} className='search-icon' alt='Search' />
                  <p className='search-text'>Campuchino</p>
                </div>
              </Col>
              <Col span={4}>
                <img src={require('./assets/cart.png')} className='cart-icon' alt='My cart' />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Banner */}
        <Row className='banner'>
          <Col span={12}>
            <p className='banner-title'>Enjoy your <span className='banner-title-c'>coffee</span> before your activity</p>
            <p className='banner-description'>Boost your productivity and build your mood with a glass of coffee in the morning </p>
            <Row>
              <Col span={6}>
                <button className='order-button'>
                  <p className='order-text'>Order now</p>
                  <img src={require('./assets/cart-order.png')} className='order-icon' alt='Order now' />
                </button>
              </Col>
              <Col span={6}>
                <button className='more-button'>More menu</button>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <img src={require('./assets/coffee.png')} className='coffee-icon' alt='' />
          </Col>
        </Row>
        <div className='coffee-img'>
          <img src={require('./assets/coffee-left.png')} className='coffee-left-icon' alt='' />
          <img src={require('./assets/coffee-right.png')} className='coffee-right-icon' alt='' />
        </div>
      </div>
      <div className='popular'>
        <div className='popular-title'>
          <p className='popular-title-text'>Popular <span className='popular-title-c'>Now</span></p>
        </div>
        <Row >
          <Col span={8}>
            <img src={require('./assets/product1.png')} className='product' alt='' />
          </Col>
          <Col span={8}>
            <img src={require('./assets/product2.png')} className='product' alt='' />
          </Col>
          <Col span={8}>
            <img src={require('./assets/product3.png')} className='product' alt='' />
          </Col>
        </Row>

        {/* Special Menu */}
        <div className='special-menu'>
          <Row>
            <h1 style={{ fontWeight: 'bold', paddingLeft: '20px' }}>Special menu for you</h1>
          </Row>
          <Row>
            <Col className='menu' span={8}>
              <img src={require('./assets/card_product_1.png')} width={"100%"} />
            </Col>
            <Col className='menu' span={8}>
              <img src={require('./assets/card_product_1 (1).png')} width={"100%"} />
            </Col>
            <Col className='menu' span={8}>
              <img src={require('./assets/card_product_1 (2).png')} width={"100%"} />
            </Col>
          </Row>
          <Row>
            <Col className='menu' span={8}>
              <img src={require('./assets/card_product_1 (3).png')} width={"100%"} />
            </Col>
            <Col className='menu' span={8}>
              <img src={require('./assets/card_product_1 (4).png')} width={"100%"} />
            </Col>
            <Col className='menu' span={8}>
              <img src={require('./assets/card_product_1 (5).png')} width={"100%"} />
            </Col>
          </Row>
        </div>

        <div className='testimonial'>
          <div>
            <img src={require('./assets/bg-image.png')} width={"60%"} />
            <h1 class="text">What they say about us</h1>
            <p class="text1">We always provide the best service<br></br>and always maintain the quality<br></br>of coffee</p>
          </div>

          <div className="card_special">
            <img src={require('./assets/Card.png')} width={"100%"} />
          </div>
        </div>

        <div className='newsletter'>
          <img style={{ marginLeft: '130px' }} src={require('./assets/unsplash_ftA71vetxuo.png')} width={"80%"} />
          <div className="conten">
            <h1 className="newsletter-text">Subscribe to get 50% discount price</h1>
            <Search className="newsletter-input"
              placeholder="Email Address"
              allowClear
              enterButton="Order now"
              size="large"
              onSearch={onSearch}
             />
          </div>
        </div>

        <div>
          <img src={require('./assets/rectangle.png')} className='rectangle' alt='' />
        </div>
      </div>
    </div>
  );
}

export default App;

