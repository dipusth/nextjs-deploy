import { ShoppingCart } from "lucide-react";
import { FooterWrapper } from "./Styles";

const Footer = () => {
  return (
    <FooterWrapper className="footer bg-primary-dark">
      <div className="container">
        <div className="lg:flex justify-between md:py-11 pb-13">
          <div className=" flex flex-col gap-4 lg:gap-8 flex-1 mr-32">
            <span className="font-bold text-4xl flex items-center">
              <ShoppingCart size={40} className="text-white mr-3" />
              Online <small className="text-sm block">Shopping</small>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quam in labore doloribus ex, necessitatibus optio illo nostrum,
              maiores, sed quia soluta non laudantium alias dicta quos ipsa
              aperiam accusantium.{" "}
            </p>
          </div>
          <div className="quick-links flex justify-between flex-3 flex-grow-2">
            <div>
              <h5 className="text-6 font-bold pb-5">Get to know us</h5>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Become a Seller</a>
                </li>
                <li>
                  <a href="#">Become an Affiliate</a>
                </li>
                <li>
                  <a href="#">Advertise Your Products</a>
                </li>
                <li>
                  <a href="#">Pay on Mechants</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-6 font-bold pb-5">Additional Links</h5>
              <ul>
                <li>
                  <a href="#">Your Account</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Return Center</a>
                </li>
                <li>
                  <a href="#">Press Release</a>
                </li>
                <li>
                  <a href="#">FQQs</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-6 font-bold pb-5">Get Connected</h5>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
              </ul>
              <ul className="flex justify-between social-link gap-3 xl:gap-6">
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between footer-bottom">
          <p>Copyright © 2024 onlineshopping. All rights reserved.</p>
          <ul className="flex list-divider justify-center">
            <li>
              <a href="#">Privay Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Condition</a>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
