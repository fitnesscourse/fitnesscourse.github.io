import { Navbar } from "flowbite-react";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* eslint-disable @next/next/no-img-element */
function Header() {
  const leftVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const rightVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  const controls = useAnimation();
  const [left, inView] = useInView();
  const [right] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Navbar fluid={false} className='bg-nav pt-6 z-50'>
        <div className='flex md:order-2 nav-icons'>
          <motion.div
            ref={right}
            animate={controls}
            initial='hidden'
            variants={rightVariants}
            transition={{ duration: 0.5 }}
          >
            <div className='flex-row flex gap-2'>
              <a
                className='group font-mono text-sm cursor-pointer flex flex-col justify-center text-slate-200 hover:text-blue-100 transition-all duration-300 ease-out'
                onClick={() => {
                  window.location.href = "signup";
                }}
              >
                <span class='cursor-pointer bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out flex flex-row gap-2 items-center'>
                  Get Started
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                    />
                  </svg>
                </span>
              </a>
            </div>
            <Navbar.Toggle />
          </motion.div>
        </div>
        <Navbar.Collapse>
          <motion.div
            ref={left}
            animate={controls}
            initial='hidden'
            variants={leftVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Navbar.Link href='/' className='nav-one group'>
              <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'>
                Home
              </span>
            </Navbar.Link>
          </motion.div>
          <motion.div
            animate={controls}
            initial='hidden'
            variants={leftVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Navbar.Link className='nav-two group' href='/about'>
              <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'>
                About
              </span>
            </Navbar.Link>
          </motion.div>
          <motion.div
            animate={controls}
            initial='hidden'
            variants={leftVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Navbar.Link className='nav-three group' href='/contact'>
              <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'>
                Contact
              </span>
            </Navbar.Link>
          </motion.div>
          <motion.div
            animate={controls}
            initial='hidden'
            variants={leftVariants}
            transition={{ duration: 0.5 }}
          >
            <Navbar.Link className='nav-four group' href='/examples'>
              <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'>
                Store
              </span>
            </Navbar.Link>
          </motion.div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
