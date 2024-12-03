import Background from "@/components/background";
import Career from "@/components/career";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Skills from "@/components/skills";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {

  return (
    <>
      <NavBar />
      <Background />
      <Career />
      <Link href="/files/khir-hadi-resume.pdf" target="_blank" className="animate-pulse flex items-center justify-end space-x-2 hover:text-blue-500 transition-colors self-end m-24">
        <span className="text-xl">View Full Resume</span>
        <FaArrowRight className="text-xl" />
      </Link>
      <Skills />
      <Footer />
    </>
  );
}
