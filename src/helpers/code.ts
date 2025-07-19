import { codeToHtml } from "shiki";

type Languages = "text" | "js" | "ts" | "jsx" | "tsx" | "html" | "css" | "cpp" | "c" | "rust" | "json" | "bash";

const THEME_CONFIG = {
  dark: "catppuccin-mocha",
  light: "catppuccin-latte",
};

async function code(codeStr: string, lang: Languages) {
  const html = await codeToHtml(codeStr.trim(), {
    lang,
    themes: THEME_CONFIG,
  }); 
  return html;
}

export default code;
