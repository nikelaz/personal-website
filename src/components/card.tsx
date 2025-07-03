import Link, { LinkProps } from "next/link";
import { clsx } from "clsx";

const Card = (props: ChildrenProps) => {
  return (
    <article className="relative bg-neutral-900 border border-neutral-700/50 rounded-lg overflow-hidden hover:bg-neutral-800 hover:border-neutral-600/50 transition-colors">
      {props.children}
    </article>
  );
};

Card.Image = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <header className="relative aspect-video">
      <img {...props} className="absolute w-full inset-0 object-cover" />
    </header>
  );
}

Card.Content = (props: ChildrenProps) => {
  return (
    <div className="flex flex-col gap-3 pt-6 pb-6 px-4">
      {props.children}
    </div>
  );
}

Card.Link = (props: LinkProps & ClassNameProps) => {
  return (
    <Link
      {...props}
      className={clsx("text-lg font-semibold font-serif before:content-[''] before:absolute before:inset-0", props.className)}
    >
      {props.children}
    </Link>
  );
};

export default Card;
