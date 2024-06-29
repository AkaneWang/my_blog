import Link from "next/link";

const navs: NavProps[] = [
  { href: "/", name: "Top" },
  { href: "/about", name: "About" },
  { href: "/feed", name: "Feed" },
  { href: "/contact", name: "Contact" },
];

export const SideNav = () => {
  return (
    <div
      id="sideNav"
      className="hidden md:block fixed bg-sky-100 h-full w-[20rem] "
    >
      <div className="text-4xl text-sky-950 flex justify-center my-10">
        my Blog
      </div>
      <div className="text-xl text-sky-700 flex h-full flex-col items-center gap-4 my-40">
        {navs.map(({ href, name }) => (
          <Nav href={href} name={name} />
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
  return (
    <Link href={href} className="hover:text-slate-950">
      {name}
    </Link>
  );
};
