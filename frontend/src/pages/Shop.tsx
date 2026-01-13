import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface Category {
    _id: string;
    name: string;
    slug: string;
}

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    category: {
        _id: string;
        name: string;
        slug: string;
    };
    images?: string[];
    image: string;
    inStock: boolean;
}

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get("category");
    const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "All");

    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    const { addToCart } = useCart();

    // Fetch Data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catRes, prodRes] = await Promise.all([
                    fetch(`${import.meta.env.VITE_API_URL}/categories`),
                    fetch(`${import.meta.env.VITE_API_URL}/products`)
                ]);

                if (catRes.ok) setCategories(await catRes.json());
                if (prodRes.ok) setAllProducts(await prodRes.json());
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("Failed to load products");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Sync URL param
    useEffect(() => {
        setSelectedCategory(categoryParam || "All");
    }, [categoryParam]);

    const handleCategoryChange = (slug: string) => {
        setSelectedCategory(slug);
        if (slug === "All") {
            searchParams.delete("category");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ category: slug });
        }
    };

    // Filter Logic
    const displayedProducts = selectedCategory === "All"
        ? allProducts
        : allProducts.filter(p => p.category?.slug === selectedCategory);

    const handleAddToCart = (product: Product) => {
        addToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            image: `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.image}`,
            description: product.description,
            category: product.category?.name
        });
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-24 bg-silk-cream">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionTitle
                        subtitle="Shop Collections"
                        title="Explore Our Products"
                        description="Browse through our wide range of premium textiles."
                    />
                </div>
            </section>

            {/* Filter and Grid Section */}
            <section className="py-12 bg-silk-ivory">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2 mb-12 justify-center">
                        <Button
                            variant={selectedCategory === "All" ? "default" : "outline"}
                            className={selectedCategory === "All" ? "bg-silk-green text-white" : "text-silk-brown border-silk-brown/20"}
                            onClick={() => handleCategoryChange("All")}
                        >
                            All
                        </Button>
                        {categories.map((cat) => (
                            <Button
                                key={cat._id}
                                variant={selectedCategory === cat.slug ? "default" : "outline"}
                                className={selectedCategory === cat.slug ? "bg-silk-green text-white" : "text-silk-brown border-silk-brown/20"}
                                onClick={() => handleCategoryChange(cat.slug)}
                            >
                                {cat.name}
                            </Button>
                        ))}
                    </div>

                    {loading ? (
                        <div className="text-center py-20">Loading products...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            <AnimatePresence mode='popLayout'>
                                {displayedProducts.map((product) => (
                                    <motion.div
                                        layout
                                        key={product._id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-hover transition-all duration-300 border border-silk-gold/10 flex flex-col h-full group"
                                    >
                                        <Link to={`/products/${product._id}`} className="block relative aspect-[4/5] overflow-hidden bg-gray-100">
                                            {/* Image */}
                                            <img
                                                src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${product.images?.[0] || product.image}`}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </Link>

                                        <div className="p-5 flex flex-col flex-grow">
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="text-xs text-silk-gold font-medium uppercase tracking-wider">
                                                        {product.category?.name}
                                                    </span>
                                                </div>
                                                <Link to={`/products/${product._id}`}>
                                                    <h3 className="font-heading text-lg font-medium text-silk-brown hover:text-silk-green transition-colors mb-2">
                                                        {product.name}
                                                    </h3>
                                                </Link>
                                                <div className="flex items-center gap-2 mb-4">
                                                    <p className="text-xl font-bold text-silk-brown">₹{product.price.toLocaleString()}</p>
                                                    {product.originalPrice && product.originalPrice > product.price && (
                                                        <p className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 mt-4">
                                                <Button variant="outline" className="w-full border-silk-green text-silk-green hover:bg-silk-green hover:text-white transition-colors" onClick={() => handleAddToCart(product)}>
                                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                                    Add
                                                </Button>
                                                <Link to={`/products/${product._id}`} className="w-full">
                                                    <Button
                                                        className="w-full bg-silk-gold text-silk-brown hover:bg-silk-gold/90 font-medium"
                                                    >
                                                        Buy Now
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            {displayedProducts.length === 0 && (
                                <div className="col-span-full text-center py-20">
                                    <p className="text-xl text-silk-brown-light">No products found in this category.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Shop;
