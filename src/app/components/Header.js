import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full p-4 py-10 flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <img
                    src="logov4.png"
                    className="w-40 h-auto object-contain cursor-pointer mx-5"
                    alt="Logo"
                />
            </Link>


            {/* Navigation */}
            <nav className="hidden md:flex">
                <ul className="flex space-x-8 text-lg text-gray-600">
                    <li><a href="/#reviews" className="hover:text-[#0A0045]">Reviews</a></li>
                    <li><a href="/#howitworks" className="hover:text-[#0A0045]">How it works</a></li>
                    <li><a href="/#benefits" className="hover:text-[#0A0045]">Benefits</a></li>
                    <li><a href="/#whychooseus" className="hover:text-[#0A0045]">Why Choose Us</a></li>
                    <li><a href="/#pricing" className="hover:text-[#0A0045]">Pricing</a></li>
                    <li><a href="/#faq" className=" hover:text-[#0A0045]">FAQ</a></li>
                </ul>
            </nav>

            {/* Button */}
            <Link href="/#pricing">
                <button className="flex items-center justify-center group rounded-full text-white font-semibold bg-[#0A0045] py-3 px-6 space-x-3 transition-transform duration-300 hover:text-[#0A0045] hover:bg-white border-2 border-[#0A0045]">
                    <img
                        src="gain1.png"
                        className="w-6 h-6 invert transition-all duration-300 filter group-hover:invert-0"
                        alt="Submit Icon"
                    />
                    <span>Submit my SAAS</span>
                </button>
            </Link>

        </header>
    );
}
