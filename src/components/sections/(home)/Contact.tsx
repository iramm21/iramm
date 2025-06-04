"use client";

import { useState } from "react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        form.reset();
        setSubmitted("success");
      } else {
        setSubmitted("error");
      }
    } catch {
      setSubmitted("error");
    }

    setTimeout(() => setSubmitted(null), 5000);
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Have a project in mind or just want to say hello? Let&apos;s
            connect.
          </p>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-3">
              <FiMail className="text-blue-600 text-xl" />
              <span>you@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-blue-600 text-xl" />
              <span>City, Country</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>

          {/* Submission Feedback */}
          {submitted === "success" && (
            <p className="text-green-600 dark:text-green-400 text-sm mt-2">
              Message sent successfully!
            </p>
          )}
          {submitted === "error" && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-2">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
