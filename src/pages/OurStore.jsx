import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Stars from '../components/Stars';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Colors from '../components/Colors';
import Container from '../components/Container';
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const handleClick = (newRating) => {
    setRating(newRating);
    if (onChange) {
      OnChange(newRating);
    }
  };
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title="our Store" />
      <Container className="store-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-3">
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By Categories</h3>
              <div className="filter-links">
                <ul className='ps-0'>
                  <li>Home</li>
                  <li>Contact</li>
                  <li>dsfds</li>
                  <li>dsfads</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter by</h3>
              <div>
                <h5 className='sub-title'>Availablity</h5>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id='' />
                    <label className='form-check-label' htmlfor="">In Stock (1)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id='' checked />
                    <label className='form-check-label' htmlfor="">Out of Stock</label>
                  </div>
                </div>
                <h5 className='sub-title'>Price</h5>
                <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating ">
                    <input type="email" class="form-control" id="floatingInput" placeholder="From" />
                    <label for="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="to" />
                    <label for="floatingInput">to</label>
                  </div>
                </div>
                <h5 className='sub-title'>Colors</h5>
                <div>
                  <div>
                    <Colors />
                  </div>
                </div>
                <h5 className='sub-title'>Size</h5>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id='color-1' />
                    <label className='form-check-label' htmlfor="color-1">S (2)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id='color-2' />
                    <label className='form-check-label' htmlfor="color-2">M (2)</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Product Tags</h3>
              <div>
                <div className="products-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Oppo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Speaker
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tablet
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Vivo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Random Products</h3>
              <div>
                <div className="random-products d-flex mt-3">
                  <div className="w-50">
                    <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                  </div>
                  <div className="w-50">
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <Stars totalStars={5} starSize={24} activeColor={"#ffd700"} />
                    <b>$ 100</b>
                  </div>
                </div>
                <div className="random-products d-flex mt-3">
                  <div className="w-50">
                    <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                  </div>
                  <div className="w-50">
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <Stars totalStars={5} starSize={24} activeColor={"#ffd700"} />
                    <b>$ 100</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block">Sort By:</p>
                  <select class="form-select" name='name' className='form-control form-select' defaultValue={"manual"}>
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="1">Lorem ipsum dolor sit.</option>
                    <option value="2">Lorem ipsum dolor sit amet.</option>
                    <option value="3">Lorem, ipsum.</option>
                  </select>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <p className="totalproducts" style={{ width: "100px" }}>21 Products</p>
                  <div className='d-flex align-items-center gap-10 grid'>
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list pb-5 mt-3">
              <div className="d-flex flex-wrap gap-15">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>

      </Container >
    </>
  );
}

export default OurStore;
