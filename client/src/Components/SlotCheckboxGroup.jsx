import React, { useState, useEffect } from "react";

const SlotCheckboxGroup = ({ onSelectionChange, resetSignal }) => {
  const slotOptions = {
    slot1: ["Group Singing", "Table Tennis(Doubles)"],
    slot2: ["Group Dancing", "Solo Extempore"],
    slot3: ["Group Drama", "Carroms(Singles)"],
    slot4: ["Solo Reels Editing", "Solo Painting"],
  };

  const initialState = {
    slot1: "",
    slot2: "",
    slot3: "",
    slot4: "",
  };

  const [slotSelections, setSlotSelections] = useState(initialState);

  const totalSelectedCount = Object.values(slotSelections).filter(Boolean).length;

  const handleSlotChange = (slotKey, option) => {
    const current = slotSelections[slotKey];

    // if already selected → deselect
    if (current === option) {
      const updated = { ...slotSelections, [slotKey]: "" };
      setSlotSelections(updated);
      onSelectionChange(Object.values(updated).filter(Boolean));
      return;
    }

    // if already selected 2 slots, don't allow new
    if (totalSelectedCount >= 2 && !current) return;

    // else update normally
    const updated = { ...slotSelections, [slotKey]: option };
    setSlotSelections(updated);
    onSelectionChange(Object.values(updated).filter(Boolean));
  };

  useEffect(() => {
    setSlotSelections(initialState);
    onSelectionChange([]);
  }, [resetSignal]);

  return (
    <div className="space-y-6">
      <h3 className="block text-sm font-semibold text-gray-700 mb-2">
        Select exactly 2 options from 4 slots*
      </h3>

      <div className="flex flex-col gap-6">
        {Object.entries(slotOptions).map(([slotKey, options], index) => (
          <div key={slotKey}>
            <h3 className="block text-sm font-semibold text-gray-700 mb-2">
              Slot {index + 1}
            </h3>
            <div className="grid grid-cols-2 gap-3 max-[420px]:grid-cols-1">
              {options.map((option) => {
                const isSelected = slotSelections[slotKey] === option;
                const slotHasSelection = slotSelections[slotKey] !== "";
                const shouldDisable =
                  (!isSelected && slotHasSelection) || // only 1 per slot
                  (!isSelected && totalSelectedCount >= 2); // total max 2

                return (
                  <label
                    key={option}
                    className={`flex items-center space-x-2 border py-3 px-4 rounded-md cursor-pointer text-left transition ${
                      shouldDisable
                        ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                        : "bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={isSelected}
                      disabled={shouldDisable}
                      onChange={() => handleSlotChange(slotKey, option)}
                      className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className="font-medium text-sm">{option}</span>
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
