import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

const ParentingGuide = () => {
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

  const tags = [
    {
      title: "Parenting",
      href: "parenting",
    },
    {
      title: "Stimulasi",
      href: "stimulasi",
    },

    {
      title: "Nutrisi",
      href: "nutrisi",
    },
  ];

  return (
    <>
      <Navbar theme="light" selected="parenting" />
      <div className="overflow-hidden bg-white mt-[40px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="col-span-9 flex flex-col">
                <img
                  className="w-full h-full rounded-xl"
                  src={`/img/hero-default-1.jpg`}
                  alt="Wise Parent Hero"
                />
                <div className="w-full border-b border-gray-300 mt-8"></div>
                <div className="flex flex-col">
                  <p className="text-primary600 text-xl font-bold my-4">
                    News Feed
                  </p>
                  <div className="flex flex-col gap-8">
                    {data.map((item, index) => (
                      <a href={`parenting/article/${item.slug}`} key={index}>
                        <div className="grid lg:grid-cols-3 gap-8">
                          <img
                            className="w-full h-full col-span-1 rounded-lg"
                            src={`/img/${item.imgTitle}`}
                            alt="Wise Parent Hero"
                          />

                          <div className="flex flex-col col-span-2 gap-4">
                            <div className="flex flex-row gap-2">
                              {item.category.map((tags, index) => (
                                <p
                                  key={index}
                                  className="text-sm px-2 py-1 bg-secondary600 text-white rounded-lg"
                                >
                                  {tags}
                                </p>
                              ))}
                            </div>
                            <p className="font-bold text-2xl">{item.title}</p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                            <p className="text-sm">{item.timestamp}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="w-full border-b border-gray-300 mt-8"></div>
                  <p className="text-primary600 text-xl font-bold my-4">
                    Recommended For You
                  </p>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                      <div
                        className="col-span-1 flex flex-col gap-4"
                        key={index}
                      >
                        <img
                          className="w-full rounded-lg mb-2"
                          src={`/img/${item.imgTitle}`}
                          alt="Wise Parent Hero"
                        />
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
                        <p className="font-bold text-xl">{item.title}</p>

                        <p className="text-sm">{item.timestamp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <p className="text-primary600 text-lg font-bold mb-4">
                  Search This Site
                </p>
                <input
                  type="text"
                  className="border py-2 px-4 border-gray-300 rounded-sm"
                  placeholder="search here"
                />
                <div className="w-full border-b border-gray-300 mt-8"></div>
                <p className="text-primary600 text-lg font-bold my-4">
                  Categories
                </p>
                <div className="flex flex-col gap-3">
                  {tags.map((tag, index) => (
                    <a href={`/parenting/${tag.href}`} key={index}>
                      <div className="border py-2 px-4 border-gray-300 rounded-md hover:bg-primary600 hover:text-white hover:border-primary600">
                        {tag.title}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParentingGuide;
