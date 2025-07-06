"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "כמה זמן לוקח לכם להגיע?",
    answer: "אנחנו מגיעים תוך שעתיים מרגע ההזמנה באזור תל אביב ומרכז הארץ. למקומות מרוחקים יותר - עד 4 שעות.",
  },
  {
    question: "איך מחושב המחיר?",
    answer: "המחיר מחושב לפי סוג העבודה, זמן הביצוע וחומרים נדרשים. אין עלויות נסתרות - הכל שקוף וברור מראש.",
  },
  {
    question: "איזה אחריות אתם נותנים?",
    answer:
      "אנחנו נותנים אחריות מלאה של 3 שנים על כל העבודות שלנו. אם משהו לא עובד כמו שצריך - אנחנו חוזרים לתקן חינם.",
  },
  {
    question: "אילו כלי תשלום אתם מקבלים?",
    answer: "אנחנו מקבלים מזומן, העברה בנקאית, כרטיסי אשראי, ביט ופייפל. התשלום רק לאחר השלמת העבודה לשביעות רצונכם.",
  },
  {
    question: "עובדים גם בסופי שבוע?",
    answer: "כן! אנחנו זמינים 7 ימים בשבוע, כולל סופי שבוע וחגים. לשירות דחוף יש תוספת של 20% למחיר הבסיס.",
  },
  {
    question: "מה קורה אם אני לא מרוצה מהעבודה?",
    answer: "שביעות רצון הלקוח היא הדבר הכי חשוב לנו. אם אתם לא מרוצים על משהו - אנחנו נחזור לתקן עד שהכל יהיה מושלם.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            התשובות לשאלות הנפוצות ביותר שלקוחותינו שואלים
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full text-right p-6 flex justify-between items-center hover:bg-orange-50/50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <ChevronDown
                  className={`h-6 w-6 text-orange-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
                <h3 className="text-lg font-bold text-gray-800 flex-1 ml-4">{faq.question}</h3>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="bg-orange-50 p-4 rounded-xl border-r-4 border-orange-600">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
