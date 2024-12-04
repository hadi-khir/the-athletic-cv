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
        <div id='experience'>
            <h2 className="text-lg font-bold tracking-wider">
                Experience
            </h2>
            {experiences.map(({ company, role, duration, imageSrc }, index) => (
                <div key={company} className="grid grid-cols-2 flex justify-between gap-16 lg:gap-64 m-4 mt-16">
                    <div key={index} className="grid grid-cols-1 gap-1">
                        <span className="font-bold text-lg">{company}</span>
                        <span className="">{duration}</span>
                        <p>{role}</p>
                    </div>
                    <Image
                        className="text-right"
                        src={imageSrc}
                        alt="Company Logo"
                        width={150}
                        height={100}
                    />
                </div>
            ))}
        </div>
    );
};

export default Experience;