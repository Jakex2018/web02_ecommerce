import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsFacebook, BsPinterest, BsInstagram, BsYoutube } from 'react-icons/bs'
import newsletter from '../../public/images/newsletter.png'
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className='text-white mb-0'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Adress"
                  aria-label="Your Email Adress"
                  aria-describedby="basic-addon2">
                </input>
                <span className="input-group-text p-2" id="basic-addon2">SUBSCRIBE</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>Hno : 277 Near Vill Chopal,<br />
                  Sonipat, Hariana <br /> Pincode:131103
                </address>
                <a href="tel:+91 8264954234" className="mt-3 d-block mb-1 text-white">+91 8264954234</a>
                <a href="mailto:dsadq@gmail.com" className="mt-4 mb-0 d-block mb-3 text-white">dsadq@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="/">
                    <BsTwitter className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    <BsFacebook className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    < BsPinterest className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    <BsInstagram className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    <BsYoutube className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div>
                <div className='footer-links d-flex flex-column'>
                  <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                  <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                  <Link to="/shippin-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                  <Link to="/terms-servicy" className="text-white py-2 mb-1">Terms of Servicy</Link>
                  <Link to="/blog" className="text-white py-2 mb-1">Blogs</Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div>
                <div className='footer-links d-flex flex-column'>
                  <Link className="text-white py-2 mb-1">Search</Link>
                  <Link className="text-white py-2 mb-1">About Us</Link>
                  <Link className="text-white py-2 mb-1">Faq</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                  <Link className="text-white py-2 mb-1">Site Chart</Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptods</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center text-white'>&copy;{new Date().getFullYear()} Powered by developer</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
