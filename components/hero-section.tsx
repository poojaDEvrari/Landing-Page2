"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const handleDownloadAPK = () => {
    const apkUrl = "/shopverse.apk"
    const link = document.createElement("a")
    link.href = apkUrl
    link.download = "ShopVerse.apk"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The Complete <span className="text-primary">Multi-Vendor</span> Marketplace
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                ShopVerse empowers sellers to build their own stores while giving customers access to thousands of
                products from multiple vendors in one seamless platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleDownloadAPK}
              >
                Download APK
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Features
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Active Sellers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Products Listed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="/image.png"
                alt="ShopVerse App Interface"
                width={600}
                height={1200}
                priority
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
