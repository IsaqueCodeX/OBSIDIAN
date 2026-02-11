import { motion } from "framer-motion";
import galleryHydrophobic from "@/assets/gallery-hydrophobic.jpg";
import galleryCorrection from "@/assets/gallery-correction.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryBlueCoupe from "@/assets/gallery-blue-coupe.jpg";

const images = [
  { src: galleryHydrophobic, alt: "Efeito hidrofóbico", tall: true },
  { src: galleryCorrection, alt: "Correção de pintura antes e depois", tall: false },
  { src: galleryInterior, alt: "Interior detalhado", tall: false },
  { src: galleryBlueCoupe, alt: "Coupé azul espelhado", tall: true },
];

const GallerySection = () => {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-wider text-gradient-silver sm:text-4xl">
            Resultados Reais
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-blue" />
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="mb-4 overflow-hidden rounded-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${
                  img.tall ? "h-96" : "h-64"
                }`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
