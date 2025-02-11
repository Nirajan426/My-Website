import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="rounded-full p-1 bg-gradient-to-r from-primary to-blue-600"
    >
      <Avatar className="w-48 h-48">
        <AvatarImage 
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" 
          alt="Nirajan Chaudhary"
          className="object-cover"
        />
        <AvatarFallback>NC</AvatarFallback>
      </Avatar>
    </motion.div>
  );
}