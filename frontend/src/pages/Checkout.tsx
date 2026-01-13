import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

const Checkout = () => {
    const { items, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
    });

    if (items.length === 0) {
        navigate("/cart");
        return null;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp Message
        let message = `*New Order Request*\n\n`;
        message += `*Customer Details:*\n`;
        message += `Name: ${formData.name}\n`;
        message += `Phone: ${formData.phone}\n`;
        message += `Address: ${formData.address}, ${formData.city} - ${formData.pincode}\n\n`;

        message += `*Order Details:*\n`;
        items.forEach((item, index) => {
            message += `${index + 1}. ${item.product.name} (x${item.quantity}) - ₹${(item.product.price * item.quantity).toLocaleString()}\n`;
        });

        message += `\n*Total Amount: ₹${cartTotal.toLocaleString()}*`;
        message += `\n\nPlease confirm availability and shipping charges.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919843885001?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, "_blank");

        // Optional: Clear cart after successful redirection (user might come back though)
        // clearCart(); 
    };

    return (
        <Layout>
            <section className="py-12 bg-silk-ivory min-h-screen">
                <div className="container mx-auto px-4 lg:px-8">
                    <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent" onClick={() => navigate("/cart")}>
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Cart
                    </Button>

                    <SectionTitle subtitle="Checkout" title="Complete Your Order" />

                    <div className="grid lg:grid-cols-2 gap-12 mt-8 max-w-5xl mx-auto">

                        {/* Form */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-silk-gold/10">
                            <h3 className="font-heading text-xl font-bold text-silk-brown mb-6">Shipping Information</h3>
                            <form onSubmit={handlePlaceOrder} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-silk-gold focus:border-silk-gold outline-none transition-all"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-silk-gold focus:border-silk-gold outline-none transition-all"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        required
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-silk-gold focus:border-silk-gold outline-none transition-all resize-none"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-silk-gold focus:border-silk-gold outline-none transition-all"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                                        <input
                                            type="text"
                                            id="pincode"
                                            name="pincode"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-silk-gold focus:border-silk-gold outline-none transition-all"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-silk-green hover:bg-silk-green/90 text-white mt-6 h-12 text-lg">
                                    <FaWhatsapp className="mr-2 w-5 h-5" />
                                    Place Order via WhatsApp
                                </Button>
                                <p className="text-xs text-center text-gray-500 mt-3">
                                    You will be redirected to WhatsApp to send your order details directly to us.
                                </p>
                            </form>
                        </div>

                        {/* Order Preview */}
                        <div className="bg-silk-cream p-8 rounded-xl h-fit border border-silk-gold/20">
                            <h3 className="font-heading text-xl font-bold text-silk-brown mb-6">Your Order</h3>
                            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 mb-6 custom-scrollbar">
                                {items.map(({ product, quantity }) => (
                                    <div key={product.id} className="flex gap-4 items-start py-3 border-b border-silk-gold/10 last:border-0">
                                        <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between">
                                                <h4 className="text-sm font-medium text-silk-brown">{product.name}</h4>
                                                <span className="text-sm font-bold text-silk-brown">₹{(product.price * quantity).toLocaleString()}</span>
                                            </div>
                                            <p className="text-xs text-silk-brown-light mt-1">Qty: {quantity} x ₹{product.price.toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t-2 border-silk-gold/20 pt-4">
                                <div className="flex justify-between items-center text-xl font-bold text-silk-brown">
                                    <span>Total Payble</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Checkout;
