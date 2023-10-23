import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const ResetPassword = () => {
  return (
    <>
      <Container class1="reset-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className='text-center mb-3'>Reset your Password</h3>
              <p className='text-center'>We will send you an email to reset your password</p>
              <form className='d-flex flex-column gap-15'>
                <CustomInput type="password1" name="password2" placeholder="Password" className />
                <CustomInput type="password2" name="password2" placeholder="Retry password" className />
                <div className='d-flex flex-column justify-content-center gap-15 align-items-center mt-3'>
                  <button className="button border-0" type='submit'>
                    Submit
                  </button>
                  <Link to="/login" className='mt-3'>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}

export default ResetPassword;
