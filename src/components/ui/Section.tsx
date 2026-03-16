"use client";

import { motion } from "framer-motion";

export const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      staggerChildren: 0.12,
    },
  },
};

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  noPadding?: boolean;
}

export const Section = ({ children, id, className, noPadding = false }: SectionProps) => (
  <motion.section
    id={id}
    className={`${!noPadding ? "py-20 md:py-32" : ""} ${className || ""}`}
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
  >
    {children}
  </motion.section>
);
