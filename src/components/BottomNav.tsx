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
      className="fixed md:hidden bottom-0 bg-sky-100 w-full text-sky-700 text-lg flex justify-around py-2"
    >
      {navs.map(({ href, name }) => (
        <Nav key={name} href={href} name={name} />
      ))}
    </div>
  );
};

const Nav = ({ href, name }: NavProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${pathname === href && "text-slate-950"} bg-slate-500`}
    >
      {name}
    </Link>
  );
};
