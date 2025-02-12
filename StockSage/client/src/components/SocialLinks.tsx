import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";
import { portfolioConfig } from "@/config/portfolio";

export default function SocialLinks() {
  const socialLinks = portfolioConfig.about.socialLinks;

  const socialIcons = {
    github: SiGithub,
    linkedin: SiLinkedin,
    facebook: SiFacebook
  };

  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map((social, index) => {
        const Icon = socialIcons[social.platform as keyof typeof socialIcons];
        return (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        );
      })}
    </div>
  );
}