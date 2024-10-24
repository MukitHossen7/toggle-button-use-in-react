import { useState } from "react";
import HelloComponent from "./HelloComponent";
import ReactComponent from "./ReactComponent";

const MainBtn = () => {
  const [isCondition, setIsCondition] = useState(false);
  const handleCondition = () => {
    setIsCondition(true);
  };
  const handleCondition2 = () => {
    setIsCondition(false);
  };
  return (
    <div className="space-x-2">
      <button
        onClick={handleCondition}
        className={
          isCondition
            ? "bg-teal-500 px-4 py-3 rounded-xl font-medium text-white"
            : "btn"
        }
      >
        Hello Jsx component
      </button>
      <button
        onClick={handleCondition2}
        className={
          !isCondition
            ? "bg-teal-500 px-4 py-3 rounded-xl font-medium text-white"
            : "btn"
        }
      >
        React Jsx components
      </button>
      <div className="pt-10">
        {isCondition ? <HelloComponent></HelloComponent> : <ReactComponent />}
      </div>
    </div>
  );
};

export default MainBtn;
