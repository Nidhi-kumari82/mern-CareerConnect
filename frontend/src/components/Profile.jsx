import React, { useState } from "react";
import Navbar from "./ui/shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const skills = user?.profile?.skills || [];
  return (
    <div>
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        {/* Top Section */}
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <Avatar className="w-24 h-24 rounded-full overflow-hidden border">
              <AvatarImage
                src={
                  user?.profile?.profilePhoto ||
                  "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                }
                alt="User Avatar"
                className="w-full h-full"
              />
            </Avatar>

            {/* User Info */}
            <div className="text-start">
              <h1 className="font-medium text-xl">
                {user?.fullname || "User"}
              </h1>
              <p>{user?.profile?.bio || "No bio provided"}</p>
            </div>
          </div>

          {/* Edit Button */}
          <Button
            onClick={() => setOpen(true)}
            className="text-right cursor-pointer"
          >
            <Pen />
          </Button>
        </div>

        {/* Contact Info */}
        <div>
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email || "Email not available"}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber || "Phone number not available"}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-5">
          <h1 className="font-bold text-start">Skills</h1>
          <div className="flex flex-wrap items-center gap-2">
            {skills.length > 0 ? (
              skills.map((item, index) => (
                <Badge className="bg-black text-white px-3 py-1" key={index}>
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="grid w-full max-w-sm items-center text-start gap-1.5">
          <Label className="text-md font-bold">Resume</Label>

          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-5">
        <h1 className="text-left font-bold text-lg">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      {/* Dialog */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
