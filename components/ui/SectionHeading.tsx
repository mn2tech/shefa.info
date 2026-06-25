interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-navy-600">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gold-500 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}
