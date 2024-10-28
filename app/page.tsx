"use client"
import Footer from "@/components/Footer";
import PcCard from "@/components/pcCard";
import PricingSection from "@/components/Pricing";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <>
    <div className="relative h-[65vh] md:h-[65vh]  flex flex-col w-full size-full items-center justify-center overflow-hidden   bg-background p-4 md:p-20 ">
      <BlurFade delay={0.10} duration={0.8}>
      <div className="z-10 flex flex-col md:gap-5 gap-3 md:w-[70%] w-full  mx-auto items-center">

      <div className="dark:bg-zinc-800 mx-auto bg-zinc-300 hover:dark:bg-zinc-700 transition ease-in cursor-pointer rounded-2xl ">
      <AnimatedShinyText className=" inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Aibytes</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>

            </div>

            <div className="md:font-semibold font-medium tracking-tighter  md:text-7xl sm:text-4xl text-4xl text-center">
          Automate your workflow with sleek ai integrations.
        </div>
        <div className="text-center md:w-[60%] mx-auto md:text-sm text-[12px] tracking-tighter  font-medium">
        Transform your products and websites with AI-powered automation, personalization, and seamless integration tailored to your goals.
        </div>

        <div className="mt-4">
          <Button>Contact us now <ArrowRightIcon className="ml-2 "/></Button>
        </div>

      </div>
        </BlurFade>


     

    <GridPattern
      width={30}
      height={30}
      x={-1}
      y={-1}
      strokeDasharray={"4 2"}
      className={cn(
        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
      )}
    />
  </div>
   <PcCard/>
   <PricingSection/>
   <Footer/>
   </>
  );
}
