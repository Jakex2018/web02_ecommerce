import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';
const Blog = () => {
  return (
    <>
      <Meta title={'Home News'} />
      <BreadCrumb title="News" />
      <Container class1="blog-wrapper py-5 home-wrapper-2">

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
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <BlogCard />
              </div>
              <div className="col-6">
                <BlogCard />
              </div>
              <div className="col-6 mt-5">
                <BlogCard />
              </div>
              <div className="col-6 mt-5">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Blog;