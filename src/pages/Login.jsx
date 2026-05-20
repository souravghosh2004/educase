import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Input  from "../components/Input";
import Button from "../components/Button"

export default function Login (){

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // login here
        navigate("/profile");
    }

    return (
        <div className="flex flex-col h-full px-6 pt-8 pb-8 bg-white">
            <h1 className="text-[28px] leading-tight font-bold text-gray-900 mb-4 w-[70%]">
                Signin to your <br /> PopX account
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                <div className="flex-1">
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mt-8">
                    <Button type="submit" variant={email && password ? 'primary' : 'disabled'}>
                        Login
                    </Button>
                </div>
            </form>

        </div>
    )
}