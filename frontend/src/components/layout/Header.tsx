import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/context/CartContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-silk-ivory/95 backdrop-blur-md border-b border-silk-gold/20">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Rathna Tex Logo" className="h-12 w-auto object-contain rounded-full" />
            <div className="flex flex-col items-center">
              <img src="/t.png" alt="Rathna Tex" className="h-10 md:h-12 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group ${location.pathname === item.href
                  ? "text-silk-green"
                  : "text-silk-brown hover:text-silk-green"
                  }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-silk-gold transition-all duration-300 ${location.pathname === item.href ? "w-3/4" : "w-0 group-hover:w-1/2"
                    }`}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2 text-silk-brown hover:text-silk-green transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-silk-green rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* WhatsApp CTA */}
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    className="bg-silk-green hover:bg-silk-green/90 text-silk-ivory font-medium px-6 gap-2"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp Enquiry
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <a
                      href="https://wa.me/919843663301?text=Hello! I'm interested in your textile products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer font-medium"
                    >
                      +91 98436 63301
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="https://wa.me/919843885001?text=Hello! I'm interested in your textile products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer font-medium"
                    >
                      +91 98438 85001
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-silk-brown"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-silk-ivory border-t border-silk-gold/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${location.pathname === item.href
                    ? "bg-silk-green/10 text-silk-green"
                    : "text-silk-brown hover:bg-silk-cream"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="space-y-2 mt-4 px-4">
                <p className="text-sm font-medium text-silk-brown">WhatsApp Enquiry:</p>
                <a
                  href="https://wa.me/919843663301?text=Hello! I'm interested in your textile products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 text-center font-medium rounded-lg bg-silk-green text-silk-ivory text-sm"
                >
                  +91 98436 63301
                </a>
                <a
                  href="https://wa.me/919843885001?text=Hello! I'm interested in your textile products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 text-center font-medium rounded-lg bg-silk-green text-silk-ivory text-sm"
                >
                  +91 98438 85001
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;