import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Colors from '../components/Colors';
import Container from '../components/Container';
const CompareProducts = () => {
  return (
    <>
      <Meta title={'Compare Products'} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="cross" />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className='title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatum.
                </h5>
                <h6 className='price mb-3'>$100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>

                  <div className="product-detail">
                    <h5>Avaiability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="product-detail">
                    <h5>Size</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="cross" />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className='title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatum.
                </h5>
                <h6 className='price mb-3'>$100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>

                  <div className="product-detail">
                    <h5>Avaiability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="product-detail">
                    <h5>Size</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
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

export default CompareProducts;
