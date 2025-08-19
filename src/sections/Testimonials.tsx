"use client";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment, useRef, useState } from "react";

const testimonials = [
  { name: "Ahmad Abdullah", position: "Computer Science student @ Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
     text: "Really liked your project, Good work", avatar: memojiAvatar1 },

  { name: "Malaika Riaz", position: "Software Engineering graduate @ University of Lahore", text: "This software is going to be a game-changer if it works out! I still remember when It was my first day, I was totally lost trying to figure out where to sit. This software could make a huge difference. Well keep it up! 👍🏻", avatar: memojiAvatar4 },

  { name: "Muhammad Faizan", position: "CS @UOL", text: "I must say I am too inspired by your portfolio, your projects.I am soo inspired and motivated by that , I have just started my web development journey and this is exactly where i want to reach so yeah congratulations man you are  a PRO .", avatar: memojiAvatar3 },
  { name: "Hassan Ali Sheikh", position: "SWE Intern @NETSOL", text: "cool idea , Glad you identified it 🤞", avatar: memojiAvatar1 },
  { name: "Muhammad Abdullah", position: "CS @ UOL", text: "I have seen your timetable app it's really amazing!", avatar: memojiAvatar5 },
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 🖱️ Mouse Events
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // 📱 Touch Events (for mobile swipe)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Users"
          title="What People Say About Me"
          description="Dont just take my word for it. See what users have to say about my work."
        />

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="mt-12 lg:mt-20 flex overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing 
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
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
