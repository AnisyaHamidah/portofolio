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
import FacebookIcon from "@/assets/images/fb.png";
import GithubIcon from "@/assets/images/github.png";
import InstagramIcon from "@/assets/images/instagramm.png";
import LinkedInIcon from "@/assets/images/linkedIn.png";
import GoogleMaps from "@/assets/icons/google-maps.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Laravel from "@/assets/icons/laravel.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Php from "@/assets/icons/php.svg";
import FlutterBloc from "@/assets/icons/bloc.svg";
import FlutterRiverpod from "@/assets/icons/flutter-riverpod.svg";
import Kotlin from "@/assets/icons/kotlin.svg";
import ReactIcon from "@/assets/icons/react.svg";
import myPhoto from "@/assets/images/Anisya-hamidah.png";
import EmailIcon from "@/assets/images/email.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";
import { motion } from "framer-motion";
import { useRef } from "react";

/** TOOLBOX & HOBBIES (tidak diubah) */
const toolboxItems = [
  { title: "Dart", iconType: Dart },
  { title: "Flutter", iconType: Flutter },
  { title: "Flutter Bloc", iconType: FlutterBloc },
  { title: "Flutter Riverpod", iconType: FlutterRiverpod },
  { title: "Github", iconType: Github },
  { title: "Bootstrap", iconType: Bootstrap },
  { title: "CSS3", iconType: CSS3 },
  { title: "PHP", iconType: Php },
  { title: "Laravel", iconType: Laravel },
  { title: "Firebase", iconType: Firebase },
  { title: "Google Maps", iconType: GoogleMaps },
  { title: "Javascript", iconType: Javascript },
  { title: "Kotlin", iconType: Kotlin },
  { title: "MySQL", iconType: Mysql },
  { title: "React", iconType: ReactIcon }
];

  const hobbies = [
  { title: "Traveling", emoji: "🌍", left: "5%", top: "5%" },
  { title: "Watching Movies", emoji: "🎬", left: "50%", top: "5%" },
  { title: "Drawing", emoji: "🎨", left: "10%", top: "35%" },
  { title: "Listening to Music", emoji: "🎵", left: "35%", top: "40%" },
  { title: "Swimming", emoji: "🏊‍♀️", left: "60%", top: "45%" },
  { title: "Sleeping", emoji: "💤", left: "5%", top: "65%" },
  { title: "Desain UI", emoji: "🎨📱", left: "5%", top: "65%" }
];

