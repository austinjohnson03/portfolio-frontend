import "@/app/globals.css"
import Link from "next/link"

export default function Navbar() {
    return <nav className="bg-slate-800 border-b borer-slate-900">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <Link className="text-white font-bold text-xl" href="/">Site</Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link
                        href="/"
                        className="text-gray-50 hover:text-amber-500 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-50 hover:text-amber-500 transition-colors duration-200"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-50 hover:text-amber-500 transition-colors duration-200"
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-50 hover:text-amber-500 transition-colors duration-200"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/resume"
                        className="text-gray-50 hover:text-amber-500 transition-colors duration-200"
                    >
                        Resume
                    </Link>
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