/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Benefits() {
  const headingVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  const cardVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const controls = useAnimation();
  const [heading, inView] = useInView();
  const [card1, inViewC1] = useInView();
  const [card2, inViewC2] = useInView();
  const [card3, inViewC3] = useInView();
  const [card4, inViewC4] = useInView();
  const [card5, inViewC5] = useInView();
  const [card6, inViewC6] = useInView();
  const [card7, inViewC7] = useInView();
  const [card8, inViewC8] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className='container1 min-h-screen p-16 flex flex-col gap-14'>
      <motion.div
        ref={heading}
        animate={controls}
        initial='hidden'
        variants={headingVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1
          className='
        text-6xl font-bold text-center text-orange-400 main-text
        '
        >
          Why Bother With Fitness?
        </h1>
      </motion.div>
      <div className='flex flex-col justify-center items-center align-center grow'>
        <div className='grid grid-cols-auto gap-8 place-items-start w-full sm:px-6 lg:px-8 lg:grid-cols-2'>
          <motion.div
            ref={card1}
            animate={inViewC1 ? "visible" : "hidden"}
            initial='hidden'
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              title='Improves Mental Health'
              description='Physical activity has been shown to improve mood and reduce and/or cure stress, anxiety, and depression. It can also improve cognitive function and memory.'
            />
          </motion.div>
          <motion.div
            ref={card2}
            animate={inViewC2 ? "visible" : "hidden"}
            initial='hidden'
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card
              title='Improves Physical Health'
              description='Being physically fit can help improve your overall health by reducing the risk of chronic diseases such as obesity, heart disease, and diabetes. It can also lower blood pressure and improve cholesterol levels.'
            />
          </motion.div>
          <motion.div
            ref={card3}
            animate={inViewC3 ? "visible" : "hidden"}
            initial='hidden'
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card
              title='Strengthens Immune System'
              description='Exercise can improve immune function and help fight off illness and infections.'
            />
          </motion.div>
          <motion.div
            ref={card4}
            animate={inViewC4 ? "visible" : "hidden"}
            initial='hidden'
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card
              title='Improves Sleep'
              description='Regular physical activity can help you fall asleep faster and sleep more soundly, leading to better overall sleep quality.'
            />
          </motion.div>
          <motion.div
            ref={card5}
            animate={inViewC5 ? "visible" : "hidden"}
            initial='hidden'
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              title='Weight Management'
              description='Being physically fit can help you maintain a healthy weight and reduce the risk of obesity.'
            />
          </motion.div>
          <motion.div
            ref={card6}
            animate={inViewC6 ? "visible" : "hidden"}
            initial='hidden'
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card
              title='Improves Self-Esteem'
              description='Regular physical activity can boost self-esteem and improve body image, leading to increased confidence and a positive outlook on life.'
            />
          </motion.div>
          <motion.div
            ref={card7}
            animate={inViewC7 ? "visible" : "hidden"}
            initial='hidden'
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card
              title='Improves Physical Appearance'
              description='Being physically fit can improve muscle tone and body composition, leading to a more toned and attractive appearance.'
            />
          </motion.div>
          <motion.div
            ref={card8}
            animate={inViewC8 ? "visible" : "hidden"}
            initial='hidden'
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card
              title='Improves Energy Levels and Stamina'
              description=' Regular physical activity can increase energy levels and improve your stamina, making it easier to complete daily tasks and activities.'
            />
          </motion.div>
        </div>
      </div>
      <div className='mainicon flex flex-col mt-16 my-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
        <button
          onClick={() => {
            // scroll to id "benefits"
            window.document.getElementById("freeguide").scrollIntoView({
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
    </div>
  );
}

function Card(props) {
  const { title, description, image } = props;

  return (
    <div class='flex flex-col items-center md:flex-row w-full'>
      {image}
      <div class='flex flex-col justify-between p-4 leading-normal'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-orange-300'>
          {title}
        </h5>
        <p class='mb-3 font-normal text-gray-700 dark:text-stone-400'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Benefits;
