import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import silkHeroBg from "@/assets/silk-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={silkHeroBg}
          alt="Luxurious silk fabric"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-silk-ivory/95 via-silk-ivory/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-silk-ivory/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-silk-gold font-medium tracking-[0.25em] uppercase text-sm mb-6">
              Established 2008
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-silk-brown leading-[1.1] mb-6"
          >
            Premium{" "}
            <span className="text-gradient-gold">Retail & Wholesale</span>{" "}
            Textiles
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-silk-brown-light leading-relaxed mb-8 max-w-xl"
          >
            Celebrating the spirit of womanhood with exquisite fabrics and timeless
            designs. Your trusted destination for quality ethnic wear in Coimbatore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-silk-green hover:bg-silk-green/90 text-silk-ivory font-medium px-8 h-14 text-base shadow-card hover:shadow-hover transition-all"
            >
              <Link to="/collections">
                View Collections
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-silk-brown text-silk-brown hover:bg-silk-brown hover:text-silk-ivory font-medium px-8 h-14 text-base transition-all"
            >
              <a
                href="https://wa.me/919843663301?text=Hello! I'm interested in wholesale textiles."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                WhatsApp Enquiry
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            {[
              { label: "Years of Trust", value: "18+" },
              { label: "Retail & Wholesale", value: "Premium" },
              { label: "Quality Assured", value: "100%" },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-silk-green">
                  {badge.value}
                </p>
                <p className="text-sm text-silk-brown-light mt-1">{badge.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-silk-cream to-transparent" />
    </section>
  );
};

export default HeroSection;