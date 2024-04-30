"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhatIsPunkShield = () => {
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
    <>
      <div className="relative bg-custom-color2">
        {/* background stars and frames */}
        <div className=" md:left-[30rem] md:top-[16rem] lg:top-[17rem] lg:left-[50rem] absolute top-[7rem] left-[19rem]">
          <Image src={"/star.png"} width={20} height={20} alt="star image" />
        </div>
        <div
          data-aos="fade-down"
          className="md:top-[6rem] md:left-[12rem] lg:left-[25rem] absolute top-[3rem] left-[2rem]"
        >
          <Image src={"/star pu.png"} width={15} height={15} alt="star" />
        </div>

        <div className="md:left-[52rem] lg:left-[72rem] md:top-[15rem] absolute top-[33rem] left-[3rem]">
          <Image src={"/star.png"} width={15} height={15} alt="purple lens" />
        </div>
        <div className="md:top-[36rem] md:left-[44rem] lg:top-[37rem] lg:left-[51.2rem] absolute top-[38rem] left-[22rem]">
          <Image
            src={"/stargray.png"}
            width={20}
            height={20}
            alt="star image"
          />
        </div>
        <div
          data-aos="fade-up"
          className="md:top-[31rem] md:left-[13rem] lg:top-[36rem] lg:left-[20rem] absolute top-[55rem] left-[17rem]"
        >
          <Image src={"/star.png"} width={15} height={15} alt="star" />
        </div>
        <div className=" md:hidden absolute top-[53rem] left-[20rem]">
          <Image
            src={"/purpleLens.png"}
            width={800}
            height={800}
            alt="purple lens"
            className="blur w-[30rem]"
          />
        </div>

        {/* background stars and frames end here*/}
        <main className="py-10 md:py-20 px-5 md:px-20 text-white  gap-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:justify-center md:items-center md:text-center">
          <div className="absolute z-10 flex justify-center">
            <Image
              src="/purpleLens.png"
              width={300}
              height={300}
              alt="reward cup"
              className="relative blur top-[-3.5rem] md:top-[7rem] md:left-[-10rem] left-[-5rem] w-[30rem] opacity-40"
            />
          </div>

          <div className="justify-center md:flex md:flex-col">
            <div data-aos="fade-down" className="pb-5 block my-5">
              <div className="font text-start">
                <div className="text-2xl md:text-5xl font-bold">What is</div>
                <span className="text-2xl md:text-5xl font-bold text-color-2">
                  Punk shield ?
                </span>
              </div>
            </div>

            <div data-aos="fade-up" className="text-sm text-start">
              Punk Shield offers a robust security solution by combining a
              multi-signature wallet with an OTP (One-Time Password)
              authenticator system. This innovative technology aims to safeguard
              users from various threats in the decentralized crypto space,
              including unsafe smart contract interactions and 12 Seed Phrase
              Phishing. Our primary objective is to protect innocent users from
              falling victim to scammers.
            </div>
          </div>
          <Image
            data-aos="fade-down"
            src="/basepunk.png"
            width={390}
            height={390}
            alt="reward cup"
            className="w-auto h-auto"
          />
        </main>
      </div>
    </>
  );
};

export default WhatIsPunkShield;
