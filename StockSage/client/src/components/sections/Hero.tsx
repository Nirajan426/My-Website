import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SocialLinks from "../SocialLinks";
import { portfolioConfig } from "@/config/portfolio";

export default function Hero() {
  const { name, title, resumeUrl, profileImage } = portfolioConfig.about;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="tech-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M0 0h50v50H0z" fill="none"/>
              <circle cx="25" cy="25" r="1" className="fill-primary"/>
              <path d="M25 0v50M0 25h50" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#tech-pattern)"/>
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.2,
              rotate: 5,
              transition: { 
                scale: { duration: 0.3, ease: "easeOut" },
                rotate: { duration: 0.5, ease: "easeInOut" }
              }
            }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative w-32 h-32 mx-auto"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
              whileHover={{ scale: 1.4, opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <Avatar className="w-32 h-32 border-4 border-primary/20 relative">
              <AvatarImage src={profileImage} alt={name} />
              <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {/* Animate "Hi, I'm" */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {"Hi, I'm".split("").map((char, index) => (
                <motion.span
                  key={`greeting-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            {" "}
            {/* Animate name */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {name.split("").map((char, index) => (
                <motion.span
                  key={`name-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline">
              View Projects
            </Button>
          </div>
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}