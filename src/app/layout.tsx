import type { Metadata } from "next";
import { IBM_Plex_Sans, Lora } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../styles/main.css";

const fontLora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const fontIBMPlexSans = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikola Lazarov - Personal Website",
  description: "Welcome to the personal website of Nikola Lazarov – full-stack developer, YouTube educator, and founder of Budget Warden. Explore in-depth software engineering tutorials, thought-provoking blog posts, published papers, and open-source projects in active development. Whether you're a fellow developer or tech enthusiast, you'll find high-quality content on modern web development, performance engineering, system design, and more.",
};

const RootLayout = (props: ChildrenProps) => {
  return (
    <html lang="en">
      <body
        className={`${fontLora.variable} ${fontIBMPlexSans.className} antialiased`}
      >
        <Header />
        <main className="pt-12 pb-15">
          {props.children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;

