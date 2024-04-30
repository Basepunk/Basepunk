import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <main className="py-10 md:py-20 px-5 md:px-20 text-white  gap-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:justify-center md:text-center md:items-center">
        <div className="md:flex md:flex-col ">
          <div data-aos="fade-down" className="pb-5 block my-5">
            <div className="font text-start">
              <div className="text-2xl md:text-5xl font-bold">
                The Features of
              </div>
              <span className="text-2xl md:text-5xl font-bold text-color-2">
                Base Punk
              </span>
            </div>
          </div>

          <div data-aos="fade-up" className="mt-5 text-start">
            <span className="font-bold text-pink-500">
              Unveiling the basepunk collection:
            </span>{" "}
            Immerse yourself in the captivating world of BasePunk NFTs
          </div>

          <div data-aos="fade-up" className="mt-5 text-start">
            <span className="font-bold text-pink-500">
              Own a piece of innovation:
            </span>{" "}
            Owning a BasePunk NFT all about having art, embracing innovation and
            being part of a vibrant community that celebrates creativity
          </div>

          <div data-aos="fade-up" className="mt-5 text-start">
            <span className="font-bold text-pink-500">
              Blockchain-Backed Authenticity:
            </span>{" "}
            Each BasePunk NFT is intrinsically linked to the blockchain,
            guaranteeing authenticity and ownership in the digital realm
          </div>

          <div data-aos="fade-up" className="mt-5 text-start">
            <span className="font-bold text-pink-500">
              Endless Possibilities:
            </span>{" "}
            Our NFTs hold the power to create connections, inspire discussions,
            and add a touch of digital sophistication to your collection.
          </div>

          <div data-aos="fade-up" className="mt-5 text-start">
            <span className="font-bold text-pink-500">
              Mint Your BasePunk NFT:
            </span>{" "}
            {`Mint your own BasePunk NFT and become a part of the creative journey that's transforming the way we view art.`}
          </div>
        </div>

        <Image
          data-aos="fade-down"
          src="/basepunk-feature.png"
          width={390}
          height={390}
          alt="Base punk feature"
          className="w-auto h-auto"
        />
      </main>
    </>
  );
};

export default Features;
