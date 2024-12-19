import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import LogoSA from "../../assets/logo-saa.png";

const Navbar = ({ navColor }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`flex h-24 max-w-screen-xl items-center justify-between p-4 text-gray-900 dark:text-white ${navColor} text-2xl font-bold`}
    >
      <Link to="/">
        <img
          className="header-link"
          width={120}
          height={120}
          src={LogoSA}
          alt="Logo"
        />
      </Link>
      <div className="hidden space-x-4 md:flex">
        <p className="header-link">
          <Link to="/">Accueil</Link>
        </p>
        <p className="header-link">
          <Link to="/articles-recents">Articles & Blog</Link>
        </p>
        <p className="header-link">
          <Link to="/conseil">Conseils & Coaching</Link>
        </p>
        <p className="header-link">
          <Link to="/prestige">Apéros Privilège</Link>
        </p>
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
        <h1 className="m-4 w-full text-3xl font-bold text-purple-950">SAAJE</h1>
        <ul className="flex flex-col p-4">
          <li className="header-link mb-4">
            <Link to="/articles-recents">Articles & Blog</Link>
          </li>
          <li className="header-link mb-4">
            <Link to="/conseil">Conseils & Coaching</Link>
          </li>
          <li className="header-link mb-4">
            <Link to="/prestige">Apéros Privilège</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