/** Komponen Sparkle (inline SVG) */
const Sparkle = ({ size = 28, className = "", style = {}, title = "sparkle" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    className={className}
    style={style}
  >
    <title>{title}</title>
    {/* bentuk sparkle sederhana */}
    <path
      d="M12 2c.6 1.6.8 3.6 1 5 1.6.6 3.6.8 5 1 .6 1.6.8 3.6 1 5-1.6.6-3.6.8-5 1-.6 1.6-.8 3.6-1 5-1.6-.6-3.6-.8-5-1-.6-1.6-.8-3.6-1-5-1.6-.6-3.6-.8-5-1 .6-1.6.8-3.6 1-5 1.6-.6 3.6-.8 5-1 .6-1.6.8-3.6 1-5z"
      fill="#F43F5E" /* pink-ish */
      opacity="0.95"
    />
    <path
      d="M17 6l1.4 1.4L20 9l-1.6 1.6L17 12l-1.4-1.4L14 9l1.6-1.6L17 6z"
      fill="#fff"
      opacity="0.12"
    />
  </svg>
);

/** Posisi dan variasi sparkle yang bisa disesuaikan */
const sparkles = [
  { left: "15%", top: "8%", size: 44, anim: "animate-pulse", rotate: "rotate-6" },
  { left: "35%", top: "2%", size: 28, anim: "animate-ping", rotate: "" },
  { left: "55%", top: "12%", size: 36, anim: "animate-pulse", rotate: "-rotate-12" },
  { left: "75%", top: "6%", size: 24, anim: "animate-pulse", rotate: "" },
  { left: "20%", top: "40%", size: 30, anim: "animate-ping", rotate: "" },
  { left: "40%", top: "30%", size: 22, anim: "animate-pulse", rotate: "rotate-45" },
  { left: "60%", top: "45%", size: 34, anim: "animate-pulse", rotate: "" },
  { left: "80%", top: "36%", size: 18, anim: "animate-pulse", rotate: "" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    // tambahkan 'relative' agar bintang bisa absolute terhadap container ini
    <div className="py-20 lg:py-28 bg-[#F29AAE] relative" id="about-section">
      <div className="container">

        {/* BACKGROUND SPARKLES (Opsi 2) */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          {/* overlay lembut agar sparkles terlihat di atas background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F29AAE] to-[#ffd6df] opacity-30 -z-20"></div>

          {sparkles.map((s, i) => (
            <div
              key={i}
              className={`absolute ${s.anim} ${s.rotate}`}
              style={{
                left: s.left,
                top: s.top,
                width: s.size,
                height: s.size,
                transformOrigin: "center",
                filter: "drop-shadow(0 6px 14px rgba(244,63,94,0.16))"
              }}
            >
              <Sparkle size={s.size} />
            </div>
          ))}
        </div>

        {/* HEADER */}
        <SectionHeader
          eyebrow={
            <span className="text-4xl md:text-5xl font-extrabold text-white tracking-widest uppercase [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]">
              About Me
            </span>
          }
          title={<span className="text-rose-900">A Glimpse Into My World</span>}
          description={
            <span style={{ color: "white" }}>
              Im a mobile developer with a passion for building beautiful and intuitive user interfaces.
              I specialize in Flutter and Kotlin.
            </span>
          }
        />

        {/* MAIN CONTENT */}
        <div className="mt-20 flex flex-col gap-8">

          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">

            {/* PERSONAL INFO CARD */}
            <Card className="md:col-span-2 lg:col-span-1 rounded-3xl bg-white shadow-xl border border-white/60 p-7 relative overflow-hidden h-[400px] w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/70 to-rose-100/50 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-3xl font-extrabold text-pink-900 flex items-center gap-3">
                    🌸 Personal Info
                  </h3>
                  <p className="text-pink-500 text-sm">Brief information about me.</p>
                </div>
                <div className="mt-2 space-y-4 overflow-y-auto pr-3 custom-scroll flex-1">
                  {[
                    "👤 Name: Anisya Hamidah",
                    "🎂 Date of birth: 17 Agustus",
                    "📍 Residence: Cirebon",
                    "🎓 last education: S1 Teknik Informatika",
                    "✉️ Email: anisyahamidah08@gmail.com",
                    "❤️ Status: unmarried",
                    "💼 Skill: UI-UX, Frontend, Web Development",
                    "📚 Hobi: Swimming, Traveling, Design UI, Drawing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/70 border border-pink-100 shadow-md px-4 py-2.5 rounded-xl hover:bg-white transition">
                      <span className="text-pink-600 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* TOOLBOX CARD */}
            <Card className="h-[340px] md:col-span-3 lg:col-span-2 rounded-3xl border border-white/80 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] backdrop-blur-xl">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="[&>div>h3]:text-pink-900 [&>p]:text-pink-400 px-6 pt-6"
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

          {/* BOTTOM CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">

            {/* HOBBY CARD */}
            <Card className="h-[340px] p-0 flex flex-col md:col-span-3 lg:col-span-2 rounded-3xl border border-white/80 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] backdrop-blur-xl">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 pt-6 [&>div>h3]:text-pink-900 [&>p]:text-pink-400"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-pink-300 to-rose-400 text-gray-900 rounded-full py-1.5 absolute shadow-md cursor-pointer hover:scale-105 transition"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* SOCIAL MEDIA CARD */}
            <Card className="h-[340px] p-0 flex flex-col rounded-3xl border border-white/80 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] backdrop-blur-xl">
              <CardHeader
                title="Connect With Me"
                description="Follow me on social media to stay updated with my projects and daily life."
                className="px-6 pt-6 [&>div>h3]:text-pink-900 [&>p]:text-pink-400"
              />
              <div className="flex flex-col items-center gap-6 mt-2">

                {/* SOCIAL MEDIA */}
                <div className="flex items-center justify-center gap-8">
                  {[
                    { icon: InstagramIcon, url: "https://www.instagram.com/anisyahamidah/" },
                    { icon: LinkedInIcon, url: "https://www.linkedin.com/in/anisyahamidah/" },
                    { icon: GithubIcon, url: "https://github.com/AnisyaHamidah" },
                    { icon: FacebookIcon, url: "https://www.facebook.com/annisa.hamidah.73/" }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 hover:scale-125 transition cursor-pointer"
                    >
                      <Image
                        src={item.icon}
                        alt="social icon"
                        className="w-full h-full object-contain"
                      />
                    </a>
                  ))}
                </div>

                {/* EMAIL (PRIMARY CTA) */}
                <a
                  href="mailto:anisyahamidah08@gmail.com"
                  className="
                  flex items-center gap-3
                  px-5 py-2.5
                  rounded-full
                  bg-gradient-to-r from-pink-300 to-rose-400
                  shadow-md
                  hover:shadow-xl
                  hover:scale-105
                  transition-all
                  text-white
                  font-medium
                "
                >
                  <Image
                    src={EmailIcon}
                    alt="Email"
                    className="w-5 h-5 object-contain"
                  />
                  <span>Email Me</span>
                </a>

              </div>

            </Card>

          </div>

          {/* GOOGLE MAP CARD */}
          <Card className="h-[340px] p-0 relative rounded-3xl border border-white/80 bg-white shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01] backdrop-blur-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.324131858751!2d108.5479531!3d-6.7302506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1df0a6411f47%3A0x2e488f6d6ffd40e2!2sBANDENG%20LELAKI%20CIREBON!5e0!3m2!1sid!2sid!4v1765523693913!5m2!1sid!2sid"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* My Photo di tengah */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-rose-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-rose-400 -z-10"></div>
              <Image src={myPhoto} alt="My Photo" className="size-24 rounded-full p-2" />
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};
