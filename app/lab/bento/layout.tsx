import { Fraunces } from "next/font/google";
import "./theme.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export default function BentoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${fraunces.variable} theme-bento min-h-screen bg-paper text-ink`}
    >
      {children}
    </div>
  );
}
