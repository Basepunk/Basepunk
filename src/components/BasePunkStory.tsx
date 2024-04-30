"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button";

const BasePunkStory = () => {
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
      {/* background stars */}
      <div
        data-aos="fade-up"
        className="absolute top-[4rem] md:top-[3rem] left-[-6rem] md:left-[-1rem]"
      >
        <Image
          src="/purpleLens.png"
          width={500}
          height={500}
          alt="purple lens"
          className="blur opacity-50 z-0 w-auto h-auto"
        />
      </div>

      <div
        data-aos="fade-left"
        className="absolute top-[8.5rem] md:top-[8.5rem] left-[9rem]  md:left-[11rem] z-50"
      >
        <Image src={"/star.png"} width={12} height={12} alt="star image" />
      </div>

      <div
        data-aos="fade-up"
        className="absolute md:left-[53rem] md:top-[8.8rem] left-[22rem] z-50"
      >
        <Image src={"/stargray.png"} width={8} height={8} alt="star image" />
      </div>
      <div
        data-aos="fade-left"
        className="hidden md:block absolute top-[8.5rem] md:top-[12rem] left-[22rem] md:left-[70rem] z-50"
      >
        <Image src={"/stargray.png"} width={15} height={15} alt="star image" />
      </div>

      <div className="md:hidden absolute top-[21.5rem] left-[22rem] z-50">
        <Image src={"/stargray.png"} width={8} height={8} alt="star image" />
      </div>
      <div
        data-aos="fade-down"
        className="hidden md:block absolute md:top-[14rem] md:left-[45rem] z-50"
      >
        <Image src={"/stargray.png"} width={15} height={15} alt="star image" />
      </div>
      {/* background stars ends here */}
      <main className="py-10 md:py-20 pt-20 md:pt-40 px-5 md:px-20 text-white  gap-10 md:gap-20 lg:gap-40 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:justify-center md:items-center md:text-start">
        <div className="space-y-5 md:space-y-10" data-aos="fade-right">
          <div className="font">
            <div className="text-3xl md:text-5xl font-bold">Basepunk</div>
            <span className="text-3xl md:text-5xl font-bold text-color-2">
              Story
            </span>
          </div>
          <div className="flex flex-col space-y-5 md:space-y-10">
            <p className="text-sm">
              Unleash Your Inner Rebel with BasePunk NFTs!. BasePunk is not just
              an NFT project; it&apos;s a rebellion against the ordinary.
              We&apos;re excited to introduce you to a revolutionary collection
              of 2222 NFTs that redefine digital art and ownership. BasePunk
              NFTs are more than just pixels; they&apos;re a testament to
              creative freedom. Our collection features a diverse range of
              artwork, each piece a unique expression of artistic innovation.
              From vibrant illustrations to mind-bending digital sculptures, our
              NFTs break free from convention.
            </p>
            <div className="flex justify-between gap-5">
              <div
                data-aos="fade-up-left"
                className="text-center mt-5 justify-center"
              >
                <Link
                  target="_blank"
                  href={
                    "https://www.basepunk.xyz/assets/BASE%20PUNK%20%20Whitepaper.pdf"
                  }
                >
                  <Button
                    text="Read  Whitepaper"
                    customClasses="px-5 text-sm"
                  />
                </Link>
              </div>
              <div
                data-aos="fade-up-left"
                className="text-center mt-5 justify-center"
              >
                <Link target="_blank" href={"https://chat.basepunk.xyz/"}>
                  <Button
                    text="Basepunk Ecosystem"
                    customClasses="px-5 text-sm"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <Image
            src={"/about-hero.png"}
            className="rounded-lg object-fill"
            fetchPriority="high"
            priority={true}
            alt="Hero"
            width={500}
            height={500}
          />
        </div>
      </main>
    </>
  );
};
export default BasePunkStory;
