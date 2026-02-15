import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <Section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-white">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                <div className="flex flex-col justify-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-foreground">
                            The intelligent platform for{" "}
                            <span className="text-perk-green">travel</span> and{" "}
                            <span className="text-perk-green">spend</span>.
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                            Real work. Real business. Real impact. From booking to
                            reconciliation, Perk keeps everything moving—no chasing, no
                            checking, no wasted time.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 min-[400px]:flex-row">
                        <Button size="lg" className="h-14 px-8 text-base">
                            Book a demo
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-base group">
                            Get started <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="h-8 w-8 rounded-full border-2 border-background bg-muted"
                                />
                            ))}
                        </div>
                        <p>Trusted by 1000+ modern companies</p>
                    </div>
                </div>
                <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                    <div className="aspect-square overflow-hidden rounded-3xl bg-muted object-cover shadow-2xl skew-y-3 rotate-2 hover:rotate-0 hover:skew-y-0 transition-all duration-500">
                        {/* Placeholder for Hero Image */}
                        <div className="w-full h-full bg-gradient-to-br from-perk-green/20 to-perk-green-dark/20 flex items-center justify-center">
                            <span className="text-perk-green-dark font-medium">Platform Interface Preview</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
