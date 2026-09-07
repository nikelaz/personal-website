import Link from "next/link";
import Image from "next/image";
import Tag from "@/components/tag";

type ProjectCardProps = Readonly<{
  project: Project;
  eager?: boolean;
}>;

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  return (
    <article className="relative bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/50 rounded-lg overflow-hidden hover:bg-neutral-100/50 dark:hover:bg-neutral-800 dark:hover:border-neutral-600/50 transition-colors">
      <div className="relative aspect-video bg-neutral-200/50 dark:bg-neutral-950">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
          loading={props.eager ? "eager" : "lazy"}
        />
      </div>
      <div className="flex flex-col gap-3 pt-6 pb-6 px-4 text-neutral-700 dark:text-neutral-400 text-sm">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h3 className="text-lg font-semibold font-serif">
            <Link
              href={`/projects/${project.slug}`}
              className="before:content-[''] before:absolute before:inset-0"
              aria-label={`View project: ${project.name}`}
            >
              {project.name}
            </Link>
          </h3>
        </div>
        <p>{project.shortDescription}</p>
        <div className="flex items-center gap-2 flex-wrap">
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
