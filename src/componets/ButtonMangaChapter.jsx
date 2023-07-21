import React, { useState } from 'react';

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative flex justify-between w-[200px] ">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleChange}
        />
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner">manga</div>
        <div
          className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 ${
            isChecked ? 'left-6' : 'left-0'
          }`}
        >chapter </div>
      </div>
      <div className="ml-3">
        <div className={`text-gray-700 ${isChecked ? 'pl-8' : 'pr-8'}`}>
          {isChecked ? 'On' : 'Off'}
        </div>
        <div className={`text-gray-500 ${isChecked ? 'pr-8' : 'pl-8'}`}>
          {isChecked ? 'Off' : 'On'}
        </div>
      </div>
    </label>
  );
};

export default Switch;