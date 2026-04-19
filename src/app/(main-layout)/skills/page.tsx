import type { Metadata } from "next";
import Card from "@/components/card";
import Container from "@/components/container";
import Tag from "@/components/tag";
import { publicSkills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills - Nikola Lazarov",
  description: "Reusable agent skills for YouTube research, scripting, analytics, and other practical workflows.",
  openGraph: {
    title: "Skills - Nikola Lazarov",
    description: "Reusable agent skills for YouTube research, scripting, analytics, and other practical workflows.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Skills - Nikola Lazarov",
    description: "Reusable agent skills for YouTube research, scripting, analytics, and other practical workflows.",
    creator: "@nikelaz",
  },
};

const SkillsPage = () => {
  return (
    <Container>
      <section className="flex flex-col gap-8">
        <header className="flex flex-col gap-4 max-w-3xl">
          <h1 className="leading-none">Agent Skills</h1>
          <p className="text-neutral-700 dark:text-neutral-300">
            Reusable skills for agent workflows. Right now the library focuses on YouTube work, with future additions planned for software development and general computer use.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicSkills.map((skill) => (
            <Card key={skill.slug}>
              <Card.Content>
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag>{skill.category}</Tag>
                  {skill.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <Card.Link href={`/skills/${skill.slug}`}>{skill.title}</Card.Link>
                <p>{skill.summary}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default SkillsPage;
