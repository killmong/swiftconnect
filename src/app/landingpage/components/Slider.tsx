"use client";

import React, { useEffect, useMemo, useRef } from "react";
import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  scale: number;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, scale }) => (
  <Image
    src={src}
    width={50}
    height={50}
    alt={alt}
    className="transition-transform duration-500 rounded-full object-cover"
    style={{
      transform: `scale(${scale})`,
    }}
  />
);

const Slider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const avatars = useMemo(
    () => [
      { src: "/images/BirdAvatars/AngryEagle.jpg", alt: "Angry Eagle" },
      { src: "/images/BirdAvatars/BlackBird.jpg", alt: "Black Bird" },
      { src: "/images/BirdAvatars/SmartEagle.jpg", alt: "Angry Eagle" },
      { src: "/images/BirdAvatars/Penguin.jpg", alt: "Penguin" },
      { src: "/images/BirdAvatars/Swift.jpg", alt: "Swift" },
      { src: "/images/BirdAvatars/Sparrow(2).jpg", alt: "Sparrow" },
      { src: "/images/BirdAvatars/HappyBird.jpg", alt: "RedBird" },
      { src: "/images/BirdAvatars/Sparrow.jpg", alt: "Sparrow" },
      { src: "/images/BirdAvatars/CuteGirl.jpg", alt: "Cute Girl" }

    ],
    []
  );

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateDimensions = () => {
      const totalAvatars = avatars.length;
      const a = slider.offsetWidth / 2.5; // Adjusted for responsiveness
      const b = slider.offsetHeight / 2; // Adjusted for responsiveness
      const centerX = slider.offsetWidth / 2;
      const centerY = slider.offsetHeight / 2;
      let angle = 0;

      const rotateCarousel = () => {
        angle += 0.005;
        avatars.forEach((_, index) => {
          const itemAngle = angle + (index / totalAvatars) * 2 * Math.PI;
          const x = centerX + a * Math.cos(itemAngle) - 50;
          const y = centerY + b * Math.sin(itemAngle) - 50;
          const item = slider.children[index] as HTMLElement;
          item.style.transform = `translate(${x}px, ${y}px)`;

          const distanceFromCenter = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );
          const maxDistance = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
          const normalizedDistance = distanceFromCenter / maxDistance;

          const isTopSide = y < centerY;
          const scale = isTopSide ? 1.1 : 1 + 0.1 * (1 - normalizedDistance);

          const avatar = item.firstChild as HTMLElement;
          avatar.style.transform = `scale(${scale})`;
        });
        requestAnimationFrame(rotateCarousel);
      };

      rotateCarousel();
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [avatars]);

  return (
    <div
      ref={sliderRef}
      className="relative flex w-full h-full  overflow-hidden"
    >
      {avatars.map((avatar, index) => (
        <div key={`${avatar.src}-${index}`} className="absolute">
          <Avatar src={avatar.src} alt={avatar.alt} scale={2} />
        </div>
      ))}
      <div
        className="absolute flex flex-col items-center justify-center py-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 1 }}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
