import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({navColor="text-white"}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`p-4 flex h-24 max-w-screen-xl items-center justify-between ${navColor} text-2xl font-bold`}>
      {/* <ReactLogo type="spin" size={48} /> */}
      <div className="hidden md:flex ">
        <p className="header-link"><Link to="/blog">Articles & Blog</Link></p>
        <p className="header-link"><Link to="/conseil">Conseils & Coaching</Link></p>
        <p className="header-link"><Link to="/prestige">Apéros Prestige</Link></p>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] max-w-[300px] border-r border-gray-800 bg-gray-950 duration-500 ease-in-out"
            : "fixed left-[-100vw]"
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-purple-950">
          SAAJE
        </h1>
        <ul>
          <li className="header-link"><Link to="/blog">Articles & Blog</Link></li>
          <li className="header-link"><Link to="/conseil">Conseils & Coaching</Link></li>
          <li className="header-link"><Link to="/prestige">Apéros Prestige</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
