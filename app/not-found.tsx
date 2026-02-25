"use client";

import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Prevent hydration mismatch
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Ambient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none mix-blend-screen opacity-70 animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none mix-blend-screen opacity-50" />

            {/* Animated Subtle Grid Background (optional styling touch) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="z-10 flex flex-col items-center justify-center px-6 py-12 text-center w-full max-w-3xl mx-auto">
                <div
                    className="relative bg-background/40 backdrop-blur-2xl border border-primary/10 dark:border-white/5 shadow-2xl rounded-3xl p-8 md:p-16 flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ease-out transform translate-y-0 opacity-100"
                    style={{
                        animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    }}
                >
                    {/* Internal Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-60 pointer-events-none" />

                    <div className="relative flex items-center justify-center mb-8">
                        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_30px_rgba(186,255,76,0.2)]">
                            <SearchX className="w-10 h-10 text-primary animate-bounce" style={{ animationDuration: '3s' }} />
                        </div>
                        {/* Ping effect behind */}
                        <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                    </div>

                    <div className="space-y-4 relative z-10 w-full mb-10">
                        <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
                            Error 404
                        </div>

                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60 drop-shadow-sm mb-4">
                            Lost in space.
                        </h1>

                        <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
                            We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or perhaps never existed.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full relative z-10">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px] h-14 text-base font-semibold rounded-full group shadow-[0_4px_14px_0_rgba(186,255,76,0.39)] hover:shadow-[0_6px_20px_rgba(186,255,76,0.23)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Link href="/">
                                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Back to Dashboard
                            </Link>
                        </Button>

                        <Button
                            onClick={() => window.history.back()}
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px] h-14 text-base font-semibold rounded-full group bg-transparent hover:bg-muted/50 border-border/50 hover:border-foreground/20 backdrop-blur-md transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </Button>
                    </div>
                </div>
            </main>

            <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
