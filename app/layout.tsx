import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Orbitron } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const seoKeywords = [
  "freelance web developer",
  "freelance mobile developer",
  "hire freelance web developer",
  "hire mobile app developer",
  "freelance web development services",
  "freelance mobile development",
  "freelance web design",
  "freelance app developer",
  "mobile app development freelancer",
  "web and mobile development",
  "freelance software developer",
  "web development for freelancers",
  "mobile app design and development",
  "affordable freelance web developer",
  "freelance web development solutions",
  "hire mobile app developer online",
  "top freelance web developers",
  "custom web development freelance",
  "freelance web and app development",
  "professional freelance mobile app development",
];

export const metadata: Metadata = {
  title: "Web&Mobile | Freelancer",
  description:
    "Innovative freelancer offering effective solutions tailored to your business.",
  keywords: seoKeywords,
  authors: [
    {
      name: "webmobilefreelance",
      url: "https://webmobilefreelance.com",
    },
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  creator: "webmobilefreelance",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webmobilefreelance.com",
    title: "Web&Mobile | Freelancer",
    description:
      "Innovative freelancer offering effective solutions tailored to your business.",
    siteName: "Web&Mobile | Freelancer",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${montserrat.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
