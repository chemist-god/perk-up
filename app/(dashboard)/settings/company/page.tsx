import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Save, Upload } from "lucide-react"

export default function CompanyProfilePage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-4 sm:px-6 bg-[#F3F4ED] sticky top-0 z-20">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">Company Profile</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                    <Button className="h-9 rounded-full bg-[#BAFF4C] text-black hover:bg-[#a3e63d] font-semibold flex items-center shadow-sm text-[13px] px-4">
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#F3F4ED]">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">Company Profile</h1>
                        <p className="text-black/60 text-[14px] sm:text-[15px] mt-1">Manage your organization's business details and branding.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left column: Nav/context */}
                        <div className="md:col-span-1 space-y-1">
                            <nav className="flex flex-col gap-1">
                                <Button variant="ghost" className="justify-start bg-white text-black font-semibold hover:bg-white border hover:border-black/5 border-transparent shadow-sm rounded-xl">
                                    General Info
                                </Button>
                                <Button variant="ghost" className="justify-start text-black/60 hover:text-black font-medium hover:bg-black/5 rounded-xl">
                                    Billing Details
                                </Button>
                                <Button variant="ghost" className="justify-start text-black/60 hover:text-black font-medium hover:bg-black/5 rounded-xl">
                                    Compliance
                                </Button>
                            </nav>
                        </div>

                        {/* Right column: Form fields */}
                        <div className="md:col-span-2 space-y-6">
                            <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                <CardHeader className="border-b border-black/5 bg-black/[0.02] px-6 py-5">
                                    <CardTitle className="text-lg">Business Details</CardTitle>
                                    <CardDescription>This information will appear on receipts and invoices.</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    {/* Logo Upload Placeholder */}
                                    <div className="flex items-center gap-6">
                                        <div className="h-20 w-20 rounded-2xl bg-black/5 flex items-center justify-center border border-black/10 overflow-hidden relative group cursor-pointer">
                                            <Building2 className="h-8 w-8 text-black/30 group-hover:opacity-0 transition-opacity" />
                                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Upload className="h-5 w-5 text-white mb-1" />
                                                <span className="text-[10px] text-white font-semibold uppercase tracking-wider">Upload</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h4 className="text-[14px] font-semibold text-black">Company Logo</h4>
                                            <p className="text-[13px] text-black/50">Recommended size: 400x400px</p>
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="companyName" className="text-black/80 font-semibold text-[13px]">Company Name</Label>
                                        <Input id="companyName" defaultValue="TechFlow Inc." className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="taxId" className="text-black/80 font-semibold text-[13px]">Tax ID (EIN/VAT)</Label>
                                        <Input id="taxId" defaultValue="XX-XXXXXXX" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors font-mono" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="website" className="text-black/80 font-semibold text-[13px]">Website URL</Label>
                                        <Input id="website" defaultValue="https://techflow.com" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors text-black/70" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                <CardHeader className="border-b border-black/5 bg-black/[0.02] px-6 py-5">
                                    <CardTitle className="text-lg">Registered Address</CardTitle>
                                    <CardDescription>The primary physical location of your business.</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="address1" className="text-black/80 font-semibold text-[13px]">Address Line 1</Label>
                                        <Input id="address1" defaultValue="1200 Market Street" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="address2" className="text-black/80 font-semibold text-[13px]">Address Line 2 (Optional)</Label>
                                        <Input id="address2" defaultValue="Suite 400" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] focus-visible:border-[#BAFF4C] transition-colors" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="city" className="text-black/80 font-semibold text-[13px]">City</Label>
                                            <Input id="city" defaultValue="San Francisco" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="state" className="text-black/80 font-semibold text-[13px]">State/Province</Label>
                                            <Input id="state" defaultValue="CA" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="zip" className="text-black/80 font-semibold text-[13px]">ZIP/Postal Code</Label>
                                            <Input id="zip" defaultValue="94102" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="country" className="text-black/80 font-semibold text-[13px]">Country</Label>
                                            <Input id="country" defaultValue="United States" className="rounded-xl border-black/10 h-11 px-4 focus-visible:ring-[#BAFF4C] transition-colors" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
