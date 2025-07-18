import Link from "next/link";
import { clsx } from "clsx";

type NavProps = Readonly<{
  isOpen?: boolean;
}>;

const Nav = (props: NavProps) => {
  return (
    <nav className="flex gap-6">
      <div
        className={clsx(!props.isOpen ? "hidden" : "flex", "md:flex flex-col md:flex-row gap-3 md:gap-6 pt-4 md:pt-0")}
      >
        <Link href="/" className="nav-item">Home</Link>
        <Link href="/about-me" className="nav-item">About Me</Link>
        <Link href="/videos" className="nav-item">Videos</Link>
        <Link href="/articles" className="nav-item">Articles</Link>
        {/*<Link href="/" className="nav-item">Projects</Link>*/}
        <a href="mailto:nikola.n.lazarov@outlook.com" className="nav-item">Contact Me</a>
      </div>
    </nav>
  );
}

export default Nav;
