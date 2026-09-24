import { getProjects, Project } from "@/lib/projects-db"

export default async function SchoolProjectsPage() {

    const projects: Project[] = await getProjects("school")
    return (
        <>
            <h1>School Projects</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}              
        </>
    )
}