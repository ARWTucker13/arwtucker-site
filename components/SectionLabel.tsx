export default function SectionLabel({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label flex items-center gap-3">
      {index && <span className="text-teal">{index}</span>}
      <span aria-hidden className="inline-block h-px w-8 bg-rule" />
      {children}
    </p>
  );
}
