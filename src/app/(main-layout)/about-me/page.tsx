import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/card";
import Container from "@/components/container";
import Image from "next/image";
import IconTag from "@/components/icon-tag";

export const metadata: Metadata = {
  title: "About Me - Nikola Lazarov",
  description: "Learn about Nikola Lazarov - Full-stack developer from Sofia, Bulgaria, Senior Front-End Developer at Progress, founder of Budget Warden, and YouTube educator creating programming content.",
  openGraph: {
    title: "About Me - Nikola Lazarov",
    description: "Learn about Nikola Lazarov - Full-stack developer from Sofia, Bulgaria, Senior Front-End Developer at Progress, founder of Budget Warden, and YouTube educator creating programming content.",
    type: "profile",
    firstName: "Nikola",
    lastName: "Lazarov",
    username: "nikelaz",
  },
  twitter: {
    card: "summary",
    title: "About Me - Nikola Lazarov",
    description: "Learn about Nikola Lazarov - Full-stack developer from Sofia, Bulgaria, Senior Front-End Developer at Progress, founder of Budget Warden, and YouTube educator creating programming content.",
    creator: "@nikelaz",
  },
};

import IconAcademic from "@/assets/icons/academic.svg";
import IconInstitution from "@/assets/icons/institution.svg";
import IconYouTube from "@/assets/icons/youtube.svg";
import IconGitHub from "@/assets/icons/github.svg";
import IconLinkedIn from "@/assets/icons/linkedin.svg";
import IconX from "@/assets/icons/x.svg";
import IconInstagram from "@/assets/icons/instagram.svg";
import IconPDF from "@/assets/icons/pdf.svg";

import headshotImg from "@/assets/nlazarov-about-me-headshot.webp";

const AboutMe = () => {
  return (
    <Container className="grid grid-cols-12 gap-6">
      <div className="col-span-12 sm:col-span-3">
        <Card inactive>
          <header className="about-me-header border-b border-neutral-300/50 dark:border-neutral-700/50">
            <Image src={headshotImg} alt="Nikola Lazarov Headshot" />
          </header>
          <Card.Content>
            <h2 className="text-2xl mb-2 dark:text-neutral-100">Nikola Lazarov</h2>
            <dl className="deflist dark:text-neutral-100">
              <dt>Occupation</dt>
              <dd>Full-Stack Developer</dd>

              <dt>Education</dt>
              <dd className="flex flex-col gap-2">
                <IconTag
                  header="Bachelor of Arts"
                  title="Computer Science"
                >
                  <IconAcademic width="1em" height="1em" />
                </IconTag>
                <IconTag
                  header="Bachelor of Arts"
                  title="Information Systems"
                >
                  <IconAcademic width="1em" height="1em" />
                </IconTag>
                <IconTag
                  title="American University in Bulgaria"
                >
                  <IconInstitution width="1em" height="1em" />
                </IconTag>

              </dd>
              
              <dt>Location / Residence</dt>
              <dd>Sofia, Bulgaria</dd>

              <dt>Social Media</dt>
              <dd className="flex flex-col gap-1">
                <IconTag title="YouTube" href="https://youtube.com/@nltech1" target="_blank">
                  <IconYouTube width="1em" height="1em" />
                </IconTag> 
                <IconTag title="GitHub" href="https://github.com/nikelaz" target="_blank">
                  <IconGitHub width="1em" height="1em" />
                </IconTag> 
                <IconTag title="LinkedIn" href="https://www.linkedin.com/in/nikola-lazarov" target="_blank">
                  <IconLinkedIn width="1em" height="1em" />
                </IconTag>
                <IconTag title="X" href="https://x.com/nikelaz" target="_blank">
                  <IconX width="1em" height="1em" />
                </IconTag>
                <IconTag title="Instagram" href="https://www.instagram.com/nikolalazarov/" target="_blank">
                  <IconInstagram width="1em" height="1em" />
                </IconTag>
              </dd>

              <dt>Curriculum Vitae</dt>
              <dd className="flex flex-col gap-1">
                <IconTag title="CV" footer="PDF, 3.7 MB" href="/extended-cv.pdf" target="_blank">
                  <IconPDF width="1em" height="1em" />
                </IconTag>
              </dd>
            </dl>
          </Card.Content>
        </Card>
      </div>

      <div className="col-span-12 sm:col-span-7 lg:col-start-5 lg:col-span-6 flex flex-col gap-4">
        <h1 className="mb-3">About Me</h1>
        <p>Hey there! I&apos;m Nikola Lazarov, a software developer from Sofia, Bulgaria. I&apos;m currently a Senior Front-End Developer at Progress, but I&apos;m gradually expanding my focus beyond web development toward native applications, C++, Rust, Linux, and systems programming.</p>
        <p>I enjoy understanding how software works from the ground up and learning by building things. My personal projects range from native Linux applications and Rust libraries to developer tools, parsers, and consumer software. I&apos;m also increasingly interested in graphics programming and exploring lower-level parts of the software stack.</p>
        <h2>What I Do</h2>
        <p>I&apos;ve been at Progress since 2018, starting as an intern and eventually becoming a Senior Front-End Developer. Working on software at enterprise scale has given me extensive experience with web development, APIs, architecture, and building software as part of large engineering teams.</p>
        <p>Outside of work, I use personal projects to explore areas that I don&apos;t get to work with every day. These projects are an important part of my transition toward systems and native software development.</p>
        <h2>Content Creation</h2>
        <p>I create educational programming content on <a href="https://youtube.com/@nltech1" target="_blank" rel="noopener noreferrer">YouTube</a> and write technical articles about software engineering and the technologies I&apos;m exploring.</p>
        <p>Teaching and writing are also how I learn. Explaining a concept clearly forces me to understand it properly, and sharing what I learn helps me turn that understanding into something useful.</p>
        <h2>Background</h2>
        <p>I hold a Bachelor&apos;s degree in Computer Science & Information Systems from the American University in Bulgaria, where I developed a strong foundation in computer science and software engineering.</p>
        <h2>Projects</h2>
        <p>Personal projects are a big part of how I develop my skills. I use them to explore new technologies, architectural approaches, and areas outside my professional experience.</p>
        <p>Some of my projects include <Link href="/projects/machina">Machina</Link>, a Linux system monitor written in C++, <Link href="/projects/ctldash">CTL Dash</Link>, a Rust-based systemd service manager, and <Link href="/projects/budget-warden">Budget Warden</Link>, a cross-platform application built around a shared Rust core.</p>
        <p>You can find more of my work on <a href="https://github.com/nikelaz" target="_blank" rel="noopener noreferrer">GitHub</a> and throughout this website.</p>
        <h2>Outside of Software</h2>
        <p>Outside of programming, I enjoy fitness and swimming, and I&apos;m fascinated by industrial design, engineering, architecture, and craftsmanship. I also enjoy movies, novels, music, and art.</p>
        <p>I&apos;m always interested in meeting people who enjoy building things, exploring technology, and learning how software works.</p>
      </div>
    </Container>
  );
};

export default AboutMe;
