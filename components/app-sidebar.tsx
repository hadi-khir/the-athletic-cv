import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function AppSidebar() {
  return (
    <Sidebar>
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
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
