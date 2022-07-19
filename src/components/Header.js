import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
function Header(props) {
    return (
        <>
            <div className='header-wrapper'>
                <h1>BestShop</h1>
                <div className='link-wrapper d-flex gap-4 '>

                    <Link to='/product' className='link'>Home</Link>
                    <Link to='/product' className='link'>About</Link>
                    <Link to='/product' className='link'>Product</Link>
                    <Link to='/product' className='link'>Services</Link>
                    <Link to='/product' className='link'>Contact</Link>

                    <button type="button" class="btn btn-light position-relative">
                        <FaShoppingCart className="cart-icon " />
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            0
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </div>
            </div>

        </>
    );
}

export default Header;