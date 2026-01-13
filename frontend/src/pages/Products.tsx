import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { productCategories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryTitle = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<typeof productCategories[0] | null>(null);

  useEffect(() => {
    if (categoryTitle) {
      const category = productCategories.find(
        (c) => c.title.toLowerCase() === categoryTitle.toLowerCase() ||
          c.slug === categoryTitle.toLowerCase()
      );
      setSelectedCategory(category || null);
    } else {
      // If no category selected, maybe default to showing all or redirect? 
      // For now, let's just not select one and show a "Select a category" state or show all items flattened.
      setSelectedCategory(null);
    }
  }, [categoryTitle]);

  if (!selectedCategory && categoryTitle) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-2xl font-heading text-silk-brown">Category not found</h2>
          <Button asChild className="mt-4 bg-silk-green text-white hover:bg-silk-green/90">
            <Link to="/collections">Back to Collections</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // If no category is present in URL, we could show all items. 
  // But per request "show products of that specific category".
  // If no category, we can ask user to select one.
  if (!categoryTitle) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-2xl font-heading text-silk-brown">Please select a collection to view products</h2>
          <Button asChild className="mt-4 bg-silk-green text-white hover:bg-silk-green/90">
            <Link to="/collections">View Collections</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 bg-silk-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="hover:bg-transparent text-silk-brown hover:text-silk-green p-0">
              <Link to="/collections" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Collections
              </Link>
            </Button>
          </div>
          <SectionTitle
            subtitle="Our Products"
            title={selectedCategory?.title || "Products"}
            description={`Explore our collection of ${selectedCategory?.title.toLowerCase()}.`}
          />
        </div>
      </section>

      <section className="py-20 bg-silk-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {selectedCategory?.items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-silk-gold/10"
              >
                {/* Placeholder image since we don't have individual product images yet, using category image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={selectedCategory.image}
                    alt={item}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg font-medium text-silk-brown mb-2">{item}</h3>
                  <p className="text-sm text-silk-brown-light mb-4">Premium quality {selectedCategory.title.toLowerCase()}</p>
                  <Button className="w-full bg-silk-gold text-silk-brown hover:bg-silk-gold/90 font-medium">
                    <a
                      href={`https://wa.me/919843663301?text=Hello! I'm interested in ${item} from ${selectedCategory.title}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire Now
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;