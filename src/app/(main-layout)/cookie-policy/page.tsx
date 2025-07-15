import type { Metadata } from "next";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for Nikola Lazarov's personal website explaining how cookies are used and managed.",
  robots: {
    index: false,
    follow: false,
  },
};

const CookiePolicy = () => {
  return (
    <Container className="article flex flex-col gap-4">
      <h1>Cookie Policy</h1>
      <p><strong>Last updated:</strong> 2025-07-15</p>
      <h2>About Cookies</h2>
      <p>Cookies are small text files that websites store on your device to remember information about your visit.</p>
      <h2>Our Cookie Usage</h2>
      <p><strong>We do not use cookies on this website.</strong></p>
      <p>This website uses GoatCounter for analytics, which is specifically designed to work without cookies. GoatCounter tracks website usage through privacy-friendly methods that don&apos;t require storing any information on your device.</p>
      <h2>Third-Party Cookies</h2>
      <p>We do not use any third-party services that set cookies. Our analytics service (GoatCounter) is privacy-focused and cookie-free.</p>
      <h2>Your Choices</h2>
      <p>Since we don&apos;t use cookies, there are no cookie settings to manage. You can visit and use this website without any cookies being stored on your device.</p>
      <h2>Contact</h2>
      <p>If you have questions about our cookie policy, please contact: [Your Email Address]</p>
    </Container>
  );
};

export default CookiePolicy;
