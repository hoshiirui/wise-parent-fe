import { PlusCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

const CreateEventButton = () => {
  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <PlusCircleIcon className="w-7 h-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
};

export default CreateEventButton;
