import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Ariman Setiawan",
    position: "CEO @ Rajawali Permata Asia",
    text: "Fernand was instrumental in transforming our application into a powerful attendance tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Hafidz Surya Ramadhan",
    position: "Fullstack Mobile Flutter @ Motasa Indonesia",
    text: "Working with Fernand was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Fernand's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Fernand is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Fernand's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
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
                to-white
                bg-clip-text text-transparent
                tracking-widest uppercase
              "
            >
              Happy Clients
            </span>

          }
          title={<span className="text-rose-900">What Clients Say about Me</span>}
          description={
            <span className="text-rose-900">
              Real feedback from people I’ve helped build digital products.
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
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
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
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-rose-100 inline-flex justify-center items-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>

                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-800">
                      {testimonial.text}
                    </p>
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
