"use client";

export default function Customers() {
  return (
    <section id="Customers">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        
        <h3 className="text-gray-700 text-sm uppercase font-semibold tracking-wider dark:bg-gray-950 dark:text-gray-100">
          مورد اعتماد کسب‌وکارها
        </h3>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-10 items-center opacity-80">
          
          <div className="text-lg font-semibold text-gray-500">BrandOne</div>
          <div className="text-lg font-semibold text-gray-500">TechLine</div>
          <div className="text-lg font-semibold text-gray-500">SMSPro</div>
          <div className="text-lg font-semibold text-gray-500">MegaSoft</div>

        </div>

      </div>
    </section>
  );
}
