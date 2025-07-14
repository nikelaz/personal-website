//import Input from "@/components/input";
import Card from "@/components/card";
import Tag from "@/components/tag";
import Container from "@/components/container";

type Video = {
  id: string;
  title: string;
  summary: string;
  tags?: string[];
};

const videos = [
  {
    id: "pwt4vL60Wyg",
    title: "Supercharging Neovim with AI: Copilot, Avante & Claude Code",
    summary: "How I use AI inside (and alongside) Neovim for a faster, more capable development experience.",
    tags: ["Artificial Intelligence"],
  },
  {
    id: "4T-QphpiX00",
    title: "Learn Faster from Books with AI 📚 Build a Custom Tutor with Claude, ChatGPT, or Free Local LLMs",
    summary: "Turn any non-fiction book into an interactive AI tutor—using Retrieval-Augmented Generation (RAG).",
    tags: ["Artificial Intelligence"],
  },
  {
    id: "4enjIAxqs_E",
    title: "AI-Powered Site Search",
    summary: "Build an LLM-powered site search that actually understands your content using Retrieval-Augmented Generation (RAG).",
    tags: ["Artificial Intelligence"],
  },
  {
    id: "CYd9MC3L11o",
    title: "Goodbye Docker Desktop? Apple’s Native Containers for Mac Explained",
    summary: "I explore Apple Containers—an open-source alternative to Docker and Podman designed specifically for Mac development workflows.",
    tags: ["Developer Tools"],
  },
  {
    id: "TtsapcuN_ac",
    title: "Preparing My React Native App for iOS 26 - Liquid Glass Tabs, Status Bar, and Icon Redesign",
    summary: "I update my React Native app, Budget Warden, for the upcoming iOS 26 release—focusing on the new Liquid Glass design language.",
    tags: ["Coding Session", "React Native"],
  },
  {
    id: "ZPLDvNzsVTI",
    title: "Testing Claude Code for a Real React Native Feature",
    summary: "In this session, I test Claude Code (Sonnet 4) by using it to implement a real feature in my React Native app—Budget Warden, a personal finance tracker.",
    tags: ["Coding Session", "Artificial Intelligence"],
  },
  {
    id: "H3U9zQMFxlQ",
    title: "Beyond the Conveyor Belt: Craftsmanship in Code with Neovim",
    summary: "My journey from skepticism to understanding why this 90s text editor changed how I think about programming productivity and creativity.",
    tags: ["Developer Tools"],
  },
  {
    id: "atb-dUbWpHM",
    title: "Why I Use an Immutable Linux Distro for Development: Fedora Silverblue Experience",
    summary: "I share my experience using Fedora Silverblue as my primary desktop OS—how it works, why it’s different, and how I’ve adapted my workflow around it.",
    tags: ["Operating Systems"],
  },
  {
    id: "obQT0eNMTsA",
    title: "Fedora 42: What’s New for Desktop Linux Users",
    summary: "I cover the most important updates and new features that enhance performance, usability, and the overall user experience.",
    tags: ["Operating Systems"],
  },
  {
    id: "qjHf_S_PxSw",
    title: "How I Structure Cross-Platform C++ Projects with CMake",
    summary: "I break down how to structure cross-platform C++ projects using CMake, making your builds consistent and portable across all major operating systems.",
    tags: ["C", "C++", "Developer Tools"],
  },
  {
    id: "UcQP6u2ocdY",
    title: "Building a Product Website with Astro, Decap CMS & StyleX ⚡️Full 6-Hour Live Build",
    summary: "In this full, unscripted 6-hour live build, I create a complete product and marketing website for my personal finance app, Budget Warden.",
    tags: ["Web Development"],
  },
  {
    id: "TdlbG_r8hAc",
    title: "StyleX 🎨 Performant, Reliable and Scalable Styles",
    summary: "I break down why StyleX is a game-changer, how it compares to BEM, OOCSS, and Tailwind CSS",
    tags: ["Web Development"],
  },
  {
    id: "SaqkENd-0RA",
    title: "WinGet vs Chocolatey: The Ultimate Windows Package Manager Showdown 🚀 | Pros, Cons & Comparison",
    summary: "Deep dive on the topic of Windows package managers, comparing WinGet and Chocolatey side-by-side.",
    tags: ["Software Reviews"],
  },
]

const Articles = () => {
  return (
    <Container>
      <section>
        <header className="flex flex-wrap justify-between items-center gap-4 md:gap-6 mb-12">
          <h1 className="leading-none">Videos</h1>
          {/*<Input className="max-w-3xs" type="search" placeholder="Search" />*/}
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (  
            <Card key={video.id}>
              <Card.Image src={`https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg`} loading={index < 8 ? "eager"  : "lazy"} alt={`${video.title} video thumbnail`} />
              <Card.Content>
                {video.tags ? (
                  <div className="flex items-center gap-2 flex-wrap">
                    {video.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                ) : null}
                <Card.Link href="https://youtu.be/pwt4vL60Wyg" target="_blank" rel="noopener">{video.title}</Card.Link>
                <p className="text-sm text-neutral-400">{video.summary}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Articles;
