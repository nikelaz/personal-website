const skills: Skill[] = [
  {
    slug: "youtube-analytics",
    title: "YouTube Analytics",
    summary: "Analyze channel and video performance with YouTube Data API workflows focused on growth, SEO, and content strategy.",
    description: "A research-heavy skill for evaluating YouTube channels, recent uploads, and topic opportunities using the YouTube Data API.",
    category: "YouTube",
    tags: ["Analytics", "SEO"],
    githubUrl: "https://github.com/nikelaz/skills/tree/main/youtube/youtube-analytics",
    downloadPath: "/skills/youtube-analytics.zip",
    overview: [
      "This skill helps an agent inspect channel-level metrics, recent uploads, and video-by-video performance without falling back to vague creator advice.",
      "It is built around concrete API calls, practical benchmarks, and a repeatable analysis flow for finding what is working, what is underperforming, and where new content gaps exist."
    ],
    exampleQueries: [
      "Audit my YouTube channel @nltech1 and tell me which topics are outperforming the rest of the last 25 uploads.",
      "Compare @nltech1 against @ThePrimeTimeagen and @Fireship on upload frequency, average views per video, and recent momentum.",
      "Analyze this video https://youtu.be/ypktibw0Zjw and give me a short SEO review based on the title, metadata, and public performance signals."
    ],
    bestFor: [
      "Channel health checks and performance reviews",
      "Comparing your channel against other developer channels",
      "Spotting content gaps and keyword opportunities",
      "Reviewing title, description, and tag quality"
    ],
    outcomes: [
      "Channel overviews with actionable metrics",
      "Top-performer breakdowns and recurring patterns",
      "SEO observations tied to public YouTube data"
    ]
  },
  {
    slug: "youtube-angle-research",
    title: "YouTube Angle Research",
    summary: "Turn a raw topic lead into sharper video angles by combining competitor research, format patterns, and audience-fit analysis.",
    description: "A planning skill for testing whether a topic is worth covering and for generating better framing than a generic tutorial title.",
    category: "YouTube",
    tags: ["Research", "Ideation"],
    githubUrl: "https://github.com/nikelaz/skills/tree/main/youtube/youtube-angle-research",
    downloadPath: "/skills/youtube-angle-research.zip",
    overview: [
      "This skill starts from a topic lead, studies how the space is already covered, and decides whether the idea has real upside for a developer audience.",
      "Instead of producing interchangeable titles, it tries to surface distinct angles with clearer tension, stronger curiosity, and a more defensible audience fit."
    ],
    exampleQueries: [
      "Is 'Claude Code for backend work' a strong topic for a developer audience right now, or is it too saturated?",
      "Give me 5 better YouTube angles for 'MCPs with Rust' aimed at intermediate developers.",
      "Compare these framings for the same topic: 'Why creators are quitting daily vlogging' versus 'The hidden cost of daily vlogging'."
    ],
    bestFor: [
      "Validating new video ideas before scripting",
      "Sharpening a vague topic into a strong angle",
      "Avoiding saturated or weak developer topics",
      "Finding formats that can outperform a generic explainer"
    ],
    outcomes: [
      "A clear verdict on topic strength",
      "Several differentiated angle options",
      "Competitive notes on what others are missing"
    ]
  },
];

export default skills;
export const publicSkills = skills.filter((skill) => skill.isPublic !== false);
