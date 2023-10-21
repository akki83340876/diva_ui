import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div style={{backgroundColor:'black',color:'white', paddingTop:'50px',textAlign:'center'}}>
        <footer id="footer">
                <div class="site-footer">
                    <div class="footer-top">
                        <div class="container">
                            <div class="row" style={{display:'flex'}}>
                                <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                                    <h4 class="h4" style={{textAlign:'left'}}>Quick Links</h4>
                                    <ul style={{listStyle:'none',textAlign:'left'}}>
                                        <li><Link href="#" style={{textDecoration:'none'}}>Women</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>Men</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>Kids</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>Deals</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>Accessories</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>New In</Link></li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                                    <h4 class="h4" style={{textAlign:'center'}}>Help</h4>
                                    <ul style={{listStyle:'none',textAlign:'left'}}>
                                        <li><Link href="#" style={{textDecoration:'none'}}>FAQs</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>My Orders</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>Terms And Conditions</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>Shipping Policy</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>Returns &amp; Exchange</Link></li>
                                        <li><Link href="#" style={{textDecoration:'none'}}>Ordering &amp; Payment</Link></li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                                    <h4 class="h4">Contact Us</h4>
                                    <ul style={{listStyle:'none'}}>
                                        <li>
                                            <i class="icon an an-map-marker"></i>
                                            <p>55 Gallaxy Enque,<br/>2568 steet, 23568 NY</p>
                                        </li>
                                        <li class="phone">
                                            <i class="icon an an-phone-volume"></i>
                                            <p><a href="tel:(440)0000000000" style={{textDecoration:'none'}}>(440) 000 000 0000</a></p>
                                        </li>
                                        <li class="email">
                                            <i class="icon an an-envelope"></i>
                                            <p><a href="mailto:sales@yousite.com" style={{textDecoration:'none'}}>sales@yousite.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-12 col-md-3 col-lg-3 newsletter">
                                    <div class="display-table">
                                        <div class="display-table-cell footer-newsletter">
                                            <form action="#" method="post">
                                                <label class="h4">Newsletter</label>
                                                <p style={{textAlign:'left'}}>sign up for newsletter to know our latest news and offers.</p>
                                                <div class="input-group">
                                                    <input type="email" class="input-group__field newsletter__input" name="EMAIL" value="" placeholder="Email address" required />
                                                    <span class="input-group__btn">
                                                        <button type="submit" class="" name="commit" id="Subscribe"><span class="newsletter__submit-text--large">Sign Up</span></button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="footer-middle">
                        <div class="container">
                            <div class="row" style={{display:'flex'}}>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-Start align-items-center">
                                    <div class="footer-social w-100 text-start d-flex align-items-center">
                                        <h3 class="h4">Stay Connected</h3>
                                        <ul style={{display:'flex',listStyle:'none'}}>
                                            <li><Link to="/"><FacebookIcon/></Link></li>
                                            <li><TwitterIcon/></li>
                                            <li><PinterestIcon/></li>
                                            <li><InstagramIcon/></li>
                                            <li><YouTubeIcon/></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center">
                                    <ul class="payment-icons list--inline w-100 justify-content-end text-end" style={{display:'flex',listStyle:'none'}}>
                                        {/* <li><i class="icon an an-cc-visa" aria-hidden="true"></i></li>
                                        <li><i class="icon an an-cc-mastercard" aria-hidden="true"></i></li>
                                        <li><i class="icon an an-cc-amex" aria-hidden="true"></i></li>
                                        <li><i class="icon an an-cc-paypal" aria-hidden="true"></i></li>
                                        <li><i class="icon an an-cc-discover" aria-hidden="true"></i></li> */}
                                        <li><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 copyright text-center"><span>&copy; 2021 DIVA.</span> All Rights Reserved.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer;