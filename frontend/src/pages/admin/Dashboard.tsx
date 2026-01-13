import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const adminUser = JSON.parse(localStorage.getItem("adminUser") || "{}");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("adminUser");
        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navbar */}
            <nav className="bg-white shadow-sm border-b px-8 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-silk-brown">Rathna Tex Admin</h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Welcome, {adminUser.email || "Admin"}</span>
                    <Button variant="ghost" size="sm" onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                    </Button>
                </div>
            </nav>

            {/* Main Content */}
            <div className="p-8">
                <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        onClick={() => navigate('/admin/categories')}
                        className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center gap-4 group"
                    >
                        <div className="w-16 h-16 bg-silk-gold/10 rounded-full flex items-center justify-center group-hover:bg-silk-gold/20 transition-colors">
                            <span className="text-3xl">📁</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Category Manager</h3>
                        <p className="text-gray-500 text-center">Add, edit, or delete product categories</p>
                    </div>

                    <div
                        onClick={() => navigate('/admin/products')}
                        className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center gap-4 group"
                    >
                        <div className="w-16 h-16 bg-silk-green/10 rounded-full flex items-center justify-center group-hover:bg-silk-green/20 transition-colors">
                            <span className="text-3xl">📦</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Product Manager</h3>
                        <p className="text-gray-500 text-center">Manage your product inventory</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
