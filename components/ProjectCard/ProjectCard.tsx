import Link from "next/link"
import type { Project } from "@/types"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full bg-black text-white dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative h-[200px] w-full overflow-hidden">
        <div className="flex items-center justify-center h-full">
          {project.icon ? (
            <div className="text-white text-4xl">{project.icon}</div>
          ) : (
            <div className="w-12 h-12 bg-white rounded-md"></div>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-medium mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto pt-4">
          <Link href={`/projects/${project.slug}`} className="text-sm text-gray-300 hover:text-white">
            See More →
          </Link>
        </div>
      </div>
    </div>
  )
}
