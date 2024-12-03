import Experience from "./experience";
import Projects from "./projects";

const Career = () => {

    return (

        <section
            id="career"
            className="w-9/10 m-8 mt-8 grid grid-cols-1 md:grid-cols-[65%_35%]"
        >
            <Experience />
            <Projects />
        </section>
    )
}

export default Career;