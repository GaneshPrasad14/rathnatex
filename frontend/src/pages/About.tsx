import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Award, Heart, Users, Star, Target, Eye, Sparkles, UserCheck, TrendingUp, Shield } from "lucide-react";

const qualityPolicies = [
  {
    icon: UserCheck,
    title: "Customer Satisfaction",
    description:
      "We place our customers at the heart of everything we do. Every fabric, every design, every interaction is crafted to exceed expectations.",
  },
  {
    icon: Star,
    title: "Excellence in Sourcing",
    description:
      "We partner only with the finest mills and artisans, ensuring that every product that bears our name meets the highest standards of craftsmanship.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We embrace innovation and constantly seek ways to enhance our products, services, and processes to serve you better.",
  },
  {
    icon: Shield,
    title: "Ethical Business",
    description:
      "Integrity is our foundation. We conduct business with honesty, fairness, and transparency in all our dealings.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-silk-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle="Our Story"
            title="About Rathna Tex"
            description="A legacy of quality, trust, and dedication to celebrating the spirit of womanhood since 2008."
          />
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-20 bg-silk-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-silk-brown mb-6">
                A Journey of Excellence
              </h3>
              <div className="space-y-6 text-silk-brown-light leading-relaxed">
                <p>
                  Since our inception in 2008, Rathna Tex has been a cornerstone of
                  quality and elegance for women. For nearly two decades, we have
                  dedicated ourselves to sourcing the finest fabrics and the most
                  exquisite designs to celebrate the spirit of womanhood.
                </p>
                <p>
                  What started as a passion for textiles has grown into a trusted
                  destination for exclusive ethnic wear. Our 18-year journey is
                  built on a foundation of uncompromised quality, fair pricing, and
                  a deep-rooted relationship with our customers.
                </p>
                <p>
                  At Rathna Tex, we don't just sell clothes; we provide the
                  confidence that comes with wearing a masterpiece.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { icon: Award, label: "Years of Excellence", value: "18+" },
                  { icon: Users, label: "Happy Customers", value: "50,000+" },
                  { icon: Star, label: "Product Categories", value: "100+" },
                  { icon: Heart, label: "Trusted Brand", value: "Since 2008" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 bg-silk-cream rounded-lg border border-silk-gold/20"
                  >
                    <stat.icon className="w-6 h-6 text-silk-gold mb-2" />
                    <p className="font-heading text-2xl font-bold text-silk-green">
                      {stat.value}
                    </p>
                    <p className="text-sm text-silk-brown-light">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-silk-gold/30 shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=750&fit=crop"
                  alt="Traditional Indian textiles"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-silk-green text-silk-ivory p-6 rounded-xl shadow-hover">
                <p className="font-heading text-3xl font-bold">2008</p>
                <p className="text-sm opacity-80">Established</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-silk-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-silk-brown">
              Our Purpose
            </h3>
            <p className="text-silk-brown-light mt-4 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence in every thread we weave.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl border border-silk-gold/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-silk-green/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-silk-green" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-silk-brown mb-4">
                Our Mission
              </h3>
              <p className="text-silk-brown-light leading-relaxed">
                To empower women through fashion by offering curated, premium
                textile collections backed by three decades of industry knowledge
                and a passion for excellence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-silk-brown p-10 rounded-2xl shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-silk-gold/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-silk-gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-silk-ivory mb-4">
                Our Vision
              </h3>
              <p className="text-silk-ivory/80 leading-relaxed">
                To redefine the shopping experience for the modern woman by
                becoming the ultimate destination for exclusive style, quality,
                and personalized service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-20 bg-silk-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-silk-brown">
              Our Quality Promise
            </h3>
            <p className="text-silk-brown-light mt-4 max-w-2xl mx-auto">
              The principles that ensure every thread we sell meets the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {qualityPolicies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white rounded-xl border border-silk-gold/20 hover:border-silk-gold/40 transition-all hover:shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-silk-green/10 flex items-center justify-center group-hover:bg-silk-green/20 transition-colors">
                    <policy.icon className="w-6 h-6 text-silk-green" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-silk-brown mb-2">
                      {policy.title}
                    </h3>
                    <p className="text-sm text-silk-brown-light leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-silk-brown">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
              <div className="relative mx-auto md:mx-0">
                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-silk-gold/40 shadow-lg">
                  <div className="w-full h-full bg-silk-brown-light/30 flex items-center justify-center">
                    <span className="font-heading text-4xl text-silk-ivory/60">
                      RS
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-silk-gold flex items-center justify-center">
                  <Star className="w-8 h-8 text-silk-brown" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <span className="text-silk-gold font-medium tracking-widest uppercase text-sm">
                  Founder
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-semibold text-silk-ivory mt-2 mb-4">
                  Rathna SB
                </h3>
                <p className="text-silk-ivory/80 leading-relaxed">
                  With a vision to redefine the textile shopping experience, Rathna
                  SB founded Rathna Tex in 2008. Her passion for quality fabrics
                  and dedication to customer satisfaction has made Rathna Tex a
                  household name in Coimbatore and beyond.
                </p>
                <div className="mt-6 flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-12 h-px bg-silk-gold" />
                  <span className="w-2 h-2 rounded-full bg-silk-gold" />
                  <span className="w-12 h-px bg-silk-gold" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;