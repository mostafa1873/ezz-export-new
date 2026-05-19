// components/LoadingSpinner.tsx
"use client";
import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-2 border-gray-100 border-t-[#2d5a27] rounded-full"
    />
  );
}