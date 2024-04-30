import { MoreOptionProps, ToolsOptionProps } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SocialOption = () => {
  return (
    <>
      <motion.div
        className="bg-white text-black text-sm space-x-4 flex justify-center"
        initial={{ y: 10 }}
        animate={{ y: 0 }}
      >
        <button className="hover:border-b-4 border-[#150e28]">
          <Link
            href="https://twitter.com/Punkonbase"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Twitter
          </Link>
        </button>
        <button className="hover:border-b-4 border-[#150e28]">
          <Link
            href="https://discord.gg/KJekEGGcf4"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Discord
          </Link>
        </button>
        <button className="hover:border-b-4 border-[#150e28]">
          <Link
            href="https://github.com/Basepunk"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Github
          </Link>
        </button>

        <button className="hover:border-b-4 border-[#150e28]">
          <Link
            href="https://medium.com/@punkonbase/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Medium
          </Link>
        </button>
      </motion.div>
    </>
  );
};

export default SocialOption;
