import Link from "next/link"

export default function InfoSection() {
    return (
        <section className="py-32 mx-64">
            <div>
                <h1 className="text-5xl font-bold text-center text-[#0A0045] py-10">
                    <span>Boost your site's </span>
                    <span className="text-white bg-[#5F88B1] rounded-xl p-3">Backlink Profile</span>
                    <span> for SEO</span>
                </h1>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 p-10">
                    <div className="p-10 bg-white shadow-md rounded-xl text-center space-y-5 hover:scale-105 hover:shadow-lg transform-transition duration-500">
                        <img src="pen.png" className="w-10 h-10 mx-auto my-5"></img>
                        <h3 className="font-bold text-2xl text-[#0A0045]">Dofollow Links</h3>
                        <p>Boost your site's search engine rankings by submitting your startup to high-authority platforms with dofollow links, enhancing your domain authority.</p>
                    </div>


                    <div className="p-10 bg-white shadow-md rounded-xl row-span-2 content-center text-center space-y-5 hover:scale-105 hover:shadow-lg transform-transition duration-500">
                        <img src="target.png" className="w-10 h-10 mx-auto my-5"></img>
                        <h3 className="font-bold text-2xl text-[#0A0045]">Backlinks</h3>
                        <p className="pb-6">Enhance your backlink profile with a mix of dofollow and nofollow links, boosting SEO rankings and driving referral traffic.</p>

                        <Link href="#pricing">
                            <button className="bg-[#5F88B1] rounded-full text-white text-lg p-5 font-bold">⚡ Increase my sites backlinks</button>
                        </Link>

                    </div>


                    <div className="p-10 bg-white shadow-md rounded-xl text-center space-y-5 hover:scale-105 hover:shadow-lg transform-transition duration-500">
                        <img src="idea.png" className="w-10 h-10 mx-auto my-5"></img>
                        <h3 className="font-bold text-2xl text-[#0A0045]">No follow links</h3>
                        <p>While nofollow directories limit direct SEO influence, they still drive valuable traffic to your website, strengthening its visibility and impact.</p>
                    </div>



                </div>

            </div>

        </section >
    )
}