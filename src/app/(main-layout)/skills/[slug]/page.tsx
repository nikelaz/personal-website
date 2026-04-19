import type { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Container from "@/components/container";
import InstallInstructionsTabs from "@/components/install-instructions-tabs";
import Tag from "@/components/tag";
import { publicSkills } from "@/data/skills";
import { notFound } from "next/navigation";

type SkillPageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export const generateStaticParams = async () => {
  return publicSkills.map((skill) => ({
    slug: skill.slug,
  }));
};

export const generateMetadata = async (props: SkillPageProps): Promise<Metadata> => {
  const { slug } = await props.params;
  const skill = publicSkills.find((item) => item.slug === slug);

  if (!skill) {
    return {
      title: "Skill Not Found",
      description: "The requested skill could not be found.",
    };
  }

  return {
    title: `${skill.title} - Skills`,
    description: skill.summary,
    openGraph: {
      title: `${skill.title} - Skills`,
      description: skill.summary,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${skill.title} - Skills`,
      description: skill.summary,
      creator: "@nikelaz",
    },
  };
};

const SkillPage = async (props: SkillPageProps) => {
  const { slug } = await props.params;
  const skill = publicSkills.find((item) => item.slug === slug);

  if (!skill) {
    return notFound();
  }

  return (
    <Container>
      <Breadcrumbs
        items={[
          { label: "Agent Skills", href: "/skills" },
          { label: skill.title }
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag>{skill.category}</Tag>
              {skill.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="flex flex-col gap-3 max-w-3xl">
              <h1>{skill.title}</h1>
              <p className="text-lg text-neutral-700 dark:text-neutral-300">
                {skill.description}
              </p>
            </div>
          </header>

          <section className="flex flex-col gap-4">
            <h2>Overview</h2>
            <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
              {skill.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-xl border border-neutral-200 p-5 dark:border-neutral-700/50">
              <h2>Best For</h2>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                {skill.bestFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-neutral-200 p-5 dark:border-neutral-700/50">
              <h2>What You Get</h2>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                {skill.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2>Example Usage</h2>
            <div className="flex flex-col gap-3">
              {skill.exampleQueries.map((query) => (
                <blockquote
                  key={query}
                  className="rounded-2xl border border-neutral-200 bg-neutral-100/80 px-4 py-3 text-sm leading-6 text-neutral-800 dark:border-neutral-700/50 dark:bg-neutral-900/70 dark:text-neutral-200"
                >
                  {query}
                </blockquote>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2>How to Install</h2>
            <InstallInstructionsTabs />
          </section>
        </article>

        <aside className="lg:sticky lg:top-28 h-fit">
          <div className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-100/80 p-5 dark:border-neutral-700/50 dark:bg-neutral-900/70">
            <div className="flex flex-col gap-1">
              <h2>Download</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Grab the archived skill folder and install it locally.
              </p>
            </div>

            <Button href={skill.downloadPath} download>
              Download Skill
            </Button>
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default SkillPage;
