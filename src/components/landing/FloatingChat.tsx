"use client";
import React, { useState, FormEvent } from 'react';
// وارد کردن آیکون‌ها از react-icons/fi
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi'; 

// تعریف انواع برای داده‌های فرم با TypeScript (بدون تغییر)
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * کامپوننت چت شناور با قابلیت ارسال فرم تماس اولیه - استفاده از React-icons.
 */
const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [formData, setFormData] = useState<ContactFormData>({ 
    name: '', 
    email: '', 
    message: '' 
  });

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // منطق ارسال داده (API call) باید اینجا اضافه شود.
    console.log('ارسال فرم تماس:', formData);

    setIsSubmitted(true);
  };
  
  // دکمه چت شناور همیشه در پایین سمت راست
  return (
        <div className="fixed bottom-4 right-4 z-50 sm:right-6 dark:bg-gray-950 dark:text-gray-100" id='Chat'>
            {/* پنجره چت */}
            {isOpen && (
                <div className="w-80 h-auto max-h-96 bg-white shadow-xl rounded-lg flex flex-col overflow-hidden mb-4 border border-gray-200 transition-all duration-300 ease-in-out  dark:bg-gray-950 dark:text-gray-100">
                
                {/* هدر چت */}
                <div className="bg-blue-600 text-white p-4 flex justify-between items-center  dark:bg-gray-950 dark:text-gray-100">
                    <h3 className="text-lg font-semibold">{isSubmitted ? 'پیام شما دریافت شد!' : 'پشتیبانی آنلاین'}</h3>
                    <button 
                    onClick={toggleChat} 
                    className="p-1 rounded-full hover:bg-blue-700 transition duration-150"
                    aria-label="بستن چت"
                    >
                    {/* جایگزینی آیکون X با FiX */}
                    <FiX className="w-5 h-5" />
                    </button>
                </div>
                
                {/* بدنه چت */}
                <div className="p-4 overflow-y-auto bg-gray-50 grow  dark:bg-gray-950 dark:text-gray-100">
                    
                    {isSubmitted ? (
                    // پیام موفقیت آمیز
                    <div className="text-center p-6 text-green-700">
                        <p className="font-bold mb-2">از تماس شما متشکریم!</p>
                        <p className="text-sm">پشتیبانان ما به زودی از طریق ایمیل/پیام پاسخ شما را خواهند داد.</p>
                    </div>
                    ) : (
                    // فرم تماس اولیه
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <p className="text-sm text-gray-600">
                        لطفاً اطلاعات خود را وارد کنید تا بتوانیم پاسخ دهیم.
                        </p>
                        
                        {/* فیلد نام، ایمیل، و پیام (بدون تغییر) */}
                        
                        <input
                        name="name"
                        type="text"
                        required
                        placeholder="نام شما"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        />

                        <input
                        name="email"
                        type="email"
                        required
                        placeholder="ایمیل شما"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                        <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="پیام یا سؤال شما..."
                        value={formData.message}onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                        
                        {/* دکمه ارسال */}
                        <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-150 flex items-center justify-center space-x-2"
                        >
                        {/* جایگزینی آیکون Send با FiSend */}
                        <FiSend className="w-4 h-4 transform rotate-180" /> 
                        <span>ارسال پیام</span>
                        </button>
                    </form>
                    )}
                    
                </div>
            </div>
      )}

      {/* دکمه شناور اصلی */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full shadow-lg text-white transition-all duration-300 flex items-center justify-center ${isOpen ? 'bg-blue-700 rotate-90' : 'bg-blue-600 hover:bg-blue-700'} `}
        aria-label={isOpen ? "بستن فرم تماس" : "باز کردن فرم تماس"}
        >
        {isOpen ? (
          /* جایگزینی آیکون X با FiX */
          <FiX className="w-6 h-6" />
        ) : (
          /* جایگزینی آیکون MessageSquare با FiMessageSquare */
          <FiMessageSquare className="w-6 h-6 bg-transparent" />
        )}
      </button>
    </div>
  );
};

export default FloatingChat;