import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { ProjectForm } from "@/components/dashboard/ui/project-form/ProjectForm";

export default function NewProjectPage() {

    return (
        <>
            <div className="flex flex-col  gap-8 sm:flex-row justify-between w-full lg:w-10/12 2xl:w-8/12 mx-auto mb-10">
                <h2 className="text-4xl font-bold text-indigo-600">New Project</h2>
                <Link
                    href={"/dashboard/projects"}
                    className="btn-primary text-xl py-3 px-6 w-fit flex items-center gap-2"
                >
                    <FaArrowLeft />
                    Back
                </Link>
            </div>

            <ProjectForm  />
        </>
    );
}