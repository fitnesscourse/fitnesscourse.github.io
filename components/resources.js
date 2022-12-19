import { Button } from "flowbite-react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* eslint-disable @next/next/no-img-element */
function Resources() {
  const [heading, inView] = useInView();
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <>
      <section class='bg-stone-900/50' id='resources'>
        <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0'>
          <div className='flex flex-col justify-center gap-16 items-center align-center grow'>
            <motion.div
              ref={heading}
              animate={inView ? "visible" : "hidden"}
              initial='hidden'
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className='text-6xl font-bold text-center text-orange-400 main-text'>
                Resources
              </h1>
            </motion.div>
            <div
              className='grid grid-cols-auto place-items-center 
                    gap-24
            w-full sm:px-6 lg:px-8 lg:grid-cols-3'
            >
              <Card
                image='https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8d29ya291dCBtYW58fHx8fHwxNjcxNDQxMDI0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
                title='10 Free Workout Plans'
                price='$0.00'
              />
              <Card
                image='https://images.unsplash.com/photo-1601091566377-17adfa2fa02e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8c21vb3RoaWV8fHx8fHwxNjcxNDQyMDc5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
                title='5 Free Smoothie Recipes'
                price='$0.00'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0uXOaIYXNzvIzzbcBbdyzLpQnn9g4uaM",
  authDomain: "fitnesscourse-c7e35.firebaseapp.com",
  projectId: "fitnesscourse-c7e35",
  storageBucket: "fitnesscourse-c7e35.appspot.com",
  messagingSenderId: "389798753736",
  appId: "1:389798753736:web:b121df564400435962bcfd",
  measurementId: "G-Y84GP0E46T",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

function Card(props) {
  const { image, title, price } = props;

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const [card, inView] = useInView();

  const [user] = useAuthState(auth);

  return (
    <motion.div
      ref={card}
      animate={inView ? "visible" : "hidden"}
      initial='hidden'
      variants={variants}
      transition={{ duration: 0.5, delay: 0.2 }}
      class='w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-stone-800/90
            backdrop-filter backdrop-blur-lg
          dark:border-gray-700'
    >
      <a href='#'>
        <img class='mb-8 rounded-t-lg' src={image} alt='product image' />
      </a>
      <div class='px-5 pb-5'>
        <a href='#'>
          <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </a>
        <div class='flex items-center mt-2.5 mb-5'></div>
        <div class='flex items-center justify-between'>
          <span class='text-3xl font-bold text-gray-900 dark:text-white'>
            {price}
          </span>
          <Button
            onClick={() => {
              if (user) {
                console.log("User is logged in");
              } else {
                window.document.getElementById("freeguide").scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            Get
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default Resources;
