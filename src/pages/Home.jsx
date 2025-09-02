import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-red-700 fixed">
      <Video/>
      </div>
      <div className="h-screen w-screen relative flex flex-col">
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  );
};

export default Home;
