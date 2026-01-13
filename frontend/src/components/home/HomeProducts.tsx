import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const HomeProducts = () => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data.slice(0, 8));
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const handleAddToCart = (product: any) => {
        addToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            image: `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.images?.[0] || product.image}`,
            description: product.description,
            category: typeof product.category === 'object' ? product.category.name : 'Unknown'
        });
    };

    return (
        <section className="py-20 bg-silk-cream/30">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionTitle
                    subtitle="Shop"
                    title="Featured Products"
                    description="Handpicked favorites just for you."
                />

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="group bg-white rounded-xl overflow-hidden border border-silk-gold/10 hover:border-silk-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            <Link to={`/products/${product._id}`} className="block relative aspect-[3/4] overflow-hidden">
                                <img
                                    src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${product.images?.[0] || product.image}`}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </Link>

                            <div className="p-4 flex flex-col flex-1">
                                <Link to={`/products/${product._id}`}>
                                    <h3 className="font-heading font-medium text-lg text-silk-brown hover:text-silk-gold transition-colors line-clamp-1">
                                        {product.name}
                                    </h3>
                                </Link>
                                <p className="text-silk-brown-light text-sm line-clamp-2 mt-2 flex-1">
                                    {product.description}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold text-silk-green">
                                            ₹{product.price.toLocaleString()}
                                        </span>
                                        {product.originalPrice && product.originalPrice > product.price && (
                                            <span className="text-xs text-gray-400 line-through">
                                                ₹{product.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                    </div>
                                    <Button
                                        size="sm"
                                        className="bg-silk-brown hover:bg-silk-gold text-white rounded-full w-8 h-8 p-0"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        <ShoppingBag size={14} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/shop"
                        className="inline-flex items-center px-8 py-3 bg-silk-brown text-silk-ivory font-medium rounded-full hover:bg-silk-brown/90 transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                        View All Products
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeProducts;
