import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between mb-4">
                <Image src="/img/logo.svg" alt="Code Monarch" width={50} height={50} />
                <button className="text-white focus:outline-none md:hidden">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                </button>
            </div>
            <ul className="flex flex-col md:flex-row md:space-x-4">
                <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
                <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
                <li><a href="/blog" className="text-white hover:text-gray-300">Blog</a></li>
                <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
    );
}
