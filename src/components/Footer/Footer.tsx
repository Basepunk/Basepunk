"use client";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import Socials from "../Socials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Footer = () => {
  //aos useEffect hook
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <footer data-aos="fade-up" className="relative">
      <div className="px-5 text-white bg-custom-color2 md:px-20">
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 justify-evenly">
            <div data-aos="fade-right">
              <div className="mb-5 font">
                <span className="text-2xl font-bold">Base</span>
                <span className="text-2xl font-bold text-color-1">Punk</span>
              </div>
              <div className="text-sm">
                Base Punk is a groundbreaking NFT project that goes beyond mere
                digital art. It&apos;s a revolution, a rebellion against the
                ordinary, with each of its 2222 NFTs representing a unique
                expression of creativity and individuality. From vibrant
                illustrations to mind-bending digital sculptures, Base Punk NFTs
                redefine ownership in the digital realm, empowering collectors
                to own a piece of artistic innovation.
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="md:grid md:grid-cols-2 text-sm"
            >
              <div className="">
                <div className="space-y-3">
                  <div className="text-xl font-bold text-color-1 font">
                    Useful Links
                  </div>
                  <div>
                    <Link href={"https://opensea.io/collection/base-punk-5"}>
                      {" "}
                      Marketplace
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.subber.xyz/basepunk"}>Subber</Link>
                  </div>
                  <div>
                    <Link href={"https://guild.xyz/base-punk"}>Guild</Link>
                  </div>
                  <div>
                    <Link href={"https://galxe.com/basepunk"}>Galxe</Link>
                  </div>
                </div>
              </div>

              <div className="md:flex md:flex-col md:justify-between">
                <div className="flex md:py-">
                  <div className="mr-5 text-color-1 text-xl font">
                    Follow us
                  </div>
                  <Socials />
                </div>
                <div data-aos="fade-up" className="my-5 text-center">
                  All rights reserved.©basepunk Ltd.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
