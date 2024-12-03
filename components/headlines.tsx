interface Headline {
  id: number,
  text: string
}

interface HeadlinePropType {
  headlines: Headline[]
}

const Headlines = ({ headlines }: HeadlinePropType) => {


  return (
    <div id='headlines' className='hidden md:block pl-2' >
      <h2 className='font-bold text-md uppercase mb-4'>Headlines</h2>
      <ul className='space-y-3'>
        {headlines.map((line) => (
          <li
            key={line.id}
            className='flex items-start space-x-2 text-md text-gray-800'
          >
            <span className='w-1 h-1 bg-black rounded-full mt-2'></span>
            <p>{line.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default Headlines;