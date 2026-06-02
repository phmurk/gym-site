import { lazy, Suspense } from "react";

import Hero from "../../components/Home/Hero/Hero";
import OurMission from "../../components/Home/OurMission/OurMission";
// import OurValues from "../../components/Home/OurValues/OurValues";
const OurValues = lazy(
  () => import("../../components/Home/OurValues/OurValues"),
);
import Questions from "../../components/Home/Questions/Questions";
import Gallery from "../../components/Home/Gallery/Gallery";
import StartSteps from "../../components/Home/StartSteps/StartSteps";
import Reviews from "../../components/Home/Reviews/Reviews";
import Newsletter from "../../components/Newsletter/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <OurMission />
      <Suspense fallback={<div>Загрузка...</div>}>
        <OurValues />
      </Suspense>
      <Gallery />
      <StartSteps />
      <Questions />
      <Reviews />
      <Newsletter />
    </>
  );
}

export default Home;
