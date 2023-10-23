import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
const Wishlist = () => {
  return (
    <>
      <Meta title={'Wishlist'} />
      <BreadCrumb title="Wishlist" />
      <Container className="wishlist-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-3">
            <div className="wishlist-product-card position-relative">
              <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="cross" />
              <div className="product-card-image">
                <img src="images/speaker.jpg" className='img-fluid w-100' alt="speaker" />
              </div>
            </div>
            <div className='desc py-3 px-3'>
              <h5 className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, aperiam!</h5>
              <h6 className="price">$100</h6>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-product-card position-relative">
              <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="cross" />
              <div className="product-card-image">
                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
              </div>
            </div>
            <div className='desc py-3 px-3'>
              <h5 className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, aperiam!</h5>
              <h6 className="price">$100</h6>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-product-card position-relative">
              <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="cross" />
              <div className="product-card-image">
                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
              </div>
            </div>
            <div className='desc py-3 px-3'>
              <h5 className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, aperiam!</h5>
              <h6 className="price">$100</h6>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-product-card position-relative">
              <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="cross" />
              <div className="product-card-image">
                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
              </div>
            </div>
            <div className='desc py-3 px-3'>
              <h5 className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, aperiam!</h5>
              <h6 className="price">$100</h6>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}

export default Wishlist;
