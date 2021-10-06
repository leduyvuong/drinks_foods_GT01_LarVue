import { useTranslation } from "react-i18next";
import "./ViewLogin.scss";

function ViewLogin() {
  const { t } = useTranslation();
  return (

    <div className="page-content mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
            {/* Login Form s*/}
            <form action="#">
              <div className="login-form">
                <h4 className="login-title">{t("login.content")}</h4>
                <div className="row">
                  <div className="col-md-12 col-12 mb-20">
                    <label>{t("login.email")}</label>
                    <input className="mb-0" type="email" placeholder={t("login.email")} />
                  </div>
                  <div className="col-12 mb-20">
                    <label>{t("login.password")}</label>
                    <input className="mb-0" type="password" placeholder={t("login.password")} />
                  </div>
                  <div className="col-md-8">
                  </div>
                  <div className="col-md-4 mt-10 mb-20 text-start text-md-end">
                    <a className="forget" href="#"> {t("login.forget")}</a>
                  </div>
                  <div className="col-md-12">
                    <button className="register-button mt-0">{t("login.content")}</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6">
            <form action="#">
              <div className="login-form">
                <h4 className="login-title">{t("register.content")}</h4>
                <div className="row">
                  <div className="col-md-6 col-12 mb-20">
                    <label>{t("register.username")}</label>
                    <input className="mb-0" type="text" placeholder={t("register.username")} />
                  </div>
                  <div className="col-md-6 col-12 mb-20">
                    <label>{t("register.full_name")}</label>
                    <input className="mb-0" type="text" placeholder={t("register.full_name")} />
                  </div>
                  <div className="col-md-12 mb-20">
                    <label>{t("register.email")}</label>
                    <input className="mb-0" type="email" placeholder={t("login.email")} />
                  </div>
                  <div className="col-md-6 mb-20">
                    <label>{t("register.password")}</label>
                    <input className="mb-0" type="password" placeholder={t("login.password")} />
                  </div>
                  <div className="col-md-6 mb-20">
                    <label>{t("register.password_confirm")}</label>
                    <input className="mb-0" type="password" placeholder={t("register.password_confirm")} />
                  </div>
                  <div className="col-12">
                    <button className="register-button mt-0">{t("register.content")}</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  );
}

export default ViewLogin;