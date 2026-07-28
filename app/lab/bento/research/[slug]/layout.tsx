import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export default function PaperLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={newsreader.variable}>{children}</div>;
}
