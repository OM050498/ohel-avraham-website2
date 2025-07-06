"use client"

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const footerSections = [
  {
    title: "צור קשר",
    items: [
      { icon: Phone, text: "052-5487553", href: "tel:052-5487553" },
      { icon: Mail, text: "info@handyman.co.il", href: "mailto:info@handyman.co.il" },
      { icon: MapPin, text: "תל אביב ומרכז הארץ" },
      { icon: MessageCircle, text: "וואטסאפ: 052-5487553", href: "https://wa.me/972525487553" },
    ],
  },
  {
    title: "השירותים שלנו",
    items: [
      { text: "שיפוץ ותיקון חדרים / דירות" },
      { text: "עבודות גבס ועיצוב פנים" },
      { text: "התקנות: טלוויזיות, מדפים, גופי תאורה" },
      { text: "חשמל ותשתיות" },
      { text: "עבודות צבע וגימור" },
      { text: "תיקונים קטנים לבית ולעסק" },
    ],
  },
  {
    title: "אזורי שירות",
    items: [
      { text: "תל אביב-יפו" },
      { text: "רמת גן" },
      { text: "הרצליה" },
      { text: "פתח תקווה" },
      { text: "ראשון לציון" },
      { text: "רחובות" },
    ],
  },
  {
    title: "מידע נוסף",
    items: [
      { text: "אודות" },
      { text: "תנאי שירות" },
      { text: "מדיניות פרטיות" },
      { text: "המלצות לקוחות" },
      { text: "גלריית עבודות" },
      { text: "בלוג וטיפים" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-16">
      {/* רקע שקוף כך שרקע כלי העבודה יהיה נראה */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-12 pb-8 border-b border-gray-300">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-75"></div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-orange-500/50 shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-rucAhXyGzIbtPNnAfeDz9FN5rQBBNt.jpeg"
                  alt="אוהל אברהם - לוגו"
                  className="w-full h-full object-contain bg-white p-2"
                />
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent mb-2">
            אוהל אברהם
          </h2>
          <p className="text-gray-700 text-lg font-medium">מקצועיות, אמינות ושירות מכל הלב</p>
        </div>

        {/* Main Footer Content */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="text-right">
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 hover:text-orange-600 transition-colors duration-300 group"
                        >
                          {item.icon && (
                            <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                          )}
                          <span className="font-medium">{item.text}</span>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700">
                          {item.icon && <item.icon className="h-4 w-4" />}
                          <span className="font-medium">{item.text}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">מוכנים להתחיל?</h3>
          <p className="text-gray-700 mb-6 text-lg">קבלו הצעת מחיר חינם תוך 15 דקות או התקשרו עכשיו לשירות מיידי</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:052-5487553"
              className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:from-orange-700 hover:via-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              <span>התקשרו עכשיו: 052-5487553</span>
            </a>

            <a
              href="https://wa.me/972525487553"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              <span>שלחו הודעה בוואטסאפ</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600 font-medium">
            &copy; 2025 אוהל אברהם. כל הזכויות שמורות. | מורשה ומבוטח | אחריות 3 שנים
          </p>
        </div>
      </div>
    </footer>
  )
}
