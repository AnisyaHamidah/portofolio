import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import InstagramIcon from "@/assets/icons/ig.svg";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/AnisyaHamidah",
    icon: GithubIcon,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anisyahamidah/",
    icon: LinkedinIcon,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/anisyahamidah/",
    icon: InstagramIcon,
  },
];
export const Footer = () => {
  return (
    <footer
      className="relative overflow-x-clip"
      style={{ backgroundColor: "#850E35" }}
    >
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-rose-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">

          <div className="text-white">&copy; 2025, All rights reserved.</div>

          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 cursor-pointer text-white"
                >
                  <Icon className="size-4" />
                  <span className="font-semibold">{link.title}</span>
                  <ArrowRightIcon className="size-4" />
                </a>
              );
            })}
          </nav>

        </div>
      </div>
    </footer>
  );
};

