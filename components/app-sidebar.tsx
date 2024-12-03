import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link";
import { NavLinks as navLinks } from "@/lib/utils";

export function AppSidebar() {


  return (
    <Sidebar className="flex items-center">
      <SidebarHeader className="bg-stone-900">
        <Image
          className="text-right"
          src={'/athletic_logo.png'}
          alt="Company Logo"
          width={150}
          height={150}
        />
      </SidebarHeader>
      <SidebarContent className="bg-stone-900">
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.id}>
              <SidebarMenuButton asChild>
                <Link href={link.href}>
                  <span className="text-white text-lg">{link.text}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
