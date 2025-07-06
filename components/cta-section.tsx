"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-red-900/15 to-yellow-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.08),transparent_50%)]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-red-600/10 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">מוכנים להתחיל?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            קבלו הצעת מחיר חינם תוך 15 דקות או התקשרו עכשיו לשירות מיידי
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:from-orange-700 hover:via-red-700 hover:to-red-800 text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl text-lg font-bold min-w-[300px] border border-orange-500/20"
            >
              <a href="tel:052-5487553" className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-6 w-6" />
                <span>התקשרו עכשיו: 052-5487553</span>
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-slate-800/50 backdrop-blur-md border-2 border-orange-500/50 text-white hover:bg-slate-700/50 hover:border-orange-400 shadow-xl transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl text-lg font-bold min-w-[300px]"
            >
              <a
                href="https://wa.me/972525487553"
                target="_blank"
                className="flex items-center space-x-2 rtl:space-x-reverse"
                rel="noreferrer"
              >
                <MessageCircle className="h-6 w-6" />
                <span>שלחו הודעה בוואטסאפ</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
