import React from 'react';
import PropTypes from 'prop-types';
import "./checkout.scss"
import { useTranslation } from 'react-i18next';
Checkout.propTypes = {

};

function Checkout() {
  const { t } = useTranslation();
  return (

    <div className="page-section section mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Checkout Form s*/}
            <form action="#" className="checkout-form">
              <div className="row row-40">
                <div className="col-lg-7 mb-20">
                  {/* Billing Address */}
                  <div id="billing-form" className="mb-40">
                    <h4 className="checkout-title">{t("checkout.bill_address")}</h4>
                    <div className="row">
                      <div className="col-md-12 col-12 mb-20">
                        <label>{t("checkout.full_name")}</label>
                        <input type="text" placeholder={t("checkout.full_name")} />
                      </div>
                      <div className="col-md-6 col-12 mb-20">
                        <label>{t("checkout.email")}</label>
                        <input type="email" placeholder={t("checkout.email")} />
                      </div>
                      <div className="col-md-6 col-12 mb-20">
                        <label>{t("checkout.phone")}</label>
                        <input type="text" placeholder={t("checkout.phone")} />
                      </div>
                      <div className="col-12 mb-20">
                        <label>{t("checkout.address")}</label>
                        <input type="text" placeholder={t("checkout.address") + " 1"} />
                        <input type="text" placeholder={t("checkout.address") + " 2"} />
                      </div>
                      <div className="col-md-6 col-12 mb-20">
                        <label>{t("checkout.country")}</label>
                        <input type="text" placeholder={t("checkout.country")} />
                      </div>
                      <div className="col-md-6 col-12 mb-20">
                        <label>{t("checkout.town/city")}</label>
                        <input type="text" placeholder={t("checkout.town/city")} />
                      </div>
                      <div className="col-12 mb-20">
                        <div className="check-box">
                          <input type="checkbox" id="create_account" />
                          <label htmlFor="create_account">{t("checkout.create_account")}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row">
                    {/* Cart Total */}
                    <div className="col-12 mb-60">
                      <h4 className="checkout-title">{t("checkout.cart_total")}</h4>
                      <div className="checkout-cart-total">
                        <h4>{t("checkout.product") + " "} <span>{t("checkout.total")}</span></h4>
                        <ul>
                          <li>Cillum dolore tortor nisl X 01 <span>$25.00</span></li>
                          <li>Auctor gravida pellentesque X 02 <span>$50.00</span></li>
                          <li>Condimentum posuere consectetur X 01 <span>$29.00</span></li>
                          <li>Habitasse dictumst elementum X 01 <span>$10.00</span></li>
                        </ul>
                        <p>{t("checkout.sub_total")} <span>$104.00</span></p>
                        <p>{t("checkout.ship")} <span>$00.00</span></p>
                        <h4>{t("checkout.grand_total")} <span>$104.00</span></h4>
                      </div>
                    </div>
                    {/* Payment Method */}
                    <div className="col-12">
                      <h4 className="checkout-title">{t("checkout.payment")}</h4>
                      <div className="checkout-payment-method">
                        <div className="single-method">
                          <input type="radio" id="payment_check" name="payment-method" defaultValue="check" />
                          <label htmlFor="payment_check">{t("checkout.payment_on_delivery")}</label>
                        </div>
                        <div className="single-method">
                          <input type="radio" id="payment_bank" name="payment-method" defaultValue="bank" />
                          <label htmlFor="payment_bank">{t("checkout.payment_on_paypal")}</label>
                        </div>
                      </div>
                      <button className="place-order">{t("checkout.place_order")}</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;