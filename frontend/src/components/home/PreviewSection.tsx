import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const previewItems = [
  {
    title: "Our Collections",
    description:
      "Explore our extensive collection of sarees, blouses, ready-made wear, and more.",
    link: "/collections",
    image: "/images/running_materials.png",
  },
  {
    title: "About Us",
    description:
      "Discover our 18-year journey of bringing quality textiles to you.",
    link: "/about",
    image: "/images/blouses.png",
  },
  {
    title: "Contact Us",
    description:
      "Visit our stores in Coimbatore or reach out for wholesale enquiries.",
    link: "/contact",
    image: "/images/readymade.png",
  },
];

const PreviewSection = () => {
  return (
    <section className="py-24 bg-silk-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          subtitle="Explore"
          title="Discover Rathna Tex"
          description="From premium sarees to custom uniforms, we're your one-stop destination for quality textiles."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={item.link}
                className="group block overflow-hidden rounded-xl bg-silk-ivory border border-silk-gold/20 hover:border-silk-gold/40 transition-all duration-500 hover:shadow-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-silk-brown mb-2 group-hover:text-silk-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-silk-brown-light text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center text-silk-green font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;