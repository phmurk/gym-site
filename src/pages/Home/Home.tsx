import Hero from "../../components/Home/Hero/Hero";
import OurMission from "../../components/Home/OurMission/OurMission";
import OurValues from "../../components/Home/OurValues/OurValues";
import Questions from "../../components/Home/Questions/Questions";
import Gallery from "../../components/Home/Gallery/Gallery";
import StartSteps from "../../components/Home/StartSteps/StartSteps";

function Home() {
  return (
    <>
      <Hero />
      <OurMission />
      <OurValues />
      <Gallery />
      <Questions />
      <StartSteps />
    </>
  );
}

export default Home;
