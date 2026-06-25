interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  const hoverStyles = hover
    ? "transition-shadow hover:shadow-md"
    : "";

  return (
    <article
      className={`rounded-xl border border-gray-muted bg-white p-6 shadow-sm ${hoverStyles} ${className}`}
    >
      {children}
    </article>
  );
}
