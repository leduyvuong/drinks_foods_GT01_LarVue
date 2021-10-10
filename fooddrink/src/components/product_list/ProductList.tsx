import React from 'react';
import PropTypes from 'prop-types';
import "./ProductList.scss"
import banner from "./shop-banner.webp";
import img from "./product06.webp";
import { useTranslation } from 'react-i18next';

function ProductList() {
  const { t } = useTranslation();
  return (

    <div className="shop-page-container mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-sm-35 mb-xs-35">
            {/*=======  shop page banner  =======*/}
            <div className="shop-page-banner mb-35">
              <a href="shop-left-sidebar.html">
                <img width={870} height={331} src={banner} className="img-fluid" alt="" />
              </a>
            </div>
            {/*=======  End of shop page banner  =======*/}
            {/*=======  Shop header  =======*/}
            <div className="shop-header mb-35">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 d-flex flex-column flex-sm-row justify-content-between align-items-left align-items-sm-center">
                  {/*=======  Sort by dropdown  =======*/}
                  <div className="sort-by-dropdown d-flex align-items-center mb-xs-10">
                    <p className="mr-10">{t("product_list.sort_by")} : </p>
                    <select name="sort-by" id="sort-by" className="nice-select">
                      <option value={0}>{t("product_list.sort_by_rating")}</option>
                      <option value={0}>{t("product_list.sort_by_name_asc")}</option>
                      <option value={0}>{t("product_list.sort_by_name_dec")}</option>
                      <option value={0}>{t("product_list.sort_by_price_asc")}</option>
                      <option value={0}>{t("product_list.sort_by_price_dec")}</option>
                    </select>
                  </div>
                  {/*=======  End of Sort by dropdown  =======*/}
                  <p className="result-show-message">Showing 1–12 of 41 results</p>
                </div>
              </div>
            </div>
            {/*=======  End of Shop header  =======*/}
            {/*=======  Grid list view  =======*/}
            <div className="shop-product-wrap list row no-gutters mb-35">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">

                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">

                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">

                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">

                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">

                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">

                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">

                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">

                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                {/*=======  Grid view product  =======*/}
                <div className="gf-product shop-grid-view-product">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src={img} className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                    <div className="price-box">

                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of Grid view product  =======*/}
                {/*=======  Shop list view product  =======*/}

                {/*=======  End of Shop list view product  =======*/}
              </div>
            </div>
            {/*=======  End of Grid list view  =======*/}
            {/*=======  Pagination container  =======*/}
            <div className="pagination-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/*=======  pagination-content  =======*/}
                    <div className="pagination-content text-center">
                      <ul>
                        <li><a className="active" href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                      </ul>
                    </div>
                    {/*=======  End of pagination-content  =======*/}
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of Pagination container  =======*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;