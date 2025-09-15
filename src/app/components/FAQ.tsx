"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question_en: "What is the legal status of CP AGENCIES?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          CP AGENCIES is a registered company operating under applicable Saudi Arabian commercial laws, fully licensed for business in the machine tool industry.
        </p>
      </div>
    ),
  },
  {
    question_en: "Is CP AGENCIES officially registered?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, CP AGENCIES is officially registered with Saudi Ministry of Commerce and complies with regulatory requirements for commercial agencies.
        </p>
      </div>
    ),
  },
  {
    question_en: "Are there formal agreements governing shareholder roles?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-4 text-gray-700 text-sm">
          Yes, formal documents clearly define shareholder rights, profit distribution, voting, transfer rules, and liabilities.
        </p>
      </div>
    ),
  },
  {
    question_en: "Who audits CP AGENCIES legally and financially?",
    answer_en: (
      <div className="pt-7">
        <div className="flex gap-2">
          <p className="text-[var(--foreground)] font-medium">Legal: </p>
          <p>
            A licensed legal advisor ensures full compliance with Saudi regulations.
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-[var(--foreground)] font-medium">Financial: </p>
          <p>
            Certified accountants registered in Saudi Arabia audit and approve financial statements.
          </p>
        </div>
      </div>
    ),
  },
  {
    question_en: "How are returns calculated for investors?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Returns are calculated as a percentage of invested capital, paid quarterly, and secured by contracts ensuring consistent payouts.
        </p>
      </div>
    ),
  },
  {
    question_en: "What are the main sources of income?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-4 text-gray-700 text-md font-medium">
          Income sources include:
        </p>
        <div className="mt-2">
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
            <li>Rental revenue</li>
            <li>Lease-to-own arrangements</li>
            <li>Usufruct rights on properties</li>
          </ul>
          <p className="mt-4 text-gray-700 text-sm">
            Each opportunity is thoroughly vetted by our investment committee.
          </p>
        </div>
      </div>
    ),
  },
  {
    question_en: "Have you conducted similar projects before?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, our prior projects followed this investment model, delivering transparent and reliable returns.
        </p>
      </div>
    ),
  },
  {
    question_en: "When are investor returns paid out?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Returns begin three months after investment activation and are paid quarterly directly to investor accounts.
        </p>
      </div>
    ),
  },
  {
    question_en: "Is early investor exit possible? What are the terms?",
    answer_en: (
      <div className="pt-7 flex flex-col gap-4">
        <div>
          <p className="mb-2 text-gray-700 text-md font-medium">
            Yes, early exit is allowed if:
          </p>
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
            <li>Investor provides an approved replacement buyer</li>
            <li>Management approves the transfer agreement</li>
          </ul>
        </div>
        <div>
          <p className="mb-2 text-gray-700 text-md font-medium">
            Related costs:
          </p>
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
            <li>No penalties; returns calculated up to sale date</li>
            <li>Administrative documentation fees apply</li>
          </ul>
        </div>
        <div>
          <p className="mb-2 text-gray-700 text-md font-medium">
            Full exit at term end:
          </p>
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
            <li>Pre-agreed structured exit and capital return in place</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question_en: "What types of projects does CP AGENCIES invest in? Where?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Our focus is on income-generating real estate and projects in prime Saudi locations, selected based on ROI analyses.
        </p>
      </div>
    ),
  },
  {
    question_en: "What is the risk profile of these investments?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Investments are low-risk, designed with a balanced approach for security and attractive returns.
        </p>
      </div>
    ),
  },
  {
    question_en: "How are projects financed?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Financing is through investor capital, with possible participation from associated real estate developers.
        </p>
      </div>
    ),
  },
  {
    question_en: "What is the contingency plan for project failure?",
    answer_en: (
      <div className="pt-7 flex flex-col gap-4">
        <div>
          <p className="mb-2 text-gray-700 text-md font-medium">
            Our risk management plan includes:
          </p>
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
            <li>Contractual risk transfer to tenants</li>
            <li>Asset guarantees securing financing</li>
            <li>Capital protection and consistent return measures</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question_en: "Who manages CP AGENCIES and what expertise do they bring?",
    answer_en: (
      <div className="pt-7 flex flex-col gap-4">
        <div>
          <p className="mb-2 text-gray-700 text-md font-medium">
            Our management team includes experts with deep knowledge in:
          </p>
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
            <li>Board of Directors & Executive leadership</li>
            <li>Real estate development</li>
            <li>Finance and legal compliance</li>
            <li>Operations and marketing</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question_en: "Is there an independent board for major decisions?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, the board comprises founding members, investors’ representatives, and independent experts. Major decisions are made by majority vote in line with founding documents.
        </p>
      </div>
    ),
  },
  {
    question_en: "Can shareholders vote and monitor performance?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, shareholders vote proportionally and receive quarterly reports on financial and operational performance.
        </p>
      </div>
    ),
  },
  {
    question_en: "How are investors kept informed?",
    answer_en: (
      <div className="pt-7 flex flex-col gap-4">
        <div>
          <p className="mb-2 text-gray-700 text-md font-medium">Communication channels include:</p>
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
            <li>Dedicated investor email</li>
            <li>Online investor dashboard</li>
            <li>Direct support line</li>
          </ul>
        </div>
        <div>
          <p className="mb-2 text-gray-700 text-md font-medium">Reports provided:</p>
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
            <li>Quarterly financial & operational reports</li>
            <li>Annual summary reports</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question_en: "What protections secure investors’ rights?",
    answer_en: (
      <div className="pt-7">
        <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
          <li>Legally binding contracts including Articles of Association and Shareholders’ Agreement</li>
          <li>Pre-funded returns</li>
          <li>Real estate assets as collateral</li>
          <li>Structured exit strategies</li>
          <li>Governance and legal oversight</li>
        </ul>
      </div>
    ),
  },
  {
    question_en: "What happens when the investment term ends?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Contractual relationship ends, capital is returned, and investors may get priority in new opportunities.
        </p>
      </div>
    ),
  },
  {
    question_en: "Can investors increase shares or transfer them?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, shares can be increased during offering, and transfers follow early exit rules for flexible ownership changes.
        </p>
      </div>
    ),
  },
  {
    question_en: "Are returns paid directly to investors?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, returns are deposited quarterly to registered investor bank accounts.
        </p>
      </div>
    ),
  },
  {
    question_en: "What if rental income is not realized?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Agreements with tenants guarantee consistent returns, backed by real estate collateral.
        </p>
      </div>
    ),
  },
  {
    question_en: "Can investors review contracts before investing?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, all investment documents are available for review prior to participation.
        </p>
      </div>
    ),
  },
  {
    question_en: "Is the investment open to all nationalities?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, subject to Saudi regulatory approval.
        </p>
      </div>
    ),
  },
  {
    question_en: "Will I be a shareholder or just a funder?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Investors become shareholders with documented rights to dividends, voting (if applicable), exit, and access to reports.
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
        <h2 className="text-3xl lg:text-5xl font-medium mb-8 max-w-6xl">
          Frequently Asked Questions
        </h2>
        <p className="leading-relaxed max-w-[600px] text-gray-600 mx-auto">
          Our experienced team ensures customer satisfaction through innovation and reliability.
          </p>
      </div>
      <div className="w-full space-y-5">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-3xl overflow-hidden bg-white duration-200 border border-transparent lg:py-6 py-4`}
          >
            {/* Question row */}
            <button
              onClick={() => toggle(idx)}
              aria-expanded={openIdx === idx}
              className={`flex items-center cursor-pointer justify-between w-full px-4 lg:px-8 font-medium  lg:text-[1.08rem] text-md rounded-2xl bg-white`}
            >
              {faq.question_en}
              <span className="text-xl inline-flex items-center justify-center bg-[#EDF6F3] p-4 rounded-full w-8 h-8">
                {openIdx === idx ? (
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.2 }}
                    className="font-bold text-gray-400"
                  >
                    {/* Up arrow SVG */}
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
                    {/* Down arrow SVG */}
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
                  className="px-7 lg:px-8 max-w-[95%]"
                >
                  {faq.answer_en}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
