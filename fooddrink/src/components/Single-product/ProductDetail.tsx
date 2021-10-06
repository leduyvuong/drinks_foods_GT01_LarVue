import "./index.scss";
import image1 from "./image/product04.webp";
import image2 from "./image/product05.webp";
import image3 from "./image/product06.webp";
import image4 from "./image/product07.webp";
import { useTranslation } from "react-i18next";
import { useState } from "react";
function ProductDetail() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en");
  function SwitchLanguage(e: any) {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div>
      <div className="single-product-content ">
        <div className="container">
          {/*=======  single product content container  =======*/}
          <div className="single-product-content-container mb-35">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12 mb-sm-35 mb-xs-35">
                {/*=======  product image gallery  =======*/}
                <div className="product-image-gallery">
                  <div className="row no-gutters">
                    <div className="col-lg-6 col-md-6">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img img-full">
                        <img width={600} height={600} src={image1} className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product04.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img img-full">
                        <img width={600} height={600} src={image2} className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product05.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img img-full">
                        <img width={600} height={600} src={image3} className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product06.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img img-full">
                        <img width={600} height={600} src={image4} className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product07.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                  </div>
                </div>
                {/*=======  End of product image gallery  =======*/}
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12">
                {/* product quick view description */}
                <div className="product-feature-details">
                  <h2 className="product-title mb-15">Kaoreet lobortis sagittis laoreet</h2>
                  <p className="product-rating">
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star" />
                    <a href="#">(1 {t("product_detail.review")})</a>
                  </p >
                  <h2 className="product-price mb-15">
                    <span className="discounted-price"> $10.00</span>
                  </h2>
                  <p className="product-description mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis
                    vulputate, tristique ut lectus</p>

                  <div className="cart-buttons mb-20">
                    <div className="pro-qty mr-20 mb-xs-20">
                      <input type="text" defaultValue={1} />
                      <a href="" className="inc qty-btn">+</a>
                      <a href="" className="dec qty-btn">-</a>
                    </div>
                    <div className="add-to-cart-btn">
                      <a href="#"><i className="fa fa-shopping-cart" /> {t("product_detail.add_to_cart")}</a>
                    </div >
                  </div >

                  <div className="single-product-category mb-20">
                    <h3>{t("product_detail.categories")}: <span><a href="shop-left-sidebar.html">{t("product_detail.fast_food")}</a></span></h3>
                  </div>
                  <div className="social-share-buttons">
                    <h3>{t("product_detail.share")}</h3>
                    <ul>
                      <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                      <li><a className="pinterest" href="#"><i className="fa fa-pinterest" /></a></li>
                    </ul>
                  </div>
                </div >
                {/* end of product quick view description */}
              </div >
            </div >
          </div >
          {/*=======  End of single product content container  =======*/}
        </div >
      </div >
      {/*=====  End of single product content  ======*/}
      {/*=============================================
  =            single product tab         =
  =============================================*/}
      <div className="single-product-tab-section mb-35">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-slider-wrapper">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-selected="true">{t("product_detail.descrip")}</a>
                  </div >
                </nav >
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <p className="product-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                      obcaecati tempore reiciendis neque facere! Eos, necessitatibus? Fugit iure veritatis
                      quidem velit quaerat quos qui pariatur dolore facilis, aliquid quae voluptatibus
                      dicta. Quae harum velit hic molestias, eius ab cum quidem voluptates modi maiores
                      laboriosam iusto excepturi ex, recusandae aut, facere earum ad vero aperiam. Minima
                      dolores dignissimos ab ipsam atque placeat sapiente officia debitis nobis porro at
                      quia veritatis, quidem id repudiandae ex tempore non. Enim soluta explicabo atque
                      adipisci itaque.</p>
                  </div>
                </div >
              </div >
            </div >
          </div >
        </div >
      </div >
    </div >
  );
}

export default ProductDetail;