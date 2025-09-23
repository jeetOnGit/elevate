import React, { useState, useEffect } from "react";

const SlotCheckboxGroup = ({ onSelectionChange, resetSignal }) => {
  const [selected, setSelected] = useState([]);

  const options = [
    "Group Singing",
    "Group Dancing",
    "Table Tennis(Doubles)",
    "Solo Extempore",
    "Group Drama",
    "Carroms(Singles)",
    "Solo Reels Editing",
    "Solo Painting",
  ];

  const handleChange = (value) => {
    if (selected.includes(value)) {
      // Unselect if already selected
      setSelected(selected.filter((item) => item !== value));
    } else {
      // Allow max 3 selections
      if (selected.length < 3) {
        setSelected([...selected, value]);
      }
    }
  };

  // send data up to parent
  useEffect(() => {
    onSelectionChange(selected);
  }, [selected, onSelectionChange]);

  // reset when parent sends resetSignal
  useEffect(() => {
    if (resetSignal) {
      setSelected([]);
    }
  }, [resetSignal]);

  return (
    <div className="p-4 text-black">
      <h2 className="font-bold mb-2">Choose any 3 options*</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt, idx) => {
          const isDisabled =
            !selected.includes(opt) && selected.length >= 3;

          return (
            <label
              key={idx}
              className={`flex items-center space-x-2 py-3 px-4 rounded-md cursor-pointer text-left gap-2
                ${
                  isDisabled
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-70"
                    : "bg-indigo-50 text-indigo-800 border border-indigo-500 hover:bg-indigo-100"
                }`}
            >
              <input
                type="checkbox"
                value={opt}
                checked={selected.includes(opt)}
                onChange={() => handleChange(opt)}
                disabled={isDisabled}
                className="accent-indigo-600"
              />
              {opt}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SlotCheckboxGroup;
