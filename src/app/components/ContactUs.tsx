import { Mail, Phone, ArrowRight } from "lucide-react";
import { useLang } from "../hooks/useLang";

export default function ContactSection() {
  const { isArabic } = useLang();
  return (
    <section className="py-14 lg:py-20 px-6 max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Info */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl lg:text-5xl font-medium  mb-3">
              {isArabic ? "هل لديك أسئلة؟ فريقنا جاهز في أي وقت" : "Have Questions?Our Team is Ready Anytime"}
            </h2>
            <p className="leading-relaxed max-w-[600px] text-gray-700">
              {isArabic ? "هل لديك أسئلة أو تحتاج إلى إرشادات؟ فريقنا جاهز دائمًا لمساعدتك في اتخاذ الخطوة التالية - سواء كان ذلك استفسارًا سريعًا أو مناقشة مشروع كامل." : "Got questions or need guidance? Our team is always ready to help you take the next step—whether its a quick inquiry or a full project discussion."}
            </p>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <svg width="40" height="40" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.4478 9.92493H9.78109C7.12275 9.92493 4.97192 12.0999 4.97192 14.7583L4.94775 43.7583C4.94775 46.4166 7.12275 48.5916 9.78109 48.5916H48.4478C51.1061 48.5916 53.2811 46.4166 53.2811 43.7583V14.7583C53.2811 12.0999 51.1061 9.92493 48.4478 9.92493ZM48.4478 19.5916L29.1144 31.6749L9.78109 19.5916V14.7583L29.1144 26.8416L48.4478 14.7583V19.5916Z" fill="#0B5242" />
            </svg>

            <div>
              <div className="text-sm ">{isArabic ? "البريد الإلكتروني" : "E-mail"}</div>
              <div className="text-md font-medium">Yourmail******@gmail.com</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <svg width="40" height="40" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.4718 37.4266C45.4993 37.4266 42.6234 36.9433 39.9409 36.0733C39.5206 35.9317 39.0689 35.911 38.6374 36.0136C38.2059 36.1161 37.8118 36.3378 37.5001 36.6533L33.7059 41.4141C26.8668 38.1516 20.4626 31.9891 17.0551 24.9083L21.7676 20.8966C22.4201 20.22 22.6134 19.2775 22.3476 18.4316C21.4534 15.7491 20.9943 12.8733 20.9943 9.9008C20.9943 8.5958 19.9068 7.5083 18.6018 7.5083H10.2401C8.93509 7.5083 7.36426 8.0883 7.36426 9.9008C7.36426 32.3516 26.0451 51.0083 48.4718 51.0083C50.1876 51.0083 50.8643 49.4858 50.8643 48.1566V39.8191C50.8643 38.5141 49.7768 37.4266 48.4718 37.4266Z" fill="#0B5242" />
            </svg>

            <div>
              <div className="text-sm">{isArabic ? "رقم الهاتف" : "Phone number"}</div>
              <div className="text-md font-medium">+91 9048551144</div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form className="bg-white rounded-3xl lg:p-10 p-6  space-y-5">
          <div>
            <label className="block mb-1 font-medium text-sm">{isArabic ? "اسمك" : "Your Name"}</label>
            <input className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none  placeholder-[#BFBCBC]" type="text" placeholder={isArabic ? "اسمك" : "Your Name"} />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">{isArabic ? "رقم الهاتف" : "Phone number"}</label>
            <input className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none  placeholder-[#BFBCBC]" type="text" placeholder={isArabic ? "رقم الهاتف" : "Phone number"} />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">{isArabic ? "البريد الإلكتروني" : "E-mail"}</label>
            <input className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none placeholder-[#BFBCBC]" type="email" placeholder={isArabic ? "البريد الإلكتروني" : "Email"} />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">{isArabic ? "الرسالة" : "Message"}</label>
            <textarea className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none resize-none  placeholder-[#BFBCBC]" rows={3} placeholder={isArabic ? "الرسالة" : "Message"} />
          </div>
          <div className="mt-3 justify-self-end">

            <button className="inline-flex items-center gap-2 pl-3 pr-8 py-[12px] bg-[var(--green2)] text-white border rounded-full  transition-transform duration-300 hover:scale-105 cursor-pointer">
              <svg width="26" height="26" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9254 0.167114C9.75308 0.167114 0.663086 9.25711 0.663086 20.4294C0.663086 31.6018 9.75308 40.6918 20.9254 40.6918C32.0978 40.6918 41.1877 31.6018 41.1877 20.4294C41.1877 9.25711 32.0978 0.167114 20.9254 0.167114ZM20.9254 3.2844C30.4129 3.2844 38.0705 10.942 38.0705 20.4294C38.0705 29.9169 30.4129 37.5745 20.9254 37.5745C11.438 37.5745 3.78037 29.9169 3.78037 20.4294C3.78037 10.942 11.438 3.2844 20.9254 3.2844ZM22.0476 10.4448L19.8032 12.6362L26.0378 18.8708H10.0149V21.9881H26.0378L19.8032 28.2226L22.0476 30.4141L30.9101 21.5501L32.0323 20.4279L30.9101 19.3057L22.0461 10.4432L22.0476 10.4448Z" fill="white" />
              </svg> {isArabic ? "اتصل بنا" : "Contact Us"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
