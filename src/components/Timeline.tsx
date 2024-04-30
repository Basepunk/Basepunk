import Image from "next/image";

const Timeline = () => {
	return (
		<div className="relative">
			{/* background stars and frames */}
			<div className="absolute top-[6.5rem] md:top-[12rem] md:left:-[9rem] left-[4.5rem] lg:left-[26rem]">
				<Image src={"/star pu.png"} width={15} height={15} alt="star image" />
			</div>
			<div
				data-aos="flip-left"
				className="absolute top-[35.5rem] md:top-[40rem] md:left-[45rem] left-[17rem] lg:left-[50rem]"
			>
				<Image src={"/star.png"} width={15} height={15} alt="star image" />
			</div>
			<div className="absolute top-[71rem] md:top-[75rem] md:left-[15rem] left-[2rem]">
				<Image src={"/stargray.png"} width={15} height={15} alt="star image" />
			</div>
			{/* background stars and frames end here*/}

			{/* large screen design */}
			<div className="my-20 mx-10 text-white hidden md:block">
				<div
					data-aos="fade-down"
					className="text-2xl md:text-5xl font font-bold text-center"
				>
					Punk<span className="text-color-2">map</span>
				</div>
				<div
					data-aos="fade-up"
					className="text-center mt-5 mb-10 md:mx-[13rem] lg:mx-[18rem]"
				>
					We aim to create the best web3 lifestyle app for our community, more
					features & integrations will be added soon
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center ml-[0.5rem] gap-10">
						<div data-aos="fade-right" className="w-[30rem] text-end">
							<div className="text-color-2 font-bold">
								Building a Vibrant Community
							</div>
							<div className="md:text-sm lg:text-base md:ml-[170px] lg:ml-[50px]">
								{`Community Engagement and Social Media Presence: We’re committed
                to fostering a passionate BasePunk community. Join us on social
                media, engage in discussions, and connect with fellow
                enthusiasts who share your passion for digital art.`}
							</div>
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							1
						</div>
						<div
							data-aos="fade-left"
							className="text-color-2 ml-2 w-[30rem] font-bold"
						>
							{"Q3 – 2023"}
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>

					<div className="flex items-center justify-center gap-10">
						<div
							data-aos="fade-right"
							className="text-color-2 text-end w-[30rem] font-bold"
						>
							{"Q3 - 2023"}
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							2
						</div>

						<div data-aos="fade-left" className="w-[30rem] text-start">
							<div className="text-color-2 font-bold">
								Guaranteed WL Badge Mint
							</div>
							<div className="md:text-sm lg:text-base md:mr-[170px] lg:mr-[50px]">
								Our journey begins with the launch of the exclusive Guaranteed
								WL Badge mint event. Become part of this exclusive club,
								securing early access to drops, limited edition content, and
								priority privileges within the BasePunk ecosystem.
							</div>
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center ml-[0.5rem] gap-10">
						<div data-aos="fade-right" className="w-[30rem] text-end">
							<div className="text-color-2 font-bold">
								Release of BasePunk NFT Collection
							</div>
							<div className="md:text-sm lg:text-base md:ml-[170px] lg:ml-[50px]">
								Following the excitement of the Guaranteed WL Badge mint, we’re
								thrilled to introduce our flagship NFT collection. Discover 2222
								unique digital artworks, minted on the secure Base Blockchain,
								each a testament to our dedication to creativity and innovation.
							</div>
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							3
						</div>
						<div
							data-aos="fade-left"
							className="text-color-2 ml-2 w-[30rem] font-bold"
						>
							{"Q3-Q4 2023"}
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center gap-10">
						<div
							data-aos="fade-right"
							className="text-color-2 text-end w-[30rem] font-bold"
						>
							{"Q1-Q2 2024"}
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							4
						</div>

						<div data-aos="fade-left" className="w-[30rem] text-start">
							<div className="text-color-2 font-bold">Launch</div>
							<div className="md:text-sm lg:text-base md:mr-[170px] lg:mr-[50px]">
								Launch of Punk Shield on Base Network & Marketing about Punk
								Shield.I ntroducing advanced security features to user. Launch
								of Punk Shield Pass to access Punkshield. Initiate marketing
								campaigns to raise awareness and attract users.
							</div>
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center ml-[0.5rem] gap-10">
						<div data-aos="fade-right" className="w-[30rem] text-end">
							<div className="text-color-2 font-bold">
								Multichain Expansion of Punkshield & Wallet Integration
							</div>
							<div className="md:text-sm lg:text-base md:ml-[170px] lg:ml-[50px]">
								Expand Punk Shield to multiple blockchain networks. Integrate
								with popular wallets. Our Native token launch & Airdrop to early
								supporter & users
							</div>
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							5
						</div>
						<div
							data-aos="fade-left"
							className="text-color-2 ml-2 w-[30rem] font-bold"
						>
							Q3 - 2024
						</div>
					</div>
				</div>

				<div>
					<div
						data-aos="fade-up"
						className="flex text-center justify-center items-center "
					>
						<div className="h-[6rem] w-1 text-color-2 bg-purple-400"></div>
					</div>
					<div className="flex items-center justify-center gap-10">
						<div
							data-aos="fade-right"
							className="text-color-2 text-end w-[30rem] font-bold"
						>
							Q4 - 2024
						</div>

						<div
							data-aos="fade-up"
							className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1"
						>
							6
						</div>

						<div data-aos="fade-left" className="w-[30rem] text-start">
							<div className="text-color-2 font-bold md:mr-36 lg:mr-10">
								Upgradation of punkshield & new feature addition
							</div>
							<div className="md:text-sm lg:text-base md:mr-[170px] lg:mr-[50px]">
								Enhance security features based on user feedback and
								emerging threats.
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* small screen design*/}
			<div className="my-20 mx-10 text-white md:hidden">
				<div className="font font-bold text-2xl text-center">
					Punk<span>map</span>
				</div>
				<div data-aos="fade-up" className="text-center mt-5 md:mx-[20rem]">
					We aim to create the best web3 lifestyle app for our community, more
					features & integrations will be added soon
				</div>

				<div className="mt-5 space-y-10">
					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[10rem] w-2 text-color-2 bg-purple-400"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Building a Vibrant Community
								</div>
								<div>
									{`Community Engagement and Social Media Presence: We’re committed
                to fostering a passionate BasePunk community. Join us on social
                media, engage in discussions, and connect with fellow
                enthusiasts who share your passion for digital art.`}
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								1
							</div>
							<div className="text-color-2 ml-2">{"Q3 – 2023"}</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[10rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Guaranteed WL Badge Mint
								</div>
								<div>
									Our journey begins with the launch of the exclusive Guaranteed
									WL Badge mint event. Become part of this exclusive club,
									securing early access to drops, limited edition content, and
									priority privileges within the BasePunk ecosystem.
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								2
							</div>
							<div className="text-color-2 ml-2">{"Q3 - 2023"}</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[10rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Release of BasePunk NFT Collection
								</div>
								<div>
									Following the excitement of the Guaranteed WL Badge mint,
									we’re thrilled to introduce our flagship NFT collection.
									Discover 2222 unique digital artworks, minted on the secure
									Base Blockchain, each a testament to our dedication to
									creativity and innovation.
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								3
							</div>
							<div className="text-color-2 ml-2">{"Q3-Q4 2023"}</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[10rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">Launch</div>
								<div>
									Launch of Punk Shield on Base Network & Marketing about Punk
									Shield.I ntroducing advanced security features to user. Launch
									of Punk Shield Pass to access Punkshield. Initiate marketing
									campaigns to raise awareness and attract users.
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								4
							</div>
							<div className="text-color-2 ml-2">{"Q1-Q2 2024"}</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[10rem] w-2 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Multichain Expansion of Punkshield & Wallet Integration
								</div>
								<div>
									Expand Punk Shield to multiple blockchain networks. Integrate
									with popular wallets. Our Native token launch & Airdrop to
									early supporter & users
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								5
							</div>
							<div className="text-color-2 ml-2">Q3 - 2024</div>
						</div>
					</div>

					<div>
						<div className="flex">
							<div
								data-aos="fade-down"
								className="h-[5rem] w-1 text-color-2 bg-gradient-to-r from-pink-500 to-purple-500"
							></div>
							<div data-aos="fade-up" className="ml-5">
								<div className="text-color-2 font-bold">
									Upgradation of punkshield & new feature addition
								</div>
								<div>
									Enhance security features based on user feedback and
									emerging threats.
								</div>
							</div>
						</div>
						<div data-aos="fade-down" className="flex items-center ml-[-0.9em]">
							<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full py-1 px-3 mt-1">
								6
							</div>
							<div className="text-color-2 ml-2">Q4 - 2024</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
