import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const ArticleDetails = () => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const textarea = event.target;
    const { value } = textarea;
    const maxCharacters = 1000;

    if (value.length <= maxCharacters) {
      textarea.style.height = "auto"; // Reset height to auto to allow textarea to resize
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight of the textarea
      setText(value);
    } else {
      // Truncate the input text if it exceeds the maximum character count
      setText(value.slice(0, maxCharacters));
    }
  };

  const handleSubmit = () => {
    if (text.trim() !== "") {
      // Add a new comment with the current text to the comments array
      setComments([...comments, text]);
      // Clear the textarea
      setText("");
    }
  };

  const data = [
    {
      title: "Mas Krisbu Melakukan Crossdress di Plaza Renon",
      description:
        "With practical guidance and a deep understanding of children's needs, you will discover ways to form strong relationships and achieve happiness together in the journey of raising children.",
      timestamp: "3 Minutes Ago - Wise Parent Admin",
      imgTitle: "mock.jpg",
      category: ["Parenting"],
      slug: "mas-krisbu-melakukan-crossdress-di-plaza-renon",
    },
    {
      title: "Mas Krisbu Masak Sambil Masuk",
      description:
        "With practical guidance and a deep understanding of children's needs, you will discover ways to form strong relationships and achieve happiness together in the journey of raising children.",
      timestamp: "60 Minutes Ago - Wise Parent Admin",
      imgTitle: "mock.jpg",
      category: ["Parenting"],
      slug: "mas-krisbu-melakukan-crossdress-di-plaza-renon",
    },
    {
      title: "Mas Krisbu Masak Sambil Masuk",
      description:
        "With practical guidance and a deep understanding of children's needs, you will discover ways to form strong relationships and achieve happiness together in the journey of raising children.",
      timestamp: "90 Minutes Ago - Wise Parent Admin",
      imgTitle: "mock.jpg",
      category: ["Parenting", "Stimulasi"],
      slug: "mas-krisbu-melakukan-crossdress-di-plaza-renon",
    },
    // Add more objects as needed
  ];
  return (
    <>
      <Navbar theme="light" selected="krisbu" />
      <div className="overflow-hidden bg-white mt-[40px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="col-span-8 flex flex-col">
                <p className="text-4xl font-semibold leading-snug">
                  Perlu Kamu Ketahui, Ini Starter Pack Wajib untuk Kamu Berlibur
                  Ke Bali!
                </p>
                <div className="flex flex-row justify-between md:justify-start gap-4 my-4">
                  <p className="text-lg font-semibold text-gray-500">
                    Oleh Admin WiseParent
                  </p>
                  <p className="text-lg font-semibold text-gray-500">|</p>
                  <p className="text-lg font-semibold text-gray-500">
                    Rabu, 27 Desember 2024
                  </p>
                </div>
                <img src="/img/mock.jpg" alt="artikel" className="mt-4" />
                <p className="my-12 text-lg text-gray-700">
                  Apakah kamu merencanakan liburan ke Pulau Dewata, Bali? Jika
                  iya, kamu pasti ingin memastikan bahwa persiapanmu sudah
                  lengkap agar pengalaman liburanmu semakin berkesan. Bali
                  menawarkan beragam keindahan alam, budaya yang kaya, dan
                  aktivitas seru yang bisa kamu nikmati. Nah, agar liburanmu
                  semakin nyaman dan menyenangkan, ada beberapa item wajib yang
                  harus ada dalam starter packmu. Yuk, simak apa saja yang perlu
                  kamu siapkan sebelum berlibur ke Bali!
                </p>
                <p className="mb-12 text-lg text-gray-700">
                  Apakah kamu merencanakan liburan ke Pulau Dewata, Bali? Jika
                  iya, kamu pasti ingin memastikan bahwa persiapanmu sudah
                  lengkap agar pengalaman liburanmu semakin berkesan. Bali
                  menawarkan beragam keindahan alam, budaya yang kaya, dan
                  aktivitas seru yang bisa kamu nikmati. Nah, agar liburanmu
                  semakin nyaman dan menyenangkan, ada beberapa item wajib yang
                  harus ada dalam starter packmu. Yuk, simak apa saja yang perlu
                  kamu siapkan sebelum berlibur ke Bali!
                </p>
                <p className="mb-12 text-lg text-gray-700">
                  Apakah kamu merencanakan liburan ke Pulau Dewata, Bali? Jika
                  iya, kamu pasti ingin memastikan bahwa persiapanmu sudah
                  lengkap agar pengalaman liburanmu semakin berkesan. Bali
                  menawarkan beragam keindahan alam, budaya yang kaya, dan
                  aktivitas seru yang bisa kamu nikmati. Nah, agar liburanmu
                  semakin nyaman dan menyenangkan, ada beberapa item wajib yang
                  harus ada dalam starter packmu. Yuk, simak apa saja yang perlu
                  kamu siapkan sebelum berlibur ke Bali!
                </p>
                <p className="mb-12 text-lg text-gray-700">
                  Apakah kamu merencanakan liburan ke Pulau Dewata, Bali? Jika
                  iya, kamu pasti ingin memastikan bahwa persiapanmu sudah
                  lengkap agar pengalaman liburanmu semakin berkesan. Bali
                  menawarkan beragam keindahan alam, budaya yang kaya, dan
                  aktivitas seru yang bisa kamu nikmati. Nah, agar liburanmu
                  semakin nyaman dan menyenangkan, ada beberapa item wajib yang
                  harus ada dalam starter packmu. Yuk, simak apa saja yang perlu
                  kamu siapkan sebelum berlibur ke Bali!
                </p>
              </div>
              <div className="col-span-4 flex flex-col">
                <div className="flex flex-col">
                  <p className="text-primary600 text-xl font-bold my-4">
                    Read Next
                  </p>
                  <div className="flex flex-col gap-6">
                    {data.map((item, index) => (
                      <a href={`parenting/article/${item.slug}`} key={index}>
                        <div className="grid lg:grid-cols-3 gap-4">
                          <img
                            className="w-full h-full col-span-1 rounded-lg"
                            src={`/img/${item.imgTitle}`}
                            alt="Wise Parent Hero"
                          />

                          <div className="flex flex-col col-span-2 gap-2">
                            <div className="flex flex-row gap-2">
                              {item.category.map((tags, index) => (
                                <p
                                  key={index}
                                  className="text-xs px-2 py-1 bg-secondary600 text-white rounded-lg"
                                >
                                  {tags}
                                </p>
                              ))}
                            </div>
                            <p className="font-semibold text-md">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="col-span-8 flex flex-col">
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="font-semibold text-lg">Comment</p>
                  <div className="bg-white border-gray-200 shadow-sm py-4 mt-4 rounded-lg">
                    <textarea
                      className="w-full px-4 focus:outline-none"
                      placeholder="Write Comment"
                      value={text}
                      onChange={handleChange}
                      style={{ minHeight: "80px" }} // Set a minimum height to prevent the textarea from becoming too small
                    />
                    <div className="border-b border-gray-200 my-4"></div>
                    <div className="flex flex-row mx-4 justify-between items-center">
                      <p className="text-sm">
                        {1000 - text.length} characters left
                      </p>
                      <button
                        className="text-sm bg-primary500 text-white px-4 py-2"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                {/* Render the comments */}
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 p-4 rounded-lg mt-4"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <img
                        id="avatarButton"
                        className="w-8 h-8 rounded-full cursor-pointer"
                        src="/img/sampul.jpg"
                        alt="User dropdown"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm">Miori Celesta</p>
                        <p className="text-xs">March, 20 2024</p>
                      </div>
                    </div>

                    <p className="my-2">{comment}</p>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="flex flex-row gap-1 items-center">
                        <img
                          src="/img/laiks.svg"
                          alt="like"
                          className="w-5 h-5"
                        />
                        <p className="text-sm">5</p>
                      </div>
                      <div className="flex flex-row gap-1 items-center">
                        <img
                          src="/img/dislaiks.svg"
                          alt="like"
                          className="w-5 h-5"
                        />
                        <p className="text-sm">5</p>
                      </div>
                      <p className="mx-2">Reply</p>
                      <p className="mx-2">Report</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
