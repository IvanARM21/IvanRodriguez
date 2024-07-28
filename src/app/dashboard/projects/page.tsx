import { TableProjects } from "@/components";
import Link from "next/link";

export default function ProjectsDashboardPage() {
  return (
    <>
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
        <h2 className="text-4xl font-bold text-indigo-600">Project Management</h2>
        <Link
          href={"/dashboard/projects/new"}
          className="btn-primary block text-xl py-3 px-6 w-fit"
        >New Project</Link>
      </div>
      <div className="mt-10 overflow-x-auto">
        <TableProjects />
      </div>
    </>
  );
}