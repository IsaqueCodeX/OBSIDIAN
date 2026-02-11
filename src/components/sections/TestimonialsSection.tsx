import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo M.",
    car: "Porsche 911 GT3",
    text: "O nível de espelhamento que conseguiram é absurdo. Parece que o carro saiu da fábrica ontem. Recomendo de olhos fechados.",
  },
  {
    name: "Fernanda S.",
    car: "BMW X5",
    text: "Fiz o pacote Premium e o resultado superou todas as expectativas. A vitrificação mudou completamente a aparência do carro.",
  },
  {
    name: "Lucas P.",
    car: "Mercedes-AMG C63",
    text: "Ambiente impecável, equipe técnica de altíssimo nível. O PPF ficou invisível e a proteção é real. Vale cada centavo.",
  },
  {
    name: "Ana C.",
    car: "Audi RS5",
    text: "Já passei por vários estúdios e nenhum chega perto da Obsidian. O cuidado com cada detalhe é impressionante.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="relative py-24 border-y border-border/30 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-wider text-gradient-silver sm:text-4xl">
            O que dizem nossos clientes
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-blue" />
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote className="mx-auto mb-6 h-8 w-8 text-primary/40" />
              <p className="font-body text-lg italic leading-relaxed text-foreground/90">
                "{testimonials[current].text}"
              </p>
              <div className="mt-6">
                <p className="font-heading text-sm font-bold tracking-wider text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="font-body text-xs text-primary">
                  {testimonials[current].car}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} className="rounded-full border border-border/50 p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="rounded-full border border-border/50 p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
