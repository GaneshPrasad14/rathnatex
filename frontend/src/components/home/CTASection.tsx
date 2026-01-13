import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-24 bg-silk-brown relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-silk-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-silk-ivory leading-tight mb-6">
            Ready to Elevate Your Textile Business?
          </h2>
          <p className="text-silk-ivory/80 text-lg mb-10 leading-relaxed">
            Whether you're a retailer looking for wholesale deals or seeking
            premium textiles for special occasions, we're here to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-silk-gold hover:bg-silk-gold/90 text-silk-brown font-medium px-8 h-14 text-base"
            >
              <a
                href="https://wa.me/919843663301?text=Hello! I'm interested in wholesale textiles."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-silk-ivory text-silk-brown hover:bg-silk-ivory/90 font-medium px-8 h-14 text-base"
            >
              <a href="tel:+919843663301">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;