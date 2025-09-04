'use client';

import { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useLang } from "../hooks/useLang";

export default function ContactSection() {
  const { isArabic } = useLang();
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Handle form submit (send POST to API route)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    // Get data from form fields
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    // Send POST request to backend API
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setMessageStatus({ type: 'success', message: isArabic ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent!" });
      form.reset();
    } else {
      setMessageStatus({ type: 'error', message: isArabic ? "فشل في إرسال الرسالة." : "Message sending failed." });
    }
  };

  return (
    <section className="py-14 lg:py-20 px-6 max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Info */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl lg:text-5xl font-medium mb-4 max-w-[450px]">
              {isArabic ? "هل لديك أسئلة؟ فريقنا جاهز في أي وقت" : "Have Questions? Our Team is Ready Anytime"}
            </h2>
            <p className="leading-relaxed max-w-[600px] text-gray-700">
              {isArabic
                ? "هل لديك أسئلة أو تحتاج إلى إرشادات؟ فريقنا جاهز دائمًا لمساعدتك في اتخاذ الخطوة التالية - سواء كان ذلك استفسارًا سريعًا أو مناقشة مشروع كامل."
                : "Got questions or need guidance? Our team is always ready to help you take the next step—whether it's a quick inquiry or a full project discussion."}
            </p>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <Mail size={40} color="#0B5242" />
            <div>
              <div className="text-sm">{isArabic ? "البريد الإلكتروني" : "E-mail"}</div>
              <div className="text-md font-medium">raymontazim@outlook.com</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={40} color="#0B5242" />
            <div>
              <div className="text-sm">{isArabic ? "رقم الهاتف" : "Phone number"}</div>
              <div className="text-md font-medium">0966 920032359</div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl lg:p-10 p-6 space-y-5"
        >
          <div>
            <label className="block mb-1 font-medium text-sm">{isArabic ? "اسمك" : "Your Name"}</label>
            <input
              name="name"
              className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none placeholder-[#BFBCBC]"
              type="text"
              placeholder={isArabic ? "اسمك" : "Your Name"}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">{isArabic ? "رقم الهاتف" : "Phone number"}</label>
            <input
              name="phone"
              className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none placeholder-[#BFBCBC]"
              type="text"
              placeholder={isArabic ? "رقم الهاتف" : "Phone number"}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">{isArabic ? "البريد الإلكتروني" : "E-mail"}</label>
            <input
              name="email"
              className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none placeholder-[#BFBCBC]"
              type="email"
              placeholder={isArabic ? "البريد الإلكتروني" : "Email"}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">{isArabic ? "الرسالة" : "Message"}</label>
            <textarea
              name="message"
              className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none resize-none placeholder-[#BFBCBC]"
              rows={3}
              placeholder={isArabic ? "الرسالة" : "Message"}
              required
            />
          </div>
          <div className="mt-3 justify-self-end">
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center gap-2 ${isArabic ? "pr-3 pl-8" : "pl-3 pr-8"
                } py-[12px] bg-[var(--green2)] text-white border rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer`}
            >
              <ArrowRight size={26} />
              {loading
                ? isArabic ? "جارٍ الإرسال..." : "Sending..."
                : isArabic ? " احصل على حل" : "Get a Solution"}
            </button>
          </div>
           <div className="mt-3 justify-self-end message-status">
            {messageStatus && (
              <p className={`${messageStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {messageStatus.message}
              </p>
            )}
           </div>
        </form>
      </div>
    </section>
  );
}
