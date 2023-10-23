import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './style/App.css'
import OurStore from './pages/OurStore'
import CompareProducts from './pages/CompareProducts'
import Wishlist from './pages/Wishlist'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import SingleBlog from './pages/SingleBlog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/PrivacyPolicy'
import ShippinPolicy from './pages/PrivacyPolicy'
import TermServicy from './pages/PrivacyPolicy'
import Singleproduct from './pages/Singleproduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} name="contact" />
            <Route path='product' element={<OurStore />} name="product" />
            <Route path='blog' element={<Blog />} name="blog" />
            <Route path='cart' element={<Cart />} name="cart" />
            <Route path='checkout' element={<Checkout />} name="checkout" />
            <Route path='compare-products' element={<CompareProducts />} name="compare" />
            <Route path='wishlist' element={<Wishlist />} name="wishlist" />
            <Route path='login' element={<SignIn />} name="signin" />
            <Route path='signup' element={<SignUp />} />
            <Route path='forgot-password' element={<ForgotPassword />} name="forgot" />
            <Route path='reset-password' element={<ResetPassword />} name="reset" />
            <Route path='blog/:id' element={<SingleBlog />} name="singleBlog" />
            <Route path='privacy-policy' element={<PrivacyPolicy />} name="privacy" />
            <Route path='refund-policy' element={<RefundPolicy />} name="refund" />
            <Route path='shippin-policy' element={<ShippinPolicy />} name="shippin" />
            <Route path='terms-servicy' element={<TermServicy />} name="terms" />
            <Route path='product/:id' element={<Singleproduct />} name="Singleproduct" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App