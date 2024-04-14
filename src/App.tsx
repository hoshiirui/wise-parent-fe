import { Footer } from "./components/Footer/Footer";
import HeroDefault from "./components/Hero/HeroDefault";
import ShortDesc from "./components/Section/ShortDesc";
import StartReading from "./components/Section/StartReading";
import WhatWeOffer from "./components/Section/WhatWeOffer";

function App() {
  const speciality = [
    {
      title: "Photograph That Draws Everyone's Eyes",
      desc: [
        {
          p: "At Tokisaki Gallery, we pride ourselves on delivering photographs that captivate and mesmerize. Our commitment to excellence ensures that every image we produce exceeds expectations, leaving a lasting impression on anyone who beholds it. Utilizing advanced editing techniques and creative flair, we transform ordinary moments into extraordinary masterpieces that demand attention and admiration. With Tokisaki Gallery, prepare to be dazzled by the magic of photography.",
        },
      ],
      pictures: [
        {
          href: "1.png",
          title: "Sparkling Aquarium Date",
        },
        {
          href: "2.png",
          title: "Journey to The Frost",
        },
        {
          href: "3.png",
          title: "A Moment of Excellency",
        },
      ],
    },
  ];

  return (
    <>
      <HeroDefault />

      <ShortDesc />

      <WhatWeOffer />

      <StartReading />

      <Footer />
    </>
  );
}

export default App;
