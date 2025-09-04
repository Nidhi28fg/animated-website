import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agence = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const imagearry = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
  ];
  useGSAP(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        // markers: true,
        start: "top 30%",
        end: "top -120%",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          let index;
          if (self.progress < 1) {
            index = Math.floor(self.progress * imagearry.length);
          } else {
            index = imagearry.length - 1;
          }
          imageRef.current.src = imagearry[index];
        },

      },
    });
  }, ref);

  return (
    <div className="overflow-hidden">
      <div className="section1">
        <div
          ref={ref}
          className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-[47vh] md:top-[42vh] lg:top-[30vh] left-[34vw] "
        >
          <img
            ref={imageRef}
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative font-[font2]">
          <div className=" mt-[55vh] ">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw] ">
              Soixan7e <br />
              Douze
            </h1>
          </div>

          <div className="pl-[40%] mt-[2vh]">
            <p className="text-[4vw] leading-[4vw]">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C'est pour ça qu'on s'engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">4</div>
    </div>
  );
};

export default Agence;
