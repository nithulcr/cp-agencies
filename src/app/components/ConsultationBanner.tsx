"use client";

import AnimatedButton from "./AnimatedButton";


export default function ConsultationBanner() {
    return (
        <section className=" w-full max-w-[1400px] px-6 mx-auto ">
            <div className="bg-[var(--green2)] rounded-3xl w-full max-w-[1400px] mx-auto grid gap-8  lg:grid-cols-2 p-8 lg:py-16 lg:px-12  my-8 text-white">
                <div className="flex-1 text-left content-center">
                    <h3 className="font-medium text-xl md:text-2xl text-center lg:text-left">
                        Get in touch with us to discover the right solutions for your machining needs.
                    </h3>
                </div>
                <div className="grid  md:grid-cols-2 gap-8">
                    <div className="flex items-center gap-3 justify-center">
                        <svg width="50" height="50" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.9332 45.6849C15.9294 39.6695 11.3123 32.4152 8.40475 24.4292C6.80513 20.063 8.27075 15.2669 11.5593 11.9784L13.5945 9.94602C14.1416 9.39779 14.7915 8.96284 15.5069 8.66607C16.2223 8.36931 16.9893 8.21655 17.7638 8.21655C18.5384 8.21655 19.3053 8.36931 20.0207 8.66607C20.7362 8.96284 21.386 9.39779 21.9332 9.94602L26.6985 14.7114C27.2468 15.2585 27.6817 15.9084 27.9785 16.6238C28.2753 17.3393 28.428 18.1062 28.428 18.8807C28.428 19.6553 28.2753 20.4222 27.9785 21.1377C27.6817 21.8531 27.2468 22.503 26.6985 23.0501L25.526 24.2226C25.0567 24.6918 24.6844 25.2489 24.4304 25.862C24.1764 26.4751 24.0457 27.1323 24.0457 27.7959C24.0457 28.4596 24.1764 29.1167 24.4304 29.7299C24.6844 30.343 25.0567 30.9 25.526 31.3693L36.246 42.0921C36.7153 42.5614 37.2723 42.9337 37.8855 43.1877C38.4986 43.4417 39.1557 43.5724 39.8194 43.5724C40.483 43.5724 41.1402 43.4417 41.7533 43.1877C42.3664 42.9337 42.9235 42.5614 43.3927 42.0921L44.568 40.9196C45.1151 40.3713 45.765 39.9364 46.4805 39.6396C47.1959 39.3428 47.9628 39.1901 48.7374 39.1901C49.5119 39.1901 50.2788 39.3428 50.9943 39.6396C51.7097 39.9364 52.3596 40.3713 52.9067 40.9196L57.6721 45.6849C58.2203 46.2321 58.6553 46.8819 58.952 47.5974C59.2488 48.3128 59.4016 49.0797 59.4016 49.8543C59.4016 50.6288 59.2488 51.3958 58.952 52.1112C58.6553 52.8266 58.2203 53.4765 57.6721 54.0236L55.6398 56.056C52.3512 59.3474 47.5551 60.813 43.1889 59.2134C35.2029 56.3058 27.9486 51.6887 21.9332 45.6849Z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
                        </svg>

                        <div>
                            <div className="text-xs text-gray-200">Call For More Info</div>
                            <div className="font-semibold text-lg lg:text-xl mt-2 tracking-wide" >
                                +91-9849018828
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center flex">
                        <AnimatedButton href="/ContactUs" label="Contact Us" className="w-fit transparent-btn transparent-btn4" />

                    </div>
                </div>
            </div>

        </section>
    );
}
