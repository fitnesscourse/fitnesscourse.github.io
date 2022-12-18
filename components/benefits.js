import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

function Benefits() {
  useEffect(() => {
    // scroll trigger
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
    gsap.fromTo(
      ".heading1",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".heading1",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className='min-h-screen p-16'>
      <h1 className='heading1 text-6xl font-bold text-left text-blue-200 main-text text-center'>
        Why Bother With Fitness?
      </h1>
    </div>
  );
}

export default Benefits;
