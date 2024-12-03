const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Java', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
        },
        {
            title: 'Frameworks',
            skills: ['Spring', 'Spring Boot', 'React', 'NextJS', 'Node'],
        },
        {
            title: 'Tools',
            skills: ['Git', 'Chrome DevTools', 'Postman', 'Postgres', 'AWS & Cloud Foundry'],
        },
        {
            title: 'Design',
            skills: ['Figma', 'User Testing', 'Wireframing'],
        },
    ];

    return (
        <section
            id="skills"
            className="w-full mt-16 ml-8 grid grid-cols-1 md:grid-cols-[25%_75%] gap-16"
        >
            <h2 className="text-lg font-bold uppercase tracking-wider">
                Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillCategories.map((category) => (
                    <div key={category.title}>
                        <span className="font-bold text-lg">{category.title}</span>
                        {category.skills.map((skill) => (
                            <p key={skill}>{skill}</p>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;