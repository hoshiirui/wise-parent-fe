import Navbar from "../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Footer } from "../components/Footer/Footer";

const storyLists = [
  {
    id: 1,
    title: "Ascension of The Pearlescent Edelweiss",
    author: "Amanda Mutiara",
    desc: "Shira merasakan getaran lembut ponselnya sebagai alarm berdering, mengingatkannya pada tanggal yang sangat spesial, 7 September. Ini adalah hari ulang tahunnya...",
    genre: ["keseharian", "mitos"],
    imgSrc:"book.jpg"
  },
  {
    id: 2,
    title: "Ascension of The Pearlescent Edelweiss",
    author: "Amanda Mutiara",
    desc: "Shira merasakan getaran lembut ponselnya sebagai alarm berdering, mengingatkannya pada tanggal yang sangat spesial, 7 September. Ini adalah hari ulang tahunnya...",
    genre: ["keseharian", "mitos"],
    imgSrc:"book.jpg"
  },
  {
    id: 3,
    title: "Ascension of The Pearlescent Edelweiss",
    author: "Amanda Mutiara",
    desc: "Shira merasakan getaran lembut ponselnya sebagai alarm berdering, mengingatkannya pada tanggal yang sangat spesial, 7 September. Ini adalah hari ulang tahunnya...",
    genre: ["keseharian", "mitos"],
    imgSrc:"book.jpg"
  },
  {
    id: 4,
    title: "Ascension of The Pearlescent Edelweiss",
    author: "Amanda Mutiara",
    desc: "Shira merasakan getaran lembut ponselnya sebagai alarm berdering, mengingatkannya pada tanggal yang sangat spesial, 7 September. Ini adalah hari ulang tahunnya...",
    genre: ["keseharian", "mitos"],
    imgSrc:"book.jpg"
  },
  {
    id: 5,
    title: "Ascension of The Pearlescent Edelweiss",
    author: "Amanda Mutiara",
    desc: "Shira merasakan getaran lembut ponselnya sebagai alarm berdering, mengingatkannya pada tanggal yang sangat spesial, 7 September. Ini adalah hari ulang tahunnya...",
    genre: ["keseharian", "mitos"],
    imgSrc:"book.jpg"
  },
  {
    id: 6,
    title: "Ascension of The Pearlescent Edelweiss",
    author: "Amanda Mutiara",
    desc: "Shira merasakan getaran lembut ponselnya sebagai alarm berdering, mengingatkannya pada tanggal yang sangat spesial, 7 September. Ini adalah hari ulang tahunnya...",
    genre: ["keseharian", "mitos"],
    imgSrc:"book.jpg"
  },
  {
    id: 7,
    title: "Ascension of The Pearlescent Edelweiss",
    author: "Amanda Mutiara",
    desc: "Shira merasakan getaran lembut ponselnya sebagai alarm berdering, mengingatkannya pada tanggal yang sangat spesial, 7 September. Ini adalah hari ulang tahunnya...",
    genre: ["keseharian", "mitos"],
    imgSrc:"book.jpg"
  },
  {
    id: 8,
    title: "Ascension of The Pearlescent Edelweiss",
    author: "Amanda Mutiara",
    desc: "Shira merasakan getaran lembut ponselnya sebagai alarm berdering, mengingatkannya pada tanggal yang sangat spesial, 7 September. Ini adalah hari ulang tahunnya...",
    genre: ["keseharian", "mitos"],
    imgSrc:"book.jpg"
  },
];

const tagLists = [
  "Fable",
  "Myth",
  "Fairytale",
  "Slice of Life",
  "Epic or Sage",
];

const Kisahnesia = () => {
  return (
    <>
      <Navbar theme="light" selected="none" />
      <div className="overflow-hidden bg-white my-[100px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* bagian atas halaman */}
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mt-12">Kisahnesia</h1>
            <h5 className="text-gray-500 mt-2">
              Find interesting story for your kids!
            </h5>
            <div className="relative w-2/5 mt-3">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <span
                  role="img"
                  aria-label="search"
                  className="anticon anticon-search text-lg text-captions"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="search"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="bg-white border border-gray-300 text-secondary text-sm  focus:border-primary focus:outline-none block w-full ps-10 p-2.5 rounded-md"
                placeholder="Search a Story"
              ></input>
            </div>
            <div className="flex flex-row max-w-5xl gap-3 mt-3">
              {tagLists.map((tag: string, index: number) => (
                <span
                  className="bg-white hover:bg-primary600 hover:text-white translation-all duration-500 hover:cursor-pointer px-4 py-2 border border-gray-300 text-xs rounded-lg"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="border-b border-gray-300 mt-16 mx-32"></div>
          {/* rekomendasi cerita section */}
          <div className="mt-16 px-16">
            <h2 className="font-bold text-2xl mb-1">Recommended Story</h2>
            <p className="text-gray-500 text-md mb-6">
              WiseParent choices just for you
            </p>
            <Swiper
              spaceBetween={36} // Space between slides (36px)
              slidesPerView={5} // 5 slides per view
              slidesPerGroup={1} // 1 slide per group
              loop={true} // Enable loop mode
              grabCursor={true} // Enable grab cursor
            >
              {storyLists.map((slideContent, index) => (
                <SwiperSlide key={index}>
                  {/* Replace with your slide content */}
                  <div>
                    <img src={`/img/${slideContent.imgSrc}`} alt="book_cover" />
                    <div className="px-2 flex flex-col items-center mt-2">
                      <p className="mt-2 text-center text-sm font-bold text-gray-800">
                        {slideContent.title}
                      </p>
                      <p className="mt-1 text-xs text-primary500">
                        {slideContent.author}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* cerita lainnya section */}
          <div className="mt-16 px-16">
            <h2 className="font-bold text-2xl mb-1">Another Story</h2>
            <p className="text-gray-500 text-md mb-6">
              Your journey starts here
            </p>
            <div className="grid grid-cols-2 gap-8">
              {storyLists.map((slideContent, index) => (
                <div className="grid grid-cols-7 gap-6" key={index}>
                  <img
                    src="/img/book.jpg"
                    alt="book_cover"
                    className="col-span-2"
                  />
                  <div className="col-span-5 flex flex-col justify-center">
                    <h3 className="text-lg font-bold">{slideContent.title}</h3>
                    <p className="text-sm text-primary500 mt-1">
                      {slideContent.author}
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      {slideContent.desc}
                    </p>
                    <div className="flex flex-row gap-2 mt-3">
                      {slideContent.genre.map((namaGenre:string, index:number)=> (
                        <div key={index} className="text-xs px-3 py-1 border border-gray-300 rounded-xl capitalize">
                        {namaGenre}
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kisahnesia;
