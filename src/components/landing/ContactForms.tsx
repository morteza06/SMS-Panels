"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا می‌توان API برای ارسال فرم اضافه کرد
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="ContactForm">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          با ما در ارتباط باشید
        </h2>
        <p className="text-gray-600 mt-2 mb-8">
          سوال، پیشنهاد یا درخواست دموی رایگان دارید؟ فرم زیر را پر کنید.
        </p>

        {submitted && (
          <div className="mb-4 text-green-600 font-semibold">
            فرم با موفقیت ارسال شد!
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="contact form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="نام شما"
            required
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2  focus:ring-indigo-500"
          />
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ایمیل شما"
            required
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="پیام شما"
            required
            rows={5}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="mt-2 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition outline-offset-2"
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </section>
  );
}
