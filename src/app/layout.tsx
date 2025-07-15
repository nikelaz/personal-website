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
  title: {
    template: "%s - Nikola Lazarov",
    default: "Nikola Lazarov - Full-Stack Developer & YouTube Educator",
  },
  description: "Welcome to the personal website of Nikola Lazarov – full-stack developer, YouTube educator, and founder of Budget Warden. Explore in-depth software engineering tutorials, thought-provoking blog posts, published papers, and open-source projects in active development. Whether you're a fellow developer or tech enthusiast, you'll find high-quality content on modern web development, performance engineering, system design, and more.",
  keywords: ["Nikola Lazarov", "full-stack developer", "YouTube", "programming", "web development", "JavaScript", "TypeScript", "React", "software engineering", "tutorials", "Budget Warden"],
  authors: [{ name: "Nikola Lazarov" }],
  creator: "Nikola Lazarov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikolalazarov.com",
    siteName: "Nikola Lazarov",
    images: [
      {
        url: "/nikola-lazarov-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nikola Lazarov - Full-Stack Developer & YouTube Educator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nikelaz",
    creator: "@nikelaz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = (props: ChildrenProps) => {
  return (
    <html lang="en">
      <body
        className={`${fontLora.variable} ${fontIBMPlexSans.className} antialiased`}
      >
        <Header />
        <main>
          {props.children}
        </main>
        <Footer />
        <script data-goatcounter="https://nikolalazarov.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nikola Lazarov",
              "url": "https://nikolalazarov.com",
              "sameAs": [
                "https://youtube.com/@nltech1",
                "https://github.com/nikelaz",
                "https://www.linkedin.com/in/nikola-lazarov",
                "https://x.com/nikelaz",
                "https://www.instagram.com/nikolalazarov/"
              ],
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Progress"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "American University in Bulgaria"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sofia",
                "addressCountry": "Bulgaria"
              },
              "knowsAbout": [
                "JavaScript",
                "TypeScript",
                "React",
                "Web Development",
                "Software Engineering",
                "Full-Stack Development",
                "YouTube Education",
                "Programming Tutorials"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

export default RootLayout;

