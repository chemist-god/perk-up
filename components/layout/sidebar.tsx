"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    CreditCard,
    LayoutDashboard,
    LifeBuoy,
    Receipt,
    Send,
    Settings2,
    PieChart,
    Wallet,
    LogOut,
    Building2,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarSeparator,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/icons/logo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const data = {
    user: {
        name: "Ana Torres",
        email: "ana@techflow.com",
        avatar: "/images/img_3.jpeg",
    },
    navMain: [
        {
            title: "Overview",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Transactions",
            url: "#",
            icon: Receipt,
        },
        {
            title: "Corporate Cards",
            url: "#",
            icon: CreditCard,
        },
        {
            title: "Reimbursements",
            url: "#",
            icon: Wallet,
        },
        {
            title: "Analytics",
            url: "#",
            icon: PieChart,
        },
    ],
    navSettings: [
        {
            title: "Company Profile",
            url: "#",
            icon: Building2,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
        },
    ]
}

export function MainSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    return (
        <Sidebar className="border-r border-black/5 bg-[#F3F4ED]" {...props}>
            <SidebarHeader className="h-16 flex items-center px-6 border-b border-black/5">
                <Link href="/" className="flex items-center gap-2 w-full mt-2">
                    <Logo className="h-8 w-auto text-[#BAFF4C]" />
                    <span className="font-bold text-xl tracking-tight text-black">perk</span>
                </Link>
            </SidebarHeader>
            <SidebarContent className="px-3 py-4 gap-6">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-medium text-black/50 uppercase tracking-wider mb-2 px-3">
                        Main
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navMain.map((item) => {
                                const isActive = pathname === item.url || pathname?.startsWith(item.url + '/')
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            tooltip={item.title}
                                            className={`rounded-xl h-11 transition-all ${isActive
                                                    ? 'bg-[#BAFF4C] text-black font-semibold shadow-sm'
                                                    : 'text-black/70 hover:bg-black/5 hover:text-black font-medium'
                                                }`}
                                        >
                                            <Link href={item.url} className="flex items-center gap-3 px-3">
                                                <item.icon className={`h-5 w-5 ${isActive ? 'text-black' : 'text-black/50'}`} />
                                                <span className="text-[14px]">{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-medium text-black/50 uppercase tracking-wider mb-2 px-3">
                        Preferences
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navSettings.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip={item.title}
                                        className="rounded-xl h-11 text-black/70 hover:bg-black/5 hover:text-black font-medium transition-all"
                                    >
                                        <Link href={item.url} className="flex items-center gap-3 px-3">
                                            <item.icon className="h-5 w-5 text-black/50" />
                                            <span className="text-[14px]">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <div className="mt-auto p-4 mx-3 mb-4 bg-black/5 rounded-2xl">
                <div className="flex items-center gap-3">
                    <LifeBuoy className="h-5 w-5 text-black/60" />
                    <div>
                        <p className="text-[13px] font-semibold text-black">Need help?</p>
                        <p className="text-[12px] text-black/60">Check our docs</p>
                    </div>
                </div>
            </div>

            <SidebarFooter className="border-t border-black/5 p-4 bg-[#F3F4ED]">
                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-[#BAFF4C]">
                        <AvatarImage src={data.user.avatar} alt={data.user.name} className="object-cover" />
                        <AvatarFallback className="bg-black/5 text-black font-semibold">AT</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-[14px] font-semibold text-black truncate">{data.user.name}</span>
                        <span className="text-[12px] text-black/60 truncate">{data.user.email}</span>
                    </div>
                    <Link href="/login" className="ml-auto text-black/50 hover:text-black transition-colors">
                        <LogOut className="h-5 w-5" />
                    </Link>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
