import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Concept — Power Any Business Idea with Autonomous AI",
  description: "AI Concept is building an end-to-end intelligence ecosystem. Automate workflows, deploy specialized AI agents, and transform raw concepts into scalable operations.",
  keywords: ["AI Concept", "autonomous AI agents", "smart automation", "business AI infrastructure", "AI workflow automation"],
  authors: [{ name: "AI Concept Team", url: "https://aiconcpet.com" }],
  openGraph: {
    title: "AI Concept — Power Any Business Idea with Autonomous AI",
    description: "Automate workflows, deploy specialized AI agents, and transform raw concepts into scalable operations.",
    url: "https://aiconcpet.com",
    siteName: "AI Concept",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Concept — Power Any Business Idea with Autonomous AI",
    description: "Automate workflows, deploy specialized AI agents, and transform raw concepts into scalable operations.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#070A11",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#070A11] text-slate-100 antialiased selection:bg-[#00F2FE]/30 selection:text-[#00F2FE]">
        {children}
      </body>
    </html>
  );
}
