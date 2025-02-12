"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "How do you determine the right websites for submission?",
            answer: "I craft a tailored list for each SAAS, then share it with you for approval before I proceed with the submission process.",
        },
        {
            question: "Will my Domain Rating (DR) improve?",
            answer: "Unlike other submission services, I don't focus on boosting your domain rating (DR) as the main goal. Sure, it might improve naturally, but using DR as your primary performance metric isn’t reliable. It’s a third-party metric that Google doesn’t even recognize, and it’s easy to game the system. Plenty of freelancers on sites like Fiverr and Upwork promise quick DR boosts, but they usually rely on low-quality, spammy backlinks that can hurt your site in the long run. At Submitly, I prioritize high-quality directories to deliver real, sustainable results that actually help your site perform better."
        },
        {
            question: "Do you rely on bots for submissions?",
            answer: "No, I only submit them manually one at a time myself to ensure that your site does not get negatively impacted",
        },
        {
            question: "Will this affect my SEO efforts negatively?",
            answer: "Not at all. I carefully stagger submissions over a week to boost your SEO without any negative effects.",
        },
        {
            question: "How do I add a site to your list?",
            answer: "Just send me an email! If the site has good organic traffic, solid referring domains, and is relevant, I will most likely include it. 😊",
        },
        {
            question: "How long does it take?",
            answer: "I spread submissions over a week. Some directories list your startup immediately, while others may take one to four weeks to publish your listing.",
        },
        {
            question: "Why is the price so affordable?",
            answer: "Well I'm a broke University student with a lot of free time...",
        },

    ];


    return (
        <section id="faq" className="py-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-bold text-5xl text-center text-[#0A0045] mb-10">FAQs 🤓</h1>

                <div className="space-y-6">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-lg cursor-pointer border transition-all duration-300"
                        >
                            <h3
                                onClick={() => toggleFAQ(index)}
                                className="font-semibold text-lg flex justify-between items-center text-[#0A0045]"
                            >
                                {faq.question}
                                <span
                                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                >
                                    ⌄
                                </span>
                            </h3>

                            {/* Animating the FAQ Answer */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        key={index}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-600 mt-3">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
