/* eslint-disable @next/next/no-img-element */
import { Button } from "flowbite-react";
import gsap from "gsap";
import { useEffect } from "react";
import Header from "./header";

function Main() {
  useEffect(() => {
    gsap
      .fromTo(
        ".main-text",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .delay(0.5);

    gsap
      .fromTo(
        ".cta",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .delay(0.7);

    gsap
      .fromTo(
        ".button0",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .delay(0.9);

    gsap
      .fromTo(
        ".button1",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .delay(1.1);
    gsap
      .fromTo(
        ".button2",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .delay(1.3);
  }, []);

  return (
    <section className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex flex-col justify-center grow z-50'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='px-[5vw] flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-6xl font-bold text-left text-slate-200 main-text'>
                A{" "}
                <span className='text-orange-400 '>
                  <span className='underline decoration-4 decoration-red-300 underline-offset-4'>
                    strong
                  </span>{" "}
                  body
                </span>{" "}
                is a{" "}
                <span
                  className='
                text-yellow-300
              '
                >
                  strong mind.
                </span>
              </h1>
              <p className='cta text-2xl text-left text-slate-200 text-wrap'>
                Get more confident, stronger, more attractive, healthier and
                have better mental health.
              </p>

              <div className='flex flex-row gap-4'>
                <Button className='button2'>
                  <a href='/signup'>Buy Full Course</a>
                </Button>
                <Button
                  className='
                   button1
                '
                >
                  <a href='/signup'>Buy Lessons</a>
                </Button>
                <Button
                  className='
                   button0
                '
                >
                  <a href='/signup'>Free Guides</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className='mainicon flex flex-col mt-16 my-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
        <button
          onClick={() => {
            // scroll to id "benefits"
            window.document.getElementById("benefits").scrollIntoView({
              behavior: "smooth",
            });
          }}
          className='animate-bounce inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 dark:focus:ring-primary-900'
        >
          <svg
            className='w-12 h-12 text-indigo-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Main;
