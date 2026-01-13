import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionTitle from "@/components/ui/SectionTitle";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("adminUser", JSON.stringify(data.user));
                toast.success("Login successful!");
                navigate("/admin/dashboard");
            } else {
                toast.error(data.msg || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-silk-cream">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-silk-gold/20">
                <div className="text-center mb-8">
                    <h2 className="font-heading text-2xl font-bold text-silk-brown">Admin Login</h2>
                    <p className="text-silk-brown-light text-sm">Welcome back, Please login to your account.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-silk-brown mb-2">Email Address</label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@example.com"
                            required
                            className="border-silk-gold/30 focus:border-silk-gold"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-silk-brown mb-2">Password</label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="border-silk-gold/30 focus:border-silk-gold"
                        />
                    </div>
                    <Button type="submit" className="w-full bg-silk-gold text-silk-brown hover:bg-silk-gold/90 font-bold">
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
