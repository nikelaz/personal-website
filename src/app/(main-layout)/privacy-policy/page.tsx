import type { Metadata } from "next";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Nikola Lazarov's personal website explaining how visitor data is handled and protected.",
  robots: {
    index: false,
    follow: false,
  },
};

const PrivacyPolicy = () => {
  return (
    <Container className="article flex flex-col gap-4">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> 2025-07-15</p>
      <h2>Who We Are</h2>
      <p>This is the personal website of Nikola Lazarov, located at <a href="https://www.nikolalazarov.com">https://www.nikolalazarov.com</a>. This privacy policy explains how we handle information when you visit our website.</p>
      <h2>Information We Collect</h2>
      <h3>Analytics Data</h3>
      <p>We use GoatCounter, a privacy-focused web analytics service, to understand how visitors use our website. GoatCounter collects only basic, non-personal information such as:</p>
      <ul>
        <li>Page views and which pages are visited</li>
        <li>Referrer information (which website you came from)</li>
        <li>Browser type and screen size</li>
        <li>General location (country/region level only)</li>
        <li>Time and date of visits</li>
      </ul>

      <p><strong>Important:</strong> This data is collected anonymously and cannot be used to identify individual visitors. No cookies are used, and no personal information is stored.</p>

      <h3>No Personal Data Collection</h3>
      <p>We do not collect, store, or process any personal information such as:</p>
      <ul>
        <li>Names, email addresses, or contact information</li>
        <li>IP addresses (these are anonymized)</li>
        <li>User accounts or login information</li>
        <li>Any personally identifiable information</li>
      </ul>

      <h2>How We Use Information</h2>
      <p>The anonymous analytics data helps us understand:</p>
      <ul>
        <li>Which content is most popular</li>
        <li>How visitors navigate the site</li>
        <li>General geographic distribution of visitors</li>
        <li>Technical information to improve site performance</li>
      </ul>
      <p>This information is used solely to improve the website experience and content.</p>

      <h2>Data Sharing</h2>
      <p>We do not share, sell, or distribute any data to third parties. The analytics data collected by GoatCounter remains private and is used only for the purposes described above.</p>

      <h2>Data Storage and Security</h2>
      <p>Analytics data is processed by GoatCounter, which is designed with privacy in mind. The service:</p>
      <ul>
        <li>Does not use cookies or persistent storage</li>
        <li>Does not track users across sessions</li>
        <li>Stores data securely with appropriate safeguards</li>
        <li>Complies with GDPR and other privacy regulations</li>
      </ul>

      <h2>Your Rights</h2>
      <p>Since we don&apos;t collect personal data, there&apos;s no personal information to access, correct, or delete. The analytics data we collect is anonymous and cannot be linked to individual users.</p>

      <h2>Children&apos;s Privacy</h2>
      <p>This website does not knowingly collect information from children under 13. The anonymous analytics data we collect cannot be used to identify users of any age.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date.</p>

      <h2>Contact Information</h2>
      <p>If you have questions about this privacy policy, please contact: <a href="mailto:nikola.n.lazarov@outlook.com">nikola.n.lazarov@outlook.com</a></p>
    </Container>
  );
};

export default PrivacyPolicy;
