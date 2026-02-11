import { motion } from "framer-motion";
import { Shield, Sparkles, Layers, Armchair } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Vitrificação Cerâmica (Coating)",
    description:
      "Proteção 9H de alta dureza. Brilho vitrificado, repelência a água e sujeira por até 3 anos.",
  },
  {
    icon: Sparkles,
    title: "Polimento Técnico (Correction)",
    description:
      "Remoção de micro-riscos e hologramas. Restauramos a profundidade e a cor original da pintura.",
  },
  {
    icon: Layers,
    title: "PPF (Paint Protection Film)",
    id: "ppf",
    description:
      "A armadura invisível. Película regenerativa que protege contra pedras, arranhões e pequenos impactos.",
  },
  {
    icon: Armchair,
    title: "Detalhamento Interior",
    description:
      "Higienização profunda de couro e tecidos. Proteção UV para painéis e revitalização de plásticos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-wider text-gradient-silver sm:text-4xl">
            Engenharia de Detalhamento
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-blue" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="shine-effect group rounded-lg border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:glow-blue"
            >
              <service.icon className="mb-5 h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
