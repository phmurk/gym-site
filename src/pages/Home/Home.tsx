import Hero from "../../components/Home/Hero/Hero";
import OurMission from "../../components/Home/OurMission/OurMission";
import OurValues from "../../components/Home/OurValues/OurValues";
import Questions from "../../components/Home/Questions/Questions";
import Gallery from "../../components/Home/Gallery/Gallery";
import StartSteps from "../../components/Home/StartSteps/StartSteps";
import Reviews from "../../components/Home/Reviews/Reviews";

function Home() {
  return (
    <>
      <Hero />
      <OurMission />
      <OurValues />
      <Gallery />
      <StartSteps />
      <Questions />
      <Reviews />
    </>
  );
}

export default Home;
