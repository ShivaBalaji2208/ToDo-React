import React from "react";

const Child = ({ val, setVal }) => {
  const handleValue = (name) => {
    if (name === "increment") {
      setVal((val) => val + 1);
    } else if (name === "decrement") {
      if (val > 0) {
        setVal((val) => val - 1);
      }
    }
  };
  return (
    <div style={{ display: "inline-block" }}>
      <button name="increment" onClick={() => handleValue("increment")}>
        Increment
      </button>
      <button
        name="decrement"
        disabled={val === 0 ? true : false}
        onClick={() => handleValue("decrement")}
      >
        Decrement
      </button>
    </div>
  );
};
export default React.memo(Child);
