import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-silk-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle="Get in Touch"
            title="Contact Us"
            description="We'd love to hear from you. Visit our stores or reach out through any of the channels below."
          />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-silk-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl font-semibold text-silk-brown mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-5 bg-silk-cream rounded-xl border border-silk-gold/20">
                  <div className="w-12 h-12 rounded-full bg-silk-green/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-silk-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-silk-brown mb-2">
                      Phone & WhatsApp
                    </h4>
                    <p className="text-silk-brown-light">
                      9843663301, 9843885001
                    </p>
                    <p className="text-silk-brown-light">
                      8122005001, 8637610634
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-silk-cream rounded-xl border border-silk-gold/20">
                  <div className="w-12 h-12 rounded-full bg-silk-green/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-silk-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-silk-brown mb-2">Email</h4>
                    <a
                      href="mailto:rathnatex1982@gmail.com"
                      className="text-silk-green hover:underline"
                    >
                      rathnatex1982@gmail.com
                    </a>
                  </div>
                </div>

                {/* Business Info */}
                <div className="flex items-start gap-4 p-5 bg-silk-cream rounded-xl border border-silk-gold/20">
                  <div className="w-12 h-12 rounded-full bg-silk-green/10 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-silk-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-silk-brown mb-2">
                      Business Details
                    </h4>
                    <p className="text-silk-brown-light">
                      GSTIN: 33CZYPR3199E1ZM
                    </p>
                    <p className="text-silk-brown-light">
                      DIGI PIN: MCB-622-M224
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 bg-silk-cream rounded-xl border border-silk-gold/20">
                  <div className="w-12 h-12 rounded-full bg-silk-green/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-silk-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-silk-brown mb-2">
                      Business Hours
                    </h4>
                    <p className="text-silk-brown-light">
                      9:30 AM - 9:00 PM All days
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-silk-green hover:bg-silk-green/90 text-silk-ivory w-full md:w-auto"
                    >
                      <FaWhatsapp className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <a
                        href="https://wa.me/919843663301?text=Hello! I'm interested in your textile products."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        +91 98436 63301
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href="https://wa.me/919843885001?text=Hello! I'm interested in your textile products."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        +91 98438 85001
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>

            {/* Store Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl font-semibold text-silk-brown mb-8">
                Our Locations
              </h3>

              <div className="space-y-6">
                {/* Store 1 */}
                <div className="p-6 bg-silk-cream rounded-xl border border-silk-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-silk-gold/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-silk-gold" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-silk-brown mb-2">
                        Store 1 - Veerapandi Pudur
                      </h4>
                      <p className="text-silk-brown-light leading-relaxed">
                        7/16 B, VC Mill Road (West), No.4,
                        <br />
                        Veerapandi Pudur,
                        <br />
                        Coimbatore – 641029, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Store 2 */}
                <div className="p-6 bg-silk-cream rounded-xl border border-silk-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-silk-gold/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-silk-gold" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-silk-brown mb-2">
                        Store 2 - MTP Road
                      </h4>
                      <p className="text-silk-brown-light leading-relaxed">
                        364-1A, Kalaimagal Complex,
                        <br />
                        Opp Old Anna University, MTP Road,
                        <br />
                        Coimbatore – 641047, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden border border-silk-gold/20 shadow-card">
                  <h4 className="p-3 bg-silk-cream border-b border-silk-gold/10 font-bold text-silk-brown text-center">Store 1 Location</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5976970304496!2d76.94823757481093!3d11.167437489006089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f14b031bea2f%3A0x859bec9e8cfc82aa!2sRathna%20Tex!5e1!3m2!1sen!2sin!4v1768309341559!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Store 1 Map"
                  ></iframe>
                </div>
                <div className="rounded-xl overflow-hidden border border-silk-gold/20 shadow-card">
                  <h4 className="p-3 bg-silk-cream border-b border-silk-gold/10 font-bold text-silk-brown text-center">Store 2 Location</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.538299997723!2d76.97026127481101!3d11.172069889001742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f0e6555558a7%3A0x24eb901d30000000!2sRATHNA%20TEX!5e1!3m2!1sen!2sin!4v1768309409337!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Store 2 Map"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;