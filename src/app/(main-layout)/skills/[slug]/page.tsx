import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

const skillSlugs = [
  "youtube-analytics",
  "youtube-angle-research",
];

export const dynamicParams = false;

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export const generateStaticParams = () => {
  return skillSlugs.map((slug) => ({ slug }));
};

const SkillRedirect = () => {
  permanentRedirect("/");
};

export default SkillRedirect;
