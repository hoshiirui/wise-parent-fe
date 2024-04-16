import React from "react";
import Navbar from "../components/Navbar/Navbar";

const ArticleDetails = () => {
  return (
    <>
      <Navbar theme="light" selected="krisbu" />
      <div className="overflow-hidden bg-white mt-[40px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="col-span-9 flex flex-col">At that last I see</div>
              <div className="col-span-3 flex flex-col">Krisbu ipsum</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
