import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4 className="">QUICK LINKS</h4>
            <ul>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">Teams and conditons</a>
              </li>
              <li>
                <a href="#">List your Business</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>CATEGORIES</h4>
            <ul>
              <li>
                <a href="#">Top Categories</a>
              </li>
              <li>
                <a href="#">Popular Spaa & Salon</a>
              </li>
              <li>
                <a href="#">Best Deals</a>
              </li>
              <li>
                <a href="#">Latest Submissions</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>CONTACTS</h4>
            <ul>
              <li>
                <p> Connaught Place, New Delhi, India</p>
              </li>
              <li>
                <p> +91 9999-999-999</p>
              </li>
              <li>
                <a href="#">info@spaalon.com</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="">KEEP IN TOUCH</h4>
            <div className="p-2 flex">
              <input
                placeholder="Your email"
                type="text"
                className="p-2 rounded-sm bg-[#1E252C] placeholder:text-slate-600 "
              />
              <button className="text-white bg-orange-600 w-12">&rarr;</button>
            </div>
            <h4 className="mt-4">Follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="" />
        <div className="my-4 float-right">
          <span className="text-white text-sm ">
            {" "}
            &#169; {new Date().getFullYear()} Spaalon
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
