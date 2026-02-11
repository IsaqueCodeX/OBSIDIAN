import { motion } from "framer-motion";
import processFoam from "@/assets/process-foam.jpg";
import processInspection from "@/assets/process-inspection.jpg";
import processPolishing from "@/assets/process-polishing.jpg";

const steps = [
  {
    number: "01",
    title: "Descontaminação Química e Física",
    description: "Removemos impurezas que a lavagem comum não tira.",
    image: processFoam,
  },
  {
    number: "02",
    title: "Inspeção com Luz de Led",
    description: "Encontramos cada defeito na pintura.",
    image: processInspection,
  },
  {
    number: "03",
    title: "Nivelamento de Verniz",
    description: "O segredo do espelhamento perfeito.",
    image: processPolishing,
  },
];

const ProcessSection = () => {
  return (
    <section id="studio" className="relative py-24 bg-carbon">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-wider text-gradient-silver sm:text-4xl">
            O Padrão Obsidian
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-blue" />
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col items-center gap-10 md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full overflow-hidden rounded-lg md:w-1/2">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <span className="font-heading text-5xl font-bold text-primary/20">
                  {step.number}
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold tracking-wider text-foreground sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
