interface Skill {
    description: string;
}


interface SkillListProps {
    skills: Skill[];
}

export default function Skills({skills}: SkillListProps){
    return (
        <article className="p-4 border-1-4 border-blue-600 bg-gray-50 rounded">
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            {skills.map((skill) => (
                <li key={skill.description} className="text-gray-700 mx-4">{skill.description}</li>
            ))}
        </article>
    )
}