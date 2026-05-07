import { useReducedMotion, motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  top: `${15 + i * 14}%`,
  left: `${10 + i * 15}%`,
  duration: 4 + i,
  delay: i * 0.7,
}));

const Hero = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center network-grid overflow-hidden" style={{ zIndex: 0 }}>

      {/* Floating particles — hidden when user prefers reduced motion */}
      {!reducedMotion &&
        PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{ top: p.top, left: p.left }}
            animate={{
              y: [0, -20, -10, -30, 0],
              x: [0, 10, -5, 15, 0],
              opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-foreground leading-tight">
            Hi, I'm <span className="text-gradient-cyan">Feyisa Girma</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 font-light">
            Network Engineer <span className="text-primary">|</span> Full-Stack Developer
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Designing secure, scalable networks and building modern web applications
            that drive digital transformation.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center"
        >
          <a href="#contact" className="btn-primary-cyber text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5">
            Contact Me
          </a>
          <a href="#projects" className="btn-secondary-cyber text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5">
            View Projects
          </a>
          <a
            href="/cv.pdf"
            download="Feyisa_Girma_CV.pdf"
            className="btn-secondary-cyber inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5"
          >
            <Download size={14} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown
            className={`text-muted-foreground ${reducedMotion ? "" : "animate-bounce"}`}
            size={28}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
