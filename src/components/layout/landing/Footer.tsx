'use client'

export default function Footer() {
  return (
    <footer className= "flex bg-indigo-600 text-white py-12 mt-16 ">
      <div className="gird md:grid-cols3-gap-8">

        <ul className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 dark:bg-gray-950 dark:text-gray-100">

          {/* About */}
          <ul>
            <h3 className="font-bold text-lg mb-4">SMS Panel</h3>
            <p className="text-gray-200">
              ساده‌ترین و سریع‌ترین پنل مدیریت پیامک برای کسب‌وکارها.
            </p>
          </ul>

          {/* Links */}
          <ul>
            <li><h3 className="font-bold text-lg mb-4">لینک‌ها</h3></li>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-gray-300">ویژگی‌ها</a></li>
              <li><a href="#contact" className="hover:text-gray-300">تماس با ما</a></li>
              <li><a href="#pricing" className="hover:text-gray-300">قیمت‌ها</a></li>
            </ul>
          </ul>

          {/* Contact */}
          <ul>
            <li><h3 className="font-bold text-lg mb-4">تماس</h3></li>
            <li><p className="text-gray-200">ایمیل: support@sms-panel.com</p></li>
            <li><p className="text-gray-200 mt-1">تلفن: 021-12345678</p></li>
          </ul>

          <ul>
            <li className="mt-12 text-center text-gray-300 text-sm">
                © 2025 sms.aidinparsian.ir همه حقوق محفوظ است.
            </li>
          </ul>

        </ul>
      </div>
    </footer>
  );
}
