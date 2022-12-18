/* eslint-disable @next/next/no-img-element */
import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "./header";

function Main() {
  const titleVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const controls = useAnimation();
  const [title, inView] = useInView();
  const [sub] = useInView();
  const [btn1] = useInView();
  const [btn2] = useInView();
  const [btn3] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex flex-col justify-center grow z-50'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='px-[5vw] flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-4'>
              <motion.div
                ref={title}
                animate={controls}
                initial='hidden'
                variants={titleVariants}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>
              <motion.div
                ref={sub}
                variants={titleVariants}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5 }}
                initial='hidden'
              >
                <p className='cta text-2xl text-left text-slate-200 text-wrap'>
                  Get more confident, stronger, more attractive, healthier and
                  have better mental health.
                </p>
              </motion.div>

              <div className='flex flex-row gap-4'>
                <motion.div
                  ref={btn1}
                  variants={titleVariants}
                  animate={controls}
                  transition={{
                    duration: 0.5,
                    delay: 1.1,
                  }}
                  initial='hidden'
                >
                  <Button className='button2'>
                    <a href='/signup'>Buy Full Course</a>
                  </Button>
                </motion.div>
                <motion.div
                  ref={btn2}
                  variants={titleVariants}
                  animate={controls}
                  transition={{
                    duration: 0.5,
                    delay: 0.9,
                  }}
                  initial='hidden'
                >
                  <Button
                    className='
                   button1
                '
                  >
                    <a href='/signup'>Buy Lessons</a>
                  </Button>
                </motion.div>
                <motion.div
                  ref={btn3}
                  variants={titleVariants}
                  animate={controls}
                  transition={{
                    duration: 0.5,
                    delay: 0.7,
                  }}
                  initial='hidden'
                >
                  <Button
                    className='
                   button0
                '
                  >
                    <a href='/signup'>Free Guides</a>
                  </Button>
                </motion.div>
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
            className='w-12 h-12 text-orange-300'
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
