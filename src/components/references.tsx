const References = (props: ChildrenProps) => {
  return (
    <ol className="references">
      {props.children}
    </ol>
  );
};

type ReferenceItemProps = Readonly<{
  id: number;
  author?: string;
  year?: string;
  title?: string;
  source?: string;
  url?: string;
}>;

const formatCitation = (input?: string) => {
  return input ? `${input}.` : '';
};

References.Item = (props: ReferenceItemProps) => {
  const citation = `${formatCitation(props.author)} ${formatCitation(props.year)} ${formatCitation(props.title)} ${formatCitation(props.source)}`.trim();

  return (
    <li id={`reference-${props.id}`}>
      {citation}
      {props.url ? (
        <>
          <br />
          <a href={props.url} target="_blank" rel="noopener">{props.url}</a>
        </>
      ) : null}
    </li>
  );
};

export default References;
