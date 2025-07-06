"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X, Eye, Play } from "lucide-react"

// התמונות והסרטונים שלך
const galleryItems = [
  // הסרטון שלך עם תמונת רקע אמיתית
  {
    id: 1,
    title: "עבודת שיפוץ מקצועית",
    category: "שיפוצים כלליים",
    type: "video",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-07-02%20at%2016.32.34-e6bKDdHnkERffwacSryaJQAhAW5is9.mp4",
    thumbnail: "/images/gallery/bathroom-finished.png",
    description: "צפו בעבודת השיפוץ המקצועית שלנו בזמן אמת - איכות וקפדנות בכל פרט",
  },
  // תיקון מקלחת - לפני ואחרי
  {
    id: 2,
    title: "שיפוץ מקלחת מלא - תיקון נזקי מים",
    category: "שיפוץ אמבטיות",
    type: "image",
    beforeImage: "/images/gallery/bathroom-before.jpg",
    afterImage: "/images/gallery/bathroom-after.jpg",
    description: "שיפוץ מלא של מקלחת כולל תיקון נזקי מים, תיקון תקרה, צביעה מקצועית ושיפור כללי",
  },
  // עיצוב סלון מודרני
  {
    id: 3,
    title: "עיצוב סלון מודרני ואלגנטי",
    category: "עיצוב פנים",
    type: "image",
    beforeImage: "/placeholder.svg?height=300&width=400&text=לפני - סלון ישן",
    afterImage: "/images/gallery/living-room-design.jpg",
    description: "עיצוב מלא של סלון עם ריצוף שיש יוקרתי, וילונות מעוצבים, תאורה מודרנית וריהוט איכותי",
  },
  // קיר טלוויזיה מעוצב
  {
    id: 4,
    title: "קיר טלוויזיה מעוצב עם חיפוי עץ",
    category: "עיצוב פנים ונגרות",
    type: "image",
    beforeImage: "/placeholder.svg?height=300&width=400&text=לפני - קיר ריק",
    afterImage: "/images/gallery/tv-wall-modern.jpg",
    description: "בניית קיר טלוויזיה מעוצב עם חיפוי עץ מודרני, פסים אנכיים ותאורה משולבת",
  },
  // יחידת אחסון מעוצבת
  {
    id: 5,
    title: "יחידת אחסון מעוצבת לסלון",
    category: "נגרות ועיצוב",
    type: "image",
    beforeImage: "/placeholder.svg?height=300&width=400&text=לפני - קיר ריק",
    afterImage: "/images/storage-unit.jpg",
    description: "בניית יחידת אחסון מעוצבת עם חיפוי עץ, מדפים נסתרים ועיצוב מודרני ופונקציונלי",
  },
  // דוגמאות נוספות
  {
    id: 6,
    title: "מערכת אינסטלציה מתקדמת",
    category: "אינסטלציה",
    type: "image",
    beforeImage: "/placeholder.svg?height=300&width=400&text=לפני - צנרת ישנה",
    afterImage: "/placeholder.svg?height=300&width=400&text=אחרי - מערכת חדשה",
    description: "התקנת מערכת אינסטלציה מתקדמת עם חלוקה מקצועית ובקרה",
  },
  {
    id: 7,
    title: "צביעת חדר ילדים",
    category: "צביעה",
    type: "image",
    beforeImage: "/placeholder.svg?height=300&width=400&text=לפני - קירות לבנים",
    afterImage: "/placeholder.svg?height=300&width=400&text=אחרי - צבע ורוד",
    description: "צביעת חדר ילדים בגוון ורוד עדין עם גימור מקצועי",
  },
  // סרטונים נוספים לדוגמה
  {
    id: 8,
    title: "תהליך התקנת טלוויזיה",
    category: "התקנת טלוויזיות",
    type: "video",
    videoUrl: "/placeholder.mp4",
    thumbnail: "/placeholder.svg?height=300&width=400&text=סרטון - התקנת טלוויזיה",
    description: "סרטון המציג את תהליך ההתקנה המקצועי של טלוויזיה על הקיר",
  },
  {
    id: 9,
    title: "עבודת גבס בזמן אמת",
    category: "עבודות גבס",
    type: "video",
    videoUrl: "/placeholder.mp4",
    thumbnail: "/placeholder.svg?height=300&width=400&text=סרטון - עבודת גבס",
    description: "צפו בתהליך בניית קיר גבס מקצועי מהתחלה ועד הסוף",
  },
]

