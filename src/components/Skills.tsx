import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Network, Shield, Server, Globe, Database, Wifi, Lock
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { 
  SiReact, SiNodedotjs, SiPython, SiTypescript, SiPostgresql, 
  SiExpress, SiSupabase, SiFirebase, SiCisco, SiWireshark,
  SiGithub, SiDocker, SiPostman, SiLinux, SiFastapi
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: LucideIcon | IconType;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Networking",
    skills: [
      { name: "VLANs", icon: Network },
      { name: "Routing & Switching", icon: Wifi },
      { name: "DHCP / DNS", icon: Server },
      { name: "Network Design", icon: Globe },
      { name: "Firewalls & Security", icon: Shield },
      { name: "High Availability", icon: Lock },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Express / FastAPI", icon: SiFastapi },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Cisco Packet Tracer", icon: SiCisco },
      { name: "GNS3", icon: Network },
      { name: "EVE-NG", icon: Network },
      { name: "Wireshark", icon: SiWireshark },
      { name: "Git / GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Skills & Technologies</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-lg font-semibold text-foreground mb-6 font-mono"
              >
                <span className="text-primary">//</span> {cat.title}
              </motion.h3>
              
              {isMobile ? (
                <div className="relative overflow-hidden">
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: -(cat.skills.length * 140 - window.innerWidth + 32), right: 0 }}
                    dragElastic={0.1}
                    className="flex gap-4 cursor-grab active:cursor-grabbing pb-4"
                    role="list"
                  >
                    {cat.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 + catIdx * 0.1 }}
                        className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 transition-colors hover:border-primary/40 min-w-[130px]"
                        role="listitem"
                        aria-label={skill.name}
                      >
                        <skill.icon className="text-primary" size={24} aria-hidden="true" />
                        <span className="text-sm text-muted-foreground text-center font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="text-center mt-2">
                    <span className="text-xs text-muted-foreground font-mono">← Swipe to explore →</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" role="list">
                  {cat.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 + catIdx * 0.1 }}
                      className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 transition-colors hover:border-primary/40"
                      role="listitem"
                      aria-label={skill.name}
                    >
                      <skill.icon className="text-primary" size={24} aria-hidden="true" />
                      <span className="text-sm text-muted-foreground text-center font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
