import Image from "next/image";
import Card from "./ui/Card";

const dummyNFTs = [
	{
		id: 1,
		name: "NFT 1",
		image: "/tm2.png",
	},
	{
		id: 2,
		name: "NFT 2",
		image: "/tm3.png",
	},
	{
		id: 3,
		name: "NFT 3",
		image: "/tm4.png",
		description: "Description for NFT 2",
	},
	{
		id: 4,
		name: "NFT 4",
		image: "/tm5.png",
		description: "Description for NFT 3",
	},
	{
		id: 5,
		name: "NFT 5",
		image: "/tm6.png",
		description: "Description for NFT 3",
	},
	{
		id: 6,
		name: "NFT 6",
		image: "/tm7.png",
		description: "Description for NFT 2",
	},
	{
		id: 7,
		name: "NFT 7",
		image: "/tm8.png",
		description: "Description for NFT 3",
	},
	{
		id: 8,
		name: "NFT 8",
		image: "/base-hero.png",
		description: "Description for NFT 3",
	},
];
const NFTCollection = () => {
	return (
		<>
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
				<main className="py-10 md:py-20 px-5 md:px-20">
					<div data-aos="fade-right" className="font text-center pb-20">
						<div className="text-2xl md:text-5xl font-bold flex gap-4 justify-center">
							<span>Punk</span>{" "}
							<span className="hidden md:block text-color-2">Gallery</span>
						</div>
						<span className="text-2xl font-bold text-color-2 md:hidden">
							Gallery
						</span>
					</div>{" "}
					<div
						data-aos="fade-left"
						className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
					>
						{dummyNFTs.map((nft) => (
							<Card key={nft.id} image={nft.image} />
						))}
					</div>
				</main>
			</div>
		</>
	);
};

export default NFTCollection;
