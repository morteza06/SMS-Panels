"use client";
export default function AccountDetails() {
  return (
    <section id="AccountDetails" className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Text Content */}
        <>
          <h2 className="text-2xl md:text-4xl font-bold ">
            پنل مدیریت پیامک  
            <span className="text-indigo-600">    قدرتمند </span>
          </h2>

          <p className="mt-4 text-gray-600">
           مدیریت پیامک‌، گزارش‌گیری، کمپین‌ها
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✓ داشبورد تحلیلی </li>
            <li>✓ ارسال انبوه</li>
            <li>✓ گزارش اکسل</li>
          </ul>

          <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md outline outline-offset-2 hover:bg-indigo-500 ">
            مشاهده نسخه آزمایشی
          </button>
        </>

        {/* Right Mockup */}
        <div className="flex justify-center">
          <div className="w-full justify-center h-72 md:h-80 bg-linear-to-br from-indigo-100 to-indigo-400 rounded-3xl shadow-lg border border-indigo-100">
            {/* اگر خواستی، بعداً تصویر پنل را اینجا قرار می‌دهیم */}
            تصویر داشبورد
          </div>
        </div>

      </div>
    </section>
  );
}
