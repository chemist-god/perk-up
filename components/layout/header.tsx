import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="h-8 w-8 text-perk-green" />
                    <span className="text-xl font-bold tracking-tight">Perk</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Product
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Solutions
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Customers
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Pricing
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Resources
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="#" className="hidden text-sm font-medium hover:underline md:block">
                        Log in
                    </Link>
                    <Button>Book a demo</Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
