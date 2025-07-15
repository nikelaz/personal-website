import type { Metadata } from "next";
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
                <IconTag title="One Page CV" footer="PDF, 1.9 MB" href="/one-page-cv.pdf" target="_blank">
                  <IconPDF width="1em" height="1em" />
                </IconTag>

                <IconTag title="Extended CV" footer="PDF, 2.7 MB" href="/extended-cv.pdf" target="_blank">
                  <IconPDF width="1em" height="1em" />
                </IconTag>
              </dd>
            </dl>
          </Card.Content>
        </Card>
      </div>

      <div className="col-span-12 sm:col-span-7 lg:col-start-5 lg:col-span-6 flex flex-col gap-4">
        <h1 className="mb-3">About Me</h1>
        <p>Hey there! I&apos;m Nikola Lazarov, a full-stack developer from Sofia, Bulgaria. I love building things – whether it&apos;s web applications, YouTube videos, or meticulously crafted coding projects that solve real problems.</p>
        <h2>What I Do</h2>
        <p>I&apos;m a Senior Front-End Developer at Progress, where I&apos;ve been working since 2020 (started as an intern back in 2018). It&apos;s been quite the journey watching web development evolve and getting to be part of that evolution.</p>
        <p>I also founded Budget Warden where I build financial tools because, honestly, managing money shouldn&apos;t be as painful as it usually is.</p>
        <h2>Content Creation</h2>
        <p>I make YouTube videos about programming because I genuinely enjoy breaking down complex stuff into digestible pieces. Theres something satisfying about that &quot;aha!&quot; moment when someone finally gets a concept that seemed impossible five minutes earlier.</p>
        <p>I also write technical articles on topics like REST API design, JavaScript features, and data structures. Not because I think Im the authority on these subjects, but because writing helps me understand things better – and maybe it helps others too.</p>
        <h2>Background</h2>
        <p>I hold a Bachelor&apos;s degree in Computer Science & Information Systems from the American University in Bulgaria, where I built a strong foundation in software engineering principles and problem-solving methodologies.</p>
        <h2>Side Projects</h2>
        <p>Beyond my professional work, I dedicate significant time to personal coding projects where I focus on building high-quality software solutions. These projects allow me to explore new technologies, experiment with different architectural patterns, and create tools that I find genuinely useful or interesting.</p>
        <p>I approach these projects with the same rigor and attention to detail that I bring to my professional work. Each one is an opportunity to push my skills further and build something I&apos;m truly proud of.</p>
        <h2>Hobbies & Interests</h2>
        <p>When I&apos;m not coding, I enjoy fitness and swimming to maintain balance in my routine. I&apos;m also fascinated by industrial design and engineering – I love studying well-designed products and elegant engineering solutions.</p>
        <p>I&apos;m always excited to connect with fellow developers, collaborate on interesting projects, or discuss the latest trends in technology. Feel free to reach out through any of my channels!</p>
      </div>
    </Container>
  );
};

export default AboutMe;
