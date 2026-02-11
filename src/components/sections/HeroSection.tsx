import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-end justify-center overflow-hidden pb-20 pt-32">
      {/* Video Background with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        {/* Background Image (Mobile & Desktop Fallback) */}
        <div className="absolute inset-0">
          <img
            src={heroCar}
            alt="Hero Background"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Video Background (Desktop Only) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroCar}
          className="absolute inset-0 h-full w-full object-cover object-center hidden md:block"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark overlays for legibility */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-heading text-4xl font-bold leading-tight tracking-wider text-gradient-silver sm:text-5xl md:text-6xl lg:text-7xl"
        >
          REFLEXO PURO.
          <br />
          PROTEÇÃO ABSOLUTA.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Elevamos a estética do seu veículo ao nível de arte. Especialistas em
          Correção de Pintura, Vitrificação 9H e Proteção PPF.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10"
        >
          <a
            href="#servicos"
            aria-label="Conhecer nossos tratamentos e serviços"
            className="shine-effect inline-block rounded-md bg-gradient-blue px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Conhecer Tratamentos
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Explore o Brilho
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section >
  );
};

export default HeroSection;
