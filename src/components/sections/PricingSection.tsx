import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "R$ 890",
    description: "Proteção básica com brilho profissional",
    features: [
      "Lavagem técnica completa",
      "Descontaminação química",
      "Cera sintética de alta durabilidade",
      "Hidratação de plásticos",
      "Garantia de 3 meses",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$ 2.490",
    description: "O pacote mais procurado. Correção + Proteção",
    features: [
      "Tudo do Essencial",
      "Polimento corretivo 2 etapas",
      "Vitrificação Cerâmica 9H",
      "Coating de rodas e vidros",
      "Detalhamento interior completo",
      "Garantia de 2 anos",
    ],
    highlighted: true,
  },
  {
    name: "Ultimate",
    price: "R$ 5.990",
    description: "A blindagem definitiva para seu veículo",
    features: [
      "Tudo do Premium",
      "PPF frontal (capô + para-choque)",
      "Vitrificação de 5 camadas",
      "Película anti-risco em faróis",
      "Manutenção semestral inclusa",
      "Garantia de 5 anos",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="relative py-24 bg-carbon">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-wider text-gradient-silver sm:text-4xl">
            Pacotes de Serviços
          </h2>
          <p className="mt-4 font-body text-muted-foreground">
            Escolha o nível de proteção ideal para o seu veículo
          </p>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-blue" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`shine-effect relative flex flex-col rounded-lg border p-8 transition-all duration-500 ${
                plan.highlighted
                  ? "border-primary/50 bg-card glow-blue-strong scale-[1.02]"
                  : "border-border/50 bg-card hover:border-primary/30 hover:glow-blue"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-gradient-blue px-4 py-1">
                  <Star className="h-3 w-3 text-primary-foreground" />
                  <span className="font-heading text-[10px] uppercase tracking-wider text-primary-foreground">
                    Mais Popular
                  </span>
                </div>
              )}

              <h3 className="font-heading text-lg font-bold tracking-wider text-foreground">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-gradient-blue">
                  {plan.price}
                </span>
              </div>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="font-body text-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#agendar"
                className={`mt-8 block rounded-md py-3 text-center font-body text-sm font-semibold uppercase tracking-widest transition-all ${
                  plan.highlighted
                    ? "bg-gradient-blue text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                    : "border border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                Agendar Avaliação
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
