import Container from "@/components/container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex items-center justify-between gap-6 py-15 border-t border-neutral-700/50">
          <p>&copy; Nikola Lazarov 2025</p>
          <nav className="flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <a href="https://github.com/nikelaz" target="_blank" rel="noopener">YouTube</a>
            <a href="https://github.com/nikelaz" target="_blank" rel="noopener">GitHub</a>
            <a href="https://github.com/nikelaz" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/nikelaz" target="_blank" rel="noopener">X</a>
            <a href="https://github.com/nikelaz" target="_blank" rel="noopener">Instagram</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

