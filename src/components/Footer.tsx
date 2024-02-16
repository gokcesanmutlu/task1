import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { gsap } from 'gsap';
import { useEffect,useRef} from "react";

const Footer = () => {
    useEffect(() => {
  
       
    }, [])
    
  return (
    <section className="flex justify-around">
      <div className="flex flex-col">
        <h3 className="footer-title">Services</h3>
        <div
          className="mb-2 footer-line"
          style={{ width: "17px", height: "2px", backgroundColor: "black" }}
        ></div>
        <a href="#">Email Marketing</a>
        <a href="#">Campaigns</a>
        <a href="#">Brandings</a>
        <a href="#">Offline</a>
      </div>
      <div className="flex flex-col">
        <h3 className="footer-title">About</h3>
        <div
          className="mb-2 footer-line"
          style={{ width: "17px", height: "2px", backgroundColor: "black" }}
        ></div>
        <a href="#">Our Story</a>
        <a href="#">Benefits</a>
        <a href="#">Team</a>
        <a href="#">Careers</a>
      </div>
      <div className="flex flex-col">
        <h3>General</h3>
        <div
          className="mb-2 footer-line"
          style={{ width: "17px", height: "2px", backgroundColor: "black" }}
        ></div>
        <a href="#">FAQs</a>
        <a href="#">Contact</a>
        <a href="#">Security</a>
        <a href="#">Guarantee</a>
      </div>
      <div className="social">
        <h3 className="footer-title">Social</h3>
        <div
          className="mb-2 footer-line"
          style={{ width: "17px", height: "2px", backgroundColor: "black" }}
        ></div>
        <div className="flex gap-3">
          <FaInstagramSquare />
          <FaTwitter />
          <FaFacebookSquare />
        </div>
      </div>
    </section>
  );
};

export default Footer;
