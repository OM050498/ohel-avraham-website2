"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Award, Clock, Users, CheckCircle } from "lucide-react"

const achievements = [
  { icon: Users, text: "מעל 75 לקוחות מרוצים", number: "75+" },
  { icon: Clock, text: "שנות ניסיון בתחום", number: "3" },
  { icon: CheckCircle, text: "פרויקטים הושלמו בהצלחה", number: "60+" },
  { icon: Award, text: "דירוג ממוצע בגוגל", number: "4.9" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo and Info */}
          <div className="text-center lg:text-right">
            <div className="relative inline-block mb-8">
              {/* Company Logo instead of profile photo */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-75"></div>
                <div className="relative w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-orange-500/50 shadow-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-rucAhXyGzIbtPNnAfeDz9FN5rQBBNt.jpeg"
                    alt="אוהל אברהם - לוגו החברה"
                    className="w-full h-full object-contain bg-white p-4"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full shadow-xl">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-bold text-sm">מורשה ומבוטח</span>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-md border border-gray-200 hover:bg-white/95 transition-all duration-300 shadow-lg"
                >
                  <CardContent className="p-4 text-center">
                    <achievement.icon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.text}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:from-orange-700 hover:via-red-700 hover:to-red-800 text-white shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                <a href="tel:052-5487553" className="flex items-center space-x-2 rtl:space-x-reverse">
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
                  className="flex items-center space-x-2 rtl:space-x-reverse"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>וואטסאפ</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - About Text */}
          <div className="text-slate-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                אוהל אברהם
              </span>
              <br />
              <span className="text-slate-800">הנדימן שלכם</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-slate-800">קצת עליי -</strong> אבי דהאן, בעל העסק אוהל אברהם, מגיע לעולם השיפוצים מתוך אהבה אמיתית ליצירה, דיוק ושירות מכל הלב. 
                עם ניסיון בעבודה מול אנשים, אני מאמין שפרויקט מוצלח מתחיל באמון, שקיפות והקשבה אמיתית לצרכי הלקוח.
              
              </p>

              <p>
                הערכים שמנחים אותי הם יושרה, אמינות, אחריות, והשקעה מלאה בכל עבודה – קטנה או גדולה. אני רואה בכל פרויקט הזדמנות לשדרג את הבית או העסק, ולתת ללקוח שקט וביטחון שהוא בידיים טובות.
החזון שלי הוא לא רק לבצע שיפוץ, אלא ליצור חוויה חיובית, נעימה ואיכותית – כזו שתשאיר רושם טוב גם הרבה אחרי שסיימתי את העבודה.
              </p>

              <p className="text-orange-600 font-semibold">
                🛠️ מגיעים בזמן, מסיימים בזמן, עומדים בהתחייבות – זה הקו שלנו.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-orange-700 mb-4">למה לבחור בנו?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>אחריות מלאה על העבודה</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>זמינות מהירה גם בפרויקטים קטנים</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>יחס אישי ואנושי</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>ניסיון מוכח וממליצים מרוצים</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>מחירים הוגנים, ללא הפתעות</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
