import Image from "next/image";

const Experience = () => {
    const experiences = [
        {
            company: 'SAP',
            role: 'Fullstack Engineer, Partner Engineering',
            duration: 'March 2020 - September 2024',
            imageSrc: '/sap_logo.png',
        },
        {
            company: 'Maxar',
            role: 'Software Engineer I, Charting & Encoding Engineering',
            duration: 'September 2019 - March 2020',
            imageSrc: '/maxar_logo.png',
        },
        {
            company: 'Royal Canadian Mounted Police (RCMP)',
            role: 'Software Developer, Firearms Reference Program',
            duration: 'September 2018 - September 2019',
            imageSrc: '/rcmp_logo.png',
        },
        {
            company: 'University of Ottawa SUNLAB',
            role: 'Research Assistant, University Research Opportunity Scholarship',
            duration: 'September 2018 - January 2019',
            imageSrc: '/uottawa_logo.png',
        },
        {
            company: 'Nokia',
            role: 'Software Developer Intern, Analytics',
            duration: 'September 2017 - April 2018',
            imageSrc: '/nokia_logo.jpg',
        },
    ];

    return (
        <section
            id="experience"
            className="w-9/10 mt-16 m-8 grid grid-cols-1"
        >
            <h2 className="text-lg font-bold uppercase tracking-wider">
                Experience
            </h2>
            {experiences.map(({ company, role, duration, imageSrc }, index) => (

                <div className="grid grid-cols-2 gap-8 md:gap-16 m-8 items-center">
                    <div key={index} className="grid grid-cols-1 gap-4">
                        <span className="font-bold text-lg">{company}</span>
                        <span className="">{duration}</span>
                        <p>{role}</p>
                    </div>

                    <Image
                        src={imageSrc}
                        alt="Company Logo"
                        width={150}
                        height={100}
                    />
                </div>
            ))}
        </section>
    );
};

export default Experience;