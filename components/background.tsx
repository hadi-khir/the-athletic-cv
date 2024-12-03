import Headlines from "./headlines";
import PickSix from "./pick-six";

const Background = () => {

  const headlines = [
    { id: 1, text: "49ers to place RBs McCaffrey, Mason on injured reserve" },
    { id: 2, text: "Giants' Dexter Lawrence out for rest of season with elbow injury" },
    { id: 3, text: "Bears president: Head coach opening 'will be the most coveted job' in the NFL" },
    { id: 4, text: "Mayfield expected to play in Week 14 after injury scare" },
    { id: 5, text: "Saints' Taysom Hill out for season with torn ACL: Reports" },
    { id: 6, text: "Aaron Rodgers to remain Jets starting QB, Jeff Ulbrich says" },
    { id: 7, text: "Steelers' George Pickens must 'grow up' after Week 13 penalties: Tomlin" },
    { id: 8, text: "Texans' Azeez Al-Shaair apologizes for late hit on Jaguars' Trevor Lawrence" },
  ];

  return (

    <section
      id='introduction'
      className='w-9/10 m-8 mt-16 grid grid-cols-1 gap-6 md:grid-cols-[58%_40%] divide-x-2'>
      {/* background */}
      <PickSix />
      {/* Headlines */}
      <Headlines headlines={headlines} />
    </section>
  )
}

export default Background;