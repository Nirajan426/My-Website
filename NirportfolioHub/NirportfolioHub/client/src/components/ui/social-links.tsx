import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "#", // TODO: Replace with actual GitHub URL
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "#", // TODO: Replace with actual LinkedIn URL
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "#", // TODO: Replace with actual Facebook URL
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <link.icon className="w-6 h-6" />
          <span className="sr-only">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
}
