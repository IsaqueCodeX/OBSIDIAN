import { motion } from "framer-motion";

const features = [
  { name: "Brilho Extremo", ceramic: 5, ppf: 4 },
  { name: "Hidrofobia", ceramic: 5, ppf: 4 },
  { name: "Proteção contra Riscos", ceramic: 2, ppf: 5 },
  { name: "Proteção contra Pedras", ceramic: null, ppf: "✅ Blindagem" },
  { name: "Durabilidade", ceramic: "3 Anos", ppf: "10 Anos" },
  { name: "Investimento", ceramic: "$$", ppf: "$$$$" },
];

const Stars = ({ count }: { count: number }) => (
  <span className="text-primary">{"⭐".repeat(count)}</span>
);

const CellValue = ({ value }: { value: number | string | null }) => {
  if (value === null) return <span className="text-destructive">❌</span>;
  if (typeof value === "number") return <Stars count={value} />;
  return <span className="font-body text-sm text-foreground">{value}</span>;
};

const ComparisonTable = () => {
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
            Qual a proteção ideal para você?
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-blue" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-primary/20 glow-blue"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border/50 bg-card">
                  <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-wider text-muted-foreground">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-heading text-xs uppercase tracking-wider text-primary">
                    Vitrificação 9H
                  </th>
                  <th className="px-6 py-4 text-center font-heading text-xs uppercase tracking-wider text-primary">
                    PPF (Película)
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr
                    key={f.name}
                    className={`border-b border-border/30 ${i % 2 === 0 ? "bg-background" : "bg-card/50"}`}
                  >
                    <td className="px-6 py-4 font-body text-sm text-foreground">{f.name}</td>
                    <td className="px-6 py-4 text-center"><CellValue value={f.ceramic} /></td>
                    <td className="px-6 py-4 text-center"><CellValue value={f.ppf} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
