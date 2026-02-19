export default function JsonLd() {
  const person = {
    "@type": "Person",
    name: "Ava Lumen",
    url: "https://avalumen.me",
    sameAs: [
      "https://twitter.com/shakeeb_x",
      "https://github.com/shakee93",
    ],
    jobTitle: "AI Product Builder",
  };

  const website = {
    "@type": "WebSite",
    name: "Ava Lumen",
    url: "https://avalumen.me",
  };

  const substractAI = {
    "@type": "SoftwareApplication",
    name: "Substract AI",
    url: "https://substract.co",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description:
      "AI subscription analyzer that connects to your accounts, shows what you're paying for, and recommends what to cut.",
    offers: {
      "@type": "Offer",
      price: "9.99",
      priceCurrency: "USD",
    },
  };

  const plugin0 = {
    "@type": "SoftwareApplication",
    name: "Plugin0",
    url: "https://plugin0.com",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    description:
      "Prompt-to-plugin for WordPress. Describe what you want, get a working plugin.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website, substractAI, plugin0],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
