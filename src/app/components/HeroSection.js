import Link from "next/link"

export default function HeroSection() {
    return (
        <section id="hero" className="flex justify-center items-center p-10">

            <div className="text-center space-y-5">
                <h1 className="text-7xl font-bold text-[#0A0045] space-y-3 py-5">
                    <span className="block">List your Startup in</span>
                    <span className="inline-block">
                        <span className=" text-white bg-[#A259FF] rounded-xl px-3"> 250+ Directories</span>
                        <span> Quickly 🚀</span>
                    </span>
                    <span className="block">With Zero Stress</span>
                </h1>

                <div className="text-xl space-y-5 pb-8 text-gray-600">
                    <p>⚡ Get your SAAS listed in 250+ curated sites & directories</p>
                    <p>🔗 Secure backlinks from high-quality sites to boost your SAAS's SEO</p>
                    <p>👥 All listings completed manually one at a time by myself</p>
                    <p>📈 Elevate your SAAS's traffic and growth</p>
                </div>


                <Link href="#pricing">
                    <button className="bg-[#0A0045] transition duration-300 py-4 px-8 text-white rounded-full hover:bg-white hover:text-[#0A0045] font-semibold border-2 border-[#0A0045]">
                        Submit my SAAS 🙌
                    </button>
                </Link>
            </div>


        </section >
    )
}