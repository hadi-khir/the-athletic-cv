import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import Image from "next/image";
import { NavLinks as navLinks } from "@/lib/utils";

const NavBar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-10 flex justify-between bg-stone-900 p-4 items-center text-white">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <a className="text-3xl font-bold">The Athletic</a>
      </div>
      {/* Middle Section: Links */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link className="p-2 hover:bg-stone-600" key={link.id} href={link.href}>
            <span>{link.text}</span>
          </Link>
        ))}
      </div>
      {/* Avatar */}
      <div className="rounded-full w-8 h-8 mr-4 overflow-hidden">
        <Image
          src="/profile.jpeg"
          alt="Profile Picture"
          width={96}
          height={96}
          className="object-cover"
        />
      </div>
    </nav>
  );
};

export default NavBar;
