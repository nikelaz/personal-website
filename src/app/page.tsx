import Image from 'next/image';
import Container from '@/components/container';
import nlazarovImgSrc from '@/assets/nikola-lazarov.webp';

const Home = () => {
  return (
    <>
      <section className="hero pt-2 border-b-1 border-neutral-700/50">
        <Container className="grid grid-cols-12 gap-6 items-center">
          <div className="hero-image flex-shrink-0 col-span-5 justify-self-center">
            <Image src={nlazarovImgSrc} alt="Nikola Lazarov" width={427} height={596} /> 
          </div>
          <div className="col-span-6">
            <h1 className="mb-6">Hey There!</h1>
            <p className="mb-4">I'm a full-stack developer, passionate about science, technology and education. I balance my full-time job as a front-end developer with the creation of educational content on my YouTube channel. Beyond my professional pursuits, I love building all sorts of fun side-projects.</p>
            <p>This is my personal website, where I will share my latest work, research and fun side-projects.</p>
          </div>
        </Container>
      </section>
      <p>Page Content</p>
      <p>Page Content</p>
      <p>Page Content</p>
      <p>Page Content</p>
      <p>Page Content</p>
      <p>Page Content</p>
      <p>Page Content</p>
      <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
    </>
  );
}

export default Home;
