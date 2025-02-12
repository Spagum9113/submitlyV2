export default function BenefitsSection() {
    return (
        <section id="benefits" className="mx-auto max-w-6xl">
            <div>
                <h1 className="text-5xl pt-40 font-bold text-[#0A0045] text-center p-5">
                    <span>What You </span>
                    <span className="bg-[#F09000] text-white rounded-lg px-4 p-2">Gain</span>


                </h1>

                <div className="grid grid-cols-3 gap-x-10 gap-y-5 p-15 py-8 text-center">
                    <div className="bg-white p-5 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transiton-transform duration-500 pb-10">
                        <img src="gain1.png" className="w-14 h-14 mx-auto my-5"></img>
                        <h3 className="text-[#0A0045] text-2xl font-bold py-5">Kickstart Your Startup's Growth</h3>
                        <p>Connect with eager customers and early adopters ready to discover your startup brand and its value.</p>
                    </div>


                    <div className="bg-white p-5 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transiton-transform duration-500 pb-10">
                        <img src="idea.png" className="w-14 h-14 mx-auto my-5"></img>
                        <h3 className="text-[#0A0045] text-2xl font-bold py-5">Supercharge Your SEO and Visibility</h3>
                        <p>Gain high-quality backlinks from authority sites to improve your website's SEO ranking and online visibility.</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transiton-transform duration-500 pb-10">
                        <img src="gain2.png" className="w-14 h-14 mx-auto my-5"></img>
                        <h3 className="text-[#0A0045] text-2xl font-bold py-5">Effortless Listings</h3>
                        <p>Enjoy your SAAS being listed for you all done manually by myself.</p>
                    </div>



                </div>

            </div>


        </section>
    )
}