"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../hooks/useLang";

const faqs = [
    {
        question_en: "What Is The Legal Status Of The Company? Is It Licensed?",
        question_ar: "ما هو الوضع القانوني للشركة؟ هل هي مرخصة؟",
        answer_en: (
            <div className="pt-7">
                <p className="mb-4 text-gray-700 text-sm">
                    The company is a Simplified Joint-Stock Company, licensed by the Saudi Ministry of Commerce. Investors gain ownership rights through officially documented shares, and all company activities comply with the applicable laws and regulations.
                </p>
                <div className="mt-2">
                    <span className="my-4 block">Yes, A Legally Documented Agreement Clearly Defines:</span>
                    <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2  text-sm space-y-1 pl-6">
                        <li>Investor share percentages</li>
                        <li>Rights to profits and exit</li>
                        <li>Distribution mechanics for returns</li>
                        <li>Limits of liability</li>
                        <li>Voting rights (if applicable)</li>
                        <li>Rules for transferring or selling shares</li>
                    </ul>
                </div>
            </div>
        ),
        answer_ar: (
            <div className="pt-7">
                <p className="mb-4 text-gray-700 text-sm">
                    الشركة هي شركة مساهمة مبسطة، مرخصة من وزارة التجارة السعودية. يكتسب المستثمرون حقوق الملكية من خلال أسهم موثقة رسميًا، وتتوافق جميع أنشطة الشركة مع القوانين واللوائح المعمول بها.
                </p>
                <div className="mt-2">
                    <span className="my-4 block">نعم، اتفاقية موثقة قانونًا تحدد بوضوح:</span>
                    <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2  text-sm space-y-1 pl-6">
                        <li>نسب حصص المستثمرين</li>
                        <li>حقوق الأرباح والخروج</li>
                        <li>آليات توزيع العوائد</li>
                        <li>حدود المسؤولية</li>
                        <li>حقوق التصويت (إن وجدت)</li>
                        <li>قواعد نقل أو بيع الأسهم</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        question_en: "Is The Company Officially Registered As A Simplified Joint-Stock Company?",
        question_ar: "هل الشركة مسجلة رسمياً كشركة مساهمة مبسطة؟",
        answer_en: (
            <div className="pt-7">
                <p className="mb-2 text-gray-700">
                    Yes, the company is officially registered and compliant with Saudi legal requirements for simplified joint-stock corporations.
                </p>
            </div>
        ),
        answer_ar: (
            <div className="pt-7">
                <p className="mb-2 text-gray-700">
                    نعم، الشركة مسجلة رسميًا ومتوافقة مع المتطلبات القانونية السعودية للشركات المساهمة المبسطة.
                </p>
            </div>
        ),
    },
    {
        question_en: "Are There Internal Regulations Or A Founding Agreement For Shareholders?",
        question_ar: "هل توجد لوائح داخلية أو اتفاقية تأسيس للمساهمين؟",
        answer_en: (
            <div className="pt-7">
                <p className="mb-2 text-gray-700">
                    Yes, there are internal governance regulations and a founding agreement outlining shareholder rights and responsibilities.
                </p>
            </div>
        ),
        answer_ar: (
            <div className="pt-7">
                <p className="mb-2 text-gray-700">
                    نعم، توجد لوائح حوكمة داخلية واتفاقية تأسيس تحدد حقوق ومسؤوليات المساهمين.
                </p>
            </div>
        ),
    },
];

export default function FaqAccordion() {
    const [openIdx, setOpenIdx] = useState<number | null>(0); // open first by default

    const toggle = (idx: number) => setOpenIdx(openIdx === idx ? null : idx);

    return (
        <section className="max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center py-14 lg:py-20">
            <div className="pb-14 text-center mx-auto">
                <h2 className="text-3xl lg:text-5xl font-medium  mb-8">{isArabic ? "أسئلة استثمارك مجاب عليها" : "Your Investment <br></br>Questions Answered"}</h2>
                <p className="leading-relaxed max-w-[600px] text-gray-600">
                    {isArabic ? "لقد قمنا بتجميع إجابات لأكثر الأسئلة شيوعًا حول مشاريعنا، وهيكل الشركة القانوني، والعوائد، وحقوق المساهمين لمساعدتك على اتخاذ قرارات استثمارية مستنيرة بثقة." : "We’ve compiled answers to the most common questions about our projects, legal structure, returns, and shareholder rights to help you make informed investment decisions with confidence."}
                </p>
            </div>
            <div className=" w-full space-y-5">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className={`rounded-3xl overflow-hidden bg-white  duration-200 border border-transparent lg:py-6 py-4 ${openIdx === idx ? "" : ""
                            }`}
                    >
                        {/* Question row */}
                        <button
                            onClick={() => toggle(idx)}
                            aria-expanded={openIdx === idx}
                            className={`flex items-center cursor-pointer justify-between w-full px-4 lg:px-8 font-medium text-left lg:text-[1.08rem] text-sm  rounded-2xl ${openIdx === idx ? "bg-white" : "bg-white"
                                }`}
                        >
                            {isArabic ? faq.question_ar : faq.question_en}
                            <span className="ml-4 text-xl inline-flex items-center justify-center bg-[#EDF6F3] p-4 rounded-full w-8 h-8">
                                {openIdx === idx ? (
                                    <motion.span
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 180 }}
                                        transition={{ duration: 0.2 }}
                                        className="font-bold text-gray-400"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.2166 13.6582L7.3166 18.5582C7.13327 18.7416 6.89993 18.8332 6.6166 18.8332C6.33327 18.8332 6.09993 18.7416 5.9166 18.5582C5.73327 18.3749 5.6416 18.1416 5.6416 17.8582C5.6416 17.5749 5.73327 17.3416 5.9166 17.1582L10.8166 12.2582L5.9166 7.35823C5.73327 7.17489 5.6416 6.94156 5.6416 6.65823C5.6416 6.37489 5.73327 6.14156 5.9166 5.95823C6.09993 5.77489 6.33327 5.68323 6.6166 5.68323C6.89993 5.68323 7.13327 5.77489 7.3166 5.95823L12.2166 10.8582L17.1166 5.95823C17.2999 5.77489 17.5333 5.68323 17.8166 5.68323C18.0999 5.68323 18.3333 5.77489 18.5166 5.95823C18.6999 6.14156 18.7916 6.37489 18.7916 6.65823C18.7916 6.94156 18.6999 7.17489 18.5166 7.35823L13.6166 12.2582L18.5166 17.1582C18.6999 17.3416 18.7916 17.5749 18.7916 17.8582C18.7916 18.1416 18.6999 18.3749 18.5166 18.5582C18.3333 18.7416 18.0999 18.8332 17.8166 18.8332C17.5333 18.8332 17.2999 18.7416 17.1166 18.5582L12.2166 13.6582Z" fill="black" />
                                        </svg>

                                    </motion.span>
                                ) : (
                                    <motion.span
                                        initial={{ scale: 0.7 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className="font-bold text-green-700"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.22685 10.3015L1.2972 10.3015C1.03793 10.3015 0.808118 10.2013 0.607771 10.0009C0.407425 9.8006 0.307252 9.57079 0.307252 9.31151C0.307252 9.05224 0.407425 8.82243 0.607772 8.62209C0.808119 8.42174 1.03793 8.32157 1.2972 8.32157L8.22685 8.32157L8.22685 1.39192C8.22685 1.13265 8.32702 0.902837 8.52737 0.702491C8.72771 0.502144 8.95752 0.40197 9.2168 0.40197C9.47607 0.40197 9.70588 0.502144 9.90623 0.702491C10.1066 0.902837 10.2067 1.13265 10.2067 1.39192L10.2067 8.32157L17.1364 8.32157C17.3957 8.32157 17.6255 8.42174 17.8258 8.62209C18.0262 8.82243 18.1263 9.05224 18.1263 9.31151C18.1263 9.57079 18.0262 9.8006 17.8258 10.0009C17.6255 10.2013 17.3957 10.3015 17.1364 10.3015L10.2067 10.3015V17.2311C10.2067 17.4904 10.1066 17.7202 9.90623 17.9205C9.70588 18.1209 9.47607 18.2211 9.2168 18.2211C8.95752 18.2211 8.72771 18.1209 8.52737 17.9205C8.32702 17.7202 8.22685 17.4904 8.22685 17.2311V10.3015Z" fill="black" />
                                        </svg>

                                    </motion.span>
                                )}
                            </span>
                        </button>
                        {/* Collapsible answer */}
                        <AnimatePresence initial={false}>
                            {openIdx === idx && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ type: "tween", duration: 0.4 }}
                                    className="px-7"
                                >
                                    {isArabic ? faq.answer_ar : faq.answer_en}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
