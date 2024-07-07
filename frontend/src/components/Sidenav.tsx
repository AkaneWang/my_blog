"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navs: NavProps[] = [
  { href: "/", name: "Top" },
  { href: "/profile", name: "Profile" },
  { href: "/feed", name: "Feed" },
  { href: "/contact", name: "Contact" },
];

export const SideNav = () => {
  return (
    <div id="sideNav" className="hidden md:block fixed bg-sky-100 h-full w-[20rem] ">
      <div className="text-4xl text-blue-900 flex justify-center my-10 font-bold">my Blog</div>
      <div className="text-xl text-blue-700 flex h-full flex-col items-center gap-4 my-20">
        {navs.map(({ href, name }) => (
          <Nav key={name} href={href} name={name} />
        ))}
      </div>
    </div>
  );
};

interface NavProps {
  href: string;
  name: string;
}

const Nav = ({ href, name }: NavProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`w-full text-center py-3 px-6 rounded-lg transition-colors duration-300 ${pathname === href ? "bg-blue-500 text-white" : "bg-blue-200 text-blue-900"} hover:bg-blue-400 hover:text-white`}>
      {name}
    </Link>
  );
};
