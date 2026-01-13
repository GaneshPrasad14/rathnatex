import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, Trash2, Upload } from "lucide-react";

interface Category {
    _id: string;
    name: string;
}

interface Product {
    _id: string;
    name: string;
    price: number;
    originalPrice?: number;
    category: { _id: string; name: string } | string;
    image: string;
    images?: string[];
    description: string;
    inStock: boolean;
}

const ProductManager = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<{ _id: string, name: string }[]>([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [originalPrice, setOriginalPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [inStock, setInStock] = useState(true);
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [existingImages, setExistingImages] = useState<string[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const fetchData = async () => {
        try {
            const [prodRes, catRes] = await Promise.all([
                fetch(`${import.meta.env.VITE_API_URL}/products`),
                fetch(`${import.meta.env.VITE_API_URL}/categories`)
            ]);

            if (prodRes.ok) setProducts(await prodRes.json());
            if (catRes.ok) setCategories(await catRes.json());
        } catch (error) {
            console.error(error);
            toast.error("Failed to load data");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const fileArray = Array.from(e.target.files);
            setImages(prev => [...prev, ...fileArray]);

            const newPreviews = fileArray.map(file => URL.createObjectURL(file));
            setImagePreviews(prev => [...prev, ...newPreviews]);
        }
    };

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const removeExistingImage = (index: number) => {
        setExistingImages(prev => prev.filter((_, i) => i !== index));
    };

    const startEdit = (product: Product) => {
        setEditingId(product._id);
        setName(product.name);
        setPrice(product.price.toString());
        setOriginalPrice(product.originalPrice ? product.originalPrice.toString() : "");
        setDescription(product.description);
        setCategoryId(typeof product.category === 'object' ? product.category._id : product.category);
        setInStock(product.inStock);

        // Handle images
        if (product.images && product.images.length > 0) {
            setExistingImages(product.images);
        } else if (product.image) {
            setExistingImages([product.image]);
        } else {
            setExistingImages([]);
        }

        setImages([]);
        setImagePreviews([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setName("");
        setPrice("");
        setOriginalPrice("");
        setDescription("");
        setCategoryId("");
        setInStock(true);
        setImages([]);
        setImagePreviews([]);
        setExistingImages([]);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        if (originalPrice) formData.append("originalPrice", originalPrice);
        formData.append("description", description);
        formData.append("category", categoryId);
        formData.append("inStock", String(inStock));

        images.forEach(image => {
            formData.append("images", image);
        });

        // Append existing images for backend to handle
        existingImages.forEach(img => {
            formData.append("existingImages", img);
        });

        try {
            const url = editingId
                ? `${import.meta.env.VITE_API_URL}/products/${editingId}`
                : `${import.meta.env.VITE_API_URL}/products`;

            const method = editingId ? "PUT" : "POST";

            const res = await fetch(url, {
                method: method,
                headers: {},
                body: formData
            });

            if (res.ok) {
                toast.success(editingId ? "Product updated" : "Product added successfully");
                cancelEdit();
                fetchData();
            } else {
                let errorMsg = "Failed to save product";
                const text = await res.text();
                try {
                    const data = JSON.parse(text);
                    errorMsg = data.msg || errorMsg;
                } catch (e) {
                    console.error("Non-JSON error response:", text);
                    errorMsg = "Server error occurred (check console)";
                }
                toast.error(errorMsg);
            }
        } catch (error) {
            console.error(error);
            toast.error("Error saving product");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this product?")) return;

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
                method: "DELETE"
            });

            if (res.ok) {
                toast.success("Product deleted");
                fetchData();
            } else {
                toast.error("Failed to delete product");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error deleting product");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center mb-8">
                    <Link to="/admin/dashboard" className="mr-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <h1 className="text-3xl font-heading font-bold text-gray-800">Product Manager</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Add/Edit Product Form */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                {editingId ? <><Upload className="w-5 h-5" /> Edit Product</> : <><Plus className="w-5 h-5" /> Add New Product</>}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Name</label>
                                        <Input value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Category</label>
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            value={categoryId}
                                            onChange={(e) => setCategoryId(e.target.value)}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map((cat) => (
                                                <option key={cat._id} value={cat._id}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Price</label>
                                        <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Original Price</label>
                                        <Input type="number" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Description</label>
                                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">In Stock</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={inStock}
                                            onChange={(e) => setInStock(e.target.checked)}
                                            className="h-4 w-4 rounded border-gray-300 text-silk-gold focus:ring-silk-gold"
                                        />
                                        <span className="text-sm text-gray-600">Available for sale</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Images</label>
                                    <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => fileInputRef.current?.click()}>
                                        <div className="flex flex-col items-center text-gray-400">
                                            <Upload className="w-8 h-8 mb-2" />
                                            <span>Click to upload images</span>
                                        </div>
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImageChange}
                                        className="hidden"
                                        multiple
                                        accept="image/*"
                                    />

                                    {/* Existing Images */}
                                    {existingImages.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-xs font-medium text-gray-500 mb-2">Existing Images:</p>
                                            <div className="grid grid-cols-4 gap-2">
                                                {existingImages.map((img, idx) => (
                                                    <div key={idx} className="relative group aspect-square">
                                                        <img src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${img}`} alt={`Existing ${idx}`} className="w-full h-full object-cover rounded" />
                                                        <button
                                                            type="button"
                                                            onClick={() => removeExistingImage(idx)}
                                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <Trash2 className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* New Upload Previews */}
                                    {imagePreviews.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-xs font-medium text-green-600 mb-2">New Uploads:</p>
                                            <div className="grid grid-cols-4 gap-2">
                                                {imagePreviews.map((preview, idx) => (
                                                    <div key={idx} className="relative group aspect-square">
                                                        <img src={preview} alt="Preview" className="w-full h-full object-cover rounded" />
                                                        <button
                                                            type="button"
                                                            onClick={() => removeImage(idx)}
                                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <Trash2 className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <Button type="submit" className="w-full bg-silk-gold text-silk-brown hover:bg-silk-gold/90">
                                    {editingId ? "Update Product" : "Create Product"}
                                </Button>
                                {editingId && (
                                    <Button type="button" variant="outline" className="w-full" onClick={cancelEdit}>
                                        Cancel
                                    </Button>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Product List */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                            <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                                <h2 className="text-xl font-bold">All Products ({products.length})</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b">
                                        <tr>
                                            <th className="p-4 font-medium text-gray-500">Image</th>
                                            <th className="p-4 font-medium text-gray-500">Name</th>
                                            <th className="p-4 font-medium text-gray-500">Price</th>
                                            <th className="p-4 font-medium text-gray-500">Category</th>
                                            <th className="p-4 font-medium text-gray-500 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {products.map((prod) => (
                                            <tr key={prod._id} className="hover:bg-gray-50">
                                                <td className="p-4">
                                                    {(prod.images && prod.images.length > 0) ? (
                                                        <img src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${prod.images[0]}`} alt={prod.name} className="w-12 h-12 object-cover rounded" />
                                                    ) : prod.image ? (
                                                        <img src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${prod.image}`} alt={prod.name} className="w-12 h-12 object-cover rounded" />
                                                    ) : (
                                                        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">No Img</div>
                                                    )}
                                                </td>
                                                <td className="p-4 font-medium">
                                                    <div className="font-medium">{prod.name}</div>
                                                    <div className="text-xs text-gray-500 truncate max-w-[150px]">{prod.description}</div>
                                                </td>
                                                <td className="p-4 text-sm">
                                                    <div>₹{prod.price}</div>
                                                    {prod.originalPrice && <div className="text-xs text-gray-400 line-through">₹{prod.originalPrice}</div>}
                                                </td>
                                                <td className="p-4 text-sm text-gray-600">
                                                    {typeof prod.category === 'object' && prod.category ? prod.category.name : 'Unknown'}
                                                </td>
                                                <td className="p-4 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <Button variant="ghost" size="icon" onClick={() => startEdit(prod)}>
                                                            <Upload className="w-4 h-4 rotate-90" />
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                            onClick={() => handleDelete(prod._id)}
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {products.length === 0 && (
                                            <tr>
                                                <td colSpan={5} className="p-8 text-center text-gray-400">No products found. Add one to get started.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductManager;
