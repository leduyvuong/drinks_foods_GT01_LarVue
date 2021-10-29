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
    id: "",
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

  function incQuantity() {
    let quantity = document.getElementById("quantity") as HTMLInputElement;
    quantity.value = (parseInt(quantity.value) + 1).toString();
  }

  function decQuantity() {
    let quantity = document.getElementById("quantity") as HTMLInputElement;
    if (parseInt(quantity.value) > 1)
      quantity.value = (parseInt(quantity.value) - 1).toString();
  }

  function addCart() {
    let quantity = document.getElementById("quantity") as HTMLInputElement;
    const prd = {
      product_id: product.id,
      product_name: product.product_name,
      price: product.price,
      quantity: parseInt(quantity.value),
    };
    if (localStorage.getItem("cart")) {
      let check = 0;
      let carts = JSON.parse(localStorage.getItem("cart") || "[]");
      for (let i = 0; i < carts.length; i++) {
        if (carts[i].product_id === prd.product_id) {
          carts[i].quantity += prd.quantity;
          check = 1;
        }
      }
      if (check === 0) {
        carts.push(prd);
      }
      localStorage.setItem("cart", JSON.stringify(carts));
    } else {
      let carts: any[] = [];
      carts.push(prd)
      localStorage.setItem("cart", JSON.stringify(carts));
    }
    console.log(localStorage.getItem("cart"));
  }
  return (
    <div>
      <div className="single-product-content " key={product.id}>
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
                    <a href="/#">(1 {t("product_detail.review")})</a>
                  </p >
                  <h2 className="product-price mb-15">
                    <span className="discounted-price"> {product.price}</span>
                  </h2>
                  <p className="product-description mb-20">{product.description}</p>

                  <div className="cart-buttons mb-20">
                    <div className="pro-qty mr-20 mb-xs-20">
                      <input id="quantity" type="number" defaultValue={1} />
                      <a onClick={() => incQuantity()} className="inc qty-btn">+</a>
                      <a onClick={() => decQuantity()} className="dec qty-btn">-</a>
                    </div>
                    <div className="add-to-cart-btn">
                      <a onClick={() => addCart()}><i className="fa fa-shopping-cart" /> {t("product_detail.add_to_cart")}</a>
                    </div >
                  </div >

                  <div className="single-product-category mb-20">
                    <h3>{t("product_detail.categories")}: <span><a href="shop-left-sidebar.html">{product.category_id == "1" ? t("food") : t("drink")}</a></span></h3>
                  </div>
                  <div className="social-share-buttons">
                    <h3>{t("product_detail.share")}</h3>
                    <ul>
                      <li><a className="twitter" href="/#"><i className="fa fa-twitter" /></a></li>
                      <li><a className="facebook" href="/#"><i className="fa fa-facebook" /></a></li>
                      <li><a className="google-plus" href="/#"><i className="fa fa-google-plus" /></a></li>
                      <li><a className="pinterest" href="/#"><i className="fa fa-pinterest" /></a></li>
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