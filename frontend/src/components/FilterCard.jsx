import { setSearchedQuery } from "@/redux/jobSlice";
import { Label } from "@radix-ui/react-label";
import * as RadioGroup from "@radix-ui/react-radio-group"; // Import as a namespace
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Patna", "Bangalore", "Pune", "Hyderabad", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  { filterType: "Salary", array: ["0-40k", "42k-1Lakh", "1Lakh to 5Lakh"] },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };
  useEffect(() => {
    console.log(selectedValue);
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Filter Jobs</h1>
      <hr className="mt-3" />

      {filterData.map((data, index) => (
        <div key={index} className="mt-4">
          <h2 className="font-bold text-lg">{data.filterType}</h2>

          {/* Ensure `RadioGroup.Root` wraps `RadioGroup.Item` */}
          <RadioGroup.Root
            value={selectedValue}
            onValueChange={changeHandler}
            className="mt-2 space-y-2"
          >
            {data.array.map((item, idx) => {
              const radioId = `${data.filterType}-${idx}`;
              return (
                <div key={idx} className="flex items-center space-x-2">
                  {/* Ensure `RadioGroup.Item` has an `id` */}
                  <RadioGroup.Item
                    id={radioId}
                    value={item}
                    className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center data-[state=checked]:bg-blue-800 "
                  >
                    {/* Inner dot for selected state */}
                    <div className="w-2 h-2 bg-white rounded-full hidden data-[state=checked]:block " />
                  </RadioGroup.Item>
                  <Label htmlFor={radioId}>{item}</Label>
                </div>
              );
            })}
          </RadioGroup.Root>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
