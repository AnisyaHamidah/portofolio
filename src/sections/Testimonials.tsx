import sertif1 from "@/assets/images/sertif-bangkit.png";
import magang1 from "@/assets/images/magang.png";
import sertif2 from "@/assets/images/sertif-flutter.png";
import sertif3 from "@/assets/images/sertif-puskesmas.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const certificates = [
  {
    name: "Bangkit Academy",
    text: "for successfully completing Bangkit with a specialization in Mobile Development. Bangkit is a Google-led academy designed to develop high-caliber technical talent for Indonesia’s leading technology companies and startups.",
    avatar: sertif1,
    github: "https://github.com/AnisyaHamidah/agro-vision-main.git",
  },
  {
    name: "KSP-DWIJAYA UTAMA - INTERNSHIP",
    text: "Developed complete UI/UX mockup designs for the KSP Dwijaya Utama system, transforming operational needs into structured and intuitive interface concepts.",
    avatar: magang1,
    figma: "https://www.figma.com/design/BrXOznIK9wN8MgWGw4TsGH/Project-Akhir-Magang?node-id=8-6&t=Gzy1YiL2VVwqAB1L-1",
  },
  {
    name: "Project Akhir - Flutter",
    text: "I finished my final Flutter project during the Dicoding Mobile Development Bootcamp, applying solid Flutter fundamentals to develop a complete and working application.",
    avatar: sertif2,
    github: "https://github.com/AnisyaHamidah/project-akhir-flower.git"
  },
  {
    name: "Registration Platform-Puskesmas kalijaga",
    text: "I developed and completed a final project consisting of a registration system and queue management website for Puskesmas Kalijaga, implementing functional features to support real operational needs.",
    avatar: sertif3,
    github: "https://github.com/AnisyaHamidah/puskesmas-website.git"
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24 bg-[#F9DFDF] text-gray-900">
      <div className="container">
        <SectionHeader
          eyebrow={
            <span
              className="
                text-4xl md:text-5xl lg:text-5xl
                font-extrabold 
                text-white
                tracking-widest uppercase
                [text-shadow:0_0_8px_rgba(0,0,0,0.3)]
                bg-clip-text text-transparent
              "
            >
              My Achievements
            </span>
          }
          title={<span className="text-rose-900">Certifications & Documentation</span>}
          description={
            <span className="text-rose-900">
              A collection of official certificates and documentation of projects that I have successfully completed.
            </span>
          }
        />

        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip 
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] 
          py-4 -my-4"
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {certificates.map((cert) => (
                  <Card
                    key={cert.name}
                    className="
                      relative
                      max-w-xs md:max-w-md p-6 md:p-8 
                      bg-white/80 backdrop-blur-md 
                      border border-rose-100 
                      text-gray-900 shadow-md 
                      rounded-2xl 
                      hover:-rotate-3 transition duration-300

                      before:content-['']
                      before:absolute before:top-0 before:left-0
                      before:w-full before:h-1
                      before:bg-rose-400
                      before:rounded-t-2xl
                    "
                  >
                    {/* Gambar Sertifikat */}
                    <div className="w-full h-36 md:h-44 overflow-hidden rounded-lg border">
                      <Image
                        src={cert.avatar}
                        alt={cert.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Judul Sertifikat */}
                    <h3 className="mt-4 font-semibold text-lg">
                      {cert.name}
                    </h3>

                    {/* Penjelasan Sertifikat */}
                    <p className="text-sm text-gray-700 mt-2">
                      {cert.text}
                    </p>

                    {/* Link GitHub (hanya tampil jika ada) */}
                    {cert.github && (
                      <a
                        href={cert.github}
                        target="_blank"
                        className="inline-block mt-3 text-sm font-semibold text-rose-700 hover:text-rose-900 underline"
                      >
                        View on GitHub →
                      </a>
                    )}
                    {cert.figma && (
                      <a
                        href={cert.figma}
                        target="_blank"
                        className="inline-block mt-1 text-sm font-semibold text-rose-700 hover:text-rose-900 underline"
                      >
                        View on Figma →
                      </a>
                    )}
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
