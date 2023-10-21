import React from 'react';
import img_1 from '../assets/imeges/collection/cool-tshirts.jpg';
import img_2 from '../assets/imeges/collection/fresh-picks.jpg';

const CustomContentSection = () => {
    return (
        <div>
            <div className="section custom-content-section">
            <div className="container">
                <div className="row custom-content">
                    <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                        <div className="custom-item-inner custom-item-inner-image">
                            <img
                                className="custom-image blur-up ls-is-cached lazyloaded"
                                data-src="assets/images/collection/cool-tshirts.jpg"
                                src={img_1}
                                alt="Cool T-shirts Closet"
                                title="Cool T-shirts Closet"
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                        <div className="custom-item-inner custom-item-inner-text text-md-left">
                            <h2 className="h3">Cool T-shirts Closet</h2>
                            <p>
                                It’s time for a SS18 wardrobe update! We’ve got the<br /> latest arrivals and all the hottest trends.
                                <br /> Shop our newest clothing, footwear &amp; accessories.
                            </p>
                            <button><a href="collection-3columns.html" className="btn border-btn-2">
                                Discover More
                            </a></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                        <div className="custom-item-inner custom-item-inner-text text-md-left">
                            <h2 className="h3">All Fresh Picks</h2>
                            <p>
                                Discover your new SS18 wardrobe favourites from<br /> our latest collection of clothing, footwear &amp;
                                accessories. <br /> Treat yourself to some new staple pieces to see you through<br /> the new season
                                and beyond.
                            </p>
                            <button><a href="collection-4columns.html" className="btn border-btn-2">
                                Find Blouses Here
                            </a></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                        <div className="custom-item-inner custom-item-inner-image">
                            <img
                                className="custom-image blur-up ls-is-cached lazyloaded"
                                data-src="assets/images/collection/fresh-picks.jpg"
                                src={img_2}
                                alt="All Fresh Picks"
                                title="All Fresh Picks"
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CustomContentSection;
