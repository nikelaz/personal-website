import Container from "@/components/container";

const IndividualArticleLayout = (props: ChildrenProps) => {
  return (
    <>
      <Container variant="narrow">
        <article className="article flex flex-col gap-6">
          {props.children}
        </article>
      </Container>
    </>
  );
};

export default IndividualArticleLayout;
