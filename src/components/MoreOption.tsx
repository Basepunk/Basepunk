import { MoreOptionProps } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MoreOption = () => {
  const [selectMoreOption, setSelectMoreOption] =
    useState<MoreOptionProps>(" ");

  return (
    <>
      <motion.div
        className="bg-white text-black text-sm space-x-4 flex justify-center"
        initial={{ y: 10 }}
        animate={{ y: 0 }}
      >
        <button
          className="hover:border-b-4 border-[#150e28]"
          onClick={() => setSelectMoreOption("whitepaper")}
        >
          <Link
            href="https://www.basepunk.xyz/assets/BASE%20PUNK%20%20Whitepaper.pdf"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Whitepaper
          </Link>
        </button>
        <button
          className="hover:border-b-4 border-[#150e28]"
          onClick={() => setSelectMoreOption("chat")}
        >
          <Link
            href="https://chat.basepunk.xyz/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Chat
          </Link>
        </button>
        {/* <button
          className="hover:border-b-4 border-[#150e28]"
          onClick={() => setSelectMoreOption("stake")}
        >
          <Link
            href="https://stake.basepunk.xyz/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Stake
          </Link>
        </button> */}
        <button
          className="hover:border-b-4 border-[#150e28] whitespace-nowrap"
          onClick={() => setSelectMoreOption("mint")}
        >
          <Link
            href="https://id.basepunk.xyz/#/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Mint domain
          </Link>
        </button>
      </motion.div>
    </>
  );
};

export default MoreOption;
