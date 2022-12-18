import Head from "next/head";
import Main from "../components/main";
import Benefits from "../components/benefits";
import FreeGuide from "../components/freeGuide";

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

function App() {
  return (
    <>
      <Head>
        <title>Fitness Course</title>
        <meta
          name='description'
          content='Have a lean, attractive physique according to your preferences!'
        />
        <meta
          name='keywords'
          content='
            fitness, fitness course, course, fitness, how to get fit, how to build muscle, how to improve health, how to attract others, how to get a lean physique, how to improve your physique, my physique is messed up'
        />
        <link rel='icon' href='https://github.com/webtrope.png' />
      </Head>
      <div className='bg-main'>
        <video
          autoPlay
          muted
          loop
          id='mainvideo'
          class='fixed right-0 bottom-0 min-w-full min-h-full object-cover z-[1]'
        >
          <source src='/background.mp4' type='video/mp4' />
        </video>
        <main className='fixed bottom-0 top-0 right-0 left-0 z-[2] overflow-auto'>
          <Main />
          <div
            className='bg-stone-900/90 backdrop-filter backdrop-blur-lg'
            id='benefits'
          >
            <Benefits />
          </div>
          <div className='bg-stone-900/90 backdrop-filter backdrop-blur-lg'>
            <FreeGuide />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
