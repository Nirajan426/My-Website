import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <Badge className="text-base py-2 px-4">{name}</Badge>
    </motion.div>
  );
}
