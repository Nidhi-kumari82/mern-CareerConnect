import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job?._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Company Info */}
      <div>
        <h1 className="font-medium text-lg">
          {job?.company?.name || "Company Name"}
        </h1>
        <p className="text-sm text-gray-500">
          {job?.location || "India"}
        </p>
      </div>

      {/* Job Details */}
      <div className="mt-2">
        <h1 className="font-bold text-lg">
          {job?.title}
        </h1>

        <p className="text-sm text-gray-600 line-clamp-2 mt-2">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Position
        </Badge>

        <Badge className="text-orange-500 font-bold" variant="ghost">
          {job?.jobType}
        </Badge>

        <Badge className="text-purple-600 font-bold" variant="ghost">
          {job?.salary ? `${job.salary} LPA` : "Not Disclosed"}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;