import { Col, Input, Row } from 'antd';
import "antd/dist/antd.min.css";
import React, { useRef } from 'react';
import './App.css';

const { Search } = Input;

const onSearch = (value) => console.log(value);

function App() {
  const about = useRef(null)
  const product = useRef(null)
  const rating = useRef(null)

  const scrollAbout = () => {
    about.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollProduct = () => {
    product.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollRating = () => {
    rating.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
                <button onClick={scrollAbout} className='menu-button'>About us</button>
              </Col>
              <Col span={8} className='menu-item'>
                <button onClick={scrollProduct} className='menu-button'>Out Product</button>
              </Col>
              <Col span={8} className='menu-item'>
                <button onClick={scrollRating} className='menu-button'>Rating</button>
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
                  Order now
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
          <div>
            <img src={require('./assets/rectangle.png')} className='rectangle' alt='' />
          </div>
        </Row>
      </div>

<<<<<<< HEAD
          <div className="card_special">
            <img src={require('./assets/trung.jpg')} width={"25%"} style={{ border: '6px solid #FFD390', boxShadow: '4px 4px 4px gray' }} />
            <img src={require('./assets/hao.jpg')} width={"25%"} style={{ border: '6px solid #FFD390', boxShadow: '4px 4px 4px gray' }} />
            <img src={require('./assets/phuc.jpg')} width={"25%"} height={"292px"} style={{ border: '6px solid #FFD390', boxShadow: '4px 4px 4px gray' }} />
          </div>
          <div className='text-card'>
            <div className='card-1'>
              <h3><b>Trung East</b></h3>
              <p>I really love the cappucino, the coffee was very smooth</p>
            </div>
            <div className='card-1'>
              <h3><b>Hào Eren</b></h3>
              <p>This coffee shop is very convenient</p>
            </div>
            <div className='card-1'>
              <h3><b>Phúc Ngô</b></h3>
              <p>The coffee menu here is very much</p>
            </div>
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
=======
      {/* Special Menu */}
      <div className='special-menu' ref={product}>
        <Row>
          <h1 style={{ fontWeight: 'bold', paddingLeft: '20px' }}>Special menu for you</h1>
        </Row>
        <Row>
          <Col className='menu' span={8}>
            <img src={require('./assets/card_product_1.png')} width={"100%"} alt='' />
          </Col>
          <Col className='menu' span={8}>
            <img src={require('./assets/card_product_1 (1).png')} width={"100%"} alt='' />
          </Col>
          <Col className='menu' span={8}>
            <img src={require('./assets/card_product_1 (2).png')} width={"100%"} alt='' />
          </Col>
        </Row>
        <Row>
          <Col className='menu' span={8}>
            <img src={require('./assets/card_product_1 (3).png')} width={"100%"} alt='' />
          </Col>
          <Col className='menu' span={8}>
            <img src={require('./assets/card_product_1 (4).png')} width={"100%"} alt='' />
          </Col>
          <Col className='menu' span={8}>
            <img src={require('./assets/card_product_1 (5).png')} width={"100%"} alt='' />
          </Col>
        </Row>
      </div>

      <div className='testimonial' ref={rating}>
        <div>
          <img src={require('./assets/bg-image.png')} width={"60%"} alt='' />
          <h1 class="text">What they say about us</h1>
          <p class="text1">We always provide the best service<br></br>and always maintain the quality<br></br>of coffee</p>
        </div>

        <div className="card_special">
          <img src={require('./assets/Card.png')} width={"100%"} alt='' />
>>>>>>> 59626cd28ff403d724977e70b8a0472a1094888d
        </div>
      </div>

      <div className='about-us' ref={about}>
        <Row>
          <h1 style={{ fontWeight: 'bold', paddingLeft: '20px' }}>About <span className='popular-title-c'>Us</span></h1>
        </Row>
        <Row>
          <Col span={12}>
            <iframe title='Cafe Street location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.272531928605!2d106.79983827348215!3d10.954024177292109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d95970202f3f%3A0x679e7fa6d33f74e5!2zVHLGsOG7nW5nIMSR4bqhaSBo4buNYyBM4bqhYyBI4buTbmcsIEPGoSBz4bufIDE!5e0!3m2!1svi!2s!4v1662905589960!5m2!1svi!2s" className='map'></iframe>
          </Col>
          <Col span={12}>
            <p className='about-text'>Spacious space.</p>
            <p className='about-text'>Classic age-appropriate.</p>
            <p className='about-text'>Especially the three-tiered smoothie has made the shop attract more people.</p>
            <p className='about-text' style={{ marginTop: '100px' }}>123 Huynh Van Nghe, Buu Long, Bien Hoa.</p>
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
          <img src={require('./assets/trung.jpg')} width={"25%"} style={{ border: '6px solid #FFD390', boxShadow: '4px 4px 4px gray' }} />
            <img src={require('./assets/hao.jpg')} width={"25%"} style={{ border: '6px solid #FFD390', boxShadow: '4px 4px 4px gray' }} />
            <img src={require('./assets/phuc.jpg')} width={"25%"} alt='' height={"292px"} style={{ border: '6px solid #FFD390', boxShadow: '4px 4px 4px gray' }} />
          </div>
          <div className='text-card'>
            <div className='card-1'>
              <h3><b>Trung East</b></h3>
              <p>I really love the cappucino, the coffee was very smooth</p>
            </div>
            <div className='card-1'>
              <h3><b>Hào Eren</b></h3>
              <p>This coffee shop is very convenient</p>
            </div>
            <div className='card-1'>
              <h3><b>Phúc Ngô</b></h3>
              <p>The coffee menu here is very much</p>
            </div>
        </div>
      </div>

      <div className='about-us' ref={about}>
        <Row>
          <h1 style={{ fontWeight: 'bold', paddingLeft: '20px' }}>About <span className='popular-title-c'>Us</span></h1>
        </Row>
        <Row>
          <Col span={12}>
            <iframe title='Cafe Street location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.272531928605!2d106.79983827348215!3d10.954024177292109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d95970202f3f%3A0x679e7fa6d33f74e5!2zVHLGsOG7nW5nIMSR4bqhaSBo4buNYyBM4bqhYyBI4buTbmcsIEPGoSBz4bufIDE!5e0!3m2!1svi!2s!4v1662905589960!5m2!1svi!2s" className='map'></iframe>
          </Col>
          <Col span={12}>
            <p className='about-text'>Spacious space.</p>
            <p className='about-text'>Classic age-appropriate.</p>
            <p className='about-text'>Especially the three-tiered smoothie has made the shop attract more people.</p>
            <p className='about-text' style={{ marginTop: '100px' }}>123 Huynh Van Nghe, Buu Long, Bien Hoa.</p>
          </Col>
        </Row>
      </div>

      <div className='newsletter'>
        <img style={{ marginLeft: '130px' }} src={require('./assets/unsplash_ftA71vetxuo.png')} width={"80%"} alt='' />
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
    </div>
  );
}

export default App;

