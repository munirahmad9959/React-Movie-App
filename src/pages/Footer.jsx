import React from 'react';
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of Service',
        'Privacy Policy',
    ];
    const locations = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermentum odio',
        'Justo eget',
        'Fermentum iaculis',
    ];

    return (
        <footer id='footer' className='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/" className="logo d-flex align-items-center">
                                <span>ByteBox</span>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ab aut earum facere minus. Unde consequatur non commodi veritatis eveniet debitis laborum minima soluta aspernatur cumque incidunt rerum id at in provident natus error, nihil maiores odit! Commodi repellat corrupti assumenda beatae labore similique necessitatibus?</p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter"><FaTwitter /></a>
                                <a href="#" className="facebook"><FaFacebook /></a>
                                <a href="#" className="instagram"><FaInstagram /></a>
                                <a href="#" className="youtube"><FaYoutube /></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                {usefulLinks.map(link => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links"> 
                            <h4>Our Cinemas</h4>
                            <ul>
                                {locations.map(link => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>Street Name <br />City Name, State 123456 <br />
                                Australia <br />
                                <br />
                                <strong>Phone:</strong>+1 92326 5209959 <br />
                                <strong>Email:</strong>byteBox@gmail.com <br /></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright{' '}
                    <strong><span>ByteStudios</span></strong>
                    . All Rights Reserved
                </div>
                <div className="credits">Designed by <a href="#">ByteStudios</a></div>
            </div>

        </footer>
    );
}

export default Footer;
