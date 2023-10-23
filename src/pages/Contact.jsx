import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { FaHome, FaPhone, FaEnvelope, FaInfo } from 'react-icons/fa';
import Container from '../components/Container';
const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 contact-wrapper-2">

        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153702.424573415!2d-114.1879048385993!3d39.47412857451662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c6bc78f13f9cd%3A0xbddf4aa56cd7463f!2sUtah%2C%20EE.%20UU.!5e0!3m2!1ses!2sve!4v1680109896639!5m2!1ses!2sve" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between mt-4">
              <div>
                <h3 className='contact-title'>Contact</h3>
                <form action="" className='d-flex flex-column gap-15 mt-5'>
                  <div>
                    <input type="text" name="nombre" id="nombre" placeholder='Nombre' className='w-100 form-control' />
                  </div>
                  <div>
                    <input type="email" name="email" id="email" placeholder='Correo electronico' className='form-control' />
                  </div>
                  <div>
                    <input type="number" name="number" id="number" placeholder='Numero de telefono' className='form-control' />
                  </div>
                  <div>
                    <textarea aria-label="With textarea" placeholder='Comentario' className='form-control'></textarea>
                  </div>
                  <div><button className='button mt-2'>Send</button></div>
                </form>
              </div>
              <div>
                <h3 className='contact-title'>Get In Touch With Us</h3>
                <div className='mt-4'>
                  <div className="mb-3 d-flex align-items-center gap-15">
                    <span><FaHome /></span>
                    <address className='mx-3 mt-3'>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</address>
                  </div>
                  <div className="mb-3 d-flex align-items-center gap-15">
                    <span><FaPhone /></span>
                    <span className='mx-3'>(+91)7-723-4608</span>
                  </div>
                  <div className="mb-3 d-flex align-items-center gap-15">
                    <span><FaEnvelope /></span>
                    <span className='mx-3'><a href="">demo@company.com</a></span>
                  </div>
                  <div className="mb-3 d-flex align-items-center gap-15">
                    <span><FaInfo /></span>
                    <span className='mx-3'>Monday – Friday 10 AM – 8 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}

export default Contact;
