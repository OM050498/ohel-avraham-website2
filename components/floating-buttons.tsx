"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Mobile Floating Buttons - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 lg:hidden">
        {/* WhatsApp Button */}
        <div className="relative group">
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20 scale-110"></div>

          <Button
            asChild
            size="icon"
            className="relative w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 rounded-full border-2 border-green-400/30 group-hover:border-green-300/50"
          >
            <a
              href="https://wa.me/972525487553"
              target="_blank"
              title="שלח הודעה בוואטסאפ"
              className="flex items-center justify-center relative"
              rel="noreferrer"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with enhanced styling */}
              <MessageCircle className="h-8 w-8 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />

              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </a>
          </Button>
        </div>

        {/* Phone Button */}
        <div className="relative group">
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30 delay-500"></div>
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-pulse opacity-20 scale-110 delay-300"></div>

          <Button
            asChild
            size="icon"
            className="relative w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 text-white shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 rounded-full border-2 border-orange-400/30 group-hover:border-orange-300/50"
          >
            <a href="tel:052-5487553" title="התקשר עכשיו" className="flex items-center justify-center relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with enhanced styling */}
              <Phone className="h-8 w-8 relative z-10 drop-shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />

              {/* Call Animation Ring */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
            </a>
          </Button>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <div className="relative group animate-fadeIn">
            <Button
              onClick={scrollToTop}
              size="icon"
              className="relative w-14 h-14 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 text-white shadow-xl hover:shadow-slate-600/50 transition-all duration-300 hover:scale-110 rounded-full border-2 border-slate-500/30 group-hover:border-slate-400/50"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with enhanced styling */}
              <ChevronUp className="h-6 w-6 relative z-10 drop-shadow-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
            </Button>
          </div>
        )}
      </div>

      {/* Desktop Floating Buttons - Bottom Left */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-50 flex-col gap-4">
        {/* WhatsApp Button */}
        <div className="relative group">
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-15 scale-125"></div>

          <Button
            asChild
            size="icon"
            className="relative w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 rounded-full border-2 border-green-400/30 group-hover:border-green-300/50"
          >
            <a
              href="https://wa.me/972525487553"
              target="_blank"
              title="שלח הודעה בוואטסאפ"
              className="flex items-center justify-center relative"
              rel="noreferrer"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with enhanced styling */}
              <MessageCircle className="h-8 w-8 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />

              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white text-xs font-bold">!</span>
              </div>

              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900/95 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                שלח הודעה בוואטסאפ
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-900/95"></div>
              </div>
            </a>
          </Button>
        </div>

        {/* Phone Button */}
        <div className="relative group">
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-25 delay-500"></div>
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-pulse opacity-15 scale-125 delay-300"></div>

          <Button
            asChild
            size="icon"
            className="relative w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 text-white shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 rounded-full border-2 border-orange-400/30 group-hover:border-orange-300/50"
          >
            <a href="tel:052-5487553" title="התקשר עכשיו" className="flex items-center justify-center relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with enhanced styling */}
              <Phone className="h-8 w-8 relative z-10 drop-shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />

              {/* Call Animation Ring */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>

              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900/95 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                התקשר עכשיו: 052-5487553
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-900/95"></div>
              </div>
            </a>
          </Button>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <div className="relative group animate-fadeIn">
            <Button
              onClick={scrollToTop}
              size="icon"
              className="relative w-14 h-14 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 text-white shadow-xl hover:shadow-slate-600/50 transition-all duration-300 hover:scale-110 rounded-full border-2 border-slate-500/30 group-hover:border-slate-400/50"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with enhanced styling */}
              <ChevronUp className="h-6 w-6 relative z-10 drop-shadow-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />

              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900/95 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                חזור למעלה
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-900/95"></div>
              </div>
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
