import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="flex justify-around mt-5 footer">
      <div className="flex flex-col gap-2">
        <h3 className="footer-title">{t("services")}</h3>
        <div
          className="mb-2 footer-line"
          style={{ width: "17px", height: "2px", backgroundColor: "black" }}
        ></div>
        <a href="#">{t("marketing")}</a>
        <a href="#">{t("campaigns")}</a>
        <a href="#">{t("brandings")}</a>
        <a href="#">{t("offline")}</a>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="footer-title">{t("about")}</h3>
        <div
          className="mb-2 footer-line"
          style={{ width: "17px", height: "2px", backgroundColor: "black" }}
        ></div>
        <a href="#">{t("ourStory")}</a>
        <a href="#">{t("benefits")}</a>
        <a href="#">{t("team")}</a>
        <a href="#">{t("careers")}</a>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="footer-title">{t("general")}</h3>
        <div
          className="mb-2 footer-line"
          style={{ width: "17px", height: "2px", backgroundColor: "black" }}
        ></div>
        <a href="#">{t("faqs")}</a>
        <a href="#">{t("contact")}</a>
        <a href="#">{t("security")}</a>
        <a href="#">{t("guarantee")}</a>
      </div>
      <div className="social">
        <h3 className="footer-title">{t("social")}</h3>
        <div
          className="mb-2 footer-line"
          style={{ width: "17px", height: "2px", backgroundColor: "black" }}
        ></div>
        <div className="flex gap-3">
          <i>
            {" "}
            <FaInstagramSquare />
          </i>
          <i>
            <FaTwitter />
          </i>
          <i>
            <FaFacebookSquare />
          </i>
        </div>
      </div>
    </section>
  );
};

export default Footer;
