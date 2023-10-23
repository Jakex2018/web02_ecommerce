import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { categories, services } from '../utils/data';
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main-banner-1" />
              <div className="main-banner-content position-absolute ">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+Pro.</h5>
                <p>From $999.00 or $41.62/mo</p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main-banner-1" />
                <div className="small-banner-content position-absolute ">
                  <h4>BEST SALE.</h4>
                  <h5>Laptops Max.</h5>
                  <p>From $999.00 <br />or $41.62/mo</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main-banner-1" />
                <div className="small-banner-content position-absolute ">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>Buy IPad Air.</h5>
                  <p>From $999.00 <br />or $41.62/mo</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main-banner-1" />
                <div className="small-banner-content position-absolute ">
                  <h4>15% QFF.</h4>
                  <h5>Smartwatch 7.</h5>
                  <p>From $999.00 <br />or $41.62/mo</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main-banner-1" />
                <div className="small-banner-content position-absolute ">
                  <h4>FREE ENGRAVING.</h4>
                  <h5>AirPods Max</h5>
                  <p>From $999.00 <br />or $41.62/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((item, key) => {
                return (
                  <div className='d-flex align-items-center gap-15' key={key}>
                    <img src={item.image} alt="services" />
                    <div>
                      <h6>{item.title}</h6>
                      <p className='mb-0'>{item.tagline}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              {
                categories?.map((item, key) => {
                  return (
                    <div className="d-flex align-items-center gap" key={key}>
                      <div>
                        <h6>{item.title}</h6>
                        <p>{item.tagline}</p>
                      </div>
                      <img src={item.image} alt="" />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
      <Container class1="feactured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Feacture Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-01.webp" className='img-fluid' alt="" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Warch Series 7</h6>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-02.webp" className='img-fluid' alt="" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>STUDIO DISPLAY</h5>
                <h6 className='text-dark'>600 nits of brightness</h6>
                <p className='text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, tenetur.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-03.webp" className='img-fluid' alt="" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>STUDIO DISPLAY</h5>
                <h6 className='text-dark'>600 nits of brightness</h6>
                <p className='text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, tenetur.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/subbanner-04.webp" className='img-fluid' alt="" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>STUDIO DISPLAY</h5>
                <h6 className='text-dark'>600 nits of brightness</h6>
                <p className='text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, tenetur.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <div className='col-12'>
            <div className='d-flex align-items-center gap-30'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>


        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div>
                  <img src="images/brand-01.png" className='mx-4 w-15' alt="brand" />
                </div>
                <div>
                  <img src="images/brand-02.png" className='mx-4 w-15' alt="brand" />
                </div>
                <div>
                  <img src="images/brand-03.png" className='mx-4 w-15' alt="brand" />
                </div>
                <div>
                  <img src="images/brand-04.png" className='mx-4 w-15' alt="brand" />
                </div>
                <div>
                  <img src="images/brand-05.png" className='mx-4 w-15' alt="brand" />
                </div>
                <div>
                  <img src="images/brand-06.png" className='mx-4 w-15' alt="brand" />
                </div>
                <div>
                  <img src="images/brand-07.png" className='mx-4 w-15' alt="brand" />
                </div>
                <div>
                  <img src="images/brand-08.png" className='mx-4 w-15' alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Home;