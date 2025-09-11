"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question_en: "What is the legal status of the company? Is it licensed?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          The company is a Simplified Joint-Stock Company, licensed by the Saudi Ministry of Commerce. Investors gain ownership rights through officially documented shares, and all company activities comply with the applicable laws and regulations.
        </p>
      </div>
    ),
  },
  {
    question_en: "Is the company officially registered as a Simplified Joint-Stock Company?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, the company is officially registered under Saudi Companies Law. Investment shares are issued legally with clear ownership percentages and guaranteed returns documented in the Articles of Association.
        </p>
      </div>
    ),
  },
  {
    question_en: "Are There Internal Regulations Or A Founding Agreement For Shareholders?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-4 text-gray-700 text-sm">
          Yes, a legally documented agreement clearly defines:
        </p>
        <div className="mt-2">
          <span className="my-4 block">Yes, A Legally Documented Agreement Clearly Defines:</span>
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
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
  },
  {
    question_en: "Who audits the company legally and financially?",
    answer_en: (
      <div className="pt-7">
        <div className="flex gap-2">
          <p className="text-[var(--foreground)] font-medium">Legal: </p>
          <p>
            A licensed legal advisor reviews all contracts and ensures compliance with the Ministry of Commerce.
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-[var(--foreground)] font-medium"> Financial: </p>
          <p>
            A certified accountant registered with the Saudi Organization for Certified Public Accountants reviews all financial statements, ensuring transparency and accurate reporting.
          </p>
        </div>
      </div>
    ),
  },
  {
    question_en: "How is the annual return calculated, and is it guaranteed?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Annual returns are calculated as a percentage of the invested amount and distributed quarterly. Returns are guaranteed and pre-funded through binding agreements with tenants benefiting from the property, ensuring consistent payouts.
        </p>
      </div>
    ),
  },
  {
    question_en: "What are the sources of returns?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-4 text-gray-700 text-md font-medium">
          Returns come from:
        </p>
        <div className="mt-2">
          <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
            <li>Rental income  </li>
            <li>Lease-to-own agreements</li>
            <li>Property usufruct rights</li>
          </ul>
          <p className="mt-4 text-gray-700 text-sm ">
            Other income-generating real estate opportunities, all vetted financially, legally, and technically by the investment committee.
          </p>
        </div>
      </div>
    ),
  },
  {
    question_en: "Have similar projects been implemented before?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes. Previous projects followed the same investment model, delivering consistent returns and structured exits. The model is proven, transparent, and aligns with best practices in governance, risk management, and investor protection.
        </p>
      </div>
    ),
  },
  {
    question_en: "When are returns paid?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Returns start three months after investment activation (contract signing and fund transfer) and are distributed quarterly directly to investors’ bank accounts.
        </p>
      </div>
    ),
  },
  {
    question_en: "Can investors exit early? What are the conditions and costs?",
    answer_en: (
      <div className="pt-7 flex flex-col gap-4">
        <div className="">
          <p className="mb-2 text-gray-700 text-md font-medium">
            Yes, early exit is allowed with these conditions:
          </p>
          <div className="mt-2">
            <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
              <li>Investor must provide an approved replacement buyer </li>
              <li>Sign a transfer/sale agreement with management approval </li>
            </ul>

          </div>
        </div>
        <div className="">
          <p className="mb-2 text-gray-700 text-md font-medium">
            Costs:
          </p>
          <div className="mt-2">
            <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
              <li>No penalty fees  Returns are calculated only up to the sale date</li>
              <li>Administrative fees for documentation</li>
              <li>Returns are calculated only up to the sale date</li>

            </ul>

          </div>
        </div>
        <div className="">
          <p className="mb-2 text-gray-700 text-md font-medium">
            Full exit at the end of the term:
          </p>
          <div className="mt-2">
            <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
              <li>A pre-signed agreement ensures structured exit and capital return.</li>
            </ul>

          </div>
        </div>
      </div>
    ),
  },
  {
    question_en: "What types of projects will be implemented? Where are they located?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          The company targets income-generating real estate or projects with third-party usufruct agreements in strategic locations within major Saudi cities. Project selection is based on expected ROI studies.
        </p>
      </div>
    ),
  },
  {
    question_en: "What is the risk level of these investments?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Investments are low-risk, designed to balance security with attractive returns in a controlled investment framework.
        </p>
      </div>
    ),
  },
  {
    question_en: "How are projects financed?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Projects are funded through investor contributions and may include participation from affiliated real estate development companies (up to 25% of capital).
        </p>
      </div>
    ),
  },
  {
    question_en: "What is the contingency plan in case of project failure?",
    answer_en: (
      <div className="pt-7 flex flex-col gap-4">
        <div className="">
          <p className="mb-2 text-gray-700 text-md font-medium">
            A comprehensive risk management plan is in place, including:
          </p>
          <div className="mt-2">
            <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
              <li>Pre-arranged contractual risk transfer to tenants</li>
              <li>Asset guarantees to secure financing</li>
              <li>Measures to protect capital and ensure consistent returns</li>

            </ul>

          </div>
        </div>

      </div>
    ),
  },
  {
    question_en: "Who manages the company, and what is their experience?",
    answer_en: (
      <div className="pt-7 flex flex-col gap-4">
        <div className="">
          <p className="mb-2 text-gray-700 text-md font-medium">
            Managed by a team of experts with deep experience in real estate, asset management, finance, and legal compliance, including
          </p>
          <div className="mt-2">
            <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
              <li>Board of Directors & Executive Team </li>
              <li>Real estate development professionals with successful projects</li>
              <li>Financial and legal advisors ensuring compliance</li>
              <li>Operations and marketing specialists</li>
            </ul>
          </div>
        </div>

      </div>
    ),
  },
  {
    question_en: "Is there an independent board, and how are major decisions made?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, the board includes founding members, investors’ representatives, and independent experts. Major decisions are made by majority vote within the board, in accordance with the regulations outlined in the founding documents.
        </p>
      </div>
    ),
  },
  {
    question_en: "Can shareholders participate in voting or monitor performance?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes. Shareholders on the board can vote based on ownership percentage and receive quarterly financial and operational reports for transparency and governance.
        </p>
      </div>
    ),
  },
  {
    question_en: "How are investors communicated with?",
    answer_en: (
      <div className="pt-7 flex flex-col gap-4">
        <div className="">
          <p className="mb-2 text-gray-700 text-md font-medium">
            Official channels include:
          </p>
          <div className="mt-2">
            <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
              <li>Dedicated investor email  </li>
              <li>Online investor portal/dashboard</li>
              <li>Direct support line</li>
            </ul>
          </div>
        </div>
        <div className="">
          <p className="mb-2 text-gray-700 text-md font-medium">
            Reports:
          </p>
          <div className="mt-2">
            <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
              <li>Quarterly financial & operational reports</li>
              <li>Annual summary report.</li>
            </ul>
          </div>
        </div>

      </div>
    ),
  },
  {
    question_en: "What guarantees protect investors’ rights?",
    answer_en: (
      <div className="pt-7">

        <ul className="list-disc list-inside marker:text-[var(--green2)] marker:text-2xl mt-2 text-sm space-y-1 pl-6">
          <li>Legally binding contracts (Articles of Association, Shareholders’ Agreement, and Escrow Agreement) </li>
          <li>Pre-funded returns</li>
          <li>Real estate assets as tangible collateral</li>
          <li>Structured exit options and early exit</li>
          <li>conditions Governance & legal oversight</li>
        </ul>

      </div>
    ),
  },
  {
    question_en: "What happens after the investment term ends?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          The contractual relationship ends, investors receive their capital, and they may participate in new investment opportunities with priority access.
        </p>
      </div>
    ),
  },
  {
    question_en: "Can investors increase their shares or sell to others?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, during the offering period, shares can be increased. Sale to another investor follows early exit rules, allowing flexible transfer under clear terms.
        </p>
      </div>
    ),
  },
  {
    question_en: "Are returns deposited directly to investors?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, quarterly returns are transferred directly to the investor’s registered bank account.
        </p>
      </div>
    ),
  },
  {
    question_en: "What if rental income isn’t realized?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          This is precluded by agreements with tenants. Returns remain consistent and guaranteed throughout the investment period, backed by real estate assets.
        </p>
      </div>
    ),
  },
  {
    question_en: "Can investors review contracts before investing?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, all contracts and documents are available for review before participation.
        </p>
      </div>
    ),
  },
  {
    question_en: "Is the investment open to all nationalities?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Yes, subject to Saudi regulations.
        </p>
      </div>
    ),
  },
  {
    question_en: "Will I be a shareholder or just a funder?",
    answer_en: (
      <div className="pt-7">
        <p className="mb-2 text-gray-700">
          Investors are shareholding partners with documented shares, rights to dividends, voting (if on the board), exit rights, and access to reports.
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
          <>{"Your Investment "}<br />{"Questions Answered"}</>
        </h2>
        <p className="leading-relaxed max-w-[600px] text-gray-600 mx-auto">
          {"We’ve compiled answers to the most common questions about our projects, legal structure, returns, and shareholder rights to help you make informed investment decisions with confidence."}
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
