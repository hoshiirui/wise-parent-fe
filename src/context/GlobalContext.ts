import React from "react";

interface GlobalContextInterface {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  smallCalendarMonth: any;
  setSmallCalendarMonth: (index: any) => void;
  daySelected: any;
  setDaySelected: (day: any) => void;
  showEventModal: boolean;
  setShowEventModal: (status: any) => void;
  dispatchCalEvent: ({ type, payload }: any) => void;
  savedEvents: any;
}

const GlobalContext = React.createContext<GlobalContextInterface>({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index: any) => {},
  daySelected: null,
  setDaySelected: (day: any) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
});

export default GlobalContext;
