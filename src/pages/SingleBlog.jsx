import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import blog from '../../public/images/blog-1.jpg'
import Container from '../components/Container';
///import blog from '../../public/images/blog-1.jpg'
const SingleBlog = () => {
  return (
    <>
      <Meta title={'Single Blog'} />
      <BreadCrumb title="Single Blog" />
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className='d-flex align-items-center gap-15'>
                <AiOutlineArrowLeft className='fs-4' />Go back to Bloc
              </Link>
              <h3 className="title">
                A Beatiful Sunday Morning Renaissance
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dicta amet. Tempore porro veritatis accusamus quidem a consequatur, inventore labore alias sed veniam quos necessitatibus maxime unde tempora, quae minus.</p>
              <img src={blog} alt="blog" />
            </div>
          </div>
          <div className="col-9">
          </div>
        </div>

      </Container>
    </>
  );
}

export default SingleBlog;
