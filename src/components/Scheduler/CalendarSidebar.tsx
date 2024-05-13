import React from "react";
import CreateEventButton from "./CreateEventButton";

const CalendarSidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
    </aside>
  );
};

export default CalendarSidebar;
