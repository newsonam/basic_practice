import React, { useEffect, useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import './style.css';
import axios from 'axios';

function Product(props) {
    const [product, setProduct] = useState([]);
     const navigate=useNavigate();

    useEffect(() => {
     // using axios third party library to fetch data from an api
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProduct(response.data);
            }, error => {
                console.log(error);
            });
    });

// In handledetails event handler function , When we click on any card , it will open second page  of particular one clicked product.
// and we are passing product id as unique identifier in  URL to open product details

  const handleDetails=(productId)=>{
    navigate(`/details/${productId}`);
  }



    return (
        <div>
        <div className='container row product-wrapper mt-5 '>
           {      
                product && product.map((item) => {
                    return (
                        <>
                        <div key={item.id} className='col-md-4 d-flex gap-4 cursor-pointer product-card'>
                            <div key={item.id} className="card cursor-pointer mx-auto" style={{height:'20rem',width: '18rem',marginBottom:'15px',backgroundColor:'#A7C7E7'}} onClick={()=>handleDetails(item.id)}>
                                <img key={item.id} src={item.image} className="card-img-top cursor-pointer" alt="..." height='160px' width='100px'/>
                                    <div key={item.id} className="card-body">
                                        <h5 key={item.id} className="card-title">{item.title}</h5>
                                        <div key={item.id} className="d-flex flex-row gap-2 align-items-center justify-content-center align-self-end ">
                                        <button key={item.id} type="button" class="btn btn-primary align-self-end mt-5">Add to Cart</button>
                                       <Link exact to="/details"><button type="button" key={item.id} class="btn btn-primary mt-5" onClick={()=>handleDetails(item.id)}>View Details</button></Link>
                                    
                                    </div>
                                    </div>
                            </div>
                            </div>
                        </>
                    );
                    })
                
                
                
                

}


        </div>
        </div>
    );

        
}

export default Product;