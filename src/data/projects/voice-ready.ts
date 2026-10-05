const voiceReady: Project = {
  slug: "voice-ready",
  name: "Voice Ready",
  shortDescription: "A desktop app that cleans, balances, and prepares spoken audio for publishing.",
  categories: ["Native", "Developer Tools"],
  technologies: ["C", "raylib", "FFmpeg", "ONNX Runtime"],
  homepageUrl: "https://lazarovco.com/voice-ready/",
  heroImage: {
    src: "/projects/voice-ready-ui.webp",
    alt: "Voice Ready audio editor showing noise reduction, voice balance, tone, loudness, and audio preview controls",
  },
  screenshots: [
    {
      src: "/projects/voice-ready-ui.webp",
      alt: "Voice Ready audio editor showing noise reduction, voice balance, tone, loudness, and audio preview controls",
    },
  ],
  featured: true,
  sections: [
    {
      heading: "Overview",
      body: [
        "Voice Ready is a closed-source desktop app for preparing spoken audio for podcasts, videos, and other publishing. It reduces background noise, cleans up quiet sections, balances speech, shapes voice tone, and sets a target loudness.",
        "I wrote the application in C. It uses FFmpeg for media processing and ONNX Runtime to run its noise-reduction model locally. The interface is built from scratch and rendered with raylib.",
        "The free demo includes every feature and is available for Windows and macOS, with exports limited to three minutes per file.",
      ],
    },
  ],
  relatedArticles: [],
  relatedVideos: [],
  ogImage: "og-voice-ready.png",
};

export default voiceReady;
