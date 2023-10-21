import React from 'react';
import './Hero_inner.css';

const Hero_inner = () => {
    return (
        <div>
            <div class="hero__inner">
                <div class="container">
                    <div class="wrap-text center text-medium font-bold" style={{paddingTop:'200px'}}>
                        <span style={{fontSize:'20px'}}>Diva New Fashion style</span>
                        <h2 class="h1 mega-title">Stunning Full Width Banner</h2>
                        <div class="rte-setting mega-subtitle" style={{fontSize:'30px'}}>with flexible heights, text size, text color and overlay color options</div>
                        <button><a href="collection-3columns.html" class="btn border-btn-1">Purchase Now</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero_inner;