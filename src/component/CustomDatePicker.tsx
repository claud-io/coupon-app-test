import React, { useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ id, label, value, onChange }: any) => {
  useEffect(() => {
    !value && onChange(id, new Date());
  }, []);

  return (
    <div className="col-span-3 sm:col-span-2">
      <label htmlFor={id} className="block text-xl font-medium text-gray-700">
        {label}
      </label>
      <DatePicker
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mt-8"
        selected={value}
        onChange={(date: any) => onChange(id, date)}
      />
    </div>
  );
};

export default CustomDatePicker;
