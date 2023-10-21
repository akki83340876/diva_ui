import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const TopHeader = () => (
  <div className="top-header" style={{height:'60px', backgroundColor:'black', color:'white',paddingTop:'8px'}}>
    <Container fluid>
      <Row>
        {/* Left Section */}
        <Col xs={12} sm={8} md={7} lg={4}>
          <div className="currency picker float-start">
            {/* Currency Select */}
            <Form.Select className="nice-select" name="currency">
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              <option value="JPY">JPY</option>
            </Form.Select>
            {/* End Currency Select */}
          </div>
          <div className="language picker float-start">
            {/* Language Select */}
            <Form.Select className="nice-select" name="language">
              <option value="EN">English</option>
              <option value="AR">Arabic</option>
              <option value="FR">French</option>
              <option value="DE">German</option>
              <option value="JA">Japanese</option>
              <option value="ES">Spanish</option>
            </Form.Select>
            {/* End Language Select */}
          </div>
          <span><p className="top-header_left-text float-start text-capitalize">
            Free Shipping | Free Returns
          </p></span>
        </Col>

        {/* Middle Section */}
        <Col xs={12} sm={4} md={4} lg={4}>
          <div className="text-center">
            <p className="top-header_middle-text transform-none">
              Anniversary Sale: save the date! May 20-August 20, 2018.
              <a href="#" className="transform-none">
                Read more.
              </a>
            </p>
          </div>
        </Col>

        {/* Right Section */}
        <Col xs={12} sm={4} md={5} lg={4}>
          <div className="right-action text-action d-flex-align-center justify-content-end" style={{display:'flex',paddingTop:'5px'}}>
            {/* User Links */}
            <div className="item site-user-menu">
              <a href="/loginpage">
                <i class="bi bi-person" style={{fontSize:'18px'}}></i>
                <span className="text align-middle">Login</span>
              </a>
            </div>
            {/* End User Links */}
            {/* Wishlist */}
            <div className="item site-header-wishlist d-none d-lg-block">
              <a href="wishlist.html" className="icon-wishlist text-capitalize">
              <i class="bi bi-heart" style={{fontSize:'18px'}}></i>
                <span className="text align-middle">Wishlist</span>
                <span className="site-header-wish-count1 d-none" data-cart-render="item_count">(0)</span>
              </a>
            </div>
            {/* End Wishlist */}
            {/* Minicart */}
            <div className="item site-cart d-none d-lg-block">
              <a href="cart.html" className="icon-cart site-header-cart btn-minicart text-capitalize" data-bs-toggle="modal" data-bs-target="#minicart-drawer">
              <i class="bi bi-bag" style={{fontSize:'18px'}}></i>
                <span className="text align-middle">Cart</span>(
                <span className="site-header__cart-count1" data-cart-render="item_count">0</span>)
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TopHeader;
