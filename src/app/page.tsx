import Image from "next/image";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import WaitlistForm from "@/components/WaitlistForm";

const mono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const monoSemiBold = IBM_Plex_Mono({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const sans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="relative w-screen h-screen px-[20px] tablet:py-[50px] lg:py-[80px] flex flex-col items-center tablet:gap-[30px] lg:gap-[70px]">
      <div className="fixed inset-0 -z-10">
        <Image
          src="mobile-background.svg"
          alt="Background"
          fill
          className="object-cover tablet:hidden"
        />
        <Image
          src="desktop-background.svg"
          alt="Background"
          fill
          className="object-cover hidden tablet:inline"
        />
      </div>
      <div className="w-full flex justify-center items-center text-[20px] tablet:text-[40px] tracking-[5px] py-[20px] h-[96px]">
        <h1 className={mono.className}>PROJECT PARKER</h1>
      </div>
      <div className="flex flex-col gap-[30px] tablet:items-center lg:w-[1024px]">
        <div className="relative  flex justify-center items-center h-[55px] rounded-[10px] tablet:px-[20px] tablet:text-[20px] tablet:py-[8px]">
          <Image
            src="GrayBox.svg"
            alt="Background"
            fill
            className="object-fit -z-10"
          />
          <p className={sans.className}>Join 1000+ students in the waitlist</p>
        </div>
        <div className="py-[5px] px-[5px] tablet:px-[40px] text-center flex flex-col gap-[20px]">
          <div className="text-[20px] sm:text-[30px] tablet:text-[50px] lg:text-[40px]">
            <h1 className={monoSemiBold.className}>
              The AI study buddy you need
            </h1>
          </div>
          <div className="text-[14px]/[160%] sm:text-[16px]/[160%] tablet:text-[28px]/[160%] lg:text-[32px]/[160%] px-[0px] sm:px-[10px] md:px-[20px] tablet:px-[60px] tracking-[0.5px]">
            <p className={sans.className}>
              Parker is the AI-powered tutoring alternative that truly supports
              students. Get personalised, bespoke help with your coursework,
              exams, and learning for free
            </p>
          </div>
        </div>
        <div>
          <WaitlistForm font={mono} />
        </div>
      </div>
    </main>
  );
}
