"use client"

import { useState } from "react";
import emailjs from '@emailjs/browser';


export default function EmailRequest() {

    const [formData, setFormData] = useState({ email: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_88a3doc", // Replace with your EmailJS Service ID
                "template_8xsgkzs", // Replace with your EmailJS Template ID
                formData,
                "v5O3t5yF2HCCOOzpy" // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setStatus("Form successfully submitted! 🎉");
                    setFormData({ email: "" });

                },
                (error) => {
                    console.error("FAILED...", error);
                    setStatus("Failed to submit the form. Please try again. 😞");
                },

            );
    };



    return (
        <div className="bg-[#FAF8EF] min-h-screen flex items-center justify-center px-4 ">
            <div className="bg-white shadow-lg rounded-2xl p-16 max-w-lg w-full">
                {/* Logo */}
                <div className="text-center mb-6">
                    <img src="/favicon.ico" alt="Logo" className="w-20 h-20 mx-auto" />
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-[#0A0045] mb-3">
                    <span className="block">Here's a helpful list of</span>
                    <span className="text-white bg-[#F09000] inline-block rounded-lg px-4"> 250+ FREE Directories</span>
                    <span className="block">to submit your startup to 🙌</span>

                </h1>

                <p className="pb-10 text-center text-gray-600 mb-6 border-b">
                    We promise we won't spam 😊
                </p>



                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold">
                            Email <span className="text-red-500">*</span>
                        </label>

                        <p className="text-xs py-3 text-gray-400">
                            Enter your email to get a copy of the start up directory list from Submitly
                        </p>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39B54A]"
                        />


                    </div>



                    {/* Buttons */}
                    <div className="flex items-center justify-between">

                        <button
                            type="submit"
                            className="flex items-center justify-center bg-[#0A0045] font-bold text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#0A0045] border-2 border-[#0A0045] transition duration-300"
                        >
                            Email me the list! <span className="ml-2">📩</span>
                        </button>
                    </div>
                </form>

                {/* Status Message */}
                {status && (
                    <p
                        className={`text-left mt-4 font-semibold ${status.includes("successfully") ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {status}
                    </p>
                )}


                {/* Footer */}
                <p className="text-center text-xs text-gray-400 mt-8">
                    Do not submit passwords through this form.
                </p>
            </div>
        </div>
    );
}

