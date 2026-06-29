import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 140, height: 40 },
  md: { width: 180, height: 52 },
  lg: { width: 220, height: 64 },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <Link href="/" className={`inline-block shrink-0 ${className}`} aria-label="Shefa home">
      <Image
        src="/images/shefa-logo.png"
        alt="Shefa — Strategic Connections. Sustainable Growth."
        width={width}
        height={height}
        priority
        className="h-auto w-auto max-h-12 object-contain"
      />
    </Link>
  );
}
