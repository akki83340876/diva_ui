import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import Custom from '../Components/Custom';
import Hero_inner from '../Components/Hero_inner';
import Latest_Blog from '../Components/Latest_Blog';
// import Product from '../Components/Product';
import Products from '../Components/Products';
// import Demo from '../Components/Demo';
// import Dashboard from '../Components/Dashboard';

const HomePage = () => {
    return (
        <div>
            <div>
                <HomeBanner />
            </div>
            <div style={{paddingTop:'100px'}}>
                <Products/>
            </div>
            <div style={{paddingTop:'100px'}}>
                <Custom />
            </div>
            <div style={{paddingTop:'100px'}}>
                <Hero_inner />
            </div>
            <div style={{paddingTop:'100px'}}>
                <Latest_Blog/>
            </div>
            {/* <div style={{paddingTop:'100px'}}>
                <Demo />
            </div> */}
            {/* <div style={{paddingTop:'100px'}}>
                <Product/>
            </div> */}
            {/* <div style={{paddingTop:'100px'}}>
                <Dashboard/>
            </div> */}
        </div>
    )
}

export default HomePage;