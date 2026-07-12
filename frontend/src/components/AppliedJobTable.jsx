import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJob } = useSelector((store) => store.job);

  return (
    <div>
      <Table>
        <TableCaption className=""> "A List of your applied Jobs </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJob.length <= 0 ? (
            <span>you haven't applied any job yet</span>
          ) : (
            allAppliedJob.map((appliedJob) => (
              <TableRow className="" key={appliedJob?._id}>
                <TableCell>
                  {appliedJob?.createdAt
                    ? new Date(appliedJob.createdAt).toLocaleDateString()
                    : "N/A"}
                </TableCell>{" "}
                <TableCell>{appliedJob.job.title}</TableCell>
                <TableCell>{appliedJob.job.company?.name || "N/A"}</TableCell>
                <TableCell className="text-right">
                  <Badge className="bg-black text-white rounded-2xl">
                    {appliedJob.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
