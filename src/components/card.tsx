import React from "react";
import Link, { LinkProps } from "next/link";
import { clsx } from "clsx";

type CardProps = Readonly<{
  inactive?: boolean;
}> & ChildrenProps;

const Card = (props: CardProps) => {
  return (
    <article className={clsx("relative bg-neutral-900 border border-neutral-700/50 rounded-lg overflow-hidden", !props.inactive && "hover:bg-neutral-800 hover:border-neutral-600/50 transition-colors")}>
      {props.children}
    </article>
  );
};

const CardImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <header className="relative aspect-video">
      <img {...props} className="absolute w-full inset-0 object-cover" />
    </header>
  );
};

CardImage.displayName = "Card.Image";

Card.Image = CardImage;

const CardContent = (props: ChildrenProps) => {
  return (
    <div className="flex flex-col gap-3 pt-6 pb-6 px-4">
      {props.children}
    </div>
  );
};

CardContent.displayName = "Card.Content";

Card.Content = CardContent; 

const CardLink = (props: LinkProps & ClassNameProps) => {
  return (
    <Link
      {...props}
      className={clsx("text-lg font-semibold font-serif before:content-[''] before:absolute before:inset-0", props.className)}
    >
      {props.children}
    </Link>
  );
};

CardLink.displayName = "Card.Link";

Card.Link = CardLink; 

export default Card;
