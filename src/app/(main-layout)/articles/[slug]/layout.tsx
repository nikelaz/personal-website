import Script from "next/script";
import Container from "@/components/container";
import "@/vendor/prism/prism.css";

const IndividualArticleLayout = (props: ChildrenProps) => {
  return (
    <>
      <Container variant="narrow">
        <article className="article flex flex-col gap-6">
          {props.children}
        </article>
      </Container>
      <Script src="/prism.js" />
    </>
  );
};

export default IndividualArticleLayout;
