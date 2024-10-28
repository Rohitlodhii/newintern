import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";


const reviews = [
  {
    name: "Abhay Singh",
    username: "@abhysigg",
    body: "They have the best team , and crazy integrations",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Adarsh Rawat",
    username: "@adarshrawat",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Parvesh",
    username: "@pravvn",
    body: "Integrated ai for my shop , they are best",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Bhavesh",
    username: "@bhveshsingh",
    body: "They understand customer properly , nice services",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Nikhil khan",
    username: "@sardarkhan",
    body: "They did the best work for my business , insallah",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
      {/* // eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-transparent ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
     
    </div>
  );
}
