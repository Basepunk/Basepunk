import { MoreOptionProps, ToolsOptionProps } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const BuyOption = () => {
  return (
    <>
      <motion.div
        className="bg-white text-black text-sm space-x-4 flex justify-center"
        initial={{ y: 10 }}
        animate={{ y: 0 }}
      >
        <button className="hover:border-b-4 border-[#150e28]">
          <Link
            href="https://opensea.io/collection/base-punk-5"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Opensea
          </Link>
        </button>
      </motion.div>
    </>
  );
};

export default BuyOption;
