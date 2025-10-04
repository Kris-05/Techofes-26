import React from "react";
import "./Sponser.css";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Sponser = () => {
  return (
    <>
      <section className="intro">
        <h1>Start</h1>
      </section>
      <section className="spotlight">
        <div className="spotlight-imgs">
          {Array.from({ length: 20 }, (_, i) => (
            <div className="img" key={i}>
              <img src={`/img_${(i%3)+1}.jpg`} alt={`Sponsor ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="spotlight-cover-img">
          <img src="/agni.png" alt="Spotlight Cover" />
        </div>
        <div className="intro-header">
          <h1>We're grateful for our sponsors</h1>
        </div>
        <div className="outro-header">
          <h1>Want to collaborate with us? Pls join us :)</h1>
        </div>
      </section>
      <section className="outro">
        <h1>End</h1>
      </section>
    </>
  );
};

export default Sponser;