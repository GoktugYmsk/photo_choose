import React from "react";
import { motion } from "framer-motion";
import "./index.scss";

function LazyLoading({ height = "200px", width = "100%" }) {
  return (
    <motion.div
      className="lazy-loading"
      style={{ height, width }}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
    />
  );
}

export default LazyLoading;
