"use client";
import { RiDiscordLine, RiMediumLine, RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import { SiLinktree } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <Link href={"https://discord.gg/KJekEGGcf4"}>
        <RiDiscordLine id="share" className="w-6 h-6 text-white" />
      </Link>
      <Link href={" https://twitter.com/Punkonbase"}>
        <RiTwitterXLine id="share" className="w-6 h-6 text-white" />
      </Link>
      <Link href={"https://linktr.ee/basepunk"}>
        <SiLinktree id="share" className="w-6 h-6 text-white" />
      </Link>
      <Link href={"https://medium.com/@punkonbase/"}>
        <RiMediumLine id="share" className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
};

export default Socials;
