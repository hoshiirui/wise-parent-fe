import { Footer } from "./components/Footer/Footer";
import HeroDefault from "./components/Hero/HeroDefault";
import ShortDesc from "./components/Section/ShortDesc";

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

      <div className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            <p className="text-xl font-bold mb-4 text-gray-500 uppercase">
              Services
            </p>
            <p className="mt-2 text-3xl tracking-tight text-gray-800 sm:text-5xl font-bold">
              What We Offer?
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mx-auto text-center">
              <div className="flex flex-col gap-4">
                <img
                  src={`img/what-1.png`}
                  alt={"tes"}
                  width={373}
                  height={373}
                  className="my-6"
                />
                <p className="font-bold">Parenting Class</p>
                <p className="text-justify">
                  Join our parenting classes to get practical guidance and
                  in-depth knowledge in educating children
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <img
                  src={`img/what-2.png`}
                  alt={"tes"}
                  width={373}
                  height={373}
                  className="my-6"
                />
                <p className="font-bold">Ask with Community</p>
                <p className="text-justify">
                  Through the 'ask your question' feature you can get answers
                  from community that can help you become a good parent.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src={`img/what-3.png`}
                  alt={"tes"}
                  width={373}
                  height={373}
                  className="my-6"
                />
                <p className="font-bold">Information Sharing</p>
                <p className="text-justify">
                  Providing trusted and useful content, to support you in
                  addressing important aspects of parenting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            <p className="text-xl font-bold mb-4 text-gray-500 uppercase text-center">
              Start Reading
            </p>
            <p className="mt-2 text-3xl tracking-tight text-gray-800 sm:text-5xl font-bold text-center mb-[60px]">
              Recommended Articles
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mx-auto text-center">
              <div className="flex flex-col p-6 bg-primary500 bg-opacity-50 rounded-2xl justify-between">
                <div className="flex flex-col">
                  <img
                    src={`img/recommended-1.jpg`}
                    alt={"tes"}
                    width={373}
                    height={373}
                    className="rounded-2xl"
                  />
                  <p className="font-bold text-3xl mt-4 text-gray-700 text-left">
                    Navigating Parenthood
                  </p>
                  <p className="text-left mt-2">
                    10 Tips for New Moms and Dads..
                  </p>
                </div>
                <button className="bg-white mt-4 rounded-lg py-2 font-bold">
                  Read More
                </button>
              </div>

              <div className="flex flex-col p-6 bg-primary500 bg-opacity-50 rounded-2xl justify-between">
                <div className="flex flex-col">
                  <img
                    src={`img/recommended-3.jpg`}
                    alt={"tes"}
                    width={373}
                    height={373}
                    className="rounded-2xl"
                  />
                  <p className="font-bold text-3xl mt-4 text-gray-700 text-left">
                    Seeking Support!
                  </p>
                  <p className="text-left mt-2">
                    Finding Community as New Parents..
                  </p>
                </div>
                <button className="bg-white mt-4 rounded-lg py-2 font-bold">
                  Read More
                </button>
              </div>

              <div className="flex flex-col p-6 bg-primary500 bg-opacity-50 rounded-2xl justify-between">
                <div className="flex flex-col">
                  <img
                    src={`img/recommended-2.jpg`}
                    alt={"tes"}
                    width={373}
                    height={373}
                    className="rounded-2xl"
                  />
                  <p className="font-bold text-3xl mt-4 text-gray-700 text-left">
                    Age-By-Age Guide
                  </p>
                  <p className="text-left mt-2">
                    Sleeping Training for Babies..
                  </p>
                </div>
                <button className="bg-white mt-4 rounded-lg py-2 font-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
