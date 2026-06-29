import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonVariant, ButtonSize } from "@/lib/types";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  showArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-sm uppercase tracking-wider",
  secondary:
    "bg-navy-800 text-white hover:bg-navy-900 shadow-sm uppercase tracking-wider",
  outline:
    "border-2 border-navy-800 text-navy-800 hover:bg-navy-50",
  ghost:
    "border border-white/50 bg-transparent text-white hover:bg-white/10 uppercase tracking-wider",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-3.5 text-sm gap-2",
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-sm font-semibold transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
