import { Project } from "@/lib/projects-db"

export default async function SchoolProjectsPage() {
    const response = await fetch("http://localhost:3000/api/projects?type=school")

    const projects: Project[] = await response.json()
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