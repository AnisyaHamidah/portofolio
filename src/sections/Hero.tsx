"use client";
import myPhoto from "@/assets/images/Anisya-hamidah.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-56 relative z-0 overflow-x-clip bg-rose-200"
      id="hero-section"
    >
      {/* Clean Orbit Area (No Grain) */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

        {/* Orbit Rings */}
        <div className="size-[620px] hero-ring border-rose-400/30"></div>
        <div className="size-[820px] hero-ring border-rose-400/20"></div>
        <div className="size-[1020px] hero-ring border-rose-400/10"></div>
        <div className="size-[1220px] hero-ring border-rose-300/10"></div>

        {/* Orbiting Stars & Sparkles */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-rose-400/50 drop-shadow" />
        </HeroOrbit>

        <HeroOrbit
          size={460}
          rotation={75}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="4s"
        >
          <StarIcon className="size-6 text-rose-500/50 drop-shadow" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-35}
          shouldOrbit
          orbitDuration="38s"
        >
          <div className="size-2 rounded-full bg-rose-500/50 drop-shadow" />
        </HeroOrbit>

        <HeroOrbit
          size={560}
          rotation={160}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-rose-400/50 drop-shadow" />
        </HeroOrbit>

        <HeroOrbit
          size={620}
          rotation={22}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-14 text-rose-500 drop-shadow-lg" />
        </HeroOrbit>

        <HeroOrbit
          size={700}
          rotation={100}
          shouldOrbit
          orbitDuration="50s"
        >
          <div className="size-3 rounded-full bg-rose-400/40 drop-shadow" />
        </HeroOrbit>

        <HeroOrbit
          size={770}
          rotation={-70}
          shouldOrbit
          orbitDuration="55s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-24 text-rose-500 drop-shadow-xl" />
        </HeroOrbit>
      </div>

      {/* Profile */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={myPhoto}
            className="size-[200px] rounded-full mb-4 object-cover shadow-xl shadow-rose-300/50 border-4 border-white"
            alt="Profile"
          />

          {/* Availability Badge */}
          <div className="bg-white/70 backdrop-blur-md border border-rose-300 px-4 py-1.5 inline-flex items-center gap-3 rounded-full shadow-md">
            <div className="bg-rose-500 size-2.5 rounded-full relative">
              <div className="bg-rose-400 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium text-gray-700">
              Available for new projects
            </div>
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="max-w-lg mx-auto mt-8">
        <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide text-gray-900 drop-shadow-sm">
          Crafting Beautiful & Intuitive Digital Experiences
        </h1>

        <p className="mt-4 text-center text-gray-700 md:text-lg leading-relaxed">
          I create clean, user-centered designs and build smooth, fast front-end
          experiences. Let’s bring your ideas to life with meaningful, modern,
          and elegant interfaces.
        </p>
      </div>

      {/* Buttons */}
      <div className="absolute w-full flex flex-col md:flex-row justify-center items-center mt-10 gap-4 z-1">
        <button
          className="inline-flex items-center gap-2 border border-rose-400/40 px-6 h-12 rounded-xl bg-white/60 backdrop-blur-md shadow-md hover:bg-white/80 transition"
          onClick={() => {
            const projectSection = document.getElementById("project-section");
            if (projectSection) {
              projectSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="font-semibold text-gray-900">
            Explore My Projects
          </span>
          <ArrowDown className="size-4 text-gray-900" />
        </button>

        <a
          href="https://www.linkedin.com/in/anisyahamidah/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-rose-500 text-white h-12 px-6 rounded-xl shadow-md hover:bg-rose-600 transition"
        >
          <span>🖐🏻</span>
          <span className="font-semibold">Let&apos;s Connect</span>
        </a>
      </div>
    </div>
  );
};
