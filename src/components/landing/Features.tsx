"use client";
import { 
  ChatBubbleOvalLeftIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <section id="Features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 dark:bg-gray-950 dark:text-gray-100">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            قابلیت‌هایی که یک سیستم <span className="text-indigo-600">پیامکی حرفه‌ای</span> نیاز دارد
          </h2>
          <p className="text-gray-600 mt-4">
            هر آنچه برای مدیریت ارتباط با مشتریان نیاز دارید، اینجاست.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Card 1 */}
          <article className="p-6 rounded-2xl shadow-2xl hover:shadow-md transition">
            <ChatBubbleOvalLeftIcon className="w-10 h-10 text-indigo-600" />
            <h3 className="font-semibold text-lg mt-4">ارسال پیامک سریع</h3>
            <p className="text-sm text-gray-600 mt-2">
              ارسال انبوه، تکی، هدفمند و زمان‌بندی شده با سرعت بالا.
            </p>
          </article>

          {/* Card 2 */}
          <article className="p-6 rounded-2xl shadow-2xl  hover:shadow-md transition">
            <ChartBarIcon className="w-10 h-10 text-indigo-600" />
            <h3 className="font-semibold text-lg mt-4">گزارش‌های دقیق</h3>
            <p className="text-sm text-gray-600 mt-2">
              گزارش لحظه‌ای وضعیت تحویل پیامک‌ها و آمار کمپین‌ها.
            </p>
          </article>

          {/* Card 3 */}
          <article className="p-6 rounded-2xl shadow-2xl  hover:shadow-md transition">
            <UserGroupIcon className="w-10 h-10 text-indigo-600" />
            <h3 className="font-semibold text-lg mt-4">مدیریت مخاطبین</h3>
            <p className="text-sm text-gray-600 mt-2">
              گروه‌بندی مخاطبین، فایل اکسل، تگ‌گذاری و فیلترهای پیشرفته.
            </p>
          </article>

          {/* Card 4 */}
          <article className="p-6 rounded-2xl shadow-2xl  hover:shadow-md transition">
            <ShieldCheckIcon className="w-10 h-10 text-indigo-600" />
            <h3 className="font-semibold text-lg mt-4">امنیت بالا</h3>
            <p className="text-sm text-gray-600 mt-2">
              امنیت کامل داده‌ها با رمزنگاری و محافظت از اطلاعات کاربران.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}
