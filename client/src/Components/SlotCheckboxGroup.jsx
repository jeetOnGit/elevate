import React, { useState, useEffect } from "react";

const SlotCheckboxGroup = ({ onSelectionChange, resetSignal }) => {
  const slotOptions = {
    slot1: ["Group Singing"],
    slot2: ["Group Dancing", "Solo Extempore"],
    slot3: ["Group Drama", "Carroms(Singles)"],
    slot4: ["Solo Reels/video Editing", "Solo Painting"],
  };

  const initialState = {
    slot1: "",
    slot2: "",
    slot3: "",
    slot4: "",
  };

  const [slotSelections, setSlotSelections] = useState(initialState);

  const getFirstThreeCount = () =>
    [slotSelections.slot1, slotSelections.slot2, slotSelections.slot3].filter(
      Boolean
    ).length;

  const handleSlotChange = (slotKey, option) => {
    const current = slotSelections[slotKey];

    // toggle off
    if (current === option) {
      const updated = { ...slotSelections, [slotKey]: "" };
      setSlotSelections(updated);
      onSelectionChange(Object.values(updated).filter(Boolean));
      return;
    }

    // rule: max 2 across slot1-3
    if (
      ["slot1", "slot2", "slot3"].includes(slotKey) &&
      getFirstThreeCount() >= 2 &&
      !current
    ) {
      return;
    }

    // rule: only 1 in slot4
    if (slotKey === "slot4" && slotSelections.slot4 && !current) {
      return;
    }

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
        Pick 1–2 options from Slots 1–3 and exactly 1 option from Slot 4 *
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

                let shouldDisable = false;

                // disable if max 2 chosen in first 3
                if (
                  ["slot1", "slot2", "slot3"].includes(slotKey) &&
                  getFirstThreeCount() >= 2 &&
                  !isSelected
                ) {
                  shouldDisable = true;
                }

                // disable if already chosen 1 in slot4
                if (slotKey === "slot4" && slotSelections.slot4 && !isSelected) {
                  shouldDisable = true;
                }

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