import Link from "next/link";

export const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="transition-colors duration-300 hover:text-[#DF2A35] whitespace-nowrap font-semibold text-lg"
    >
      {label}
    </Link>
  );
};
