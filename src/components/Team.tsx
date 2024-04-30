import Image from "next/image";
import React from "react";

const teamData = [
  {
    id: "1",
    image: "/mark.png",
    name: "Mark Clue",
    role: "Founder",
  },
  {
    id: "2",
    image: "/tm2.png",
    name: "Sahajahan Ali",
    role: "Co Founder",
  },
  {
    id: "3",
    image: "/tm3.png",
    name: "Ice Cube",
    role: "Business Development",
  },
  {
    id: "4",
    image: "/tm6.png",
    name: "Allengibbs",
    role: "Social media manager",
  },
  {
    id: "5",
    image: "/ranny.png",
    name: "Ranny Kidd",
    role: "Advisor",
  },
];

const Team = () => {
  return (
    <div className="relative">
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
      <div
        data-aos="fade-up"
        className="md:top-[36rem] md:left-[44rem] lg:top-[37rem] lg:left-[51.2rem] absolute top-[38rem] left-[22rem]"
      >
        <Image src={"/stargray.png"} width={20} height={20} alt="star image" />
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
      <main className="py-10 md:py-20 px-5 md:px-20">
        <div data-aos="fade-right" className="font text-center pb-20">
          <div>
            <div className="md:text-5xl font-bold flex gap-4 justify-center">
              <span>Our</span>{" "}
              <span className="hidden md:block text-color-2">Team</span>
            </div>
            <span className="text-2xl font-bold text-color-2 md:hidden">
              Team
            </span>
          </div>

          <p>
            We are a fast-paced team of blockchain network specialists,
            developers, designers from various backgrounds.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="flex gap-7 flex-wrap justify-center"
        >
          {teamData.map((team) => (
            <div
              key={team.id}
              className="border p-5 rounded-md space-y-3 hover:-translate-y-2 transition-all duration-200"
            >
              <div className="relative w-[210px] h-[210px]">
                <Image
                  src={team.image}
                  alt={"Team image"}
                  fill={true}
                  className="absolute object-cover rounded-md"
                />
              </div>

              <div className="text-center text-gray-300">
                <p className="text-xl">{team.name}</p>
                <p className="text-xs">{team.role}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Team;
