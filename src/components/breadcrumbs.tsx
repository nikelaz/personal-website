import Link from "next/link";

type BreadcrumbItem = Readonly<{
  label: string;
  href?: string;
}>;

type BreadcrumbsProps = Readonly<{
  items: BreadcrumbItem[];
}>;

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-sm text-neutral-600 dark:text-neutral-300">
        {props.items.map((item, index) => {
          const isLast = index === props.items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-neutral-900 dark:text-neutral-100" : undefined}>
                  {item.label}
                </span>
              )}

              {!isLast ? (
                <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-500">
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
