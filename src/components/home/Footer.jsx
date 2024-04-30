import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <footer className="mx-auto grid gap-6 px-4 py-4 bg-[#2C0832] text-gray-300 lg:grid-cols-3">
      <div className="flex justify-around lg:col-span-3 lg:mt-5">
        <div>
          <h6 className="font-medium text-gray-400">Mentions légales</h6>
          <ul>
            <li className="footer-page-link" onClick={scrollToTop} ><Link  to="/confidentialite/#">Confidentialité</Link></li>
            <li className="footer-page-link" onClick={scrollToTop} ><Link  to="/condition-utilisation/#">Conditions d'utilisation</Link></li>
            <li className="footer-page-link" onClick={scrollToTop} ><Link  to="/politique-cookie/#">Politique relative aux cookies</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Contact</h6>
          <ul>
            <li className="footer-page-link">contact@saaje.app</li>
            <div className="flex my-2">
              <form method="GET" className="pr-1 duration-300 hover:scale-110">
                <button formAction="https://www.facebook.com/people/saajeapp/61555766909447">
                  <FaFacebookSquare size={36} />
                </button>
              </form>
              <form method="GET" className="pr-1 duration-300 hover:scale-110">
                <button formAction="https://www.instagram.com/instagram.com/saaje.app">
                  <FaInstagramSquare size={36} />
                </button>
              </form>
          </div>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400" onClick={scrollToTop}><Link to="/faq">FAQ</Link></h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
