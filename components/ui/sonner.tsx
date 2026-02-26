"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {

  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-black group-[.toaster]:text-white group-[.toaster]:border-[#BAFF4C]/30 group-[.toaster]:shadow-2xl font-sans rounded-xl border border-solid p-4 overflow-hidden backface-hidden will-change-transform transform-gpu",
          description: "group-[.toast]:text-white/60 text-[13px] mt-1",
          actionButton:
            "group-[.toast]:bg-[#BAFF4C] group-[.toast]:text-black font-semibold rounded-lg",
          cancelButton:
            "group-[.toast]:bg-white/10 group-[.toast]:text-white/80 font-medium rounded-lg hover:bg-white/20 transition-colors",
          icon: "group-[.toast]:text-[#BAFF4C] mr-2 h-5 w-5",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
