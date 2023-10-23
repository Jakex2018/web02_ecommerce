import React from 'react';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/UserSlice';

const registerSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup.string().email("email is valided").required("email is Required"),
  mobile: yup.string().required("mobile is valided"),
  password: yup.string().required("password is Required")
})

const SignUp = () => {
  const Dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      Dispatch(registerUser(values))
    },
  });
  return (
    <>
      <Container class1="signup-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className='text-center mb-3'>Create Acount</h3>
              <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <CustomInput
                  type="text"
                  name="firstName"
                  placeholder="Firstname"
                  onChange={formik.handleChange("firstName")}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur("firstName")}
                />
                <div className="error">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
                <CustomInput
                  type="text"
                  name="lastName"
                  placeholder="lastname"
                  onChange={formik.handleChange("lastName")}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur("lastName")}
                />
                <div className="error">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
                <CustomInput
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={formik.handleChange("email")}
                  value={formik.values.email}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="mobile"
                  onChange={formik.handleChange("mobile")}
                  value={formik.values.mobile}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={formik.handleChange("password")}
                  value={formik.values.password}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                  <button type="submit" className="button signup border-0">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default SignUp;