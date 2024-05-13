import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

interface ContextWrapperProps {
  children: React.ReactNode; // Define the type of props expected
}

const ContextWrapper: React.FC<ContextWrapperProps> = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
