import Link from 'next/link';

const services = [
    { href: "/services/machine-tools", label: "Machinne Tools and Automation" },
    { href: "/services/heat-treatment", label: "Heat Treatment" },
    { href: "/services/metrology", label: "Metrology" },
];

export default function ServiceTabs({ current }: { current: string }) {
    return (
        <div className="w-full">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex lg:flex-col flex-wrap gap-2 md:gap-4  md:bg-[var(--green2)] md:rounded-xl md:px-8 md:py-12">
                    <h4 className='text-3xl text-white mb-2 hidden md:block w-full border-b border-b-[#6686c2] pb-2'>Our Services</h4>
                    {services.map((service) => (
                        <Link key={service.href} href={service.href}
                            className={`px-6 text-sm md:text-[16px] py-2 md:py-3 rounded-[40px] ${service.href === current ? 'bg-[#e5ecff]   ' : 'bg-[var(--green)] text-white'}`}
                        >
                            {service.label}
                        </Link>
                    ))}
                </div>
                <Link href="https://wa.me/919849018828" className="hidden md:flex items-center justify-between gap-2 gap-4  bg-[var(--green2)] rounded-xl px-6 py-4 mt-6">
                    <h4 className='text-2xl text-white'>Lets Chat</h4>
                    <svg width="40" height="40" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1507_3592)">
                            <path d="M1.69336 25.2935C1.69219 29.5785 2.79844 33.7625 4.90195 37.4503L1.49219 50.0504L14.2328 46.6694C17.7567 48.611 21.705 49.6283 25.7172 49.6286H25.7277C38.9729 49.6286 49.7547 38.7203 49.7603 25.3127C49.7629 18.8157 47.2652 12.7064 42.7273 8.11006C38.1902 3.51413 32.1561 0.981725 25.7268 0.97876C12.4801 0.97876 1.69902 11.8864 1.69355 25.2935" fill="url(#paint0_linear_1507_3592)" />
                            <path d="M0.835449 25.2855C0.834082 29.7247 1.97998 34.0583 4.1585 37.8782L0.626465 50.93L13.8239 47.4278C17.4603 49.4344 21.5544 50.4924 25.7204 50.4939H25.7312C39.4515 50.4939 50.6206 39.1933 50.6265 25.3057C50.6288 18.5753 48.0413 12.2463 43.3413 7.48533C38.6407 2.72493 32.3907 0.1014 25.7312 0.0986328C12.0085 0.0986328 0.840918 11.3977 0.835449 25.2855ZM8.69502 37.2203L8.20225 36.4286C6.13076 33.095 5.0374 29.2428 5.03896 25.2871C5.04326 13.7439 14.3253 4.35259 25.739 4.35259C31.2663 4.35496 36.4608 6.5357 40.3679 10.4924C44.2747 14.4494 46.4245 19.7095 46.4231 25.3041C46.4181 36.8473 37.1358 46.2398 25.7312 46.2398H25.7229C22.0095 46.2378 18.3675 45.2285 15.1913 43.3211L14.4354 42.8675L6.60381 44.9456L8.69502 37.2203Z" fill="url(#paint1_linear_1507_3592)" />
                            <path d="M19.5088 14.7558C19.0428 13.7075 18.5523 13.6864 18.1092 13.668C17.7463 13.6522 17.3314 13.6533 16.917 13.6533C16.5021 13.6533 15.8281 13.8113 15.2584 14.4409C14.6881 15.0711 13.0811 16.5939 13.0811 19.6913C13.0811 22.7887 15.3102 25.7822 15.6209 26.2027C15.932 26.6224 19.9242 33.182 26.2469 35.7055C31.5016 37.8026 32.5709 37.3855 33.7113 37.2804C34.852 37.1756 37.3918 35.7579 37.91 34.2878C38.4285 32.8179 38.4285 31.5579 38.273 31.2946C38.1176 31.0323 37.7027 30.8747 37.0807 30.56C36.4586 30.2453 33.4002 28.7221 32.8301 28.5119C32.2598 28.302 31.8451 28.1972 31.4303 28.8276C31.0154 29.457 29.8242 30.8747 29.4611 31.2946C29.0984 31.7154 28.7353 31.7678 28.1135 31.4529C27.491 31.1371 25.4877 30.4731 23.1109 28.3285C21.2617 26.6597 20.0133 24.599 19.6504 23.9686C19.2875 23.3392 19.6115 22.998 19.9234 22.6843C20.2029 22.4022 20.5457 21.9491 20.857 21.5817C21.1672 21.214 21.2707 20.9517 21.4781 20.5318C21.6857 20.1116 21.5818 19.7439 21.4266 19.429C21.2707 19.1141 20.0619 16.0005 19.5088 14.7558Z" fill="white" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_1507_3592" x1="2414.9" y1="4908.15" x2="2414.9" y2="0.97876" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1FAF38" />
                                <stop offset="1" stop-color="#60D669" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1507_3592" x1="2500.63" y1="5083.24" x2="2500.63" y2="0.0986328" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F9F9F9" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <clipPath id="clip0_1507_3592">
                                <rect width="50" height="51" fill="white" transform="translate(0.626465 0.0986328)" />
                            </clipPath>
                        </defs>
                    </svg>

                </Link>
            </div>
        </div>
    );
}