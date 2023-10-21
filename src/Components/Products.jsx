import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Products = () => {

    const [data, setdata] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState([]);

    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            // console.log(Products);
            if (componentMounted) {
                setdata(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <div className="col=md-3">
                <Skeleton height={350} />
            </div>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="button d-flex justify-content-center mb-5 pb-5">
                    <div className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Mens Clothing</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Womens Clothing</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</div>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" /><hr />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bolder">${product.price}</p>
                                        <Link to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <>
            <div className="container my-5 md-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        {/* <h1 className="display-6 fw-bolder text-center">Latest Products</h1> */}
                        <h2 className="display-6 fw-bolder text-center">best selling products</h2>
                        <p style={{ textAlign: 'center' }}>Here you can set up to 8 tabs for your store collection.<br />This will look perfect on all device.</p>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    )
}

export default Products;