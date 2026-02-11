import { useState } from "react";
import { motion } from "framer-motion";
import { Diamond, Instagram, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  const [nome, setNome] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [interesse, setInteresse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar uma avaliação.\n\nNome: ${nome}\nModelo: ${modelo}\nCor: ${cor}\nInteresse: ${interesse}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, "_blank");
  };

  return (
    <>
      <section id="agendar" className="relative bg-carbon py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold tracking-wider text-gradient-silver sm:text-4xl">
              Agende uma Avaliação Técnica
            </h2>
            <div className="mx-auto mt-4 h-px w-full max-w-[5rem] bg-gradient-blue" />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-12 max-w-lg space-y-5"
          >
            <Input
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="border-border/50 bg-card font-body text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Input
              placeholder="Modelo do Carro"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              required
              className="border-border/50 bg-card font-body text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Input
              placeholder="Cor do Carro"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
              required
              className="border-border/50 bg-card font-body text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Select onValueChange={setInteresse} required>
              <SelectTrigger className="border-border/50 bg-card font-body text-foreground">
                <SelectValue placeholder="Interesse Principal" />
              </SelectTrigger>
              <SelectContent className="border-border bg-card">
                <SelectItem value="protecao">Proteção</SelectItem>
                <SelectItem value="correcao">Correção</SelectItem>
                <SelectItem value="lavagem">Lavagem Detalhada</SelectItem>
              </SelectContent>
            </Select>
            <button
              type="submit"
              className="shine-effect w-full rounded-md bg-gradient-blue py-4 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Solicitar Orçamento via WhatsApp
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-background py-10">
        <div className="container mx-auto flex flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Diamond className="h-4 w-4 text-primary" />
            <span className="font-heading text-sm font-bold tracking-[0.3em] text-foreground">
              OBSIDIAN
            </span>
          </div>
          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              <Instagram size={18} />
            </a>
            <span className="flex items-center gap-1 font-body text-xs">
              <MapPin size={14} />
              São Paulo, SP
            </span>
          </div>
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Obsidian Auto Studio. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
