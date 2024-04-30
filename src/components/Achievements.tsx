"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
const Achievements = () => {
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
        <div className="md:top-[6rem] md:left-[12rem] lg:left-[25rem] absolute top-[3rem] left-[2rem]">
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
        <div className="md:top-[31rem] md:left-[13rem] lg:top-[36rem] lg:left-[20rem] absolute top-[55rem] left-[17rem]">
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
          <div className="md:hidden text-center">
            <div className="flex flex-col">
              <span data-aos="fade-right" className="text-2xl font font-bold">
                Our
              </span>
              <span
                data-aos="fade-left"
                className="text-2xl font font-bold text-color-2"
              >
                Achievements
              </span>
            </div>

            <div data-aos="fade-up" className="mt-5 mb-5">
              Keeping game economy stable and sustainable
            </div>
          </div>

          <div className="absolute z-10 flex justify-center">
            <Image
              src="/purpleLens.png"
              width={300}
              height={300}
              alt="reward cup"
              className="relative blur top-[-3.5rem] md:top-[7rem] md:left-[-10rem] left-[-5rem] w-[30rem] opacity-40"
            />
          </div>

          <Image
            data-aos="fade-down"
            src="/rewardCup.png"
            width={500}
            height={500}
            alt="reward cup"
            className="w-auto h-auto"
          />
          <div className="justify-center md:flex md:flex-col">
            <div data-aos="fade-down" className="hidden pb-5 md:block my-5">
              <div className="text-start ">
                <div className="font">
                  <div className="text-2xl md:text-5xl font-bold">Our</div>
                  <span className="text-2xl md:text-5xl font-bold text-color-2">
                    Achievements
                  </span>
                </div>

                <div className="mt-5">
                  Keeping game economy stable and sustainable
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="text-sm text-start">
              <span className="font-bold text-pink-500">Breaking News: </span>
              {`BasePunk Community Shines as Best Community Under Top 10! We're
              thrilled to announce that BasePunk has been recognized as the Best
              Community Under Top 10 during the Onchainsummer event! This
              achievement reflects the incredible passion and unity within our
              community. A big thank you to all our members for making this
              possible! Your creativity and engagement continue to inspire us.
              As a token of appreciation, we've received a grant from Base for
              our outstanding performance. This accomplishment motivates us to
              keep pushing boundaries and fostering innovation. Stay tuned for
              more exciting updates as we continue our journey of creativity and
              collaboration!`}{" "}
              <span>
                <Link
                  href={"https://prop.house/base/onchain-summer"}
                  className="text-pink-500"
                >
                  https://prop.house/base/onchain-summer
                </Link>
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Achievements;
