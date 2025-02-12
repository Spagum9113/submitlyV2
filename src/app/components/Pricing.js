"use client";

import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link"

// Initialize Stripe outside the component to avoid recreating it on every render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Pricing() {
    const handleCheckout = async (priceId) => {
        const stripe = await stripePromise;

        // Make an API request to create the checkout session
        const res = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ priceId }),
        });

        const { sessionId } = await res.json();

        // Redirect to Stripe Checkout
        if (stripe) {
            await stripe.redirectToCheckout({ sessionId });
        }
    };



    return (
        <section id="pricing" className="py-5">
            <div>
                <h1 className="text-5xl font-bold text-[#0A0045] p-5 text-center">
                    <span>Pricing for </span>
                    <span className="bg-[#A259FF] text-white px-4 p-2 rounded-lg">every startup</span>
                </h1>

                <div className="grid grid-cols-3 gap-x-10 gap-y-5 p-10 mx-64">


                    {/* BASIC TIER */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-lg transition-transform duration-500 group">
                        <div className="space-y-6">
                            <h3 className="font-bold text-4xl">Basic</h3>
                            <p>I'll list your site hassle-free, saving you time and effort.</p>
                            <div className="-space-y-8">
                                <h1 className="font-bold text-4xl py-4 line-through text-gray-500">$98</h1>
                                <h1 className="font-bold text-6xl py-4 text-[#0A0045]">$48</h1>
                            </div>
                            <ul className="space-y-3 py-2 text-gray-600">
                                <li>✅ Submission To A Curated list of 40 Directories and Websites</li>
                                <li>✅ Access To Our Custom Airtable With Submission Tracking</li>
                                <li>✅ All listings Submitted Manually Myself</li>
                                <li>✅ Easy Done-For-You Service</li>
                                <li>✅ Boost your Domain Rating and Organic Traffic</li>
                                <li>✅ 5-7 Days Delivery Time</li>
                                <li>✅ 2-Week After-Care Support</li>
                                <li>✅ Save 20+ Hours</li>
                                <li>✅ Detailed Submission Report</li>
                                <li className="">❌ Piority Order</li>

                            </ul>
                        </div>



                        <div className="flex flex-col items-center space-y-3 mt-6">
                            <button
                                onClick={() => handleCheckout("price_1QiD6vClmAOiprncrMLYirup")}
                                // onClick={() => handleCheckout("price_1QiDWDClmAOiprncE9XhKmOs")}
                                className="flex items-center justify-center rounded-full text-white font-semibold bg-[#5F88B1] px-6 py-3 space-x-3 transition-transform duration-300 group-hover:scale-105"
                            >
                                <img src="gain1.png" className="filter invert w-6 h-6" alt="Submit Icon" />
                                <span>Submit my SAAS</span>
                            </button>
                            <p className="text-sm text-gray-500">One-time payment!</p>
                        </div>
                    </div>

                    {/* PREMIUM TIER */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#A259FF] hover:scale-105 hover:shadow-lg transition-transform duration-500 group">
                        <div className="space-y-5">
                            <p className="text-white bg-[rgb(162,89,255)] rounded-full font-bold inline-block px-4 py-1 shadow-md text-small">Popular</p>
                            <h3 className="font-bold text-4xl">Premium</h3>
                            <p>I'll list your site hassle-free, saving you time and effort.</p>
                            <div className="-space-y-8">
                                <h1 className="font-bold text-4xl py-4 line-through text-gray-500">$118</h1>
                                <h1 className="font-bold text-6xl py-4 text-[#0A0045]">$68</h1>
                            </div>
                            <ul className="space-y-3 py-2 text-gray-600">
                                <li>✅ Submission To A Curated list of 70 Directories and Websites</li>
                                <li>✅ Access To Our Custom Airtable With Submission Tracking</li>
                                <li>✅ All listings Submitted Manually Myself</li>
                                <li>✅ Easy Done-For-You Service</li>
                                <li>✅ Boost your Domain Rating and Organic Traffic</li>
                                <li>✅ 5-7 Days Delivery Time</li>
                                <li>✅ 4-Week After-Care Support</li>
                                <li>✅ Save 40+ Hours</li>
                                <li>✅ Detailed Submission Report</li>
                                <li>✅ Piority Order</li>

                            </ul>
                        </div>
                        <div className="flex flex-col items-center space-y-3 mt-6">
                            <button
                                onClick={() => handleCheckout("price_1QiEvPClmAOiprncJtS1SoTE")}
                                className="flex items-center justify-center rounded-full text-white font-semibold bg-[#A259FF] px-6 py-3 space-x-3 transition-transform duration-300 group-hover:scale-105"
                            >
                                <img src="gain1.png" className="filter invert w-6 h-6" alt="Submit Icon" />
                                <span>Submit my SAAS</span>
                            </button>
                            <p className="text-sm text-gray-500">One-time payment!</p>
                        </div>
                    </div>



                    {/* FREE TIER */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-lg transition-transform duration-500 group">
                        <div className="space-y-6">
                            <h3 className="font-bold text-4xl">Free</h3>
                            <p>Get started for FREE and gain access to a curated list of 250+ directories.</p>
                            <h1 className="font-bold text-6xl py-4 text-[#0A0045]">$0</h1>
                            <ul className="space-y-3 py-2 text-gray-600">
                                <li>✅ Access To Our Free List Of 250+ Directories</li>
                                <li>✅ Perfect for DIY</li>
                                <li className="">❌ Access To Our Custom Airtable With Submission Tracking</li>
                                <li className="">❌ Submission Report</li>
                                <li className="">❌ Done For You Service</li>






                            </ul>
                        </div>

                        <div className="flex flex-col items-center space-y-3 mt-6">
                            <Link href="/EmailRequest">
                                <button className="flex items-center justify-center rounded-full text-white font-semibold bg-[#5F88B1] px-6 py-3 space-x-3 transition-transform duration-300 group-hover:scale-105">
                                    <img src="gain1.png" className="filter invert w-6 h-6" alt="Submit Icon" />
                                    <span>Submit my SAAS</span>
                                </button>
                            </Link>

                            <p className="text-sm text-gray-500">Free of charge!</p>
                        </div>
                    </div>


                </div>

            </div>
        </section >
    )
}
