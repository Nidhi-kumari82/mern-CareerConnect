import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import { toast } from "sonner";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      toast.error("Please enter a job title or keyword");
      return;
    }

    dispatch(setSearchedQuery(trimmedQuery));
    navigate("/browse");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchJobHandler();
    }
  };
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium">
          Find Your Dream Career
        </span>
        <h1 className="text-5xl  font-bold">
          Discover Jobs That <br />
          Match Your <span className="text-[#6A38C2]">Skills</span>
        </h1>
        <p className="">
          Connect with leading companies and explore opportunities that help you
          build a successful career.
        </p>

        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search by job title, keyword, or company"
            className="outline-none border-none w-full"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6A38C2]  "
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
