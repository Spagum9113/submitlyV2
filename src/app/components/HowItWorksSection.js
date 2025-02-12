export default function HowItWorksSection() {
    return (
        <section id="howitworks" className="mx-auto max-w-6xl p-5">
            <div>
                <h1 className="text-5xl font-bold text-center text-[#0A0045] pb-10">
                    <span>How </span>
                    <span className="text-white bg-[#A259FF] rounded-xl px-3 py-1">It Works</span>
                </h1>

                <div className="grid grid-rows-4 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white shadow-md rounded-lg p-10 flex space-x-6 items-center hover:scale-105 hover:shadow-lg transition-transform duration-500">
                        <img className="w-20 h-20" src="how1.png" alt="Submit your startup" />
                        <div>
                            <h3 className="font-bold text-[#0A0045] text-2xl">1. Submit your startup</h3>
                            <p className="text-gray-700">Easily propel your startup forward. Choose a package, then I'll reach out to you once the payment has been recieved!</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white shadow-md rounded-lg p-10 flex space-x-6 items-center hover:scale-105 hover:shadow-lg transition-transform duration-500">
                        <img className="w-20 h-20" src="how2.png" alt="Match with directories" />
                        <div>
                            <h3 className="font-bold text-[#0A0045] text-2xl">2. Fill out the form</h3>
                            <p className="text-gray-700">A form will be emailed to you where you'll find in infomation about your SAAS</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white shadow-md rounded-lg p-10 flex space-x-6 items-center hover:scale-105 hover:shadow-lg transition-transform duration-500">
                        <img className="w-20 h-20" src="how3.png" alt="Kickstart your campaign" />
                        <div>
                            <h3 className="font-bold text-[#0A0045] text-2xl">3. Kickstart your campaign</h3>
                            <p className="text-gray-700">We’ll start listing your SAAS on your chosen platforms within 5-7 days.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white shadow-md rounded-lg p-10 flex space-x-6 items-center hover:scale-105 hover:shadow-lg trnasition-transform duration-500">
                        <img className="w-20 h-20" src="how4.png" alt="Monitor submissions" />
                        <div>
                            <h3 className="font-bold text-[#0A0045] text-2xl">4. Monitor your submissions</h3>
                            <p className="text-gray-700">Track your listings with a custom report and personalized AirTable link.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
