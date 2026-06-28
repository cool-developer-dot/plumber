import Link from "next/link";

type DesktopNavLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
};

export default function DesktopNavLink({
  href,
  children,
  variant = "light",
  className = "",
}: DesktopNavLinkProps) {
  const variantClass =
    variant === "dark" ? "desktop-nav-link--on-dark" : "desktop-nav-link--on-light";

  return (
    <Link
      href={href}
      className={`desktop-nav-link ${variantClass} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
