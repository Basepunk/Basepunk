import Link from "next/link";

const MobileNavbar = () => {
  return (
    <Link href={"/"} className="md:hidden p-5 fixed z-10">
      <span className="text-3xl font">Base</span>
      <span className="text-2xl font text-color-1">Punk</span>
    </Link>
  );
};
export default MobileNavbar;
