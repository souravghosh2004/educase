export default function Input ({ label, type = "text", placeholder, required, name, value, onChange }){

    return (
        <div className="relative mt-5">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-semibold text-violet-600 z-10">
                {label}{required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full border border-gray-300 rounded-md px-4 py-3.5 text-sm bg-white focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 placeholder-gray-400 relative"
            />
        </div>
    )

}