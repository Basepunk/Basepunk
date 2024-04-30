import { cn } from "@/lib/util";
import Image from "next/image";
import React from "react";

interface CardProps {
	image: string;
	name?: string;
	title?: string;
}

const Card = ({ image, name, title }: CardProps) => {
	return (
		<div className="text-white rounded-lg shadow-md overflow-hidden">
			<div className="relative">
				<Image
					src={image}
					alt={"gallery image"}
					width={300}
					height={200}
					className={cn("object-cover rounded-md")}
				/>
			</div>
			{(name || title) && (
				<div className="p-4">
					{name && <h3 className="text-xl font-semibold">{name}</h3>}
					{title && <p className="text-sm">{title}</p>}
				</div>
			)}
		</div>
	);
};
export default Card;
