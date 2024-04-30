"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
const WhatWeDid = () => {
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
      <div
        className="relative bg-custom-color2 gap-10 text-white md:grid md:grid-cols-2 md:justify-center md:items-center px-5 md:px-20 py-10 md:py-20"
        id="container"
      >
        {/* background beautifications */}
        <div className="absolute">
          <Image
            src="/purpleLens.png"
            width={500}
            height={500}
            alt="purple frame"
            className="relative blur top-[9rem] left-[-6rem] opacity-30"
          />
        </div>
        <div className="absolute top-[2rem] left-[5rem] md:top-[38rem] md:left-[7rem] lg:top-[18rem] lg:left-[11rem] z-0">
          <Image
            src={"/headCircle.png"}
            width={70}
            height={70}
            alt="star image"
          />
        </div>

        <div
          data-aos="fade-down"
          className="absolute top-[9rem] left-[12rem] md:top-[24rem] md:left-[12rem] lg:top-[40rem] lg:left-[19rem]"
        >
          <Image
            src={"/stargray.png"}
            width={20}
            height={20}
            alt="star image"
          />
        </div>
        <div
          data-aos="fade-down"
          className="absolute top-[65rem]  md:top-[45rem] md:left-[25rem] left-[20rem] lg:top-[38rem] lg:left-[40rem] "
        >
          <Image src={"/star.png"} width={20} height={20} alt="star image" />
        </div>
        <div
          data-aos="fade-down"
          className="absolute top-[-3rem] left-[5rem] md:top-[7rem] md:left-[5rem] lg:top-[15rem] lg:left-[8rem] "
        >
          <Image
            src={"/sata gra.png"}
            width={20}
            height={20}
            alt="star image"
          />
        </div>
        {/* background beautification ends here */}
        <div data-aos="fade-left" className="relative z-10 flex justify-center">
          <Image
            src={"/judges.png"}
            width={500}
            height={500}
            alt="judges"
            className="w-auto h-auto"
          />
        </div>

        <div
          className="items-center justify-center my-5 text-center md:text-start"
          id="textContainer"
        >
          <div
            data-aos="fade-right"
            className="text-2xl md:text-5xl font font-bold"
          >
            Our Developed{" "}
            <span data-aos="fade-left" className="text-color-2">
              Products
            </span>
          </div>
          <div className="my-5 text-sm">
            {`Base Punk is an innovative project that sits at the convergence of
            NFTs, Web3, and social networking. Here's a summary of its
            achievements and key features:`}
          </div>
          <div data-aos="fade-up" className="mt-5 text-sm">
            <span className="font-bold text-pink-500">
              Thriving NFT Community:
            </span>
            {` Base Punk has successfully established a vibrant NFT community,
            evident from its recent mint event's success, which saw high
            engagement and quick sellouts.`}
          </div>
          <div data-aos="fade-up" className="pt-5 text-sm">
            <Link
              href={"https://chat.basepunk.xyz/"}
              className="font-bold text-pink-500"
            >
              Web3 Social Platform:{" "}
            </Link>
            The project has developed a cutting-edge web3 social platform,
            continuously enhancing it with updates and features to improve user
            experience.
          </div>
          <div data-aos="fade-up" className="mt-5 text-sm">
            <Link
              href={"https://id.basepunk.xyz/#/"}
              className="font-bold text-pink-500"
            >
              {" "}
              Base Punk Domains:
            </Link>{" "}
            Introducing a decentralized domain system, Base Punk Domains allow
            users to create unique digital identities connected to their
            Ethereum addresses, fostering individuality and simplifying
            interactions within the ecosystem.
          </div>
          <div data-aos="fade-up" className="mt-5 text-sm">
            <Link
              href={"https://chat.basepunk.xyz/"}
              className="font-bold text-pink-500"
            >
              Base Punk Chat DApps:
            </Link>{" "}
            Revolutionizing communication in the web3 era, Base Punk Chat offers
            a feature-rich social networking experience with functionalities
            like posting, minting posts as NFTs, and seamless interaction.
          </div>
          <div data-aos="fade-up" className="mt-5 text-sm">
            <span className="font-bold text-pink-500">Daily Earnings:</span>{" "}
            Users can earn daily ETH and points for their activity, which will
            be converted into BPUNK tokens in the future. NFT and domain holders
            enjoy bonuses, creating an inclusive and rewarding community
            environment.
          </div>

          <div data-aos="fade-up" className="mt-5 text-sm">
            <Link
              href={"https://chat.basepunk.xyz/nft"}
              className="font-bold text-pink-500"
            >
              BasePunk NFT Launchpad:
            </Link>{" "}
            {`Featuring dynamic pricing based on demand, integrated marketplaces,
            and hassle-free tradability, BasePunk's NFT launchpad provides a
            user-centric approach to NFT trading.`}
          </div>
          <div data-aos="fade-up" className="mt-5 text-sm">
            <Link
              href={"https://chat.basepunk.xyz/swap"}
              className="font-bold text-pink-500"
            >
              Swap Function:
            </Link>{" "}
            Introducing a swap function within Base Punk Chat DApps, users can
            seamlessly and cost-effectively swap between supported tokens,
            shaping the future of decentralized exchanges.
          </div>
          <div data-aos="fade-up" className="mt-5 text-sm">
            <Link
              href={"https://chat.basepunk.xyz/keys"}
              className="font-bold text-pink-500"
            >
              Key Social DApps Features:{" "}
            </Link>
            Notable features include NFT launchpad, token sending/receiving,
            point-based rewards, minting posts as NFTs, built-in token exchange,
            friends functionality, and NFT staking/farming.
          </div>

          <Link
            href={"https://chat.basepunk.xyz/"}
            data-aos="fade-up"
            className="relative z-10"
          >
            <Button text={"Explore Basepunk"} customClasses="mt-10" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhatWeDid;
