"use client";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const MessageForMe = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.email || !formData.message) {
      setStatus("Both fields are required.");
      setTimeout(() => setStatus(null), 3000); // Clear status after 3 seconds
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      setTimeout(() => setStatus(null), 3000); // Clear status after 3 seconds
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(
          "Message sent successfully! Vedant will soon catch up with you!"
        );
        setFormData({ email: "", message: "" });
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000); // Clear status after 5 seconds
    }
  };

  const messageRef = useRef(null);
  const isInView = useInView(messageRef, { amount: 0.3 });
  return (
    <motion.div
      ref={messageRef}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mx-2 h-full mb-24 md:mx-32 lg:flex"
      id="message"
    >
      <Card className="lg:flex">
        <div className="text-center lg:text-left">
          <CardHeader
            title="Let&apos;s Talk"
            description="Have something to share? Drop me a message, and I'll get back to you
          as soon as possible!"
            className="lg:items-start"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-5 lg:-mt-3 max-w-md mx-auto"
        >
          <div className="flex justify-center items-center mt-5">
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-emerald-300 rounded-lg focus:outline-none focus:ring focus:ring-emerald-300"
            />
          </div>
          <div className="flex justify-center items-center mt-5">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              cols={50}
              placeholder="Your Message"
              className="w-full p-3 bg-transparent border border-emerald-300 rounded-lg focus:outline-none focus:ring focus:ring-emerald-300"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-emerald-300 text-gray-800 rounded-lg hover:bg-emerald-400 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
          {status && (
            <p className="text-center h-full mt-3 font-serif text-transparent bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text">
              {status}
            </p>
          )}
        </form>
      </Card>
    </motion.div>
  );
};

export default MessageForMe;
