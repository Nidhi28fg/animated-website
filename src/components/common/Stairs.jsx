import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { use, useRef } from "react";
import { useLocation } from "react-router-dom";
const Stairs = (props) => {
    const currentPath = useLocation().pathname;
  const stairParents = useRef(null);

  useGSAP(() => {
    //repeat animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
    tl.to(stairParents.current, { display: "block" });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParents.current, { display: "none" });
    tl.to(".stair", { y: "0%" });
  }, [currentPath]);
return (
  <>
    <div ref={stairParents} className="h-screen w-full fixed z-20 top-0 pointer-events-none">
      {/* Stairs overlay content */}
      <div className="h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
    </div>
    {/* App content bahar */}
    <div>{props.children}</div>
  </>
);

// Aur GSAP animation ke khatam hone par overlay ko hide ya display:none karo.
};

export default Stairs;
