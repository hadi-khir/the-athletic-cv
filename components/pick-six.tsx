import Image from "next/image"

const PickSix = () => {

    const data = [
        {
            id: 1,
            title: 'Josh Allen, Saquon Barkley, Lamar Jackson and a sizzling MVP race: Sando',
            description: 'Allen is the favorite. Barkley has a compelling case to break the RB MVP drought. But Jackson stands apart, despite...',
            imageSrc: '/sap-49ers.jpeg',
        },
        {
            id: 2,
            title: 'Josh Allen, Saquon Barkley, Lamar Jackson and a sizzling MVP race: Sando',
            description: 'Allen is the favorite. Barkley has a compelling case to break the RB MVP drought. But Jackson stands apart, despite...',
            imageSrc: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            title: 'Josh Allen, Saquon Barkley, Lamar Jackson and a sizzling MVP race: Sando',
            description: 'Allen is the favorite. Barkley has a compelling case to break the RB MVP drought. But Jackson stands apart, despite...',
            imageSrc: 'https://via.placeholder.com/150',
        },
    ]

    return (
        <div id='pick-six'>
            <h2 className="text-xl font-bold">Hadi&apos;s Pick Six (About Me)</h2>
            {
                data.map((story, index) => {
                    if (index === 0) {
                        return (
                            <div key={story.id} className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                                <div className="m-4">
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            {story.title}
                                        </h2>
                                        <span className="mt-2 w-1/2">
                                            {story.description}
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
                                <div className="relative">
                                    <Image
                                        src={story.imageSrc}
                                        alt="Article Thumbnail"
                                        height={500}
                                        width={500}
                                    />
                                    <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                                        PICK 6
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    return (
                        <div key={story.id} className="block grid grid-cols-1 gap-2 mt-4">
                            {/* Content Section */}
                            <div className="m-4">
                                <div>
                                    <h2 className="text-xl font-bold">
                                        {story.title}
                                    </h2>
                                    <span className="mt-2 w-1/2">
                                        {story.description}
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
                    )
                })
            }
        </div>
    )
}

export default PickSix;