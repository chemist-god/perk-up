"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/icons/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, User, ChevronDown, ChevronRight, Plus } from "lucide-react"

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 pt-4 px-4 md:px-8 transition-all duration-300">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-full bg-[#F3F4ED]/70 backdrop-blur-md px-6 lg:px-8 shadow-sm border border-black/5">
                <Link href="/" className="flex items-center gap-2 mr-6">
                    <Logo className="h-8 w-auto text-[#BAFF4C]" />
                    <span className="font-bold text-xl tracking-tight text-black">
                        perk
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-black">
                    <Link href="#" className="hover:text-black/70 transition-colors">Product</Link>
                    <Link href="#" className="hover:text-black/70 transition-colors">Solutions</Link>
                    <Link href="#" className="hover:text-black/70 transition-colors">Customers</Link>
                    <Link href="#" className="hover:text-black/70 transition-colors">Pricing</Link>
                    <Link href="#" className="hover:text-black/70 transition-colors">Integrations</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden lg:flex items-center gap-1 cursor-pointer text-black hover:text-black/70 transition-colors mr-2">
                        <Globe className="h-[18px] w-[18px]" />
                        <ChevronDown className="h-4 w-4" />
                    </div>

                    <div className="hidden md:flex items-center gap-2 lg:gap-3">
                        <Button className="bg-[#BAFF4C] text-black hover:bg-[#a3e63d] font-semibold rounded-full px-5 h-10 text-[14px]">
                            Book a demo <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full px-5 h-10 border-foreground/20 text-black hover:bg-[#BAFF4C] hover:border-[#BAFF4C] hover:text-black font-semibold transition-colors text-[14px] bg-transparent"
                            asChild
                        >
                            <Link href="/get-started">
                                Get started <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-black/5 text-black">
                            <User className="h-[20px] w-[20px]" />
                            <span className="sr-only">Account</span>
                        </Button>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden text-black hover:bg-black/5">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#F3F4ED]">
                            <nav className="flex flex-col gap-4 mt-8">
                                <Link href="#" className="text-lg font-medium text-black">Product</Link>
                                <Link href="#" className="text-lg font-medium text-black">Solutions</Link>
                                <Link href="#" className="text-lg font-medium text-black">Customers</Link>
                                <Link href="#" className="text-lg font-medium text-black">Pricing</Link>
                                <Link href="#" className="text-lg font-medium text-black">Integrations</Link>
                                <div className="h-px bg-border my-2" />
                                <Button className="w-full bg-[#BAFF4C] text-black hover:bg-[#a3e63d] rounded-full font-semibold">
                                    Book a demo <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                                <Button variant="outline" className="w-full rounded-full border-foreground/20 text-black hover:bg-[#BAFF4C] hover:border-[#BAFF4C] hover:text-black font-semibold transition-colors" asChild>
                                    <Link href="/get-started">
                                        Get started <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
