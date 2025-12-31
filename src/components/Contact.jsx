import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
    fadeInLeftVariant,
    fadeInRightVariant,
    fadeInTopVariant,
} from "../animations/Variants";
import { toast } from "react-toastify";

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage({ type: "", text: "" });

        emailjs
            .sendForm(
                import.meta.env.VITE_service_id,
                import.meta.env.VITE_template_id,
                form.current,
                import.meta.env.VITE_public_key
            )
            .then(() => {
                setSubmitMessage({
                    type: "success",
                    text: "Message sent successfully!",
                });
                toast.success("Message sent successfully ", {
                    icon: "✅",
                });
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitting(false);
            })
            .catch(() => {
                setSubmitMessage({
                    type: "error",
                    text: "Failed to send message. Please try again.",
                });
                toast.error("Failed to send message 😢", {
                    icon: "❌",
                });
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 w-full">
            <div className="max-w-7xl mx-auto px-4 overflow-hidden">
                {/* Heading */}
                <motion.div
                    variants={fadeInTopVariant}
                    initial="hidden"
                    whileInView="visible"
                    className="text-center mb-20 "
                >
                    <h2 className="text-sm tracking-widest text-[#84AB91] uppercase">
                        Contact
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mt-3">
                        Got an idea? <span className="text-[#84AB91]">Let’s team up</span>
                    </h1>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* LEFT PANEL */}
                    <motion.div
                        variants={fadeInLeftVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="space-y-6"
                    >
                        {[{
                            title: "Chat with me",
                            desc: "Feel free to reach out for project discussions, internships, or collaboration ideas.",
                            value: "kumarprince13833@gmail.com",
                        },
                        {
                            title: "Based in",
                            desc: "Currently pursuing my final year of BTech and open to remote or on-site opportunities.",
                            value: "Ludhiana, Punjab",
                        },
                        {
                            title: "Call me",
                            desc: "Available for quick discussions, interview calls, or project coordination.",
                            value: "+91 6299739584",
                        },

                        ].map((item, i) => (
                            <div
                                key={i}
                                className="
                  rounded-2xl p-6
                   bg-black/10 dark:bg-gradient-to-br from-[#0F1629] to-[#1A2332]
                  backdrop-blur-xl
                  border border-black/10 dark:border-white/10
                "
                            >
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {item.desc}
                                </p>
                                <p className="text-sm text-[#84AB91] mt-2">{item.value}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div
                        variants={fadeInRightVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="
              rounded-2xl p-8
              bg-black/10 dark:bg-gradient-to-br from-[#0F1629] to-[#1A2332]
              backdrop-blur-xl
              border border-black/10 dark:border-white/10
            "
                    >
                        <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">
                            Got a project in mind?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Tell us more about yourself and what you’re building.
                        </p>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            {/* NAME (EmailJS safe) */}
                            <div>
                                <label className="text-sm text-gray-700 dark:text-gray-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="
                    mt-2 w-full rounded-lg px-4 py-3
                    bg-white/60 dark:bg-black/40
                    border border-black/10 dark:border-white/10
                    text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-[#84AB91]
                  "
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="text-sm text-gray-700 dark:text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="
                    mt-2 w-full rounded-lg px-4 py-3
                    bg-white/60 dark:bg-black/40
                    border border-black/10 dark:border-white/10
                    text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-[#84AB91]
                  "
                                />
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="text-sm text-gray-700 dark:text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Write your message..."
                                    required
                                    className="
                    mt-2 w-full rounded-lg px-4 py-3
                    bg-white/60 dark:bg-black/40
                    border border-black/10 dark:border-white/10
                    text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-[#84AB91]
                  "
                                />
                            </div>

                            {/* STATUS */}
                            {submitMessage.text && (
                                <div
                                    className={`text-sm p-3 rounded-lg ${submitMessage.type === "success"
                                        ? "bg-green-500/10 text-green-600"
                                        : "bg-red-500/10 text-red-500"
                                        }`}
                                >
                                    {submitMessage.text}
                                </div>
                            )}

                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                  w-full rounded-lg py-3 font-semibold
                  bg-[#84AB91] hover:bg-[#6e9f85]
                  text-black transition cursor-pointer
                "
                            >
                                {isSubmitting ? "Sending..." : "Send Message "}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
