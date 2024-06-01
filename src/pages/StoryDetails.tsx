import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import DefaultLoading from "../components/Loading/DefaultLoading";

const StoryDetails = () => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [storyData, setStoryData] = useState<any>();
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: responseStory } = await axios.get(
          `http://127.0.0.1:8000/api/v1/kisahnesia/story/${slug}`
        );
        setStoryData(responseStory.story);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(storyData);

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
      title: "Benefits of Milk for Children's Brain Development",
      description:
        "Having intelligent children is the hope of all mothers. The development of a baby's brain does not just appear, it starts in the womb and continues to develop until childhood. Mothers may also have consumed milk for the development of their child's brain since pregnancy.",
      timestamp: "3 Minutes Ago - Wise Parent Admin",
      imgTitle: "nutrisi.png",
      category: ["Nutrition"],
      slug: "benefits-of-milk-for-childrens-brain-development",
    },
    {
      title: "Effective Ways to Educate Children to Be Smart and Intelligent",
      description:
        "Smart children are considered to be able to achieve better in school and achieve success in life. Therefore, it is not uncommon for parents to be willing to do anything to make their children smarter, such as enrolling their children in tutoring/course programs.",
      timestamp: "60 Minutes Ago - Wise Parent Admin",
      imgTitle: "stimulasi.png",
      category: ["Stimulation"],
      slug: "effective-ways-to-educate-children-to-be-smart-and-intelligent",
    },
    {
      title: "How to Support Children's Potential in the Digital Era",
      description:
        "Technological advances in the digital era provide many benefits in human life, such as facilitating communication, searching for information, and helping the learning process.",
      timestamp: "90 Minutes Ago - Wise Parent Admin",
      imgTitle: "parenting.png",
      category: ["Parenting", "Stimulation"],
      slug: "how-to-support-childrens-potential-in-the-digital-era",
    },
    // Add more objects as needed
  ];

  return (
    <>
      {loading && <DefaultLoading />}

      {!loading && (
        <>
          <Navbar theme="light" selected="krisbu" />
          <div className="overflow-hidden bg-white mt-[40px]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="my-16 mx-6">
                <div className="grid lg:grid-cols-12 gap-12">
                  <div className="col-span-8 flex flex-col">
                    <p className="text-4xl font-semibold leading-snug">
                      {storyData.title}
                    </p>
                    <div className="flex flex-row justify-between md:justify-start gap-4 my-4">
                      <p className="text-lg font-semibold text-gray-500">
                        {storyData.writer}
                      </p>
                      <p className="text-lg font-semibold text-gray-500">|</p>
                      <p className="text-lg font-semibold text-gray-500">
                        Wednesday, March 20 2024
                      </p>
                    </div>
                    <img
                      src={`http://127.0.0.1:8000/storage/${storyData.thumbnail}`}
                      alt="artikel"
                      className="mt-4 w-[50%]"
                    />
                    <p className="my-12 text-lg text-gray-700">
                      {storyData.content}
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      In fact, Mother, how well the brain develops depends on
                      many factors other than genes, namely:
                    </p>
                    <ul className="mb-12">
                      <li className="text-lg mb-2 text-gray-700">
                        - Nutrition that begins during pregnancy
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Exposure to toxins or infections
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Children's experiences with other people
                      </li>
                      <li className="text-lg  text-gray-700">
                        - Parenting patterns.
                      </li>
                    </ul>
                    <p className="mb-12 text-lg text-gray-700">
                      Nutrition is obtained from nutritious foods and drinks
                      Mother has consumed it since she was pregnant with her
                      baby. Starting from vegetables, animal and vegetable side
                      dishes, fruit and milk which supports brain development.
                      In this article, it will be discusses some of the benefits
                      of milk for children's brain development.
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Milk contains calcium, vitamin D, protein, vitamin A, and
                      zinc which is all important for growth and development of
                      the baby. Milk also contains fat is a source of calories
                      for your little one. Plus, milk which is fortified with
                      micronutrients and non-fatty acids Polyunsaturated fats
                      like omega 3 are good for development Baby's cognitive.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      The nutritional content in milk is good for children's
                      brains
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      As mentioned earlier, milk contains a lot of it nutrition
                      to support brain function. So what are the contents? the
                      nutrients that need to be in milk for your little one help
                      the development of brain function?
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      1. Calcium
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      One of the important nutrients contained in milk and
                      Calcium is important for your baby's brain health. Calcium
                      is not only important for bone health, however also helps
                      brain development. The body needs calcium so that muscles
                      can move and help nerves carry messages from the brain to
                      the whole body. Calcium also helps vessels blood
                      circulates blood throughout the body and helps releases
                      hormones that are important for the body.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      2. Protein
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Central nervous system, organs that include the brain and
                      marrow spine, requires a certain amount of amino acids
                      found in protein foods. Amino acids such as tryptophan,
                      tyrosine, histidine and arginine are required in order the
                      brain can function normally.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      3. Omega-3 fatty acids
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      As mentioned earlier, milk is fortified Polyunsaturated
                      fatty acids (PUFA) have a good effect on children's
                      cognitive function. Well, one type of PUFA that can be
                      found in milk is omega 3. Omega 3 is an acid
                      Polyunsaturated fats are important for cognitive
                      performance in all stages of life. Eicosapentaenoic Acid
                      (EPA), Docosahexaenoic Acid (DHA), and Alpha-linolenic
                      Acid (ALA) are omega 3 and all three are essential for
                      function brain. Research shows, consuming omega-3 improves
                      cognitive function, learning, memory, and improve blood
                      flow in the brain.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      4. Vitamin D
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Vitamin D is very important for us because Vitamin D helps
                      regulation of calcium in the body so that the body
                      functions normally and is also useful for bone formation.
                      Besides that, Vitamin D also plays an important role in
                      brain and nerve development. Mother can get vitamins D by
                      sunbathing for 10-15 minutes in the sun rising until 9 am
                      or from 3 pm until Sunset. Apart from that, Mother also
                      gets it Vitamin D from foods such as fish, red meat,
                      chicken or beef liver, egg yolk and similar food products
                      Fortified like formula milk.
                    </p>
                  </div>
                  <div className="col-span-4 flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-primary600 text-xl font-bold my-4">
                        Read Next
                      </p>
                      <div className="flex flex-col gap-6">
                        {data.map((item, index) => (
                          <a href={`${item.slug}`} key={index}>
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
      )}
    </>
  );
};

export default StoryDetails;
