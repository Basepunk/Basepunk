"use client";
import Footer from "@/components/Footer/Footer";
import Achievements from "@/components/Achievements";
import BasePunkStory from "@/components/BasePunkStory";
// import Features from "@/components/Features";
import WhatIsPunkShield from "@/components/WhatIsPunkShield";
import WhatWeDid from "@/components/WhatWeDid";
import Timeline from "@/components/Timeline";
import NFTCollection from "@/components/NFTCard";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Image from "next/image";

const AboutPage = () => {
	return (
		<main className="flex flex-col items-center justify-center text-white">
			<BasePunkStory />
			<WhatWeDid />
			<NFTCollection />
			{/* <Features /> */}
			<WhatIsPunkShield />
			<Timeline />
			<Achievements />
			<div className="mt-12 w-[90%] mx-auto flex justify-center">
        <Image
          src="/artFusion.jpg"
          alt="Art Fusion"
          width={800}
          height={800}
          className="object-cover"
        />
      </div>
			<Partners />
			<Team />
			<Footer />
		</main>
	);
};
export default AboutPage;
