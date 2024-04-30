import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ToolsOption = () => {
  return (
    <>
      <motion.div
        className="bg-white text-black text-sm space-x-4 flex justify-center"
        initial={{ y: 10 }}
        animate={{ y: 0 }}
      >
        {/* <button
          className="hover:border-b-4 border-[#150e28]"
        >
          <Link
            href="https://id.basepunk.xyz/#/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Mint domain
          </Link>
        </button> */}
        <button className="hover:border-b-4 border-[#150e28]">
          <Link
            href="https://chat.basepunk.xyz/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Dapps
          </Link>
        </button>
        <button className="hover:border-b-4 border-[#150e28]">
          <Link
            href="https://chat.basepunk.xyz/swap"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Swap
          </Link>
        </button>
        <button className="hover:border-b-4 border-[#150e28] whitespace-nowrap">
          <Link
            href="https://chat.basepunk.xyz/nft"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Create
          </Link>
        </button>

        <button className="hover:border-b-4 border-[#150e28] whitespace-nowrap">
          <Link
            href="https://stake.basepunk.xyz/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Stake
          </Link>
        </button>

        <button className="hover:border-b-4 border-[#150e28] whitespace-nowrap">
          <Link
            href="https://chat.basepunk.xyz/keys"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Key
          </Link>
        </button>
      </motion.div>
    </>
  );
};

export default ToolsOption;
