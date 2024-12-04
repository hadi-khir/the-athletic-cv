import Experience from "./experience";
import Projects from "./projects";

const Career = () => {

    return (

        <section
            id="career"
            className="w-9/10 m-8 mt-8 grid grid-cols-1 md:grid-cols-[55%_45%] lg:grid-cols-[65%-35%]"
        >
            <Experience />
            <Projects />
        </section>
    )
}

export default Career;