import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Feather as Flutter, Code2, Database, CreditCard, Cloud } from "lucide-react"

export default function CTASection() {
  return (
    <section id="download" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Join the ShopVerse Revolution</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you want to shop from multiple vendors or start your own store, ShopVerse is your complete marketplace
          solution. Download the app today and be part of a thriving community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Download APK Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Tech Stack */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-bold text-foreground mb-6">Built with Modern Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Flutter", icon: Flutter },
              { name: "Node.js", icon: Code2 },
              { name: "MongoDB", icon: Database },
              { name: "Razorpay", icon: CreditCard },
              { name: "AWS S3", icon: Cloud },
            ].map((tech, index) => {
              const Icon = tech.icon
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <Icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
