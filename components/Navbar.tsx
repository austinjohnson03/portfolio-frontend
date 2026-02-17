import "@/app/globals.css"

export default function Navbar() {
    return <nav className="bg-slate-800 border-b borer-slate-900">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <a className="text-white font-bold text-xl" href="/">Site</a>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a
                        href="#"
                        className="text-gray-50 hover:text-amber-500 transition-colors duration-200"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-50 hover:text-amber-500 transition-colors duration-200"
                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        className="text-gray-50 hover:text-amber-500 transition-colors duration-200"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="text-gray-50 hover:text-amber-500 transition-colors duration-200"
                    >
                        Contact
                    </a>
                </div>
                <button className="md:hidden text-gray-50">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
}