import { clsx } from "clsx";

type ContainerProps = Readonly<{
  variant?: 'narrow';
}> & ChildrenProps & ClassNameProps;

const Container = (props: ContainerProps) => {
  const width = props.variant === "narrow" ? "max-w-2xl" : "max-w-7xl";
  return (
    <div className={clsx(props.className, width, "mx-auto px-4 md:px-6")}>
      {props.children}
    </div>
  );
};

export default Container;

