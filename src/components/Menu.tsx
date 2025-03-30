import { NavItem } from "./NavItem";

export const Menu = ({
  menuItems,
}: {
  menuItems: { href: string; label: string }[];
}) => {
  return (
    <ul className="md:hidden flex flex-col items-center list-none text-blue-800">
      {menuItems.map(({ href, label }) => (
        <li
          key={href}
          className={`w-full border-b first:border-t border-gray-200 flex justify-center py-1`}
        >
          <NavItem href={href} label={label} />
        </li>
      ))}
    </ul>
  );
};
