import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme/ThemeToggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {children}
    </motion.div>
  );
}