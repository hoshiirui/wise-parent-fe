import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { getMonth } from "../utils/schedule";
import CalendarHeader from "../components/Scheduler/CalendarHeader";
import CalendarSidebar from "../components/Scheduler/CalendarSidebar";
import CalendarMonth from "../components/Scheduler/CalendarMonth";
import GlobalContext from "../context/GlobalContext";
import EventModal from "../components/Scheduler/EventModal";

const Schedule = () => {
  console.table(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <Navbar theme="light" selected="schedule" />
      <div className="overflow-hidden bg-white my-[100px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">testestse</div>
        </div>
      </div>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <CalendarSidebar />
          <CalendarMonth month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default Schedule;
