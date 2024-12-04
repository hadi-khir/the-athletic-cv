import { getRandomNumber } from "@/lib/utils";
import Image from "next/image";
import { MdModeComment } from "react-icons/md";

type Story = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
};

type Stories = {
    stories: Story[];
}

type StoryCardProps = {
    story: Story;
    isFirst: boolean;
};

const StoryCard = ({ story, isFirst }: StoryCardProps) => (
    <div className={`grid ${isFirst ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-2 mt-4`}>
        <div className="m-4">
            <h2 className="text-xl font-bold">{story.title}</h2>
            <p className="mt-2">{story.description}</p>
            <div className="flex items-center mt-4 text-sm text-gray-500">
                <span className="mr-2">Hadi Khir</span>
                <span className="flex items-center">
                    <MdModeComment className="mr-1" />
                    {getRandomNumber(100)}
                </span>
            </div>
        </div>
        {isFirst && (
            <div className="relative">
                <Image
                    src={story.imageSrc}
                    alt={`${story.title} Thumbnail`}
                    height={500}
                    width={500}
                />
                <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    PICK 6
                </div>
            </div>
        )}
    </div>
);

const PickSix = ({ stories }: Stories) => {

    return (
        <div id="pick-six">
            <h2 className="text-xl font-bold">Hadi&apos;s Pick Six (About Me)</h2>
            {stories.map((story, index) => (
                <StoryCard key={story.id} story={story} isFirst={index === 0} />
            ))}
        </div>
    );
};

export default PickSix;
