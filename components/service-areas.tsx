"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const areas = [
  { name: "תל אביב-יפו", x: "50%", y: "60%" },
  { name: "רמת גן", x: "55%", y: "55%" },
  { name: "הרצליה", x: "45%", y: "45%" },
  { name: "רחובות", x: "48%", y: "75%" },
  { name: "פתח תקווה", x: "58%", y: "50%" },
  { name: "ראשון לציון", x: "52%", y: "70%" },
  { name: "בני ברק", x: "56%", y: "58%" },
  { name: "חולון", x: "54%", y: "65%" },
]

export function ServiceAreas() {
  return (
    <section id="areas" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent mb-6">
              איפה אנחנו פועלים
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">מגיעים לכל רחבי תל אביב ומרכז הארץ תוך שעתיים</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-3 space-x-reverse bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 p-2 rounded-lg group-hover:from-orange-700 group-hover:to-red-700 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-orange-700 transition-colors duration-300">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:from-orange-700 hover:via-red-700 hover:to-red-800 text-white shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                <a href="tel:052-5487553" className="flex items-center space-x-2 space-x-reverse">
                  <Phone className="h-5 w-5" />
                  <span>התקשר עכשיו</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-green-600 border-green-600 text-white hover:bg-green-700 hover:border-green-700 shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://wa.me/972525487553"
                  target="_blank"
                  className="flex items-center space-x-2 space-x-reverse"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>וואטסאפ</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Interactive Map with Realistic Background */}
          <Card className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0 relative h-96">
              {/* Realistic Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-gray-100 to-green-50">
                {/* Sea/Coast Area */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 opacity-60"></div>

                {/* Land Areas */}
                <div className="absolute top-10 left-16 w-32 h-24 bg-green-100 rounded-lg opacity-40"></div>
                <div className="absolute top-32 left-20 w-40 h-32 bg-yellow-50 rounded-xl opacity-50"></div>
                <div className="absolute bottom-20 left-24 w-36 h-28 bg-green-50 rounded-lg opacity-45"></div>

                {/* Urban Areas */}
                <div className="absolute top-16 right-20 w-28 h-20 bg-gray-200 rounded-md opacity-60"></div>
                <div className="absolute top-40 right-16 w-32 h-24 bg-gray-150 rounded-lg opacity-55"></div>
                <div className="absolute bottom-32 right-20 w-30 h-22 bg-gray-200 rounded-md opacity-60"></div>

                {/* Major Roads/Highways */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  {/* Highway 1 (Tel Aviv - Jerusalem) */}
                  <path d="M 80 240 Q 200 220 320 200" stroke="#666" strokeWidth="3" fill="none" />

                  {/* Highway 2 (Coastal) */}
                  <path d="M 60 80 L 70 160 L 75 240 L 80 320" stroke="#666" strokeWidth="3" fill="none" />

                  {/* Highway 4 */}
                  <path d="M 100 120 Q 180 140 260 160" stroke="#666" strokeWidth="2" fill="none" />

                  {/* Highway 5 */}
                  <path d="M 120 180 Q 200 170 280 160" stroke="#666" strokeWidth="2" fill="none" />

                  {/* Local Roads */}
                  <path d="M 140 200 L 220 190 L 280 200" stroke="#888" strokeWidth="1.5" fill="none" />
                  <path d="M 160 240 L 240 230 L 300 240" stroke="#888" strokeWidth="1.5" fill="none" />
                  <path d="M 180 280 L 260 270 L 320 280" stroke="#888" strokeWidth="1.5" fill="none" />

                  {/* City Streets */}
                  <g stroke="#aaa" strokeWidth="1" opacity="0.7">
                    <line x1="140" y1="180" x2="140" y2="260" />
                    <line x1="180" y1="170" x2="180" y2="250" />
                    <line x1="220" y1="160" x2="220" y2="240" />
                    <line x1="260" y1="150" x2="260" y2="230" />

                    <line x1="120" y1="200" x2="280" y2="190" />
                    <line x1="130" y1="220" x2="290" y2="210" />
                    <line x1="140" y1="240" x2="300" y2="230" />
                  </g>
                </svg>

                {/* Neighborhoods/Districts */}
                <div className="absolute top-20 left-32 w-16 h-12 bg-orange-100 rounded opacity-40"></div>
                <div className="absolute top-36 left-40 w-20 h-16 bg-red-100 rounded opacity-35"></div>
                <div className="absolute top-52 left-36 w-18 h-14 bg-yellow-100 rounded opacity-40"></div>
                <div className="absolute bottom-40 left-40 w-22 h-18 bg-green-100 rounded opacity-35"></div>

                {/* Parks/Green Areas */}
                <div className="absolute top-24 right-32 w-12 h-8 bg-green-200 rounded-full opacity-50"></div>
                <div className="absolute bottom-48 right-28 w-14 h-10 bg-green-200 rounded-full opacity-45"></div>

                {/* Map Grid Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-10">
                  <defs>
                    <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#333" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                </svg>
              </div>

              {/* Area Markers */}
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                  style={{ left: area.x, top: area.y }}
                >
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30"></div>

                  {/* Main Marker */}
                  <div className="relative bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-full shadow-xl border-2 border-white hover:scale-125 transition-all duration-300 hover:shadow-orange-500/50">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                    <div className="bg-slate-900/95 backdrop-blur-md text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap border border-orange-500/30">
                      {area.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900/95"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Coverage Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-60 border-2 border-orange-500/40 rounded-full animate-pulse z-10"></div>

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-lg z-20">
                <div className="flex items-center space-x-2 space-x-reverse text-gray-800 text-sm mb-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
                  <span>אזורי שירות</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-orange-600 text-xs">
                  <Clock className="h-3 w-3" />
                  <span>זמן הגעה: עד שעתיים</span>
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute top-4 left-4 right-4 text-center z-20">
                <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-orange-500/20">
                  <h3 className="text-xl font-bold text-white mb-1">מפת אזורי השירות</h3>
                  <p className="text-orange-300 text-sm">מרכז הארץ ותל אביב</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
