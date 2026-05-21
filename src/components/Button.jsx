

export default function Button ({ children, variant = "primary", onClick, type = "button", className = "" }){
    const baseStyle = "w-full rounded-md py-3 font-semibold text-[15px] transition-all duration-200";

    const variants = {
        primary: "bg-violet-600 text-white hover:bg-violet-700 shadow-sm",
        secondary: "bg-violet-200 text-black hover:bg-violet-300",
        disabled: "bg-gray-300 text-white cursor-not-allowed"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    )
}