//import clock
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
// import clock css
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
// import video
import video from "./assets/video.mp4";

import "./App.css";

function App() {
  return (
    <section className="page flex justify-center items-center w-[100vw] h-[100vh]">
      {/* overlay */}
      <div className="overlay absolute w-full h-full bg-slate-700 opacity-50"></div>
      {/* video */}
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>
      {/* content */}
      <div className="page__content absolute items-center  flex flex-col text-center">
        <h1 className="text-[2rem] lg:text-[4rem] mb-[1rem]">Launching Soon</h1>
        <h3 className="lg:max-w-[600px] mb-[3rem] font-light max-w-[400px]">
          Leave your email and we&apos;ll let you know once the site goes live.
        </h3>
        {/* clock */}
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          className="flip-clock mb-[2rem]"
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="w-[180px] h-[64px]  items-center text-center tracking-widest cursor-pointer font-bold bg-white text-black uppercase px-2 py-1 rounded-xl">
          Notify Me
        </button>
      </div>
    </section>
  );
}

export default App;
