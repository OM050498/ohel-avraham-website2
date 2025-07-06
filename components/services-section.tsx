"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Hammer, Tv, Zap, PaintBucket, Wrench } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "שיפוץ ותיקון חדרים / דירות",
    description: "שיפוץ מלא או חלקי של חדרים ודירות, כולל תכנון, ביצוע ופיקוח מקצועי",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: Hammer,
    title: "עבודות גבס ועיצוב פנים",
    description: "בניית קירות גבס, תקרות אקוסטיות, ארונות גבס ועיצוב פנים מותאם אישית",
    gradient: "from-gray-600 to-gray-700",
  },
  {
    icon: Tv,
    title: "התקנות: טלוויזיות, מדפים, גופי תאורה ועוד",
    description: "התקנה מקצועית של טלוויזיות על הקיר, מדפים, גופי תאורה ואביזרי בית נוספים",
    gradient: "from-purple-600 to-purple-700",
  },
  {
    icon: Zap,
    title: "חשמל ותשתיות",
    description: "עבודות חשמל ביתיות, התקנת נקודות חשמל, תיקון תקלות ושדרוג מערכות חשמל",
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    icon: PaintBucket,
    title: "עבודות צבע וגימור",
    description: "צביעת קירות ותקרות, עבודות גימור מקצועיות ותיקון פגמי צבע",
    gradient: "from-green-600 to-green-700",
  },
  {
    icon: Wrench,
    title: "תיקונים קטנים לבית ולעסק",
    description: "תיקונים קטנים ודחופים, תחזוקה שוטפת ופתרון בעיות יומיומיות בבית ובעסק",
    gradient: "from-red-600 to-red-700",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent mb-4">
            🔹 שירותים שאנחנו מציעים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            פתרונות מקצועיים ואיכותיים לכל צורך בבית ובעסק
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden hover:border-orange-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-red-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="text-center pb-4 relative">
                <div className="relative mx-auto mb-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className={`relative bg-gradient-to-r ${service.gradient} p-4 rounded-xl`}>
                    <service.icon className="h-12 w-12 text-white mx-auto" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-orange-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
