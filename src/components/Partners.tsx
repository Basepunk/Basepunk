import Image from "next/image";
import React from "react";
import Link from "next/link";

const partnesData = [
	{
		id: "1",
		img: "/buildOnBase.jpg",
		twitter: "https://twitter.com/BuildOnBase?s=09",
	},
	{
		id: "2",
		img: "/masa.png",
		twitter: "https://twitter.com/getmasafi?s=09",
	},
	{
		id: "3",
		img: "/port3Network.jpg",
		twitter: "https://twitter.com/Port3Network?s=09",
	},
	{
		id: "4",
		img: "/dackie.jpg",
		twitter: "https://twitter.com/Dackie_Official?s=09",
	},
	{
		id: "5",
		img: "/baseDaily.jpg",
		twitter: "https://twitter.com/BaseDailyMM?s=09",
	},
	{
		id: "6",
		img: "/fomo.jpg",
		twitter: "https://x.com/NFTs2Me?t=-zbBaZsJfj4i0S77elUgXg&s=09",
	},
	{
		id: "7",
		img: "/elementNft.jpg",
		twitter: "https://twitter.com/Element_Market?s=09",
	},
	{
		id: "8",
		img: "/KreatorLand.jpg",
		twitter: "https://twitter.com/Kreatorland?s=09",
	},
	{
		id: "9",
		img: "/taskOn.png",
		twitter: "https://twitter.com/taskonxyz?s=09",
	},
	{
		id: "10",
		img: "/nFTFeed.jpg",
		twitter: "https://twitter.com/NFTFeedOfficial?s=09",
	},
	{
		id: "11",
		img: "/baseSpace.jpg",
		twitter: "https://twitter.com/BaseSpaceMM?s=09",
	},
	{
		id: "12",
		img: "/innovaz.png",
		twitter: "https://twitter.com/Innovaz_io?s=09",
	},
	{
		id: "13",
		img: "/alien.jpg",
		twitter: "https://x.com/AlienSwap_NFT?s=09",
	},
];

const Partners = () => {
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
							<span className="hidden md:block text-color-2">Partners</span>
						</div>
						<span className="text-2xl font-bold text-color-2 md:hidden">
							Partners
						</span>
					</div>

					<p>
						{`We want to express our sincere gratitude to our friends who helped
            us improve the product and catch the community's attention.`}
					</p>
				</div>
				<div
					data-aos="fade-left"
					className="flex gap-7 flex-wrap justify-center"
				>
					{partnesData.map((partner) => (
						<Link
							key={partner.id}
							href={partner.twitter}
							target="_blank"
							referrerPolicy="no-referrer"
						>
							<div className="relative w-[170px] h-[170px]">
								<Image
									src={partner.img}
									alt={"Partner image"}
									fill={true}
									className="absolute object-cover rounded-md"
								/>
							</div>
						</Link>
					))}
				</div>
			</main>
		</div>
	);
};

export default Partners;
