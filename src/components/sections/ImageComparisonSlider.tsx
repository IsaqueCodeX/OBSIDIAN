import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";
import beforePaint from "@/assets/before-paint.jpg";
import afterPaint from "@/assets/after-paint.jpg";

const ImageComparisonSlider = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

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
            A Prova Real
          </h2>
          <p className="mt-4 font-body text-muted-foreground">
            Arraste para comparar o antes e depois
          </p>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-blue" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <div
            ref={containerRef}
            className="relative aspect-square cursor-ew-resize select-none overflow-hidden rounded-lg border border-border/30"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* After (bottom layer) */}
            <img
              src={afterPaint}
              alt="Padrão Obsidian - Depois"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
              loading="lazy"
            />

            {/* Before (clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <img
                src={beforePaint}
                alt="Pintura Danificada - Antes"
                className="h-full object-cover"
                style={{ width: containerRef.current?.offsetWidth || "100%" }}
                draggable={false}
                loading="lazy"
              />
            </div>

            {/* Labels */}
            <span className="absolute left-4 top-4 rounded-md bg-background/80 px-3 py-1 font-heading text-xs uppercase tracking-wider text-destructive backdrop-blur-sm">
              Pintura Danificada
            </span>
            <span className="absolute right-4 top-4 rounded-md bg-background/80 px-3 py-1 font-heading text-xs uppercase tracking-wider text-primary backdrop-blur-sm">
              Padrão Obsidian
            </span>

            {/* Handle */}
            <div
              className="absolute top-0 bottom-0 z-10 w-1 bg-primary"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background/90 shadow-lg glow-blue-strong">
                <ChevronsLeftRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageComparisonSlider;
