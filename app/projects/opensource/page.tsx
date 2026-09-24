import { getProjects, Project } from "@/lib/projects-db"

export default async function OpenSourceProjectsPage() {

    const projects: Project[] = await getProjects("opensource")
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

