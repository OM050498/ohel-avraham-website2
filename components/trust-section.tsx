"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Shield, Clock, Award } from "lucide-react"

const trustItems = [
  {
    icon: Star,
    title: "4.9/5 בגוגל",
    description: "מעל 200 ביקורות חיוביות מלקוחות מרוצים ברחבי הארץ",
    gradient: "from-yellow-600 to-orange-600",
    rating: true,
  },
  {
    icon: Shield,
    title: "מורשה ומבוטח",
    description: "עובדים עם רישיונות מקצועיים וביטוח מקיף לשקט נפשי מלא",
    gradient: "from-green-700 to-green-600",
  },
  {
    icon: Clock,
    title: "10+ שנות ניסיון",
    description: "ניסיון עשיר בטיפול בכל סוגי התיקונים והבעיות הביתיות",
    gradient: "from-blue-700 to-blue-600",
  },
  {
    icon: Award,
    title: "ציוד מקצועי",
    description: "כלים ומכשירים מתקדמים לביצוע העבודה ברמה הגבוהה ביותר",
    gradient: "from-orange-600 to-red-600",
  },
]

export function TrustSection() {
  return (
    <section id="trust" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-red-900/15 to-yellow-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.08),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">למה לבחור בנו?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            אמינות, מקצועיות ושירות ברמה הגבוהה ביותר
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <Card
              key={index}
              className="group bg-slate-800/50 backdrop-blur-md border border-orange-500/20 hover:bg-slate-700/50 hover:border-orange-400/40 transition-all duration-500 hover:scale-105 text-center"
            >
              <CardHeader className="pb-4">
                {item.rating && (
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                )}

                <div className="relative mx-auto mb-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className={`relative bg-gradient-to-r ${item.gradient} p-4 rounded-xl`}>
                    <item.icon className="h-12 w-12 text-white mx-auto" />
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
