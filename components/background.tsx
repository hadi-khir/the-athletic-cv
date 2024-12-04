import Headlines from "./headlines";
import PickSix from "./pick-six";

const Background = () => {

  const pickSixStories = [
    {
      id: 1,
      title: "It's me, Hadi!",
      description: "Fullstack engineer helping companies such as SAP & Maxar to build high quality, resilient, cloud native systems.",
      imageSrc: "/sap-49ers.jpeg",
    },
    {
      id: 2,
      title: "Graduated in 2019 from the University of Ottawa",
      description: "Obtaining a Bachelors in Electrical Engineering, a research scholarship, and internship opportunities at organizations such as Nokia.",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Pets, photography & sports",
      description: "In my spare time, I'll be with my cat Zaytoun, experimenting with different ways to play coffee, playing pickup basketball or out taking photos.",
      imageSrc: "https://via.placeholder.com/150",
    },
  ];

  const headlines = [
    { id: 1, text: "Graduated cum laude from the University of Ottawa with a Bachelor in Electrical Engineering." },
    { id: 2, text: "Recipient of the University Research Opportunity Program Scholarship (UROP) under the Natural Sciences and Engineering Research Council of Canada." },
    { id: 3, text: "Research contributed to developing innovative solar energy solutions, lowering electricity costs in Canada's remote northern communities." },
    { id: 4, text: "Over five years of relevant experience in software engineering, specializing as a fullstack engineer working on cloud native solutions." },
    { id: 5, text: "Helped successfully launch widely-used SAP applications such as Partner Finer and Cloud Choice Flex, revolutionzing SAP Partner relationships." },
    { id: 6, text: "Back-to-back fantasy football league winner in 2022 and 2023." },
    { id: 7, text: "Member of highschool basketball division II championship winning team." },
    { id: 8, text: "Spearheaded initiatives like 'Code Jams' at SAP to foster collaborative learning and innovation, while also leading intern hiring and mentoring programs within Partner Engineering to develop future talent." },
  ];

  return (

    <section
      id='introduction'
      className='w-9/10 m-8 mt-16 grid grid-cols-1 gap-6 md:grid-cols-[58%_40%] divide-x-2'>
      {/* background */}
      <PickSix stories={pickSixStories} />
      {/* Headlines */}
      <Headlines headlines={headlines} />
    </section>
  )
}

export default Background;