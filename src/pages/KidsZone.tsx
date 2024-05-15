import Navbar from "../components/Navbar/Navbar";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const data = [
  {
    title: "Namely",
    description: "Temukan nama-nama indah beserta artinya",
    slug: "parenting-course-1",
  },
  {
    title: "Kisahnesia",
    description: "Beragam kisah menarik untuk sang buah hati",
    slug: "kisahnesia",
  },
  {
    title: "Lembar Ioforia",
    description: "Temukan lembar mewarnai untuk melatih anak Anda",
    slug: "ioforia",
  },
];

const KidsZone = () => {
  return (
    <>
      <Navbar theme="light" selected="kidszone" />
      <div className="overflow-hidden bg-white my-[100px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border border-primary500 flex flex-col items-center rounded-md">
            <h1 className="text-4xl font-bold text-center mt-12">Kids Zone</h1>
            <h5 className="text-gray-500 mt-2 mb-12">
              Zona bermain untuk buah hati Anda
            </h5>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 mt-6">
            {data.map((item, index) => (
              <a href={`kidszone/${item.slug}`} key={index}>
                <div className="col-span-1 flex flex-col p-6 border-primary300 border bg-white rounded-lg cursor-pointer">
                  <CheckBadgeIcon className="h-12 text-primary600" />
                  <p className="font-bold text-xl mt-4 text-center">
                    {item.title}
                  </p>
                  <p className="text-sm mt-2 text-center">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default KidsZone;
