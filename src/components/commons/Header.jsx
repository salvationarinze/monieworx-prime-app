import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import {FiMenu} from "react-icons/fi";
import {MdClose} from "react-icons/md";

import Logo from "../../../public/images/logo.svg";

import LinkButton from "../inputs/LinkButton";
import NavLink from "./NavLink";
import {toggleScroll} from "@/utilities/general";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    toggleScroll();

    return function () {
      setTimeout(() => {
        toggleScroll();
      }, 0);
    };
  }, [showMenu]);

  const btnStyle = {
    fontSize: "text-xs md:text-sm",
    paddingY: "py-2 md:py-3",
    paddingX: "px-3 md:px-6",
    target: "_blank",
  };

  const handleCloseSideMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header className="fixed w-full bg-white z-10 border-b border-[#F5F8FA]">
        <div className="header-content">
          <div className="w-full h-[72px] flex justify-between items-center">
            <div className="flex items-center">
              <FiMenu
                className="xl:hidden w-10 h-auto p-1.5 mr-5 sm:mr-10 rounded hover:bg-secondary"
                onClick={() => setShowMenu(true)}
              />
              <div className="">
                <Link href="/">
                  <Image src={Logo} alt="monieworx logo" />
                </Link>
              </div>
            </div>

            <div className="hidden xl:block">
              <ul className="flex space-x-7">
                <li className="mb-0">
                  <NavLink href="#prime" text="What is Prime" />
                </li>
                <li className="mb-0">
                  <NavLink href="#calculator" text="Calculator" />
                </li>
                <li className="mb-0">
                  <NavLink href="#benefits" text="Benefits" />
                </li>
                <li className="mb-0">
                  <NavLink href="#standout" text="How we stand out" />
                </li>
                <li className="mb-0">
                  <NavLink href="#faqs" text="FAQs" />
                </li>
                <li className="mb-0">
                  <NavLink href="#resources" text="Resources" />
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <div className="flex space-x-2">
                <LinkButton
                  {...btnStyle}
                  bgColor="bg-transparent"
                  href="https://app.monieworx.com/"
                  className="!px-2"
                >
                  <span className="font-semibold text-primary tex-sm">
                    Login
                  </span>
                </LinkButton>

                <LinkButton
                  {...btnStyle}
                  bgColor="bg-primary"
                  className="!rounded-lg w-[max-content] h-10"
                  href="https://app.monieworx.com/sign-up"
                >
                  <span className="text-sm font-semibold text-white">
                    Get started
                  </span>
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`header-side-menu ${
          showMenu || false ? "show overlay" : ""
        } fixed z-40 top-0 left-0 w-full h-screen bg-black bg-opacity-40`}
      >
        <div className="bg-white w-full absolute right-0 top-0 h-full overflow-y-auto">
          <div className="w-full relative">
            <div className="flex justify-between px-5 py-8">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={Logo}
                    className="w-40 h-auto"
                    alt="Idea Factory Logo"
                  />
                </Link>
              </div>
              <div className="">
                <button
                  type="button"
                  onClick={handleCloseSideMenu}
                  className="font-bold flex items-center hover:bg-opacity-20 hover:bg-primary"
                >
                  <MdClose className="w-10 h-auto" />
                </button>
              </div>
            </div>
            <div className="w-full px-10 py-8">
              <ul className="">
                <li className="mb-10 text-center">
                  <NavLink
                    href="#prime"
                    text="What is Prime"
                    onClick={handleCloseSideMenu}
                  />
                </li>
                <li className="mb-10 text-center">
                  <NavLink
                    href="#calculator"
                    text="Calculator"
                    onClick={handleCloseSideMenu}
                  />
                </li>
                <li className="mb-10 text-center">
                  <NavLink
                    href="#benefits"
                    text="Benefits"
                    onClick={handleCloseSideMenu}
                  />
                </li>
                <li className="mb-10 text-center">
                  <NavLink
                    href="#standout"
                    text="How we stand out"
                    onClick={handleCloseSideMenu}
                  />
                </li>

                <li className="mb-10 text-center">
                  <NavLink
                    href="#faqs"
                    text="FAQs"
                    onClick={handleCloseSideMenu}
                  />
                </li>

                <li className="mb-10 text-center">
                  <NavLink
                    href="#resources"
                    text="Resources"
                    onClick={handleCloseSideMenu}
                  />
                </li>
              </ul>

              <div className="w-full border-t py-10 mt-5">
                <div className="flex justify-center space-x-5">
                  <LinkButton
                    {...btnStyle}
                    bgColor="bg-transparent"
                    href="https://app.monieworx.com"
                  >
                    <span className="font-semibold text-primary tex-sm">
                      Login
                    </span>
                  </LinkButton>

                  <LinkButton
                    {...btnStyle}
                    bgColor="bg-primary"
                    href="https://app.monieworx.com/sign-up"
                  >
                    <span className="text-sm font-semibold text-white">
                      Get started
                    </span>
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
