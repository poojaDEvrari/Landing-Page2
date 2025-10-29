"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import Image from "next/image"

export default function ProductShowcase() {
  const handleDownloadAPK = () => {
    const apkUrl = "/shopverse.apk"
    const link = document.createElement("a")
    link.href = apkUrl
    link.download = "ShopVerse.apk"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const screenshots = [
    {
      title: "Browse Categories",
      description: "Explore products across multiple categories with easy navigation",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-3SN1HTA5LTD5Q6OSK03qnwSunNckSd.png",
    },
    {
      title: "Smart Cart Management",
      description: "Add items to cart and manage your purchases seamlessly",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%283%29-xPTHYbFgOCucIq7ifEKFRwDWe9YzpM.png",
    },
    {
      title: "Order Confirmation",
      description: "Get instant confirmation and tracking for your orders",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%282%29-bjuUS7fxNJCSJTiGWGU3l0VAtfUVRT.png",
    },
  ]

  return (
    <section id="showcase" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience the App</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how ShopVerse makes shopping and selling effortless with our intuitive mobile interface
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {screenshots.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-96 bg-muted overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download CTA */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Start Shopping?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download the ShopVerse app now and join thousands of satisfied customers and sellers
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handleDownloadAPK}
          >
            <Download className="mr-2 h-5 w-5" />
            Download APK Now
          </Button>
        </div>
      </div>
    </section>
  )
}

