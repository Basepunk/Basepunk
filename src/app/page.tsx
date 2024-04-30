"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";
import Button from "../components/Button";
import Image from "next/image";

export default function Home() {
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
			<main className="bg flex flex-col items-center justify-center px-5 md:px-20 py-20 text-white overflow-x-hidden h-screen">
				<div className="flex gap-10 md:gap-40 items-center justify-center md:pt-20 md:py-20">
					<div className="space-y-16 md:space-y-32">
						<div
							data-aos="fade-up"
							className=" text-gray-100 items-start text-start"
						>
							<h1 className="text-center text-3xl font md:text-6xl">
								PUNK <span className="text-color-1">SHIELD</span>
							</h1>
							<div className="py-6 px-7 text-xl font-bold italic text-center">
								<Typewriter
									words={[
										"The Next Evolution in Crypto Security",
										"Your Defense Against Scammers",
										"Is Coming...",
									]}
									loop={0}
									cursor
									cursorStyle="_"
									typeSpeed={75}
									deleteSpeed={50}
									delaySpeed={2000}
								/>
							</div>
						</div>
						<div className="flex justify-center items-center pt-10 md:pt-0">
							<div
								data-aos="fade-up-left"
								className="text-center mt-10 justify-center"
							>
								<Link target="_blank" href={"https://chat.basepunk.xyz/"}>
									<Button text="Join Basepunk Ecosystem" customClasses="px-5" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
