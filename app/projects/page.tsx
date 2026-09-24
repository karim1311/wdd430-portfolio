export default async function Projects() {
    const response = await fetch("http://localhost:3000/api/projects"
    )

    const projects = await response.json()    
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