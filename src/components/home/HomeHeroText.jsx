import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font2] flex flex-col items-center pt-5 text-white text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw]  flex items-center j">
        L'étincelle{" "}
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
        qui{" "}
        <div className="h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden">
          {" "}
          <Video />
        </div>{" "}
        génère{" "}
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw]  flex items-center ">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
