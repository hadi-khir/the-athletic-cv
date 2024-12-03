import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const NavLinks = [
  {
    id: 1,
    text: "Hadi's Pick Six",
    href: "#pick-six"
  },
  {
    id: 2,
    text: "Headlines",
    href: "#headlines"
  },
  {
    id: 3,
    text: "Experience",
    href: "#experience"
  },
  {
    id: 4,
    text: "Projects",
    href: "#projects"
  },
  {
    id: 5,
    text: "Skills",
    href: "#skills"
  }
];