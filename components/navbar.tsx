import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="bg-stone-900 text-white">
      <div className="w-full px-4 py-3 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <a className="text-3xl font-bold">The Athletic</a>
        </div>
        {/* Middle Section: Links */}
        <div className="hidden md:flex space-x-6">
          {[
            "Premier League",
            "Champions League",
            "International Football",
            "Tennis",
            "Formula 1",
            "Golf",
          ].map((link) => (
            <Link key={link} href={`/${link.toLowerCase().replace(" ", "-")}`}>
              {link}
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
      </div>
    </nav>
  );
};

export default NavBar;
