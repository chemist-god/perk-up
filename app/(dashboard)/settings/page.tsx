import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { User, Bell, Lock, Shield, Settings2, HelpCircle } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className="flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-4 sm:px-6 bg-[#F3F4ED] sticky top-0 z-20">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-2 text-black/70 hover:text-black hover:bg-black/5" />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-black/10" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-semibold text-[14px]">General Settings</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>

            <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#F3F4ED]">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">Settings</h1>
                        <p className="text-black/60 text-[14px] sm:text-[15px] mt-1">Manage your personal account settings and preferences.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Vertical Tabs Sidebar */}
                        <div className="md:col-span-1 border-r border-black/5 pr-6 h-fit hidden md:block">
                            <nav className="flex flex-col gap-2">
                                <Button variant="ghost" className="justify-start bg-black/5 text-black font-semibold rounded-xl px-4 py-6">
                                    <User className="mr-3 h-4 w-4" /> Account Details
                                </Button>
                                <Button variant="ghost" className="justify-start text-black/60 hover:text-black font-medium hover:bg-black/5 rounded-xl px-4 py-6">
                                    <Bell className="mr-3 h-4 w-4" /> Notifications
                                </Button>
                                <Button variant="ghost" className="justify-start text-black/60 hover:text-black font-medium hover:bg-black/5 rounded-xl px-4 py-6">
                                    <Lock className="mr-3 h-4 w-4" /> Privacy & Security
                                </Button>
                                <Button variant="ghost" className="justify-start text-black/60 hover:text-black font-medium hover:bg-black/5 rounded-xl px-4 py-6">
                                    <Shield className="mr-3 h-4 w-4" /> API Access
                                </Button>
                                <Separator className="my-2 bg-black/5" />
                                <Button variant="ghost" className="justify-start text-black/60 hover:text-black font-medium hover:bg-black/5 rounded-xl px-4 py-6">
                                    <Settings2 className="mr-3 h-4 w-4" /> App Preferences
                                </Button>
                                <Button variant="ghost" className="justify-start text-black/60 hover:text-black font-medium hover:bg-black/5 rounded-xl px-4 py-6">
                                    <HelpCircle className="mr-3 h-4 w-4" /> Help & Support
                                </Button>
                            </nav>
                        </div>

                        {/* Content Area */}
                        <div className="md:col-span-3 space-y-6">

                            {/* Personal Information */}
                            <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                <CardHeader className="border-b border-black/5 px-6 py-5">
                                    <CardTitle className="text-lg">Personal Information</CardTitle>
                                    <CardDescription>Update your personal details below.</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="h-24 w-24 rounded-full bg-[#BAFF4C] flex items-center justify-center text-black font-bold text-2xl border-4 border-white shadow-sm shrink-0">
                                            AT
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Button variant="outline" className="h-9 rounded-full border-black/10 text-black hover:bg-black/5 bg-transparent text-[13px] font-semibold">
                                                Change Avatar
                                            </Button>
                                            <Button variant="ghost" className="text-[13px] text-red-600 hover:text-red-700 hover:bg-red-50 h-8 rounded-full">
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="border-t border-black/5 pt-6 pb-2">
                                        <div className="flex justify-between items-center group cursor-pointer rounded-xl p-3 -mx-3 hover:bg-black/[0.02]">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[13px] font-semibold text-black/50">Full Name</span>
                                                <span className="text-[15px] font-medium text-black group-hover:underline decoration-black/20 underline-offset-4">Ana Torres</span>
                                            </div>
                                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Edit</Button>
                                        </div>
                                        <div className="flex justify-between items-center group cursor-pointer rounded-xl p-3 -mx-3 hover:bg-black/[0.02]">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[13px] font-semibold text-black/50">Email Address</span>
                                                <span className="text-[15px] font-medium text-black group-hover:underline decoration-black/20 underline-offset-4">ana@techflow.com</span>
                                            </div>
                                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Edit</Button>
                                        </div>
                                        <div className="flex justify-between items-center group cursor-pointer rounded-xl p-3 -mx-3 hover:bg-black/[0.02]">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[13px] font-semibold text-black/50">Phone Number</span>
                                                <span className="text-[15px] font-medium text-black group-hover:underline decoration-black/20 underline-offset-4">+1 (555) 000-0000</span>
                                            </div>
                                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Edit</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Email Preferences */}
                            <Card className="rounded-3xl border-black/5 shadow-sm bg-white overflow-hidden">
                                <CardHeader className="border-b border-black/5 px-6 py-5">
                                    <CardTitle className="text-lg">Email Preferences</CardTitle>
                                    <CardDescription>Manage how we communicate with you via email.</CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y divide-black/5">
                                        <div className="flex flex-row items-center justify-between p-6">
                                            <div className="flex flex-col gap-1">
                                                <Label htmlFor="marketing-emails" className="text-[15px] font-semibold text-black">Marketing & Product Updates</Label>
                                                <span className="text-[13px] text-black/50">Receive emails about new features, tips, and promotions.</span>
                                            </div>
                                            <Switch className="data-[state=checked]:bg-[#BAFF4C] shrink-0" id="marketing-emails" />
                                        </div>
                                        <div className="flex flex-row items-center justify-between p-6">
                                            <div className="flex flex-col gap-1">
                                                <Label htmlFor="security-alerts" className="text-[15px] font-semibold text-black">Security Alerts</Label>
                                                <span className="text-[13px] text-black/50">Urgent notifications about your account security.</span>
                                            </div>
                                            <Switch className="data-[state=checked]:bg-[#BAFF4C] shrink-0" id="security-alerts" defaultChecked disabled />
                                        </div>
                                        <div className="flex flex-row items-center justify-between p-6">
                                            <div className="flex flex-col gap-1">
                                                <Label htmlFor="transaction-digests" className="text-[15px] font-semibold text-black">Weekly Transaction Digests</Label>
                                                <span className="text-[13px] text-black/50">A weekly summary of your corporate card spending.</span>
                                            </div>
                                            <Switch className="data-[state=checked]:bg-[#BAFF4C] shrink-0" id="transaction-digests" defaultChecked />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Danger Zone */}
                            <Card className="rounded-3xl border-red-100 shadow-sm bg-red-50/30 overflow-hidden">
                                <CardHeader className="px-6 py-5">
                                    <CardTitle className="text-lg text-red-600">Danger Zone</CardTitle>
                                    <CardDescription className="text-red-600/60">Irreversible actions regarding your account.</CardDescription>
                                </CardHeader>
                                <CardContent className="px-6 pb-6 pt-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-red-100 bg-white rounded-2xl">
                                        <div>
                                            <h4 className="font-semibold text-[14px]">Delete Account</h4>
                                            <p className="text-[13px] text-black/50 mt-1">Permanently remove your Data and Profile. This cannot be undone.</p>
                                        </div>
                                        <Button variant="destructive" className="bg-red-600 text-white hover:bg-red-700 font-semibold rounded-full px-6">
                                            Delete Account
                                        </Button>
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
