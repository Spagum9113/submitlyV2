import Link from "next/link"

export default function CTASection() {
    return (
        <section className="bg-[#5F88B1] py-10">
            <div className="p-10 text-center space-y-5">
                {/* Heading */}
                <h1 className="font-bold text-5xl text-white">⚡ Boost Your Traffic in No Time!</h1>
                <p className="text-white text-2xl pb-5">Effortlessly Submit Your SAAS to High-Impact SEO Directories</p>

                {/* Button */}
                <div className="flex flex-col items-center space-y-3 mt-6">
                    <Link href="#pricing">

                        <button className="flex items-center justify-center rounded-full text-white font-semibold bg-[#0A0045] px-6 py-3 space-x-3 transition-transform duration-300 group hover:text-[#0A0045] hover:bg-white">
                            {/* Image with precise hover effects */}
                            <img
                                src="gain1.png"
                                className="w-6 h-6 invert transition-all duration-300 filter group-hover:invert-0 group-hover:brightness-75"
                                alt="Submit Icon"
                            />
                            <span>Submit my SAAS</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
