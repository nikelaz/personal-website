import { clsx } from "clsx";

type ButtonProps = Readonly<{
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: 'arrow';
}> & ChildrenProps & ClassNameProps;

const Button = (props: ButtonProps) => {
  const Component = props.href ? "a" : "button";

  return (
    <Component
      className={clsx("button", props.icon === "arrow" && "button__arrow", props.className)}
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
      {props.icon === 'arrow' ? (
        <svg width="0.75em" height="0.75em" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-icon">
          <path d="M12.7272 6.6558C13.09 6.29308 13.09 5.70401 12.7272 5.34129L8.08438 0.698434C7.72165 0.335711 7.13259 0.335711 6.76987 0.698434C6.40714 1.06116 6.40714 1.65022 6.76987 2.01294L9.83125 5.07142H0.928571C0.414955 5.07142 0 5.48638 0 6C0 6.51361 0.414955 6.92857 0.928571 6.92857H9.82835L6.77277 9.98705C6.41004 10.3498 6.41004 10.9388 6.77277 11.3016C7.13549 11.6643 7.72455 11.6643 8.08728 11.3016L12.7301 6.6587L12.7272 6.6558Z" fill="currentColor" />
        </svg>
      ) : null}
    </Component>
  );
};

export default Button;
