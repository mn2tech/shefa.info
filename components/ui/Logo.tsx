import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "header";
}

const sizes = {
  sm: { width: 240, height: 70, maxHeight: "max-h-16 max-sm:max-h-14" },
  md: { width: 320, height: 93, maxHeight: "max-h-[5.5rem] max-sm:max-h-20" },
  lg: { width: 380, height: 110, maxHeight: "max-h-24 max-sm:max-h-24" },
  xl: { width: 420, height: 122, maxHeight: "max-h-28 max-sm:max-h-24" },
  header: {
    width: 400,
    height: 115,
    maxHeight: "h-full w-auto max-w-[200px] object-contain object-left sm:max-w-[240px] lg:max-w-[280px]",
  },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  if (size === "header") {
    return (
      <Link
        href="/"
        className={`relative block h-[4.75rem] w-[min(62vw,15.5rem)] shrink-0 overflow-hidden sm:h-[5rem] sm:w-[17.5rem] lg:h-[5.25rem] lg:w-[20rem] ${className}`}
        aria-label="Shefa home"
      >
        <Image
          src="/images/shefa-logo.png"
          alt="Shefa — Strategic Connections. Sustainable Growth."
          fill
          priority
          sizes="(max-width: 640px) 248px, 320px"
          className="origin-left scale-[1.28] object-contain object-left sm:scale-[1.32] lg:scale-[1.36]"
        />
      </Link>
    );
  }

  const { width, height, maxHeight } = sizes[size];

  return (
    <Link href="/" className={`inline-block shrink-0 ${className}`} aria-label="Shefa home">
      <Image
        src="/images/shefa-logo.png"
        alt="Shefa — Strategic Connections. Sustainable Growth."
        width={width}
        height={height}
        priority
        className={`${maxHeight} object-contain object-left`}
      />
    </Link>
  );
}
