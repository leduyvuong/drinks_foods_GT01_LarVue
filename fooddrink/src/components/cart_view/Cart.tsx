import React from 'react';
import PropTypes from 'prop-types';
import img from "./product04.webp";
import "./cart.scss"

Cart.propTypes = {

};

function Cart() {
  return (

    <div className="page-section section mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#">
              {/*=======  cart table  =======*/}
              <div className="cart-table table-responsive mb-40">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="pro-thumbnail">Image</th>
                      <th className="pro-title">Product</th>
                      <th className="pro-price">Price</th>
                      <th className="pro-quantity">Quantity</th>
                      <th className="pro-subtotal">Total</th>
                      <th className="pro-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src={img} className="img-fluid" alt="Product" /></a></td>
                      <td className="pro-title"><a href="#">Cillum dolore tortor nisl fermentum</a></td>
                      <td className="pro-price"><span>$29.00</span></td>
                      <td className="pro-quantity">
                        <div className="pro-qty">
                          <input type="text" defaultValue={1} />
                          <a href="" className="inc qty-btn">+</a>
                          <a href="" className="dec qty-btn">-</a>
                        </div>
                      </td>
                      <td className="pro-subtotal"><span>$29.00</span></td>
                      <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                    </tr>
                    <tr>
                      <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src={img} className="img-fluid" alt="Product" /></a></td>
                      <td className="pro-title"><a href="#">Auctor gravida pellentesque</a></td>
                      <td className="pro-price"><span>$30.00</span></td>
                      <td className="pro-quantity">
                        <div className="pro-qty">
                          <input type="text" defaultValue={1} />
                          <a href="" className="inc qty-btn">+</a>
                          <a href="" className="dec qty-btn">-</a>
                        </div>
                      </td>
                      <td className="pro-subtotal"><span>$60.00</span></td>
                      <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                    </tr>
                    <tr>
                      <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src={img} className="img-fluid" alt="Product" /></a></td>
                      <td className="pro-title"><a href="#">Condimentum posuere consectetur</a></td>
                      <td className="pro-price"><span>$25.00</span></td>
                      <td className="pro-quantity">
                        <div className="pro-qty">
                          <input type="text" defaultValue={1} />
                          <a href="" className="inc qty-btn">+</a>
                          <a href="" className="dec qty-btn">-</a>
                        </div>
                      </td>
                      <td className="pro-subtotal"><span>$25.00</span></td>
                      <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                    </tr>
                    <tr>
                      <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src={img} className="img-fluid" alt="Product" /></a></td>
                      <td className="pro-title"><a href="#">Habitasse dictumst elementum</a></td>
                      <td className="pro-price"><span>$11.00</span></td>
                      <td className="pro-quantity">
                        <div className="pro-qty">
                          <input type="text" defaultValue={1} />
                          <a href="" className="inc qty-btn">+</a>
                          <a href="" className="dec qty-btn">-</a>
                        </div>
                      </td>
                      <td className="pro-subtotal"><span>$11.00</span></td>
                      <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*=======  End of cart table  =======*/}
            </form>
            <div className="row">
              <div className="col-lg-6 col-12">

                {/*=======  End of Discount Coupon  =======*/}
              </div>
              <div className="col-lg-6 col-12 d-flex">
                {/*=======  Cart summery  =======*/}
                <div className="cart-summary">
                  <div className="cart-summary-wrap">
                    <h4>Cart Summary</h4>
                    <p>Sub Total <span>$1250.00</span></p>
                    <p>Shipping Cost <span>$00.00</span></p>
                    <h2>Grand Total <span>$1250.00</span></h2>
                  </div>
                  <div className="cart-summary-button">
                    <button className="checkout-btn">Checkout</button>
                    <button className="update-btn">Update Cart</button>
                  </div>
                </div>
                {/*=======  End of Cart summery  =======*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;