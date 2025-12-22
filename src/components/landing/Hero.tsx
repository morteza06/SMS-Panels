'use client'

export default function Hero() {
  return (
    <section id="Hero" className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-16 md:py-24">
      <div className="px-2 py-2 mr-1 ml-1 ">

        {/* Text */}
        <div className="dark:bg-gray-800 dark:border-gray-700 max-w-7xl mx-auto px-4 text-center md:text-right ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight lg:text-5xl" >
                <span className="bg-linear-to-r from-indigo-600 to-pink-500 px-3 py-2 text-white ...">
                ارسال پیامک  حرفه‌ای
                </span>
              </h1>
                <br />
              <h5 className="text-4xl md:text-5xl font-bold leading-tight">

                <span className="mt-4 text-lg md:text-xl text-gray-600"> سریع، مطمئن، بدون محدودیت</span>
              </h5>
        </div>


        <div className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-500 text-2xl sm:text-2xl lg:text-5xl font-extrabold leading-tight">
          

          <p className="text-gray-600 mt-4 ">
            ساده‌ترین راه برای مدیریت پیامک، کمپین‌های تبلیغاتی و ارتباط با مشتریان.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className=" px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded">
              شروع کنید
            </button>
            <button className=" px-6 py-3 bg-blue-400 rounded hover:bg-blue-500 ">
              نسخه آزمایشی 
            </button>
          </div>
           <h5 className="text-5xl font-bold text-indigo-600 box-decoration-clone bg-radial py-20 ">ارسال پیامک آسان و سریع</h5>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">با سامانه ما پیامک‌های شما در کوتاه‌ترین زمان به مقصد می‌رسند.</p>
            <a href="#contact" className="button bg-blue-600 text-white px-18 py-45 rounded-lg hover:bg-blue-700 transition">شروع کنید</a>

     
        </div>

      </div>
    </section>
  );
}
