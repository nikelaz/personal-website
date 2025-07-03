import { clsx } from "clsx";

type HamburgerProps = Readonly<{
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> & ClassNameProps;

const Hamburger = (props: HamburgerProps) => {
  return (
    <button
      type="button"
      aria-label="open navigation"
      className={clsx("hamburger", props.isOpen && "is-open", props.className)}
      onClick={props.onClick}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
};

export default Hamburger;
