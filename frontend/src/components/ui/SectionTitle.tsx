import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {subtitle && (
        <span
          className={`inline-block text-sm font-medium tracking-[0.2em] uppercase mb-4 ${
            light ? "text-silk-gold-light" : "text-silk-gold"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? "text-silk-ivory" : "text-silk-brown"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-silk-ivory/80" : "text-silk-brown-light"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 flex items-center gap-2 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="w-12 h-px bg-silk-gold" />
        <span className="w-2 h-2 rounded-full bg-silk-gold" />
        <span className="w-12 h-px bg-silk-gold" />
      </div>
    </motion.div>
  );
};

export default SectionTitle;