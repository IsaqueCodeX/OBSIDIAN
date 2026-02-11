import { motion } from "framer-motion";
import { Award, Thermometer, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certificação Internacional Gtechniq",
  },
  {
    icon: Thermometer,
    title: "Ambiente Climatizado e Monitorado",
  },
  {
    icon: ShieldCheck,
    title: "Seguro Total durante o serviço",
  },
];

const WhyUsSection = () => {
  return (
    <section className="relative border-y border-border/30 bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex items-center gap-4"
            >
              <item.icon className="h-8 w-8 shrink-0 text-primary" />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground sm:text-sm">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
