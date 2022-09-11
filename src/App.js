import { Card, Col, Row } from 'antd';
import "antd/dist/antd.min.css";
import React from 'react';
import './App.css';

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
        <div>
          <img src={require('./assets/rectangle.png')} className='rectangle' alt='' />
        </div>
      </div>
    </div>
  );
}

export default App;

