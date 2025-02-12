import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute"
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 transition-colors duration-300" />
        ) : (
          <Moon className="h-5 w-5 transition-colors duration-300" />
        )}
      </motion.div>
    </Button>
  );
}