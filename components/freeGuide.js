/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "flowbite-react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";

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

function FreeGuide() {
  const [user] = useAuthState(auth);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const controls = useAnimation();
  const [title, inView] = useInView();
  const [sub] = useInView();
  const [textbox] = useInView();
  const [btn1] = useInView();

  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (inView) {
      if (user) {
        window.document.getElementById("resources").scrollIntoView({
          behavior: "smooth",
        });
      }
      controls.start("visible");
    }
  }, [controls, inView, login, user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <section class='bg-stone-900/50' id='freeguide'>
        <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0'>
          <motion.div
            ref={title}
            animate={controls}
            initial='hidden'
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <h1 class='text-xl font-bold mb-6 text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Get 10 Free Workout Plans <br /> and 5 Free Smoothie Recipes
            </h1>
          </motion.div>
          <motion.div
            ref={sub}
            animate={controls}
            initial='hidden'
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            class='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800/20 dark:border-gray-700'
          >
            <div>
              {!login && (
                <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
                  <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                    Create an account
                  </h1>
                  <form class='space-y-4 md:space-y-6' action='#'>
                    <motion.div
                      ref={textbox}
                      animate={controls}
                      initial='hidden'
                      variants={variants}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label
                        for='email'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Your email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        class='bg-stone-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='name@company.com'
                        required=''
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </motion.div>
                    <motion.div
                      ref={textbox}
                      animate={controls}
                      initial='hidden'
                      variants={variants}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label
                        for='password'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='••••••••'
                        class='bg-stone-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required=''
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </motion.div>
                    <motion.div
                      ref={textbox}
                      animate={controls}
                      initial='hidden'
                      variants={variants}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <label
                        for='confirm-password'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Confirm password
                      </label>
                      <input
                        type='password'
                        name='confirm-password'
                        id='confirm-password'
                        placeholder='••••••••'
                        class='bg-stone-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required=''
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </motion.div>
                    <motion.div
                      ref={btn1}
                      animate={controls}
                      initial='hidden'
                      variants={variants}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <Button
                        className='
                          button2
                          transition duration-300 ease-in-out
                        '
                        onClick={(e) => {
                          e.preventDefault();
                          if (password === confirmPassword) {
                            createUserWithEmailAndPassword(
                              auth,
                              email,
                              password
                            )
                              .then((auth) => {
                                console.log(auth);
                              })
                              .catch((error) => alert(error.message));
                          } else {
                            alert("Passwords do not match");
                          }
                        }}
                      >
                        Create account
                      </Button>
                    </motion.div>
                    <motion.div
                      ref={btn1}
                      animate={controls}
                      initial='hidden'
                      variants={variants}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <p class='text-sm font-light text-gray-500 dark:text-gray-400'>
                        Already have an account?{" "}
                        <a
                          href='#'
                          onClick={() => setLogin(true)}
                          class='font-medium text-primary-600 hover:underline dark:text-primary-500'
                        >
                          Login here
                        </a>
                      </p>
                    </motion.div>
                  </form>
                </div>
              )}
              {login && (
                <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
                  <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                    Login
                  </h1>
                  <form class='space-y-4 md:space-y-6' action='#'>
                    <motion.div
                      ref={textbox}
                      animate={controls}
                      initial='hidden'
                      variants={variants}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label
                        for='email'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Your email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        class='bg-stone-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='name@company.com'
                        required=''
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </motion.div>
                    <motion.div
                      ref={textbox}
                      animate={controls}
                      initial='hidden'
                      variants={variants}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label
                        for='password'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='••••••••'
                        class='bg-stone-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-stone-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required=''
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </motion.div>
                    <motion.div
                      ref={btn1}
                      animate={controls}
                      initial='hidden'
                      variants={variants}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <Button
                        className='
                          button2
                          transition duration-300 ease-in-out
                        '
                        onClick={(e) => {
                          e.preventDefault();
                          signInWithEmailAndPassword(auth, email, password)
                            .then(() => {
                              window.document
                                .getElementById("resources")
                                .scrollIntoView({
                                  behavior: "smooth",
                                });
                            })
                            .catch((error) => alert(error.message));
                        }}
                      >
                        Login
                      </Button>
                    </motion.div>
                    <motion.div
                      ref={btn1}
                      animate={controls}
                      initial='hidden'
                      variants={variants}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <p class='text-sm font-light text-gray-500 dark:text-gray-400'>
                        {"Don't"} have an account?{" "}
                        <a
                          href='#'
                          class='font-medium text-primary-600 hover:underline dark:text-primary-500'
                          onClick={() => setLogin(false)}
                        >
                          Sign up here
                        </a>
                      </p>
                    </motion.div>
                  </form>
                </div>
              )}{" "}
            </div>
          </motion.div>
          <div className='mainicon flex flex-col mt-16 my-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
            <button
              onClick={() => {
                window.document.getElementById("resources").scrollIntoView({
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
      </section>
    </>
  );
}

export default FreeGuide;
