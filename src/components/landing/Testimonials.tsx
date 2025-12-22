'use client'
export default function Testimonials() {
  const testimonials = [
    {
      name: "محمد رضایی",
      role: "مدیر بازاریابی",
      message: "پنل پیامکی بسیار ساده و سریع است. ارسال انبوه پیامک‌ها هیچ وقت تا این حد راحت نبوده.",
    },
    {
      name: "سارا احمدی",
      role: "کارشناس فروش",
      message: "با گزارش‌های لحظه‌ای، می‌توانم کمپین‌ها را به بهترین شکل مدیریت کنم.",
    },
    {
      name: "علی موسوی",
      role: "مالک کسب‌وکار",
      message: "محیط کاربری عالی و بدون پیچیدگی. پشتیبانی سریع و دوستانه است.",
    },
  ];

  return (
    <article id="Testimonials">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          نظرات کاربران ما
        </h2>
        <p className="text-gray-600 mt-2 mb-12">
          مشتریان ما درباره تجربه‌شان چه می‌گویند
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <article key={idx} className="testimonial-cart">
              <p className="text-gray-700 italic"> `&ldquo;` {t.message} `&rdquo;` </p>
              <div className="mt-4 font-semibold text-indigo-600">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.role}</div>
            </article>
          ))}
        </div>
    
      </div>
    </article>
  );
}
