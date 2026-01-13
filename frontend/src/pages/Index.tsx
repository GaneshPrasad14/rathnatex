import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import PreviewSection from "@/components/home/PreviewSection";
import CTASection from "@/components/home/CTASection";

import HomeCategories from "@/components/home/HomeCategories";
import HomeProducts from "@/components/home/HomeProducts";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <HomeCategories />
      <HomeProducts />
      <PreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;