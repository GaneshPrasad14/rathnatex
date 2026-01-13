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
    slug: string;
    image: string;
    description: string;
}

const CategoryManager = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const fetchCategories = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
            const data = await res.json();
            setCategories(data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load categories");
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const startEdit = (category: Category) => {
        setEditingId(category._id);
        setName(category.name);
        setDescription(category.description);
        setImage(null);
        if (category.image) {
            setImagePreview(`${import.meta.env.VITE_API_URL.replace('/api', '')}${category.image}`);
        } else {
            setImagePreview(null);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setName("");
        setDescription("");
        setImage(null);
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        if (image) {
            formData.append("image", image);
        }

        try {
            const url = editingId
                ? `${import.meta.env.VITE_API_URL}/categories/${editingId}`
                : `${import.meta.env.VITE_API_URL}/categories`;

            const method = editingId ? "PUT" : "POST";

            const res = await fetch(url, {
                method: method,
                headers: {},
                body: formData
            });

            if (res.ok) {
                toast.success(editingId ? "Category updated" : "Category added successfully");
                cancelEdit();
                fetchCategories();
            } else {
                const data = await res.json();
                toast.error(data.msg || "Failed to save category");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error saving category");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this category?")) return;

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
                method: "DELETE"
            });

            if (res.ok) {
                toast.success("Category deleted");
                fetchCategories();
            } else {
                toast.error("Failed to delete category");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error deleting category");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="outline" asChild size="icon">
                        <Link to="/admin/dashboard"><ArrowLeft className="w-4 h-4" /></Link>
                    </Button>
                    <h1 className="text-3xl font-heading font-bold text-silk-brown">Category Manager</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Add/Edit Category Form */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            {editingId ? <><Upload className="w-5 h-5" /> Edit Category</> : <><Plus className="w-5 h-5" /> Add New Category</>}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Sarees"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Description</label>
                                <Textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Brief description..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Image</label>
                                <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => fileInputRef.current?.click()}>
                                    {imagePreview ? (
                                        <div className="relative">
                                            <img src={imagePreview} alt="Preview" className="h-32 mx-auto object-cover rounded" />
                                            <span className="text-xs text-gray-500 mt-2 block">Click to change</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center text-gray-400">
                                            <Upload className="w-8 h-8 mb-2" />
                                            <span>Click to upload image</span>
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                            </div>
                            <Button type="submit" className="w-full bg-silk-gold text-silk-brown hover:bg-silk-gold/90">
                                {editingId ? "Update Category" : "Create Category"}
                            </Button>
                            {editingId && (
                                <Button type="button" variant="outline" className="w-full" onClick={cancelEdit}>
                                    Cancel
                                </Button>
                            )}
                        </form>
                    </div>

                    {/* Category List */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-xl font-bold mb-4">All Categories ({categories.length})</h2>
                        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="p-4 font-medium text-gray-500">Image</th>
                                        <th className="p-4 font-medium text-gray-500">Name</th>
                                        <th className="p-4 font-medium text-gray-500">Slug</th>
                                        <th className="p-4 font-medium text-gray-500 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {categories.map((cat) => (
                                        <tr key={cat._id} className="hover:bg-gray-50">
                                            <td className="p-4">
                                                {cat.image ? (
                                                    <img src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${cat.image}`} alt={cat.name} className="w-12 h-12 object-cover rounded" />
                                                ) : (
                                                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">No Img</div>
                                                )}
                                            </td>
                                            <td className="p-4 font-medium">{cat.name}</td>
                                            <td className="p-4 text-gray-500 text-sm">{cat.slug}</td>
                                            <td className="p-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="ghost" size="icon" onClick={() => startEdit(cat)}>
                                                        <Upload className="w-4 h-4 rotate-90" /> {/* Reuse icon or use Edit icon */}
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                        onClick={() => handleDelete(cat._id)}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {categories.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="p-8 text-center text-gray-400">No categories found. Add one to get started.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryManager;
