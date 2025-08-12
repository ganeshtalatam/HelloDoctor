import React, { useEffect, useRef, useState } from "react";
import ModernHero from "./ModernHero";
import ModernAbout from "./ModernAbout";

export default function PageScrollAnimation() {
  const [shrinkHome, setShrinkHome] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If About is entering viewport, shrink Home
          setShrinkHome(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // 30% of About page visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Home Page */}
      <div
        className={`h-screen transition-all duration-700 mx-auto flex items-center justify-center bg-blue-300 
          ${shrinkHome ? "w-3/5" : "w-screen"}`}
      >
        <ModernHero />
      </div>

      {/* About Page */}
      <div
        ref={aboutRef}
        className="h-screen w-screen bg-green-300 flex items-center justify-center"
      >
        <ModernAbout />
      </div>
    </div>
  );
}
