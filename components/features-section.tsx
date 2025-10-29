import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Store, BarChart3, Lock, Zap, Shield } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Customer Features",
      description: "Browse categories, search products, manage cart, and track orders with ease",
      items: ["Smart Search", "Category Browsing", "Cart Management", "Order Tracking"],
    },
    {
      icon: Store,
      title: "Seller Portal",
      description: "Register as a seller and manage your own store with complete control",
      items: ["Store Management", "Product Listings", "Order Management", "Analytics Dashboard"],
    },
    {
      icon: BarChart3,
      title: "Admin Dashboard",
      description: "Full control over the marketplace with comprehensive analytics and management",
      items: ["User Management", "Product Approvals", "Transaction Monitoring", "Platform Analytics"],
    },
    {
      icon: Shield,
      title: "Authentication",
      description: "Secure user authentication and authorization for all platform roles",
      items: ["Secure Login", "Role-Based Access", "Session Management", "Data Protection"],
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Integrated Razorpay for secure and reliable payment processing",
      items: ["Multiple Payment Methods", "Secure Transactions", "Instant Payouts", "Fraud Protection"],
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Built with modern tech stack for speed and reliability",
      items: ["Flutter Mobile App", "Node.js Backend", "MongoDB Database", "AWS S3 Storage"],
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Powerful Features for Everyone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re a customer, seller, or admin, ShopVerse has everything you need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

