import { motion } from "framer-motion";
import { Award, Users, Gem, Heart } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Since 2008",
    description:
      "Nearly two decades of excellence in textile sourcing and curation.",
  },
  {
    icon: Users,
    title: "Wholesale Specialists",
    description:
      "Dedicated to serving retailers and businesses with premium bulk offerings.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description:
      "Only the finest fabrics and most exquisite designs make it to our collection.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Building lasting relationships through trust, quality, and fair pricing.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-silk-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-silk-cream rounded-lg border border-silk-gold/20 hover:border-silk-gold/40 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-full bg-silk-green/10 flex items-center justify-center mb-6 group-hover:bg-silk-green/20 transition-colors">
                <item.icon className="w-7 h-7 text-silk-green" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-silk-brown mb-3">
                {item.title}
              </h3>
              <p className="text-silk-brown-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;