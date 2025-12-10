"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import CSS3 from "@/assets/icons/css3.svg";
import Dart from "@/assets/icons/dart.svg";
import Firebase from "@/assets/icons/firebase.svg";
import Flutter from "@/assets/icons/flutter.svg";
import Github from "@/assets/icons/github.svg";
import GoogleMaps from "@/assets/icons/google-maps.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Laravel from "@/assets/icons/laravel.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Php from "@/assets/icons/php.svg";
import FlutterBloc from "@/assets/icons/bloc.svg";
import FlutterRiverpod from "@/assets/icons/flutter-riverpod.svg";
import Kotlin from "@/assets/icons/kotlin.svg";
import React from "@/assets/icons/react.svg";
import mapImage from "@/assets/images/map.png";
import myPhoto from "@/assets/images/Anisya-hamidah.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Dart",
    iconType: Dart,
  },
  {
    title: "Flutter",
    iconType: Flutter,
  },
  {
    title: "Flutter Bloc",
    iconType: FlutterBloc,
  },
  {
    title: "Flutter Riverpod",
    iconType: FlutterRiverpod,
  },
  {
    title: "Github",
    iconType: Github,
  },
  {
    title: "Bootstrap",
    iconType: Bootstrap,
  },
  {
    title: "CSS3",
    iconType: CSS3,
  },
  {
    title: "PHP",
    iconType: Php,
  },
  {
    title: "Laravel",
    iconType: Laravel,
  },
  {
    title: "Firebase",
    iconType: Firebase,
  },
  {
    title: "Google Maps",
    iconType: GoogleMaps,
  },
  {
    title: "Javascript",
    iconType: Javascript,
  },
  {
    title: "Kotlin",
    iconType: Kotlin,
  },
  {
    title: "MySQL",
    iconType: Mysql,
  },
  {
    title: "React",
    iconType: React,
  },
];

const hobbies = [
  {
    title: "Travel",
    emoji: "🌍",
    left: "5%",
    top: "5%",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "35%",
    top: "40%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "60%",
    top: "45%",
  },
  {
    title: "Sleeping",
    emoji: "💤",
    left: "5%",
    top: "65%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28 bg-[#F29AAE]" id="about-section">
      <div className="container">
        <SectionHeader
          eyebrow={
            <span
              className="
              text-4xl md:text-5xl lg:text-5xl
              font-extrabold
              text-white
              tracking-widest uppercase
              [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]
            "
            >
              About Me
            </span>
          }
          title={<span className="text-rose-900">A Glimpse Into My World</span>}
          description={
            <span style={{ color: 'white' }}>
              Im a mobile developer with a passion for building beautiful and intuitive user interfaces. I specialize in Flutter and Kotlin
            </span>
          }
        />


        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card
              className="
              md:col-span-2 lg:col-span-1 
              rounded-3xl bg-white/95 border border-pink-200/60
              shadow-xl hover:shadow-2xl transition-all duration-300
              p-7 relative overflow-hidden 
              h-[380px]
              w-full
            "
            >

              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/70 to-rose-100/50 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">

                {/* Header */}
                <div className="mb-3">
                  <h3 className="text-3xl font-extrabold text-pink-900 flex items-center gap-3">
                    🌸 Personal Info
                  </h3>
                  <p className="text-pink-500 text-sm">Informasi singkat tentang saya.</p>
                </div>

                {/* Scrollable */}
                <div className="mt-2 space-y-4 overflow-y-auto pr-3 custom-scroll flex-1">
                  {[
                    ["👤", "Nama", "Anisya Hamidah"],
                    ["🎂", "Tanggal Lahir", "17 Agustus"],
                    ["📍", "Domisili", "Cirebon"],
                    ["🎓", "Pendidikan", "S1 Teknik Informatika"],
                    ["✉️", "Email", "anisyahamidah08@gmail.com"],
                    ["❤️", "Status", "Belum Menikah:')"],
                    ["💼", "Skill", "UI-UX, Frontend development, web development"],
                    ["📚", "Hobi", "Membaca, Traveling, Design UI"],
                  ].map(([icon, label, value]) => (
                    <div
                      key={label}
                      className="
            flex items-center 
            gap-6                     /* jarak lebih jauh */
            bg-pink-50/70 backdrop-blur-md 
            px-4 py-2.5 rounded-xl border border-pink-100
            shadow-sm
          "
                    >
                      {/* Label */}
                      <span className="text-pink-600 font-medium flex items-center gap-2 text-sm">
                        <span>{icon}</span> {label}
                      </span>

                      {/* Value — otomatis nempel kanan */}
                      <span className="
            text-pink-900 font-semibold text-sm 
            ml-auto text-right
            max-w-[150px]
          ">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </Card>



            <Card
              className="h-[320px] md:col-span-3 lg:col-span-2 
              rounded-3xl border border-rose-200 bg-white 
              shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
              hover:bg-white transition"
            >
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="[&>div>h3]:text-pink-900 [&>p]:text-pink-400"
              />
              <ToolboxItem
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:45s] text-pink-500"
              />
              <ToolboxItem
                items={toolboxItems}
                className="mt-6 text-pink-500"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card
              className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 
              rounded-3xl border border-rose-200 bg-white
              shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
              hover:bg-white transition"
            >
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 pt-6 [&>div>h3]:text-pink-900 [&>p]:text-pink-400"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 
                    bg-gradient-to-r from-pink-300 to-rose-400 
                    text-gray-900 rounded-full py-1.5 absolute shadow-sm"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card
              className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 
              rounded-3xl border border-rose-200 bg-white
              shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
              overflow-hidden transition"
            >
              <Image
                src={mapImage}
                alt="Map Image"
                className="h-full w-full object-cover object-left-top opacity-80"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
                <div className="absolute inset-0 rounded-full 
                bg-gradient-to-r from-pink-300 to-rose-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full 
                bg-gradient-to-r from-pink-300 to-rose-400 -z-10"></div>
                <Image
                  src={myPhoto}
                  alt="My Photo"
                  className="size-20 rounded-full p-2"
                />
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};
