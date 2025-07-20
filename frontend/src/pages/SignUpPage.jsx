import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, Gamepad2, User } from "lucide-react";
import { Link } from "react-router-dom";

import AuthImagePattern from "../components/AuthImagePattern";

import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();
  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <Gamepad2 className="size-12 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

  {/* Full Name */}
  <div className="form-control">
    <label className="label">
      <span className="label-text font-medium">Full Name</span>
    </label>
    <div className="w-full flex items-center gap-3 px-4 py-2 rounded-lg border border-white/20 focus-within:border-primary transition-colors bg-base-200">
      <User className="size-5 text-white/70 shrink-0" />
      <input
        type="text"
        placeholder="John Doe"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        className="bg-transparent focus:outline-none flex-1 placeholder:text-sm text-white"
      />
    </div>
  </div>

  {/* Email */}
  <div className="form-control">
    <label className="label">
      <span className="label-text font-medium">Email</span>
    </label>
    <div className="w-full flex items-center gap-3 px-4 py-2 rounded-lg border border-white/20 focus-within:border-primary transition-colors bg-base-200">
      <Mail className="size-5 text-white/70 shrink-0" />
      <input
        type="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="bg-transparent focus:outline-none flex-1 placeholder:text-sm text-white"
      />
    </div>
  </div>

  {/* Password */}
  <div className="form-control">
    <label className="label">
      <span className="label-text font-medium">Password</span>
    </label>
    <div className="w-full flex items-center gap-3 px-4 py-2 rounded-lg border border-white/20 focus-within:border-primary transition-colors bg-base-200">
      <Lock className="size-5 text-white/70 shrink-0" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="bg-transparent focus:outline-none flex-1 placeholder:text-sm text-white"
      />
      <button
        type="button"
        className="text-white/60"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
      </button>
    </div>
  </div>

  {/* Submit Button */}
  <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
    {isSigningUp ? (
      <>
        <Loader2 className="size-5 animate-spin" />
        Loading...
      </>
    ) : (
      "Create Account"
    )}
  </button>

</form>



          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
          
        </div>
      </div>
      {/* right side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpPage;
