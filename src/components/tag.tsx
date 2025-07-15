import { clsx } from "clsx";

type TagProps = Readonly<{
  color?: 'blue' | 'green';
}> & ChildrenProps;

const resolveColor = (color?: 'blue' | 'green') => {
  switch (color) {
    case 'blue':
      return 'bg-blue-700/40';
    case 'green':
      return 'bg-green-700/40';
    default:
      return 'bg-neutral-300/60 dark:bg-neutral-600/40';
  }
};

const Tag = (props: TagProps) => {
  return (
    <div className={clsx("text-xs text-nautral-900 black:text-white font-medium leading-none rounded-full py-1 px-2 w-fit", resolveColor(props.color))}>
      {props.children}
    </div>
  );
}

export default Tag;
