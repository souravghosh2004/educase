import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import  Input  from "../components/Input";
import Button from "../components/Button";
export default function Signup  (){
    const navigate = useNavigate();
    const {login} = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "Yes"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
        navigate("/profile");
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div className="flex flex-col h-full px-6 pt-8 pb-8 bg-white">
            <h1 className="text-[28px] leading-tight font-bold text-gray-900 mb-6 w-[70%]">
                Create your <br /> PopX account
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                <div className="flex-1">
                    <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                    <Input label="Phone number" name="phone" value={formData.phone} onChange={handleChange} required />
                    <Input label="Email address" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
                    <Input label="Company name" name="company" value={formData.company} onChange={handleChange} />
                    <div className="mt-6">
                        <p className="text-sm text-gray-700 mb-2">Are you an Agency?<span className="text-red-500">*</span></p>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="isAgency" value="Yes" checked={formData.isAgency === 'Yes'} onChange={handleChange} className="w-5 h-5 accent-violet-600" />
                                <span className="text-sm font-medium">Yes</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="isAgency" value="No" checked={formData.isAgency === 'No'} onChange={handleChange} className="w-5 h-5 accent-violet-600" />
                                <span className="text-sm font-medium">No</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <Button type="submit" variant="primary">Create Account</Button>

                </div>

            </form>
        </div>
    )

}