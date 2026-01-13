import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { toast } from "sonner";

interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
}

const Collections = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
                if (res.ok) {
                    const data = await res.json();
                    setCategories(data);
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
                toast.error("Failed to load collections");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-24 bg-silk-cream">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionTitle
                        subtitle="Our Collections"
                        title="Premium Textile Collections"
                        description="Explore our extensive range of handpicked textiles, from traditional sarees to modern ready-made wear."
                    />
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-silk-ivory">
                <div className="container mx-auto px-4 lg:px-8">
                    {loading ? (
                        <div className="text-center py-20">Loading collections...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {categories.map((category, index) => (
                                <motion.div
                                    key={category._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="group bg-silk-cream rounded-xl overflow-hidden border border-silk-gold/20 hover:border-silk-gold/40 transition-all duration-500 hover:shadow-hover"
                                >
                                    <Link to={`/shop?category=${encodeURIComponent(category.slug)}`}>
                                        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                                            {category.image ? (
                                                <img
                                                    src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${category.image}`}
                                                    alt={category.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-heading text-xl font-semibold text-silk-brown mb-2 group-hover:text-silk-green transition-colors">
                                                {category.name}
                                            </h3>
                                            <p className="text-sm text-silk-brown-light line-clamp-2">
                                                {category.description || "Explore our collection"}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Wholesale CTA */}
            <section className="py-20 bg-silk-brown">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-silk-ivory mb-4">
                            Interested in Wholesale Pricing?
                        </h3>
                        <p className="text-silk-ivory/80 text-lg mb-8">
                            Contact us for exclusive wholesale rates and bulk order discounts.
                        </p>
                        <a
                            href="https://wa.me/919843663301?text=Hello! I'm interested in wholesale textiles."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-silk-gold hover:bg-silk-gold/90 text-silk-brown font-medium rounded-lg transition-colors"
                        >
                            Get Wholesale Quote
                        </a>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Collections;
