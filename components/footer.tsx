import Link from "next/link"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">S</span>
              </div>
              <span className="font-bold text-lg">ShopVerse</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              The complete multi-vendor e-commerce platform for modern marketplaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary-foreground/80 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary-foreground/80 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="hover:text-primary-foreground/80 transition">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="#download" className="hover:text-primary-foreground/80 transition">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="font-bold mb-4">For Users</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary-foreground/80 transition">
                  Shop Now
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground/80 transition">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground/80 transition">
                  Admin Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground/80 transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:poojadevrari07@gmail.com" className="hover:text-primary-foreground/80 transition">
                  poojadevrari07@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <p>&copy; 2025 ShopVerse. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary-foreground transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
