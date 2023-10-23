import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import Stars from '../components/Stars';
import Color from '../components/Colors';
import { BsHeart } from 'react-icons/bs';
import { IoGitCompare } from 'react-icons/io5';
import Container from '../components/Container';
const Singleproduct = () => {


  const [orderedProduct, setOrderedProduct] = useState(true);
  const handleClick = (newRating) => {
    setRating(newRating);
    if (onChange) {
      OnChange(newRating);
    }
  };
  return (
    <>
      <Meta title={'Single Products'} />
      <BreadCrumb title="Single Products" />
      <Container class1="main-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="" />
              </div>
            </div>
            <div className="other-products-images d-flex flex-wrap gap-15">
              <div>
                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" />
              </div>
              <div>
                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" />
              </div>
              <div>
                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" />
              </div>
              <div>
                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3>APPLE Watch Series 2  42 Mm Stainless Steel Case</h3>
              </div>
              <div className="border-bottom py-2">
                <p className="price">$100.00</p>
                <div className='d-flex gap-10 align-items-center'>
                  <Stars totalStars={5} starSize={24} activeColor={"#ffd700"} OnChange={handleClick} />
                  <p className='p-review mb-0'>(1 reviews)</p>
                </div>
                <a className='review-btn' href="#review">Write a review</a>
              </div>
              <div className="border-bottom py-3">
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Type :</h3>
                  <p className='product-data'>GFd</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Brand :</h3>
                  <p className='product-data'>GFd</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Categories :</h3>
                  <p className='product-data'>GFd</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Tags :</h3>
                  <p className='product-data'>GFd</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>SKU :</h3>
                  <p className='product-data'>GFd</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Avaivality :</h3>
                  <p className='product-data'>GFd</p>
                </div>
                <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                  <h3 className='product-heading'>Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className='badge border border-1 bg-white text-dark border-secondary'>M
                    </span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>L
                    </span>
                  </div>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Color :</h3>
                  <div className='mt-2'><Color /></div>
                </div>
                <div className='d-flex gap-15 flex-row align-items-center mt-2'>
                  <h3 className='product-heading'>Quantity:</h3>
                  <div>
                    <input
                      type="number"
                      name="number"
                      id=""
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                      className='form-control'
                      placeholder='1' />
                  </div>
                  <div className='d-flex gap-30 align-items-center ms-5'>
                    <button className="button border-0">
                      Add to cart
                    </button>
                    <button className='button signup border-0'>Buy it Now</button>
                  </div>
                </div>
                <div className='d-flex gap-30 align-items-center mt-3'>
                  <div><BsHeart className='fs-5 me-2' /><a href="">Add to compare</a></div>
                  <div><IoGitCompare className='fs-5 me-2' /><a href="">Add to wishlist</a></div>
                </div>
                <div className='d-flex flex-column gap-10 my-2 mt-3'>
                  <h3 className='product-heading'>Shipping & Returns :</h3>
                  <p className='product-data'>Free shipping and returns available on all orders!
                    We ship all US domestic orders within 5-10 business days!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className='bg-white p-3'>
                <p className="bg-white p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum tempora odio possimus, dolorem omnis neque praesentium id eaque architecto dignissimos saepe iusto libero asperiores.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2 pb-5">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="reviews-inner-wrapper">
              <div className="reviews-content d-flex justify-content-between align-items-end">
                <div>
                  <h4 className='mb-2'>Customer Reviews</h4>
                  <div className='d-flex gap-10'>
                    <Stars totalStars={5} starSize={15} activeColor={"#ffd700"} OnChange={handleClick} />
                    <p className='mb-8'>Based on 3 reviews</p>
                  </div>
                </div>
                {
                  orderedProduct && (
                    <div>
                      <a className='text-dark text-decoration-underlane' href="#">Write a Review</a>
                    </div>
                  )}
              </div>
              <div className="reviews-form">
                <h4 className='mt-3'>Write a Review</h4>
                <form action="" method="post" className='d-flex flex-column gap-15'>
                  <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='Enter your Name' className="form-control" />
                  </div>
                  <div>
                    <label htmlFor="">Email</label>
                    <input type="text" name='email' placeholder='email' className="form-control" />
                  </div>
                  <div>
                    <label htmlFor="">Rating</label>
                    <Stars totalStars={5} starSize={15} activeColor={"#ffd700"} OnChange={handleClick} />
                  </div>
                  <div>
                    <label htmlFor="">Review Title</label>
                    <input type="text" name="review" id="review" placeholder='Give your review title' className='form-control' />
                  </div>
                  <div>
                    <label htmlFor="">Body of Review (1500)</label>
                    <textarea aria-label="" placeholder='Comentario' className='form-control'></textarea>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button className='button border-0 mb-3'>Submit</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6>Bb
                      Angel HTC on Jan 19, 2023</h6>
                    <Stars totalStars={5} starSize={15} activeColor={"#ffd700"} OnChange={handleClick} />
                  </div>
                  <p className='mt-3'>Bbbbnnnnnnnb.........</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row ">
          <ProductCard />
        </div>
      </Container>
    </>
  );
}
export default Singleproduct;