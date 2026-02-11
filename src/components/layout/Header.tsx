import { useState } from "react";
import { Diamond, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Studio", href: "#studio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "PPF", href: "#ppf" },
  { label: "Agendar", href: "#agendar" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 backdrop-blur-md bg-background/60"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Diamond className="h-5 w-5 text-primary" />
          <span className="font-heading text-lg font-bold tracking-[0.3em] text-foreground">
            OBSIDIAN
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#agendar"
            className="shine-effect rounded-md border-glow-blue px-5 py-2 font-body text-sm font-medium tracking-wider text-primary transition-all hover:bg-primary/10"
          >
            Avaliação Gratuita
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#agendar"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-md border-glow-blue px-5 py-3 text-center font-body text-sm font-medium tracking-wider text-primary"
              >
                Avaliação Gratuita
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
