import { Navbar } from "flowbite-react";
import gsap from "gsap";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
function Header() {
  useEffect(() => {
    gsap.fromTo(
      ".nav-icons",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    gsap
      .fromTo(
        ".nav-four",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(1.1);
    gsap
      .fromTo(
        ".nav-three",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.9);
    gsap
      .fromTo(
        ".nav-two",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.7);
    gsap
      .fromTo(
        ".nav-one",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.5);
  }, []);

  return (
    <>
      <Navbar fluid={false} className='bg-nav pt-6 z-50'>
        <div className='flex md:order-2 nav-icons'>
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
        </div>
        <Navbar.Collapse>
          <Navbar.Link href='/' className='nav-one group'>
            <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'>
              Home
            </span>
          </Navbar.Link>
          <Navbar.Link className='nav-two group' href='/about'>
            <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'>
              About
            </span>
          </Navbar.Link>
          <Navbar.Link className='nav-three group' href='/contact'>
            <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'>
              Contact
            </span>
          </Navbar.Link>
          <Navbar.Link className='nav-four group' href='/examples'>
            <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'>
              Store
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
