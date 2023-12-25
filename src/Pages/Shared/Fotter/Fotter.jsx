import React from "react";
import {
  FaAmericanSignLanguageInterpreting,
  FaApple,
  FaCcMastercard,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
const Fotter = () => {
  return (
    <div>
      <footer className="footer  mx-auto w-full p-10 text-black ">
        
      <nav>
          <header className="footer-title">Customer Care</header>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">How to Buy</a>
          <a className="link link-hover">Returns & Refunds</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">CCMS - Central Complain Management</a>
          <a className="link link-hover">System</a>
        </nav>

        <nav>
          <header className="footer-title">Exclusive Deals and Offers!</header>
          <div className="flex gap-3 flex-col ">
            <a className="btn ">
              <BiLogoPlayStore className="text-3xl text-[#66CAF9]"></BiLogoPlayStore>
              <div>
                get in <br />
                Google play
              </div>
            </a>

            <a className="btn ">
              <FaApple className="text-3xl "></FaApple>
              <div>
                Dalownload on the <br />
                App Store
              </div>
            </a>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Payment Methods</header>
          <div className="grid grid-cols-3 gap-5">
           
            <a className="link link-hover">
              <img
                className=""
                src="https://i.postimg.cc/gjzvDj3V/download-removebg-preview-3.png"
                alt=""
              />
            </a>
            <a className="link link-hover">
              <img
                className=""
                src="https://i.postimg.cc/VvhdCkgL/download-removebg-preview-4.png"
                alt=""
              />
            </a>
            <a className="link link-hover">
              <img
                className=""
                src="https://i.postimg.cc/sxvJrb8b/download-removebg-preview.png"
                alt=""
              />
            </a>
            
            <a className="link link-hover">
              <img
                className=""
                src="https://i.postimg.cc/yYW1ZK22/download-removebg-preview-1.png"
                alt=""
              />
            </a>
            <a className="link link-hover">
              <img
                className=""
                src="https://i.postimg.cc/v8nFFBFY/download-removebg-preview-2.png"
                alt=""
              />
            </a>
            <a className="link link-hover">
              <img
                className=""
                src="https://i.postimg.cc/7ZkTMfDf/download-removebg-preview-5.png"
                alt=""
              />
            </a>
          </div>
        </nav>

        <nav>
          <header className="footer-title">Follow Us</header>
          <div className="flex gap-5">
            <a className="link link-hover text-blue-600 text-4xl">
              {" "}
              <FaFacebook></FaFacebook>{" "}
            </a>
            <a className="link link-hover text-red-600 text-4xl">
              <FaYoutube></FaYoutube>{" "}
            </a>
            <a className="link link-hover text-[#539AEA] text-4xl">
              {" "}
              <FaTwitter></FaTwitter>{" "}
            </a>
            <a className="link link-hover text-[#E75E48] text-4xl">
              {" "}
              <FaInstagram></FaInstagram>{" "}
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Fotter;
