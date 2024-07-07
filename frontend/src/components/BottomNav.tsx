"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  href: string;
  name: string;
}

const navs: NavProps[] = [
  { href: "/", name: "Top" },
  { href: "/profile", name: "Profile" },
  { href: "/feed", name: "Feed" },
  { href: "/contact", name: "Contact" },
];

export const BottomNav = () => {
  return (
    <div
      id="BottomNav"
      className="fixed md:hidden bottom-0 bg-blue-100 w-full text-sky-700 text-lg flex justify-around py-2 shadow-md"
    >
      {navs.map(({ href, name }) => (
        <Nav key={name} href={href} name={name} />
      ))}
    </div>
  );
};

const Nav = ({ href, name }: NavProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`flex flex-col items-center py-2 px-3 transition-colors duration-300 ${
        isActive ? "bg-blue-500 text-white rounded-md" : "text-blue-900"
      } hover:bg-blue-400 hover:text-white rounded-md`}
    >
      {name}
    </Link>
  );
};
