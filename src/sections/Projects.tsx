"use client";
import { useState } from "react";
import puskesmas from "@/assets/images/puskesmas.png";
import luaran from "@/assets/images/luaran.png";
import snayzzy from "@/assets/images/snayzzy-style.png";
import flower from "@/assets/images/project.png";
import agrovision from "@/assets/images/agroVision.png";
import caffesaApp from "@/assets/images/cafffesa.png";
import debthelper from "@/assets/images/debt-helper.png";
import meatMingle from "@/assets/images/meatMingle.png";
import websiteArsip from "@/assets/images/website-arsip.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import Dart from "@/assets/icons/dart.svg";
import Flutter from "@/assets/icons/flutter.svg";
import Firebase from "@/assets/icons/firebase.svg";
import Figma from "@/assets/icons/Figma1.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Laravel from "@/assets/icons/laravel.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Php from "@/assets/icons/php.svg";
import FlutterRiverpod from "@/assets/icons/flutter-riverpod.svg";
import Kotlin from "@/assets/icons/kotlin.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

/* =======================
   PROJECT DATA
========================== */

const portfolioUIUXProjects = [
  {
    company: "Anisya Hamidah",
    year: "2025",
    title: "Caffena - Caffesa App",
    results: [
      { title: "Brew. Sip. Enjoy." },
      { title: "Discover New Coffee Taste" },
      { title: "Your Daily Coffee Companion" },
    ],
    link: "https://www.figma.com/design/QuLrbGVOvHhKwwMFoa8zFj/Untitled?node-id=23-201&t=DHZWYixbUJNi2NYi-1",
    image: caffesaApp,
    tech: [Figma],
  },
  {
    company: "Anisya Hamidah",
    year: "2025",
    title: "Snayzzy style App",
    results: [
      { title: "Brew. Sip. Enjoy." },
      { title: "Discover New Coffee Taste" },
      { title: "Your Daily Coffee Companion" },
    ],
    link: "https://www.figma.com/design/QuLrbGVOvHhKwwMFoa8zFj/Untitled?node-id=23-201&t=DHZWYixbUJNi2NYi-1",
    image: snayzzy,
    tech: [Figma],
  },
  {
    company: "Anisya Hamidah",
    year: "2024",
    title: "Agro-Vision - Agro App",
    results: [
      { title: "Create Recipes with Video or Photos" },
      { title: "Search and Discover Recipes" },
      { title: "Explore Popular Categories" },
    ],
    link: "https://www.figma.com/design/UQwGcsulT3KU8t8u6JIhEi/AgroVision?node-id=5-2&t=7OmWzmc4jiUoQNW8-1",
    image: agrovision,
    tech: [Figma],
  },
  {
    company: "Anisya Hamidah",
    year: "2024",
    title: "Debt Helper App",
    results: [
      { title: "Create Recipes with Video or Photos" },
      { title: "Search and Discover Recipes" },
      { title: "Explore Popular Categories" },
    ],
    link: "https://www.figma.com/design/anfqd8Uhej73H75BjXfawH/Debt-Helper?node-id=33-2161&t=tBRkyncm0kwktU5Q-1",
    image: debthelper,
    tech: [Figma],
  },
  {
    company: "Anisya Hamidah",
    year: "2024",
    title: "Meat Mingle App",
    results: [
      { title: "Create Recipes with Video or Photos" },
      { title: "Search and Discover Recipes" },
      { title: "Explore Popular Categories" },
    ],
    link: "https://www.figma.com/design/EsCHM6B8WxxnP0JEocsmto/MeatMingle?node-id=61-134&t=yIQ3loOhVKcwDoQC-1",
    image: meatMingle,
    tech: [Figma],
  },
  {
    company: "Anisya Hamidah",
    year: "2024",
    title: "Website Pengarsipan Surat",
    results: [
      { title: "Create Recipes with Video or Photos" },
      { title: "Search and Discover Recipes" },
      { title: "Explore Popular Categories" },
    ],
    link: "https://www.figma.com/design/BrXOznIK9wN8MgWGw4TsGH/Project-Akhir-Magang?node-id=8-6&t=Gzy1YiL2VVwqAB1L-1",
    image: websiteArsip,
    tech: [Figma],
  },
];

const portfolioMobileProjects = [
  {
    company: "Anisya Hamidah",
    year: "2025",
    title: "Snayzzy style App",
    results: [
      { title: "Movie Selection and Ticket Purchase" },
      { title: "Top-Up Balance for Seamless Payments" },
      { title: "Purchase History with Detailed Ticket Information" },
    ],
    link: "https://github.com/AnisyaHamidah/tailor-project.git",
    image: snayzzy,
    tech: [Dart, Flutter,FlutterRiverpod],
  },
  {
    company: "Anisya Hamidah",
    year: "2025",
    title: "Project Akhir Flutter",
    results: [
      { title: "Movie Selection and Ticket Purchase" },
      { title: "Top-Up Balance for Seamless Payments" },
      { title: "Purchase History with Detailed Ticket Information" },
    ],
    link: "https://github.com/AnisyaHamidah/project-akhir-flower.git",
    image: flower,
    tech: [Dart, Flutter],
  },
];

