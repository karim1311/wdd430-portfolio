import { Project } from "@/lib/projects-db"

export default async function OpenSourceProjectsPage() {
    const response = await fetch("http://localhost:3000/api/projects?type=opensource"
    )

    const projects: Project[] = await response.json()
    return (
        <>
            <h1>Open Source Projects</h1>

            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </>
    )
}

