import NavBar from "@/components/navbar";

export default function Home() {

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
    <>
      <NavBar />
      {/* Background and Headlines Section */}
      <section
        id='introduction'
        className='w-9/10 m-8 mt-16 grid grid-cols-1 gap-6 md:grid-cols-[60%_40%]'>
        {/* background */}
        <div id='background'>
          <h2 className="text-xl font-bold">Hadi's Pick Six (About Me)</h2>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {/* Content Section */}
            <div className="m-4">
              <div>
                <h2 className="text-xl font-bold">
                  Josh Allen, Saquon Barkley, Lamar Jackson and a sizzling MVP race: Sando's...
                </h2>
                <span className="mt-2 w-1/2">
                  Allen is the favorite. Barkley has a compelling case to break the RB MVP drought.
                  But Jackson stands apart, despite...
                </span>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500">
                <span className="mr-2">Mike Sando</span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 fill-current text-gray-500 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9H7V7h4v2zm-4 4h6v-2H7v2z" />
                  </svg>
                  324
                </span>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <img
                src="https://via.placeholder.com/150"
                alt="Article Thumbnail"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                PICK 6
              </div>
              <div className="absolute bottom-2 right-2 bg-orange-500 text-white p-1 rounded">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 15l-3.09-1.64L4 12l2.09-1.64L7 9V7.09L10 5l3.09 1.64L16 8l-2.09 1.64L13 11v1.91L10 15z" />
                </svg>
              </div>
            </div>
          </div>          
          <div className=" h-2 block gap-2 mt-4">
            {/* Content Section */}
            <div className="m-4">
              <div>
                <h2 className="text-xl font-bold">
                  Josh Allen, Saquon Barkley, Lamar Jackson and a sizzling MVP race: Sando's...
                </h2>
                <span className="mt-2 w-1/2">
                  Allen is the favorite. Barkley has a compelling case to break the RB MVP drought.
                  But Jackson stands apart, despite...
                </span>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500">
                <span className="mr-2">Mike Sando</span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 fill-current text-gray-500 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9H7V7h4v2zm-4 4h6v-2H7v2z" />
                  </svg>
                  324
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Headlines */}
        <div id='headlines' className='hidden md:block' >
          <h2 className='font-bold text-md uppercase mb-4'>Headlines</h2>
          <ul className='space-y-3'>
            {headlines.map((headline) => (
              <li
                key={headline.id}
                className='flex items-start space-x-2 text-md text-gray-800'
              >
                <span className='w-1 h-1 bg-black rounded-full mt-2'></span>
                <p>{headline.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
