import Link from "next/link";

export const SideNav = () => {
  return (
    <div id="sideNav" className="fixed bg-sky-100 h-full w-[20rem]">
      <div className="text-4xl text-sky-950 flex justify-center my-10">
        my Blog
      </div>
      <div className="text-xl text-sky-700 flex h-full flex-col items-center gap-4 my-40">
        <Link href="/" className="hover:text-slate-950">
          Top
        </Link>

        <Link href="/about" className="hover:text-slate-950">
          About
        </Link>

        <Link href="/feed" className="hover:text-slate-950">
          Feed
        </Link>
        <Link href="/contact" className="hover:text-slate-950">
          Contact
        </Link>
      </div>
    </div>
  );
};
