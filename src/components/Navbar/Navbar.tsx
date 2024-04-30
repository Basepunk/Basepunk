"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdMoreVert } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import MoreOption from "../MoreOption";

import { AnimatePresence } from "framer-motion";
import ToolOption from "../ToolOption";
import BuyOption from "../BuyOption";
import SocialOption from "../SocialOption";

type NavOptionProps =
  | " "
  | "home"
  | "about"
  | "tools"
  | "buy"
  | "social"
  | "more";

const Navbar = ({ isBottom = false }) => {
  const [openMoreOption, setOpenMoreOption] = useState(false);

  const [navOption, setNavOption] = useState<NavOptionProps>(" ");

  //aos useEffect hook
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  // const navigationLinks = [
  //   { href: "/", label: "Home" },
  //   { href: "/about", label: "About" },
  //   { href: "/tools", label: "Tools" },
  //   { href: "/buy", label: "Buy" },
  //   { href: "/social", label: "Social" },
  // ];
  const pathname = usePathname();

  return (
    <>
      <header
        data-aos="fade-down"
        className={`fixed bottom-[75px] md:bottom-[70px] lg:top-10 lg:grid lg:grid-cols-3 items-center h-12 md:h-14 px-5 md:px-20 justify-center gap-5 w-full z-50 ${
          isBottom ? "" : ""
        }`}
      >
        <Link href={"/"} className="hidden lg:block">
          <span className="text-3xl font">Base</span>
          <span className="text-2xl text-color-1 font">Punk</span>
        </Link>
        <div className="flex items-center justify-center">
          <nav className="p-5 text-gray-300 bg-white rounded-2xl space-y-6">
            <div className="flex items-center space-x-5 justify-between">
              <button onClick={() => setNavOption("home")}>
                <Link
                  href="/"
                  className={`text-sm font-medium text-black ${
                    navOption === "home" || pathname === "/"
                      ? "bg-[#150e28] text-white px-3 py-1 rounded-full text-5xl"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </button>

              <button onClick={() => setNavOption("about")}>
                <Link
                  href="/about"
                  className={`text-sm font-medium text-black ${
                    pathname === "/about" && navOption === "about"
                      ? "bg-[#150e28] text-white px-3 py-1 rounded-full text-5xl"
                      : ""
                  }`}
                >
                  About
                </Link>
              </button>

              <button
                className={`text-sm font-medium text-black ${
                  navOption === "tools"
                    ? "bg-[#150e28] text-white px-3 py-1 rounded-full text-5xl"
                    : ""
                }`}
                onClick={() => {
                  if (navOption === "tools") {
                    setNavOption(" ");
                    return;
                  }

                  setNavOption("tools");
                  setOpenMoreOption(false);
                }}
              >
                Tools
              </button>

              <button
                className={`text-sm font-medium text-black ${
                  navOption === "buy"
                    ? "bg-[#150e28] text-white px-3 py-1 rounded-full text-5xl"
                    : ""
                }`}
                onClick={() => setNavOption("buy")}
              >
                Buy
              </button>

              <button
                onClick={() => {
                  if (navOption === "social") {
                    setNavOption(" ");
                    return;
                  }
                  setNavOption("social");
                }}
                className={`text-sm font-medium text-black ${
                  navOption === "social"
                    ? "bg-[#150e28] text-white px-3 py-1 rounded-full text-5xl"
                    : ""
                }`}
              >
                Social
              </button>

              <button
                onClick={() => {
                  setOpenMoreOption((prev) => !prev);
                  setNavOption(" ");
                }}
              >
                {openMoreOption ? (
                  <IoClose size={20} className="fill-black" />
                ) : (
                  <MdMoreVert size={20} className="fill-black" />
                )}
              </button>

              {/* <Popover>
                <PopoverTrigger>
                  <button className="mt-2">
                    <MdMoreVert size={20} className="fill-black" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="bg-white text-black flex flex-col items-start text-sm w-32 rounded-2xl px-3 py-5 space-y-3 mt-[14px] mr-[68px] mb-5">
                  <button>Whitepaper</button>
                  <button>Chat</button>
                  <button>Stake</button>
                  <button>Mint domain</button>
                </PopoverContent>
              </Popover> */}
            </div>

            <AnimatePresence>
              {openMoreOption && <MoreOption />}
            </AnimatePresence>

            <AnimatePresence>
              {navOption === "tools" && <ToolOption />}
            </AnimatePresence>

            <AnimatePresence>
              {navOption === "buy" && <BuyOption />}
            </AnimatePresence>

            <AnimatePresence>
              {navOption === "social" && <SocialOption />}
            </AnimatePresence>
          </nav>
        </div>
        <div></div>
      </header>
    </>
  );
};

export default Navbar;
