import React, { FunctionComponent } from 'react';

type CheckBoxPropType = {
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const CheckBox: FunctionComponent<CheckBoxPropType> = ({
  children,
  checked,
  onChange,
}: CheckBoxPropType) => {
  return (
    <div className="flex items-center bg-white">
      <label
        className="relative flex items-center rounded-[5px] cursor-pointer"
        htmlFor="blue"
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[5px] border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#005FCC] before:opacity-0 before:transition-opacity checked:border-[#005FCC] checked:bg-[#005FCC] checked:before:bg-[#005FCC] hover:before:opacity-10"
          id="blue"
          checked={checked}
          onChange={(event) => onChange && onChange(event.target.checked)}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <div className="pl-2">{children}</div>
    </div>
  );
};

export default CheckBox;