export function GallerySection() {
  const [selectedMedia, setSelectedMedia] = useState<{
    media: string
    title: string
    type: "image" | "video"
  } | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  const renderMediaContent = (item: (typeof galleryItems)[0], isAfter = true) => {
    if (item.type === "video") {
      return (
        <div className="relative group">
          <video className="w-full h-64 lg:h-80 object-cover" poster={item.thumbnail} preload="metadata" muted>
            <source src={item.videoUrl} type="video/mp4" />
            הדפדפן שלך לא תומך בהצגת סרטונים.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-110"
              onClick={() =>
                setSelectedMedia({
                  media: item.videoUrl || "",
                  title: item.title,
                  type: "video",
                })
              }
            >
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-bold">🎥 סרטון</span>
          </div>
          <button
            onClick={() =>
              setSelectedMedia({
                media: item.videoUrl || "",
                title: item.title,
                type: "video",
              })
            }
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Eye className="h-5 w-5 text-white" />
          </button>
        </div>
      )
    }

    const imageUrl = isAfter ? item.afterImage : item.beforeImage
    const label = isAfter ? "אחרי" : "לפני"
    const bgColor = isAfter ? "bg-green-600" : "bg-red-600"

    return (
      <div className="relative group">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${label} - ${item.title}`}
          className="w-full h-64 lg:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <span className={`${bgColor} px-3 py-1 rounded-full text-sm font-bold`}>{label}</span>
        </div>
        <button
          onClick={() =>
            setSelectedMedia({
              media: imageUrl || "",
              title: `${label} - ${item.title}`,
              type: "image",
            })
          }
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Eye className="h-5 w-5 text-white" />
        </button>
      </div>
    )
  }

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent mb-4">
            גלריית העבודות שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            ראו בעצמכם את איכות העבודה המקצועית שלנו - תמונות וסרטונים אמיתיים מהשטח
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-orange-700 font-semibold">
              🎬 כל התמונות והסרטונים הם מעבודות אמיתיות שביצענו ללקוחותינו המרוצים
            </p>
          </div>
        </div>

        {/* Featured Carousel */}
        <div className="mb-16">
          <Card className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {galleryItems[currentIndex].type === "video" ? (
                  // Video Layout
                  <div className="relative">{renderMediaContent(galleryItems[currentIndex])}</div>
                ) : (
                  // Image Layout (Before/After)
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {renderMediaContent(galleryItems[currentIndex], false)}
                    {renderMediaContent(galleryItems[currentIndex], true)}
                  </div>
                )}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{galleryItems[currentIndex].title}</h3>
                      <p className="text-sm text-gray-300 mb-2">{galleryItems[currentIndex].description}</p>
                      <span className="bg-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {galleryItems[currentIndex].category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2 space-x-reverse">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-orange-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="group cursor-pointer" onClick={() => setCurrentIndex(index)}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur-md border border-gray-200">
                <CardContent className="p-0 relative">
                  {item.type === "video" ? (
                    <div className="relative">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600/80 p-1 rounded-full">
                          <Play className="h-3 w-3 text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.afterImage || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

                  <div className="absolute bottom-1 left-1 right-1">
                    <p className="text-xs text-white font-semibold bg-black/50 px-2 py-1 rounded truncate">
                      {item.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Size Media */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {selectedMedia.type === "video" ? (
              <video
                src={selectedMedia.media}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              >
                הדפדפן שלך לא תומך בהצגת סרטונים.
              </video>
            ) : (
              <img
                src={selectedMedia.media || "/placeholder.svg"}
                alt={selectedMedia.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-lg">{selectedMedia.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
