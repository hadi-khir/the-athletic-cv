import Experience from "./experience";
import Projects from "./projects";

const Career = () => {

    return (

        <section
            id="career"
            className="m-8 mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-[55%_45%] lg:grid-cols-[65%-35%] gap-4"
        >
            <Experience />
            <Projects />
        </section>
    )
}

export default Career;