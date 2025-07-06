"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Phone, Menu, X, Home, Briefcase, MapPin, MessageSquare, Star, Camera, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "בית", href: "#home", icon: Home },
  { name: "גלריה", href: "#gallery", icon: Camera },
  { name: "אודות", href: "#about", icon: User },
  { name: "שירותים", href: "#services", icon: Briefcase },
  { name: "אזורי שירות", href: "#areas", icon: MapPin },
  { name: "המלצות", href: "#trust", icon: Star },
  { name: "שאלות נפוצות", href: "#faq", icon: MessageSquare },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Find the current active section
      const sections = navItems.map((item) => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100 // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest("header")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = window.innerWidth < 1024 ? 64 : 80 // Different height for mobile
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Update active section immediately
      setActiveSection(targetId)
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200 transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Phone Button - Desktop Only */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:from-orange-700 hover:via-red-700 hover:to-red-800 text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 px-6 py-3 rounded-xl border border-orange-500/20 group relative overflow-hidden"
              >
                <a href="tel:052-5487553" className="flex items-center space-x-2 space-x-reverse relative z-10">
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold">052-5487553</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>
              </Button>
            </div>

            {/* Mobile Phone Button - Left Side */}
            <div className="lg:hidden">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg px-3 py-2 rounded-lg text-sm group relative overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <a href="tel:052-5487553" className="flex items-center space-x-1 space-x-reverse relative z-10">
                  <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-semibold">התקשר</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </a>
              </Button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "")
                const isActive = activeSection === sectionId

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center space-x-2 space-x-reverse transition-all duration-300 group cursor-pointer relative px-3 py-2 rounded-lg hover:scale-105 ${
                      isActive
                        ? "text-orange-600 bg-gradient-to-r from-orange-500/20 to-red-500/10 border border-orange-500/30 shadow-lg"
                        : "text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:shadow-md"
                    }`}
                  >
                    <item.icon
                      className={`h-4 w-4 transition-all duration-300 ${
                        isActive ? "scale-110 text-orange-600" : "group-hover:scale-110 group-hover:text-orange-600"
                      }`}
                    />
                    <span className="font-medium">{item.name}</span>

                    {/* Active indicator dot with glow */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-600 rounded-full shadow-lg shadow-orange-600/50 animate-pulse"></div>
                    )}

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></div>
                  </a>
                )
              })}
            </nav>

            {/* Logo Only - Bigger Size */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-full blur opacity-75 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
              <div className="relative w-16 h-16 lg:w-18 lg:h-18 rounded-full overflow-hidden border-3 border-orange-500/50 shadow-xl hover:scale-110 hover:border-orange-400/70 transition-all duration-300 cursor-pointer group-hover:shadow-orange-500/30">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-rucAhXyGzIbtPNnAfeDz9FN5rQBBNt.jpeg"
                  alt="אוהל אברהם - לוגו"
                  className="w-full h-full object-contain bg-white p-1 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700 hover:text-orange-600 hover:bg-orange-50 p-2 rounded-lg hover:scale-105 transition-all duration-300 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-2xl z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="p-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "")
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center space-x-3 space-x-reverse transition-all duration-300 p-4 rounded-xl cursor-pointer relative group hover:scale-[1.02] ${
                  isActive
                    ? "text-orange-600 bg-gradient-to-r from-orange-500/20 via-red-500/15 to-yellow-500/10 border border-orange-500/30 shadow-lg"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:shadow-md"
                }`}
              >
                <item.icon
                  className={`h-6 w-6 transition-all duration-300 ${isActive ? "scale-110 text-orange-600" : "group-hover:scale-110 group-hover:text-orange-600"}`}
                />
                <span className="font-medium text-lg">{item.name}</span>

                {/* Active indicator for mobile with glow */}
                {isActive && (
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-orange-600 rounded-full shadow-lg shadow-orange-600/50"></div>
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </a>
            )
          })}

          {/* Mobile Contact Buttons */}
          <div className="pt-4 space-y-3 border-t border-gray-200">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg py-4 text-lg font-bold"
            >
              <a href="tel:052-5487553" className="flex items-center justify-center space-x-2 space-x-reverse">
                <Phone className="h-6 w-6" />
                <span>התקשר עכשיו: 052-5487553</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full bg-green-600 border-green-600 text-white hover:bg-green-700 hover:border-green-700 py-4 text-lg font-bold"
            >
              <a
                href="https://wa.me/972525487553"
                target="_blank"
                className="flex items-center justify-center space-x-2 space-x-reverse"
                rel="noreferrer"
              >
                <MessageSquare className="h-6 w-6" />
                <span>שלח וואטסאפ</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
