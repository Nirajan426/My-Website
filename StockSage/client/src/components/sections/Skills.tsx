import { motion } from "framer-motion";
import SkillBadge from "../SkillBadge";
import { portfolioConfig } from "@/config/portfolio";

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioConfig.skills.map((skill, index) => (
              <SkillBadge key={index} name={skill.name} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}