import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const SkillsRedirect = () => {
  permanentRedirect("/");
};

export default SkillsRedirect;
