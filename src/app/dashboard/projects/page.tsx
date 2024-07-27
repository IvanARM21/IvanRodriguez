import { TableProjects } from "@/components";
import { TitleSection } from "@/components/ui/section/TitleSection";
import Link from "next/link";

export default function ProjectsDashboardPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold text-indigo-600">Project Management</h2>
        <Link
          href={"/dashboard/projects/new"}
          className="btn-primary block ml-auto text-xl py-3 px-6 w-fit"
        >New Project</Link>
      </div>
      <div className="mt-10 overflow-x-auto ">
        <TableProjects />
      </div>
    </>
  );
}