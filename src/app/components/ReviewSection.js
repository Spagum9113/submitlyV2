export default function ReviewSection() {
    return (
        <section id="reviews" className="flex justify-center items-center p-10 mx-20">
            <div className="text-center space-y-10">

                <h1 className="text-5xl text-[#0A0045] text-center font-bold pt-20 py-5">
                    <span>What Our </span>
                    <span className="text-white bg-[#F09000] rounded-xl p-3">Clients Say</span>

                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 my-10 mb-20 gap-x-10 gap-y-10 text-left">


                    <div className="p-5 bg-white shadow-xl rounded-lg hover:scale-105 hover:shadow-lg transform-transition duration-500">
                        <img src="203.jpeg" alt="reviewer" className="rounded-full w-20 h-20 object-cover mb-5" />
                        <p>I used Submitly to list my company on over 70 websites. Their service was amazing and they went above and beyond to get us listed, which really boosted our backlinks. They even added extra sites outside of our original plan and sent a detailed report. Highly recommend Ethan!</p>
                        <br />
                        <p className="font-bold">Akash Mahajan</p>
                        <p>Founder of kloudle.com</p>
                    </div>



                    <div className="p-5 bg-white shadow-xl rounded-lg hover:scale-105 hover:shadow-lg transform-transition duration-500">
                        <img src="images.jpeg" alt="reviewer" className="rounded-full w-20 h-20 object-cover mb-5" />
                        <p>I used Submitly to list my SaaS on 50 directories, and I couldn't be happier with the service. The process was super smooth, and the backlinks are already making a positive impact on my Domain Rating! The progress reports kept me updated every step of the way. Highly recommend Submitly to anyone looking to boost their SEO while staying focused on building.</p>
                        <br />
                        <p className="font-bold">Shivam Wadhwa</p>
                        <p>Founder of launchmystore.io</p>
                    </div>



                    <div className="p-5 bg-white shadow-xl rounded-lg hover:scale-105 hover:shadow-lg transform-transition duration-500">
                        <img src="young-boy-indian-student-portrait-photo.jpg" alt="reviewer" className="rounded-full w-20 h-20 object-cover mb-5" />
                        <p>Submitly has been an incredible partner for APIRobots. Their service efficiently submitted our website to 50 directories, greatly boosting our online presence. Their professionalism and attention to detail were impressive throughout the entire process.</p>
                        <br />
                        <p className="font-bold">Borislav Gizdov</p>
                        <p>Founder of apirobots.pro</p>


                    </div>
                </div>
            </div>
        </section>
    );
}
