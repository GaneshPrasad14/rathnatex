import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";

const Cart = () => {
    const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (items.length === 0) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
                    <div className="w-20 h-20 bg-silk-gold/10 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag className="w-10 h-10 text-silk-gold" />
                    </div>
                    <h2 className="text-2xl font-bold text-silk-brown mb-2">Your cart is empty</h2>
                    <p className="text-silk-brown-light mb-8 text-center max-w-md">
                        Looks like you haven't added anything to your cart yet. Browse our collections to find something you love.
                    </p>
                    <Button asChild className="bg-silk-green text-white hover:bg-silk-green/90">
                        <Link to="/shop">Start Shopping</Link>
                    </Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <section className="py-24 bg-silk-cream min-h-screen">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionTitle subtitle="Shopping Cart" title="Your Selection" />

                    <div className="grid lg:grid-cols-3 gap-8 mt-12">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-6">
                            {items.map(({ product, quantity }) => (
                                <div
                                    key={product.id}
                                    className="bg-white p-4 rounded-xl shadow-sm border border-silk-gold/10 flex gap-4 items-center"
                                >
                                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-medium text-silk-brown text-lg">
                                                {product.name}
                                            </h3>
                                            <button
                                                onClick={() => removeFromCart(product.id)}
                                                className="text-red-400 hover:text-red-600 transition-colors p-1"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="text-sm text-silk-brown-light mb-4">
                                            {product.category}
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3 border border-gray-200 rounded-md p-1">
                                                <button
                                                    onClick={() => updateQuantity(product.id, quantity - 1)}
                                                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                                                    disabled={quantity <= 1}
                                                >
                                                    <Minus className="w-4 h-4 text-silk-brown" />
                                                </button>
                                                <span className="text-sm font-medium w-6 text-center">
                                                    {quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(product.id, quantity + 1)}
                                                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                                                >
                                                    <Plus className="w-4 h-4 text-silk-brown" />
                                                </button>
                                            </div>
                                            <p className="font-bold text-silk-brown">
                                                ₹{(product.price * quantity).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="flex justify-end">
                                <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                                    Clear Cart
                                </Button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-silk-gold/10 sticky top-24">
                                <h3 className="font-heading text-xl font-bold text-silk-brown mb-6">
                                    Order Summary
                                </h3>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-silk-brown-light">
                                        <span>Subtotal</span>
                                        <span>₹{cartTotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-silk-brown-light">
                                        <span>Shipping</span>
                                        <span className="text-silk-green text-sm font-medium">Calculated at Checkout</span>
                                    </div>
                                    <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between font-bold text-lg text-silk-brown">
                                        <span>Total</span>
                                        <span>₹{cartTotal.toLocaleString()}</span>
                                    </div>
                                </div>

                                <Button asChild className="w-full bg-silk-gold hover:bg-silk-gold/90 text-silk-brown font-bold py-6">
                                    <Link to="/checkout">
                                        Proceed to Checkout
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    Secure checkout powered by WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Cart;
