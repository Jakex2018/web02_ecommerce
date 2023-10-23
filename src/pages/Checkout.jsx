import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import watch from '../assets/images/watch.jpg'
const Checkout = () => {
  return <>
    <Meta title={"Checkout"} />
    <BreadCrumb title="Checkout" />
    <Container class1="checkout-wrapper home-wrapper-2 py-5">

      <div className="row">
        <div className="col-7">
          <div className="checkout-left-data">
            <h3 className="website-name">Dev Corner</h3>
            <nav
              style={{ "--bs-breadcrumb-divider": '>' }}
              aria-label='breadcrumb'
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/cart" className='text-dark'>Cart</Link>
                </li>
                &nbsp; /
                <li className="breadcrumb-item active">
                  Information
                </li>
                &nbsp; /
                <li className="breadcrumb-item">
                  Shipping
                </li>
                &nbsp; /
                <li className="breadcrumb-item active">
                  Payment
                </li>
              </ol>
            </nav>
            <h4 className='title total'>Contact Information</h4>
            <p className="user-details total">
              ddasd sdasd(pusugu@hotmail.com)
              <h4 className='mb-3'>Shipping Address</h4>
            </p>
            <form action="" className='d-flex gap-15 flex-wrap justify-content-between' method="post">
              <div className='w-100'>
                <select name="" className='form-control form-select' id="">
                  <option value="" selected disabled>
                    Select Country
                  </option>
                </select>
              </div>
              <div className='flex-grow-1'>
                <input type="text" className='form-control' placeholder='First Name' />
              </div>
              <div className='flex-grow-1'>
                <input type="text" className='form-control' placeholder='Last Name' />
              </div>
              <div className='w-100'>
                <input type="text" className='form-control' placeholder='address' />
              </div>
              <div className='w-100'>
                <input type="text" className='form-control' placeholder='Apartment,Suite,etc' />
              </div>
              <div className='flex-grow-1'>
                <input type="text" className='form-control' placeholder='City' />
              </div>
              <div className='flex-grow-1'>
                <select name="" className='form-control form-select' id="">
                  <option value="" selected disabled>
                    Select State
                  </option>
                </select>
              </div>
              <div className='flex-grow-1'>
                <input type="text" className="form-control" placeholder='zipcode' />
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <Link to="/cart" className='text-dark'>
                    <BiArrowBack className='me-2' /> Return to Cart</Link>
                  <Link to="/cart" className='button'>Continue to Shipping</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-5">
          <div className='border-bottom py-4'>
            <div className='d-flex gap-10 align-items-center'>
              <div className='w-75 d-flex gap-10'>
                <div className='w-25 position-relative'>
                  <span
                    style={{ top: "-10px", right: '2px' }}
                    className='badge bg-secondary text-white rounded-circle p-2 position-absolute'
                  >
                    1
                  </span>
                  <img src={watch} alt="" className='img-fluid' />
                </div>
                <div>
                  <h5 className="total-price">dasdas</h5>
                  <p className='total-price'>s / $dasdas</p>
                </div>
              </div>
              <div className='flex-grow-1'>
                <h5 className='total'>$ 100</h5>
              </div>
            </div>
          </div>
          <div className='border-bottom py-4'>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='total'>SubTotal</p>
              <p className='total-price'>$1000</p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-0 total'>Shipping</p>
              <p className='mb-0 total-price'>$1000</p>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
            <h4 className='total'>Total</h4>
            <h5 className='total-price'>$1000</h5>
          </div>
          <div></div>
        </div>
      </div>

    </Container>
  </>
}

export default Checkout;
