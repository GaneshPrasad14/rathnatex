import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import silkTexture from "@/assets/silk-texture-pattern.jpg";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-silk-cream relative">
      {/* Silk Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${silkTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.03,
        }}
      />

      <Header />
      <main className="flex-1 pt-20 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;