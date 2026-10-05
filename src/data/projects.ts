import machina from "./projects/machina";
import ctldash from "./projects/ctldash";
import budgetWarden from "./projects/budget-warden";
import cssStructs from "./projects/css-structs";
import esvg from "./projects/esvg";
import retrievalKit from "./projects/retrieval-kit";
import voiceReady from "./projects/voice-ready";
import zenith from "./projects/zenith";

const projects: Project[] = [
  machina,
  ctldash,
  budgetWarden,
  zenith,
  voiceReady,
  cssStructs,
  esvg,
  retrievalKit,
];

export const getProject = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export default projects;
