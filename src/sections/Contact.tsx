import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div
      id="contact-section"
      className="bg-[#FFD3D5] from-rose-100 via-rose-50 to-white py-20 lg:py-28"
    >
      <div className="container">
        <div className="relative bg-white/80 backdrop-blur-md border border-rose-200 py-10 px-10 rounded-3xl shadow-xl overflow-hidden">
          
          {/* grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.08] -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          {/* Decorative pink glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-300 rounded-full blur-3xl opacity-20"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="font-serif text-3xl md:text-4xl text-rose-900 leading-snug">
                Let’s create something beautiful together
              </h2>

              <p className="text-gray-700 md:text-base mt-3">
                Have a project in mind? I’d love to collaborate and help bring 
                your ideas to life. Let’s connect and make something amazing happen.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/fernand-jerico"
              target="_blank"
              className="inline-flex items-center px-8 h-12 rounded-xl gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-lg transition"
            >
              Contact Me
              <ArrowRightIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
