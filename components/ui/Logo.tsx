import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 200, height: 58, maxHeight: "max-h-14" },
  md: { width: 260, height: 75, maxHeight: "max-h-[4.5rem]" },
  lg: { width: 320, height: 92, maxHeight: "max-h-20" },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { width, height, maxHeight } = sizes[size];

  return (
    <Link href="/" className={`inline-block shrink-0 ${className}`} aria-label="Shefa home">
      <Image
        src="/images/shefa-logo.png"
        alt="Shefa — Strategic Connections. Sustainable Growth."
        width={width}
        height={height}
        priority
        className={`h-auto w-auto ${maxHeight} max-sm:max-h-12 object-contain object-left`}
      />
    </Link>
  );
}
