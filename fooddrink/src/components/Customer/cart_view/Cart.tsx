import img from "./product04.webp";
import "./cart.scss"
import { useEffect, useState } from "react";
import axios from "axios";

const Cart: React.FC = () => {
  let check = 0;
  const [carts, setCarts] = useState([] as any[]);
  const [subTotal, setSubTotal] = useState(0);

  function findIndexPrd(id: number) {
    let index: number = -1;
    for (let i = 0; carts.length; i++) {
      if (carts[i].product_id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, [check])

  function caculateSubTotal() {
    let totalList = document.getElementsByClassName("pro-subtotal");
    for (let i = 0; totalList.length; i++) {

    }
  }

  function incQuantity(id: number) {
    let quantity = document.getElementById("quantity" + id) as HTMLInputElement;
    let quantityNew = (parseInt(quantity.value) + 1).toString();
    quantity.value = quantityNew;
    let index = findIndexPrd(id);
    carts[index].quantity = quantityNew;
    console.log(id)
  }

  function decQuantity(id: number) {
    let quantity = document.getElementById("quantity" + id) as HTMLInputElement;
    if (parseInt(quantity.value) > 1) {
      let quantityNew = (parseInt(quantity.value) - 1).toString();
      quantity.value = quantityNew;
      let index = findIndexPrd(id);
      carts[index].quantity = quantityNew;
    }
  }

  function removeCart(id: number) {
    let index = findIndexPrd(id);
    if (index != -1) {
      carts.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(carts));
      window.location.reload();
    }

  }

  function updateCart() {
    localStorage.setItem("cart", JSON.stringify(carts));
    check++;
  }

  return (

    <div className="page-section section mb-50">
      {
        carts.length > 0 ? (
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

                        {
                          carts.map(prd => (
                            <tr key={prd.product_id}>
                              <td className="pro-thumbnail"><a href="/#"><img width={350} height={350} src={img} className="img-fluid" alt="Product" /></a></td>
                              <td className="pro-title"><a href="/#">{prd.product_name}</a></td>
                              <td className="pro-price"><span>{prd.price}</span></td>
                              <td className="pro-quantity">
                                <div className="pro-qty">
                                  <input id={"quantity" + prd.product_id} type="text" defaultValue={prd.quantity} />
                                  <a onClick={() => incQuantity(prd.product_id)} className="inc qty-btn">+</a>
                                  <a onClick={() => decQuantity(prd.product_id)} className="dec qty-btn">-</a>
                                </div>
                              </td>
                              <td className="pro-subtotal"><span>{prd.price * prd.quantity}</span></td>
                              <td className="pro-remove"><a onClick={() => removeCart(prd.product_id)}><i className="fa fa-trash-o" /></a></td>
                            </tr>
                          ))

                        }
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
                        <button className="checkout-btn"><a href="/checkout">Checkout</a></button>
                        <button onClick={() => updateCart()} className="update-btn">Update Cart</button>
                      </div>
                    </div>
                    {/*=======  End of Cart summery  =======*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Khong co san pham nao</h2>
              </div>
            </div>
          </div>
        )
      }

    </div>
  );
}

export default Cart;