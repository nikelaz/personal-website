"use client";

import { useState } from "react";

const tabs = [
  {
    id: "claude-code",
    label: "Claude Code",
    title: "Use in Claude Code",
    intro: "Each skill archive now includes a dedicated Claude Code installer that creates a user-level subagent plus any companion files the skill needs.",
    steps: [
      "Download the skill archive and extract it so the skill folder still contains `SKILL.md` and the four installer scripts.",
      "Run `install-claude-mac-linux.sh` on macOS/Linux or `install-claude-windows.ps1` on Windows from inside the extracted skill folder.",
      "Restart Claude Code or start a new session so the installed subagent is available."
    ],
    code: `# macOS / Linux\n./install-claude-mac-linux.sh\n\n# Windows PowerShell\npwsh -File .\\install-claude-windows.ps1`,
    note: "The Claude installers target the user-level subagent directory and also install a companion folder when the skill needs scripts, examples, or other supporting files."
  },
  {
    id: "codex",
    label: "Codex",
    title: "Install in Codex",
    intro: "Each skill archive includes dedicated Codex installers for Unix-like systems and Windows, so you can install the extracted skill directly without using the full repo.",
    steps: [
      "Download the skill archive and extract it so the skill folder still contains `SKILL.md` and the four installer scripts.",
      "Run `install-codex-mac-linux.sh` on macOS/Linux or `install-codex-windows.ps1` on Windows from inside the extracted skill folder.",
      "Restart Codex so it picks up the installed skill."
    ],
    code: `# macOS / Linux\n./install-codex-mac-linux.sh\n\n# Windows PowerShell\npwsh -File .\\install-codex-windows.ps1`,
    note: "The Codex installers copy the current extracted skill into `$CODEX_HOME/skills` when `CODEX_HOME` is set, or the default user-level Codex skills directory when it is not."
  }
] as const;

const InstallInstructionsTabs = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("claude-code");
  const activeContent = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section className="rounded-xl border border-neutral-200 bg-neutral-100/80 p-4 md:p-6 dark:border-neutral-700/50 dark:bg-neutral-900/70">
      <div className="flex flex-wrap gap-2 mb-5" role="tablist" aria-label="Skill installation instructions">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={[
                "cursor-pointer rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "border-neutral-900 bg-neutral-900 text-neutral-100 dark:border-white dark:bg-white dark:text-neutral-950"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-neutral-500"
              ].join(" ")}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="flex flex-col gap-5 text-sm text-neutral-700 dark:text-neutral-300">
        <div className="flex flex-col gap-2">
          <h3>{activeContent.title}</h3>
          <p>{activeContent.intro}</p>
        </div>

        <ol className="list-decimal pl-5 flex flex-col gap-2">
          {activeContent.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-4 text-sm text-neutral-100">
          <code>{activeContent.code}</code>
        </pre>

        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          {activeContent.note}
        </p>
      </div>
    </section>
  );
};

export default InstallInstructionsTabs;
