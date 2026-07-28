import "./theme.css";

export default function ManualLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="theme-manual min-h-screen bg-paper text-ink">
      {children}
    </div>
  );
}
