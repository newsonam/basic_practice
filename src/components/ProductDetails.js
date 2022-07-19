
import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ProductDetails() {
    let { id } = useParams();
    const [details, setDetails] = useState([]);
    console.log(id);
    useEffect(() => {
        // using axios third party library to fetch data from an api
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setDetails(response.data);
            }, error => {
                console.log(error);
            });
    }, [id]);


    return (
        <>
            {
                details && Object.entries(details) && (


                    <div className='product-card container  '>
                        <div className="card  cursor-pointer mx-auto w-75 h-75 mt-3 card-details" >
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={details.image} className="cursor-pointer product-image" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex flex-column align-items-start justify-content-start">
                                        <h5 className="card-title product-title">Title:-{details.title}</h5>
                                        <p className="card-text card-desc"> <b>Description:-</b>{details.description}</p>
                                        <p className="card-text"> <b>Price:-</b>{details.price}</p>
                                        <p className="card-text"> <b>Category:-</b>{details.category}</p>
                                        <div className="d-flex flex-row gap-2 align-items-center justify-content-center">
                                            <button type="button" class="btn btn-primary">Add to Cart</button>
                                            <button type="button" class="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );



}

export default ProductDetails;