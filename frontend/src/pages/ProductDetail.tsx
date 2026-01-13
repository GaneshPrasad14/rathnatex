import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Check, Truck, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    category: {
        _id: string;
        name: string;
    } | string;
    images?: string[];
    image?: string;
    inStock: boolean;
}

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string>("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setProduct(data);
                    // Set initial selected image
                    if (data.images && data.images.length > 0) {
                        setSelectedImage(data.images[0]);
                    } else if (data.image) {
                        setSelectedImage(data.image);
                    }
                } else {
                    console.error("Product not found");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchProduct();
    }, [id]);

    const incrementQuantity = () => setQuantity(q => q + 1);
    const decrementQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    // ... (intermediate logic same) ...

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                id: product._id,
                name: product.name,
                price: product.price,
                image: `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.images?.[0] || product.image}`,
                description: product.description,
                category: typeof product.category === 'object' ? product.category.name : 'Unknown'
            }, quantity);
        }
    };

    const handleBuyNow = () => {
        if (product) {
            addToCart({
                id: product._id,
                name: product.name,
                price: product.price,
                image: `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.images?.[0] || product.image}`,
                description: product.description,
                category: typeof product.category === 'object' ? product.category.name : 'Unknown'
            }, quantity);
            navigate("/checkout");
        }
    };

    // ... (quantity logic same) ...

    if (loading) return <Layout><div className="flex justify-center items-center h-screen">Loading...</div></Layout>;
    if (!product) return <Layout><div className="flex justify-center items-center h-screen">Product not found</div></Layout>;

    return (
        <Layout>
            <div className="bg-silk-cream py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* ... (Back link) ... */}
                    <Link to="/shop" className="inline-flex items-center text-silk-brown hover:text-silk-gold transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Shop
                    </Link>

                    <div className="bg-white rounded-2xl shadow-sm border border-silk-gold/10 overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Product Image Gallery */}
                            <div className="bg-gray-100 p-4">
                                <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-white">
                                    <img
                                        src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${selectedImage}`}
                                        alt={product?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {product?.images && product.images.length > 1 && (
                                    <div className="grid grid-cols-4 gap-2">
                                        {product.images.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`aspect-square cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === img ? 'border-silk-gold' : 'border-transparent'}`}
                                                onClick={() => setSelectedImage(img)}
                                            >
                                                <img
                                                    src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${img}`}
                                                    alt={`View ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-silk-gold uppercase tracking-widest text-sm font-medium mb-2">
                                    {typeof product.category === 'object' ? product.category.name : 'Unknown'}
                                </span>
                                <h1 className="font-heading text-3xl md:text-4xl font-bold text-silk-brown mb-4">
                                    {product.name}
                                </h1>

                                <div className="flex items-center gap-4 mb-6">
                                    <p className="text-2xl font-semibold text-silk-brown">
                                        ₹{product.price.toLocaleString()}
                                    </p>
                                    {product.originalPrice && product.originalPrice > product.price && (
                                        <p className="text-xl text-gray-400 line-through">
                                            ₹{product.originalPrice.toLocaleString()}
                                        </p>
                                    )}
                                    {product.originalPrice && product.originalPrice > product.price && (
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                        </span>
                                    )}
                                </div>

                                <p className="text-silk-brown-light leading-relaxed mb-8 text-lg">
                                    {product.description}
                                    <br />
                                    <span className="text-sm mt-2 block opacity-80">
                                        Experience the finest quality woven with tradition and elegance. Perfect for elevating your style quotient.
                                    </span>
                                </p>

                                {/* Features / Trust Badges */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center gap-3 text-silk-brown/80">
                                        <Check className="w-5 h-5 text-silk-green" />
                                        <span className="text-sm">Premium Quality</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-silk-brown/80">
                                        <Truck className="w-5 h-5 text-silk-green" />
                                        <span className="text-sm">Fast Delivery</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-silk-brown/80">
                                        <ShieldCheck className="w-5 h-5 text-silk-green" />
                                        <span className="text-sm">Secure Payment</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-silk-brown/80">
                                        <FaWhatsapp className="w-5 h-5 text-silk-green" />
                                        <span className="text-sm">24/7 Support</span>
                                    </div>
                                </div>

                                {/* Quantity Selector */}
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-silk-brown font-medium">Quantity:</span>
                                    <div className="flex items-center border border-silk-gold/30 rounded-full h-10 w-32">
                                        <button
                                            onClick={decrementQuantity}
                                            className="w-10 h-full flex items-center justify-center text-silk-brown hover:text-silk-gold transition-colors"
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="flex-1 text-center font-medium text-silk-brown">{quantity}</span>
                                        <button
                                            onClick={incrementQuantity}
                                            className="w-10 h-full flex items-center justify-center text-silk-brown hover:text-silk-gold transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="flex-1 border-silk-green text-silk-green hover:bg-silk-green hover:text-white"
                                        onClick={handleAddToCart}
                                    >
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Add to Cart
                                    </Button>
                                    <Button
                                        size="lg"
                                        className="flex-1 bg-silk-gold text-silk-brown hover:bg-silk-gold/90"
                                        onClick={handleBuyNow}
                                    >
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Placeholder (Optional Enhancement) */}
        </Layout>
    );
};

export default ProductDetail;
