import { motion } from "framer-motion";
import { CircleHelp, Sparkles, ShieldCheck, Droplets } from "lucide-react";

const problems = [
  {
    icon: CircleHelp,
    question: "Carro com micro-riscos (teias de aranha)?",
    solution: "Correção de Pintura",
    href: "#servicos",
  },
  {
    icon: Sparkles,
    question: "Bancos de couro brilhando/sujos?",
    solution: "Spa de Interiores",
    href: "#servicos",
  },
  {
    icon: ShieldCheck,
    question: "Quer proteger carro 0km?",
    solution: "PPF Frontal",
    href: "#ppf",
  },
  {
    icon: Droplets,
    question: "Pintura áspera ou sem brilho?",
    solution: "Descontaminação + Cera",
    href: "#servicos",
  },
];

const ProblemNavigation = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-wider text-gradient-silver sm:text-4xl">
            Como podemos ajudar?
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-blue" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <motion.a
              key={p.question}
              href={p.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="shine-effect group flex flex-col items-center gap-4 rounded-lg border border-border/50 bg-card p-8 text-center transition-all duration-500 hover:border-primary/30 hover:glow-blue"
            >
              <p.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <p className="font-body text-sm leading-relaxed text-foreground">
                {p.question}
              </p>
              <span className="font-heading text-xs uppercase tracking-wider text-primary">
                → {p.solution}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemNavigation;