const portfolioAndroidProjects = [
  {
    company: "Anisya Hamidah",
    year: "2024",
    title: "Agro-Vision - Agro App",
    results: [
      { title: "Create Recipes with Video or Photos" },
      { title: "Search and Discover Recipes" },
      { title: "Explore Popular Categories" },
    ],
    link: "https://github.com/AnisyaHamidah/agro-vision-main.git",
    image: agrovision,
    tech: [Kotlin, Firebase],
  },
];

const portfolioWebsiteProjects = [
  {
    company: "Puskesmas Kalijaga",
    year: "2023",
    title: "Registration Platform-Puskesmas kalijaga",
    results: [
      { title: "Influencer Product Requests for Reviews" },
      { title: "Brand Campaign Contracts with Influencers" },
      { title: "Two-Way Brand-Influencer Collaboration" },
      { title: "Streamlined Contract Management" },
    ],
    link: "https://github.com/AnisyaHamidah/puskesmas-website.git",
    image: puskesmas,
    tech: [Php, Laravel, Javascript, Bootstrap, Mysql],
  },
  {
    company: "Luaran Akademik Universitas Catur Insan Cendekia",
    year: "2025",
    title: "Platform for Student Academic Work Outputs",
    results: [
      { title: "Influencer Product Requests for Reviews" },
      { title: "Brand Campaign Contracts with Influencers" },
      { title: "Two-Way Brand-Influencer Collaboration" },
      { title: "Streamlined Contract Management" },
    ],
    link: "https://www.findfluence.adslink.id/",
    image: luaran,
    tech: [Php, Laravel, Javascript, Bootstrap, Mysql],
  },
];

/* =======================
   MAIN COMPONENT
========================== */

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("UI/UX");

  const getProjects = () => {
    if (activeTab === "UI/UX") return portfolioUIUXProjects;
    if (activeTab === "mobile") return portfolioMobileProjects;
    if (activeTab === "android") return portfolioAndroidProjects;
    if (activeTab === "website") return portfolioWebsiteProjects;
  };

  return (
    <section
      className="pb-16 py-32 lg:py-24 sm:py-32 bg-[#F29AAE]"
      id="project-section"
    >
      <div className="container">
        <SectionHeader
          eyebrow={
            <span
              className="
                text-4xl md:text-5xl lg:text-5xl
                font-extrabold 
                text-white
                tracking-widest uppercase
                [text-shadow:0_2px_6px_rgba(0,0,0,0.25)]
                drop-shadow-sm
              "
            >
              My Portfolio
            </span>
          }
          title={<span className="text-rose-900">Project Showcase</span>}
          description={<span style={{ color: 'white' }}>A look at the projects I’ve brought to life.</span>}
        />


        {/* TABS */}
        <div className="flex flex-row gap-2 md:gap-10 justify-center mt-6 md:mt-10">
          {["UI/UX", "mobile", "android", "website"].map((tab) => (
            <button
              key={tab}
              className={`h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold transition
        ${activeTab === tab
                  ? "bg-gradient-to-r from-white via-white to-rose-400 text-rose-900 shadow-lg" // gradasi dominan putih
                  : "bg-white/20 text-white hover:bg-white/40 hover:text-rose-700" // tab belum aktif
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "UI/UX"
                ? "UI/UX"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>


        {/* PROJECT LIST */}
        <div className="mt-8 md:mt-10 flex flex-col gap-20">
          {getProjects()?.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky bg-rose-50 shadow-lg border border-rose-300/40 rounded-2xl"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              {/* COMPANY + YEAR */}
              <div className="bg-gradient-to-r from-rose-300 to-pink-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl text-rose-700">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-rose-300/30 mt-4 md:mt-5" />

                  {/* FEATURES */}
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-rose-700/70"
                      >
                        <CheckIcon className="size-5 md:size-6 text-rose-500" />
                        <span className="whitespace-pre-line">
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* TECH STACK */}
                  <ul className="flex flex-row gap-2 mt-3 md:mt-3">
                    {project.tech.map((TechIcon, index) => (
                      <li key={index}>
                        <TechIcon className="w-6 h-6" alt="Tech Icon" />
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON */}
                  <a href={project.link}>
                    <button className="bg-rose-500 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-rose-600 transition">
                      <span>Visit Live Site</span>
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                {/* IMAGE */}
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 w-full max-w-none lg:w-[250px] lg:scale-125 lg:-translate-y-10 lg:translate-x-8 drop-shadow-2xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
