import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const ForgotPassword = () => {
  return (
    <>
      <Meta title={'Forgot Password'} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="forgot-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="login-card">
            <h3 className='text-center mb-3'>Reset your Password</h3>
            <p className='text-center'>We will send you an email to reset your password</p>
            <form className='d-flex flex-column gap-15'>
              <CustomInput type="email" name="email" placeholder="email" className />
              <div className='d-flex flex-column justify-content-center gap-15 align-items-center mt-3'>
                <button className="button border-0" type='submit'>
                  Submit
                </button>
                <Link to="/login" className='mt-3'>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
export default ForgotPassword;