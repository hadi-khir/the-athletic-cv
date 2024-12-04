interface Headline {
  id: number,
  text: string
}

interface HeadlinePropType {
  headlines: Headline[]
}

const Headlines = ({ headlines }: HeadlinePropType) => {


  return (
    <div id='headlines' className='hidden md:block pl-4 w-9/10' >
      <h2 className='font-bold text-md uppercase mb-4'>Headlines</h2>
      <ul className='space-y-3 pl-5 list-disc'>
        {headlines.map((line) => (
          <li
            key={line.id}
            className='text-md'
          >
            <p>{line.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default Headlines;