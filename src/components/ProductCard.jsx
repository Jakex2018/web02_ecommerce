import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Stars from './Stars';



import prodcompare from '../../public/images/prodcompare.svg'
import wish from '../../public/images/wish.svg'
import watch1 from '../../public/images/watch.jpg'
import watch2 from '../../public/images/watch2.jpg'
import view from '../../public/images/view.svg'
import addToCart from '../../public/images/add-cart.svg'
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  const handleClick = (newRating) => {
    setRating(newRating);
    if (onChange) {
      OnChange(newRating);
    }
  };

  return (
    <>
      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link
          to={`${location.pathname !== "/product" ? "/product/:id" :
            location.pathname == "/product/:id" ? "/:id" : ":id"}`}
          className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'><img src={wish} alt="" /></button>
          </div>
          <div className="product-image">
            <img src={watch1} alt="product image " className='img-fluid' />
            <img src={watch2} alt="product image " className='img-fluid' />
          </div>
          <div className='product-details'>
            <h6 className="brand">Havels</h6>
            <h5 className='product-title'>Headphone</h5>
            <Stars totalStars={5} starSize={24} activeColor={"#ffd700"} OnChange={handleClick} />
            <p className="price">$100.00</p>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit pariatur voluptatem itaque, mollitia ullam porro sed nobis quod voluptates fuga.</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className='border-0 bg-transparent'><img src={prodcompare} alt="addCart" /></button>
              <button className='border-0 bg-transparent'><img src={view} alt="addCart" /></button>
              <button className='border-0 bg-transparent'><img src={addToCart} alt="addCart" /></button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
