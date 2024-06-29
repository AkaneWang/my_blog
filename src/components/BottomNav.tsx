import Link from "next/link";

interface NavProps {
  href: string;
  name: string;
}

const navs: NavProps[] = [
  { href: "/", name: "Top" },
  { href: "/about", name: "About" },
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
        <Nav href={href} name={name} />
      ))}
    </div>
  );
};

const Nav = ({ href, name }: NavProps) => {
  return (
    <Link href={href} className="hover:text-slate-950">
      {name}
    </Link>
  );
};
