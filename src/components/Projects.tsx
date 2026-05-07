import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Lock, FileText, Network, Github, Globe } from "lucide-react";

interface ProjectLink {
  label: string;
  href: string;
  icon: "docs" | "topology" | "github" | "live";
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  status?: "live" | "upcoming";
  links?: ProjectLink[];
}

// ── Network Projects ──────────────────────────────────────────────────────────
const networkProjects: Project[] = [
  {
    title: "Hotel Network Design",
    description:
      "End-to-end network infrastructure for a multi-floor hotel with VLANs, guest isolation, and centralized management. Simulated in Cisco Packet Tracer.",
    tags: ["VLANs", "DHCP", "Cisco", "Network Security"],
    links: [
      { label: "Docs", href: "https://github.com/feynet1", icon: "docs" },
      { label: "Topology", href: "https://github.com/feynet1", icon: "topology" },
    ],
  },
  {
    title: "Hospital Network Design",
    description:
      "High-availability network for a hospital environment with redundant links, segmented traffic for medical devices, and HIPAA-compliant security.",
    tags: ["HA", "Firewalls", "Routing", "Redundancy"],
    links: [
      { label: "Docs", href: "https://github.com/feynet1", icon: "docs" },
      { label: "Topology", href: "https://github.com/feynet1", icon: "topology" },
    ],
  },
  {
    title: "Campus Network Design",
    description:
      "Scalable campus-wide network supporting thousands of users across multiple buildings with inter-VLAN routing and centralized DNS/DHCP.",
    tags: ["Scalability", "DNS", "Switching", "Design"],
    links: [
      { label: "Docs", href: "https://github.com/feynet1", icon: "docs" },
      { label: "Topology", href: "https://github.com/feynet1", icon: "topology" },
    ],
  },
  {
    title: "Enterprise Secure Network",
    description:
      "Zero-trust enterprise network with advanced firewall policies, IDS/IPS integration, and automated monitoring.",
    tags: ["Zero Trust", "IDS/IPS", "Monitoring", "Automation"],
    status: "upcoming",
    links: [
      { label: "Docs", href: "https://github.com/feynet1", icon: "docs" },
      { label: "Topology", href: "https://github.com/feynet1", icon: "topology" },
    ],
  },
  {
    title: "Cloud-Native Infrastructure & Automation",
    description:
      "Cloud infrastructure with Terraform, Kubernetes, and CI/CD pipelines for automated deployments.",
    tags: ["Cloud", "Terraform", "K8s", "CI/CD"],
    status: "upcoming",
    links: [
      { label: "GitHub", href: "https://github.com/feynet1", icon: "github" },
    ],
  },
];

// ── Web-Based Projects ────────────────────────────────────────────────────────
const webProjects: Project[] = [
  {
    title: "EduPlatform",
    description:
      "A full-featured online education platform with course management, student enrollment, progress tracking, and interactive content delivery.",
    tags: ["React", "Node.js", "PostgreSQL", "Full-Stack"],
    links: [
      { label: "GitHub", href: "https://github.com/feynet1/Smart-Education-platform", icon: "github" },
      { label: "Live Demo", href: "https://smart-education-platform-tau.vercel.app/", icon: "live" },
    ],
  },
  {
    title: "Library Management System",
    description:
      "Web-based library system with role-based access for students, teachers, and admins. Supports book cataloguing, borrowing, returns, and overdue tracking.",
    tags: ["React", "Node.js", "PostgreSQL", "RBAC"],
    links: [
      { label: "GitHub", href: "https://github.com/feynet1/Library-management-system", icon: "github" },
      { label: "Live Demo", href: "https://library-management-system-nu-five.vercel.app/", icon: "live" },
    ],
  },
  {
    title: "Church Management System",
    description:
      "Comprehensive church administration platform for managing members, attendance, events, announcements, and financial contributions.",
    tags: ["React", "Node.js", "PostgreSQL", "Dashboard"],
    links: [
      { label: "GitHub", href: "https://github.com/1Feycode/church-management-system", icon: "github" },
      { label: "Live Demo", href: "https://sulula-obse-church.vercel.app/", icon: "live" },
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product listings, shopping cart, order management, and payment integration.",
    tags: ["React", "Node.js", "PostgreSQL", "Payments"],
    status: "upcoming",
  },
];

const linkIcons = {
  docs: FileText,
  topology: Network,
  github: Github,
  live: Globe,
};

// ── Reusable card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    key={project.title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={
      project.status !== "upcoming"
        ? { scale: 1.02, boxShadow: "0 0 30px hsl(187 85% 53% / 0.25)" }
        : undefined
    }
    className={`glass-card rounded-xl p-6 relative overflow-hidden transition-colors hover:border-primary/30 h-full ${
      project.status === "upcoming" ? "opacity-60" : ""
    }`}
  >
    {/* Coming soon overlay */}
    {project.status === "upcoming" && (
      <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/60 backdrop-blur-sm rounded-xl">
        <div className="text-center">
          <Lock className="text-primary mx-auto mb-2" size={24} />
          <span className="font-mono text-sm text-primary">Coming Soon</span>
        </div>
      </div>
    )}

    {/* Live badge */}
    {project.status === "live" && (
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-primary pulse-live inline-block" />
        <span className="text-xs font-mono text-primary">Live — In Progress</span>
      </div>
    )}

    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-foreground pr-2">{project.title}</h3>
      {!project.status && (
        <ExternalLink
          className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1"
          size={16}
        />
      )}
    </div>

    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
      {project.description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Links */}
    {project.links && project.links.length > 0 && (
      <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
        {project.links.map((link) => {
          const Icon = linkIcons[link.icon];
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border border-primary/20 text-primary/80 hover:text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
            >
              <Icon size={13} />
              {link.label}
            </a>
          );
        })}
      </div>
    )}
  </motion.div>
);

// ── Section ───────────────────────────────────────────────────────────────────
const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
        </motion.div>

        {/* ── Network Projects ── */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-lg font-semibold text-foreground mb-6 font-mono"
          >
            <span className="text-primary">//</span> Network Projects
          </motion.h3>
          
          {isMobile ? (
            <div className="relative overflow-hidden">
              <motion.div
                drag="x"
                dragConstraints={{ left: -(networkProjects.length * 300 - window.innerWidth + 32), right: 0 }}
                dragElastic={0.1}
                className="flex gap-6 cursor-grab active:cursor-grabbing pb-4"
              >
                {networkProjects.map((project, i) => (
                  <div key={project.title} className="min-w-[280px]">
                    <ProjectCard project={project} index={i} />
                  </div>
                ))}
              </motion.div>
              <div className="text-center mt-2">
                <span className="text-xs text-muted-foreground font-mono">← Swipe to explore →</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {networkProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          )}
        </div>

        {/* ── Web-Based Projects ── */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-lg font-semibold text-foreground mb-6 font-mono"
          >
            <span className="text-primary">//</span> Web-Based Projects
          </motion.h3>
          
          {isMobile ? (
            <div className="relative overflow-hidden">
              <motion.div
                drag="x"
                dragConstraints={{ left: -(webProjects.length * 300 - window.innerWidth + 32), right: 0 }}
                dragElastic={0.1}
                className="flex gap-6 cursor-grab active:cursor-grabbing pb-4"
              >
                {webProjects.map((project, i) => (
                  <div key={project.title} className="min-w-[280px]">
                    <ProjectCard project={project} index={i} />
                  </div>
                ))}
              </motion.div>
              <div className="text-center mt-2">
                <span className="text-xs text-muted-foreground font-mono">← Swipe to explore →</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;
