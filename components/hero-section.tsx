"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, Shield, DollarSign, Award, ArrowDown, Send, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import type React from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    city: "",
    serviceType: "",
    description: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `שלום אהל אברהם!

השארתי פרטים באתר:
👤 שם: ${formData.firstName}
📱 טלפון: ${formData.phone}
🏙️ עיר: ${formData.city}
🔧 שירות: ${formData.serviceType}
📝 תיאור: ${formData.description || "לא סופק"}

אשמח לקבל הצעת מחיר מהירה. תודה!`

    const whatsappUrl = `https://wa.me/972525487553?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8 lg:py-20">
          {/* Right Side - Hero Content with Logo - Now Centered */}
          <div
            className={`text-center transition-all duration-1000 order-2 lg:order-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Logo Section - Centered */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-8">
                {/* Logo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-75"></div>
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-orange-500/50 shadow-2xl mx-auto">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-rucAhXyGzIbtPNnAfeDz9FN5rQBBNt.jpeg"
                      alt="אוהל אברהם - לוגו"
                      className="w-full h-full object-contain bg-white p-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Heading - Centered with White Text and Orange Border */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 lg:mb-4 leading-tight text-center">
              <span
                className="text-white font-bold"
                style={{
                  textShadow:
                    "2px 2px 0 #ea580c, -2px -2px 0 #ea580c, 2px -2px 0 #ea580c, -2px 2px 0 #ea580c, 0 2px 0 #ea580c, 2px 0 0 #ea580c, 0 -2px 0 #ea580c, -2px 0 0 #ea580c",
                }}
              >
                אוהל אברהם
              </span>
              <br />
              <span className="text-slate-800 text-2xl md:text-3xl lg:text-5xl font-bold">
                שיפוצים. חשמל. תיקונים. אמינות.
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 font-medium mb-6 lg:mb-8 leading-relaxed text-center">
              אנחנו כאן כדי לפתור בעיות, לשדרג חללים ולבצע עבודה כמו שצריך – עם שירות אישי וזמינות גבוהה
            </p>

            {/* Feature Pills - Centered */}
            <div
              className={`grid grid-cols-2 gap-2 lg:gap-3 mb-6 lg:mb-8 max-w-lg mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {[
                { icon: Clock, text: "זמינות גבוהה", gradient: "from-orange-600 to-red-600" },
                { icon: Shield, text: "אחריות מלאה", gradient: "from-green-700 to-green-600" },
                { icon: DollarSign, text: "מחירים הוגנים", gradient: "from-yellow-600 to-orange-600" },
                { icon: Award, text: "ליווי אמיתי", gradient: "from-red-600 to-orange-600" },
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <div className="relative bg-white/90 backdrop-blur-md border border-orange-500/30 shadow-lg rounded-lg p-2 lg:p-3 hover:bg-white/95 transition-all duration-300 text-center">
                      <feature.icon className="h-4 w-4 lg:h-6 lg:w-6 text-orange-600 mx-auto mb-1" />
                      <p className="text-slate-800 font-semibold text-xs lg:text-sm">{feature.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Buttons - Centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          {/* Left Side - Contact Form */}
          <div
            className={`transition-all duration-1000 delay-700 order-1 lg:order-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl mx-4 lg:mx-0">
              <CardHeader className="text-center pb-4 lg:pb-6">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent">
                  קבל הצעת מחיר חינם
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm lg:text-base">
                  מלא פרטים ונחזור אליך תוך 15 דקות
                </CardDescription>
              </CardHeader>

              <CardContent className="px-4 lg:px-6">
                <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
                  {/* Name */}
                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="firstName" className="text-right font-semibold text-gray-700 text-sm lg:text-base">
                      שם מלא *
                    </Label>
                    <Input
                      id="firstName"
                      required
                      placeholder="השם שלך"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="text-right bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-lg h-12 text-base"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="phone" className="text-right font-semibold text-gray-700 text-sm lg:text-base">
                      טלפון *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="052-5487553"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="text-right bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-lg h-12 text-base"
                    />
                  </div>

                  {/* City and Service in one row on desktop, stacked on mobile */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                    <div className="space-y-1 lg:space-y-2">
                      <Label className="text-right font-semibold text-gray-700 text-sm lg:text-base">עיר *</Label>
                      <Select required onValueChange={(value) => setFormData({ ...formData, city: value })}>
                        <SelectTrigger className="text-right bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-lg h-12">
                          <SelectValue placeholder="בחר עיר" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="תל אביב">תל אביב-יפו</SelectItem>
                          <SelectItem value="רמת גן">רמת גן</SelectItem>
                          <SelectItem value="הרצליה">הרצליה</SelectItem>
                          <SelectItem value="פתח תקווה">פתח תקווה</SelectItem>
                          <SelectItem value="ראשון לציון">ראשון לציון</SelectItem>
                          <SelectItem value="רחובות">רחובות</SelectItem>
                          <SelectItem value="בני ברק">בני ברק</SelectItem>
                          <SelectItem value="חולון">חולון</SelectItem>
                          <SelectItem value="אחר">אחר</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1 lg:space-y-2">
                      <Label className="text-right font-semibold text-gray-700 text-sm lg:text-base">
                        סוג השירות *
                      </Label>
                      <Select required onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                        <SelectTrigger className="text-right bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-lg h-12">
                          <SelectValue placeholder="בחר שירות" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="שיפוץ חדרים">שיפוץ ותיקון חדרים / דירות</SelectItem>
                          <SelectItem value="עבודות גבס">עבודות גבס ועיצוב פנים</SelectItem>
                          <SelectItem value="התקנות">התקנות: טלוויזיות, מדפים, גופי תאורה</SelectItem>
                          <SelectItem value="חשמל ותשתיות">חשמל ותשתיות</SelectItem>
                          <SelectItem value="צבע וגימור">עבודות צבע וגימור</SelectItem>
                          <SelectItem value="תיקונים קטנים">תיקונים קטנים לבית ולעסק</SelectItem>
                          <SelectItem value="אחר">אחר</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1 lg:space-y-2">
                    <Label
                      htmlFor="description"
                      className="text-right font-semibold text-gray-700 text-sm lg:text-base"
                    >
                      תיאור קצר של העבודה
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="מה צריך לתקן או להתקין?"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="text-right bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-lg min-h-[80px] text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:from-orange-700 hover:via-red-700 hover:to-red-800 text-white shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] py-4 rounded-lg text-base lg:text-lg font-bold border border-orange-500/20"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    שלח וקבל הצעת מחיר
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-orange-600" />
        </div>
      </div>
    </section>
  )
}
