type IconTagProps = Readonly<{
  header?: string;
  title?: string;
  footer?: string;
  href?: string;
  target?: string;
}> & ChildrenProps;

const IconTag = (props: IconTagProps) => {
  return (
    <div className="flex items-center gap-3 relative">
      <div className="flex-shrink-0">
        {props.children}
      </div>
      <div>
        {props.header ? (
          <div className="text-xs text-neutral-600 dark:text-neutral-300">{props.header}</div>
        ) : null}

        {props.title && props.href ? (
          <a href={props.href} target={props.target}>{props.title}</a>
        ) : null}

        {props.title && !props.href ? (
          <div>{props.title}</div>
        ) : null}

        {props.footer ? (
          <div>{props.footer}</div>
        ) : null}
      </div>
    </div>
  );
};

export default IconTag;
