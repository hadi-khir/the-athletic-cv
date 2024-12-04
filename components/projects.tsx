import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'Exif Reader & Generator API',
            description: "A simple, no frills image exif reader, with a mock exif data API originally built as a service for another project but spun off into it's own project.",
            skills: ['TypeScript', 'React', 'NextJS'],
            src: 'https://exifdata.dev',
        },
        {
            id: 2,
            title: 'Seeking Alpha Stock Tracker',
            description: "Using the Seeking Alpha API's to track and monitor stocks in different categories.",
            skills: ['TypeScript', 'Svelte', 'HTML/CSS'],
            src: 'https://stocks.khir.ca',
        },
        {
            id: 3,
            title: 'PickleBot',
            description: "Script to book a pickle ball court at the RA Center, since they book up within minutes of opening.",
            skills: ['Python', 'Selenium'],
            src: 'https://github.com/hadi-khir/PickleBot',
        },
        {
            id: 4,
            title: 'CV',
            description: "Original iteration of my CV site.",
            skills: ['React', 'TypeScript', 'NextJS'],
            src: 'https://hadi.khir.ca',
        }
    ]

    return (
        <div id='projects'>
            <Card>
                <CardHeader>
                    <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent>
                    {projects.map(project => {
                        return (
                            <Link
                                key={project.id}
                                href='https://exifdata.dev'
                                target='_blank'>
                                <div className='grid w-9/10 items-center p-2 shadow-lg hover:shadow-xl'>
                                    <div className='grid items-center gap-2 mt-4'>
                                        <h2>{project.title}</h2>
                                        <p>{project.description}</p>
                                        <div className='flex justify-start space-x-2'>
                                            {project.skills.map(skill => {
                                                return (
                                                    <Badge key={skill}>{skill}</Badge>
                                                )
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </CardContent>
                <CardFooter>
                    <div className='w-full items-center'>
                        <Link href='https://github.com/hadi-khir' className="hover:text-blue-600" target='_blank'>
                            View GitHub
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div >
    )

}

export default Projects;