import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const SignIn = () => {
  return (
    <>
      <Meta title={'Login'} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className='text-center mb-3'>Login</h3>
              <form className='d-flex flex-column gap-15'>
                <CustomInput type="email" name="email" placeholder="email" className />
                <CustomInput type="password" name="password" placeholder="password" className />
                <div><Link to="/forgot-password">Forgot Password</Link></div>
                <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                  <button className="button border-0">
                    Login
                  </button>
                  <Link to="/signup" className='button signup'>SignUp</Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}

export default SignIn;

