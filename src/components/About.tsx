import { motion } from "framer-motion";
import photo from "./photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border border-primary/20 cyan-glow overflow-hidden">
              <img
                src={photo}
                alt="Feyisa Girma"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent -z-10 blur-sm" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed text-justify">
              I'm <span className="text-foreground font-medium">Feyisa Girma</span>, a 3rd-year
              Information Technology student at{" "}
              <span className="text-foreground font-medium">Haramaya University</span>, passionate
              about building secure, scalable systems — both at the network layer and the application layer.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              On the networking side, I design and simulate enterprise-grade infrastructures —
              VLANs, routing & switching, firewalls, DHCP/DNS, and high-availability architectures
              for hotels, hospitals, and campuses using Cisco Packet Tracer, GNS3, and EVE-NG.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              On the development side, I build full-stack web applications using{" "}
              <span className="text-foreground font-medium">React, Node.js, Python, PostgreSQL,
              Supabase, and Firebase</span> — including a live education platform, a library
              management system, and a church administration system.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              I'm currently working toward my{" "}
              <span className="text-foreground font-medium">CCNA certification</span> and have a
              long-term goal of specialising in{" "}
              <span className="text-foreground font-medium">Cloud Engineering</span> — bridging
              infrastructure and modern software to deliver end-to-end digital solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
