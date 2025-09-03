import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <div className=" text-white">
      <div className="h-screen w-screen fixed">
      <Video/>
      </div>
      <div className="h-screen w-screen  relative flex flex-col justify-between pb-5 overflow-hidden">
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  );
};

export default Home;
