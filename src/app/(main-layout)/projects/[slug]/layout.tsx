import Container from "@/components/container";

const IndividualProjectLayout = (props: ChildrenProps) => {
  return (
    <>
      <Container variant="narrow">
        <article className="project article flex flex-col gap-6">
          {props.children}
        </article>
      </Container>
    </>
  );
};

export default IndividualProjectLayout;
