import React, { useState, useEffect } from "react";

const SlotCheckboxGroup = ({ onSelectionChange, resetSignal }) => {
  const slotOptions = {
    slot1: ["Workshops", "Prayer Meeting"],
    slot2: ["Talent Show", "Bible Quiz"],
    slot3: ["Dance Night", "Campfire"]
  };

  const initialState = {
    slot1: "",
    slot2: "",
    slot3: ""
  };

  const [slotSelections, setSlotSelections] = useState(initialState);

  const totalSelectedCount = Object.values(slotSelections).filter(Boolean).length;

  const handleSlotChange = (slotKey, option) => {
    const current = slotSelections[slotKey];
    const updatedSelections = {
      ...slotSelections,
      [slotKey]: current === option ? "" : option
    };

    const updatedCount = Object.values(updatedSelections).filter(Boolean).length;

    if (updatedCount <= 2) {
      setSlotSelections(updatedSelections);
      onSelectionChange(Object.values(updatedSelections).filter(Boolean));
    }
  };

  // 🔁 Reset checkboxes when resetSignal changes
  useEffect(() => {
    setSlotSelections(initialState);
    onSelectionChange([]);
  }, [resetSignal]);

  return (
    <div className="space-y-6">
      <h3 className="block text-sm font-semibold text-gray-700 mb-2">
        Choose any 2 options from any slots*
      </h3>
      <div className="flex flex-col gap-2">
        {Object.entries(slotOptions).map(([slotKey, options], index) => (
          <div key={slotKey}>
            <h3 className="block text-sm font-semibold text-gray-700 mb-2">
              Slot {index + 1}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {options.map((option) => {
                const isSelected = slotSelections[slotKey] === option;
                const slotHasSelection = slotSelections[slotKey] !== "";
                const shouldDisable =
                  (!isSelected && slotHasSelection) ||
                  (!isSelected && totalSelectedCount >= 2);

                return (
                  <label
                    key={option}
                    className={`flex items-center space-x-2 border-indigo-500 py-5 px-3 rounded-md cursor-pointer text-left ${
                      shouldDisable
                        ? "bg-gray-50 text-gray-400"
                        : "bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={isSelected}
                      disabled={shouldDisable}
                      onChange={() => handleSlotChange(slotKey, option)}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className="font-medium">{option}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotCheckboxGroup;
