import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaTwitter, FaBuilding } from 'react-icons/fa';
import { MdAccountCircle, MdOutlineHelp } from 'react-icons/md';
import { BiMoney } from 'react-icons/bi';


function Footer(props) {
    return (
        <footer>
            <div className='d-flex flex-row justify-content-center gap-5 bg-dark text-white footer-wrapper '>
                <div className="left-wrapper d-flex flex-column align-items-center mt-3 w-25">
                    <h5 className="footer-heading">Connect with US</h5>


                    <div className="link1-wrapper">
                        <a href="https://www.facebook.com/"  > <AiFillFacebook /> Facebook</a>
                        <a href="https://twitter.com/login" ><FaTwitter /> Twitter</a>
                        <a href="https://www.instagram.com/?hl=en" ><AiFillInstagram /> Instagram</a>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-start mt-3 w-25 right-wrapper'>
                    <h5 className="footer-heading">Let us help you</h5>
                    <h6><MdAccountCircle />Your account</h6>
                    <h6><FaBuilding />Returns Centre</h6>
                    <h6><BiMoney /> 100% Purchase Protection </h6>
                    <h6> <MdOutlineHelp />Help</h6>
                </div>
            </div>
        </footer>

    );
}

export default Footer;