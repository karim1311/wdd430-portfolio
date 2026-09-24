import { getProjects, Project } from "@/lib/projects-db"

export default async function Projects() {
    const projects: Project[] = await getProjects()    
    return (
        <>
            <h1>Projects Overview</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}            
        </>
    )
}