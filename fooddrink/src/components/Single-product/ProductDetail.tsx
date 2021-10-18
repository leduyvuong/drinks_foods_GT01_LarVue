import "./index.scss";
import image1 from "./image/product04.webp";
import image2 from "./image/product05.webp";
import image3 from "./image/product06.webp";
import image4 from "./image/product07.webp";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

interface ParamTypes {
  id: string
}

const ProductDetail: React.FC = () => {
  const productInit = {
    product_name: "",
    price: "",
    category_id: "",
    description: ""
  }
  const { t } = useTranslation();
  const [product, setProduct] = useState(productInit);
  const { id } = useParams<ParamTypes>();
  useEffect(() => {
    const requestUrl = "/api/v1/products/" + id;
    async function fetchProduct() {
      await axios.get(requestUrl)
        .then(res => {
          setProduct(res.data);
          console.log(res.data);
        })
    }
    fetchProduct();
  }, [])
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
                  <h2 className="product-title mb-15">{product.product_name}</h2>
                  <p className="product-rating">
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star" />
                    <a href="#">(1 {t("product_detail.review")})</a>
                  </p >
                  <h2 className="product-price mb-15">
                    <span className="discounted-price"> {product.price}</span>
                  </h2>
                  <p className="product-description mb-20">{product.description}</p>

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
                    <h3>{t("product_detail.categories")}: <span><a href="shop-left-sidebar.html">{product.category_id == "1" ? t("food") : t("drink")}</a></span></h3>
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
    </div >
  );
}

export default ProductDetail;