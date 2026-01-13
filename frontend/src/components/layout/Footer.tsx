import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-silk-brown text-silk-ivory">
      {/* Zari Border */}
      <div className="h-1 gold-shimmer" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src="/logo.jpeg" alt="Rathna Tex Logo" className="h-16 w-16 object-cover rounded-full border-2 border-silk-gold/20" />
              <div>
                <img src="/t.png" alt="Rathna Tex" className="h-10 w-auto object-contain brightness-0 invert" />
              </div>
            </div>
            <p className="text-silk-ivory/80 text-sm leading-relaxed">
              Your trusted destination for premium retail and wholesale textiles. Celebrating
              the spirit of womanhood through exquisite fabrics and timeless designs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/RathnaTex"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-silk-ivory/10 hover:bg-silk-gold/30 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/Rathna_tex"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-silk-ivory/10 hover:bg-silk-gold/30 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.instagram.com/rathna_sb_tex"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-silk-ivory/10 hover:bg-silk-gold/30 transition-colors"
                title="Rathna SB Tex"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@RathnaTex"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-silk-ivory/10 hover:bg-silk-gold/30 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-silk-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Shop", href: "/shop" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-silk-ivory/80 hover:text-silk-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-silk-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-silk-gold mt-0.5 shrink-0" />
                <div className="text-sm text-silk-ivory/80">
                  <p>9843663301, 9843885001</p>
                  <p>8122005001, 8637610634</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-silk-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:rathnatex1982@gmail.com"
                  className="text-sm text-silk-ivory/80 hover:text-silk-gold transition-colors"
                >
                  rathnatex1982@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-silk-gold mt-0.5 shrink-0" />
                <p className="text-sm text-silk-ivory/80">
                  Coimbatore, Tamil Nadu, India
                </p>
              </li>
            </ul>
          </div>

          {/* Addresses */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-silk-gold">
              Our Locations
            </h4>
            <div className="space-y-4 text-sm text-silk-ivory/80">
              <div>
                <p className="font-medium text-silk-ivory mb-1">Store 1</p>
                <p>7/16 B, VC Mill Road (West), No.4,</p>
                <p>Veerapandi Pudur, Coimbatore – 641029</p>
              </div>
              <div>
                <p className="font-medium text-silk-ivory mb-1">Store 2</p>
                <p>364-1A, Kalaimagal Complex,</p>
                <p>Opp Old Anna University,</p>
                <p>MTP Road, Coimbatore – 641047</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-silk-ivory/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-silk-ivory/60 text-sm">
              © {new Date().getFullYear()} Rathna Tex. All rights reserved.
            </p>
            <div className="text-silk-ivory/60 text-xs">
              <span>GSTIN: 33CZYPR3199E1ZM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;