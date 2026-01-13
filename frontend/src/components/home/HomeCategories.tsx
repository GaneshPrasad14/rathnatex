import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";


const HomeCategories = () => {
    const [categories, setCategories] = useState<{ _id: string, name: string, slug: string, image: string }[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
                if (res.ok) {
                    const data = await res.json();
                    setCategories(data.slice(0, 4));
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <section className="py-20 bg-silk-ivory">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionTitle
                    subtitle="Collections"
                    title="Popular Categories"
                    description="Explore our most sought-after textile collections."
                />

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category._id}
                            to={`/shop?category=${category.slug}`}
                            className="group block relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${category.image}`}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-xl font-heading font-bold text-white mb-1">
                                        {category.name}
                                    </h3>
                                    <p className="text-white/80 text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        View Collection <ArrowRight size={14} />
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/shop"
                        className="inline-flex items-center px-8 py-3 border-2 border-silk-gold text-silk-brown font-medium rounded-full hover:bg-silk-gold hover:text-white transition-all duration-300"
                    >
                        View All Categories
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeCategories;
