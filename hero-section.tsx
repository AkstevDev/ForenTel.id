"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Search, Eye } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-background" />
      <div className="absolute inset-0 bg-[url('/subtle-digital-pattern.png')] opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="text-foreground">ForenTel - </span>
              <span className="text-primary">Algorithms work together with the brain</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Everything is open source, it's just that the law is enforced.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Ethical</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Search className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">OSINT</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Profiling</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="group">
              <Link href="/signup">
                Mulai Sekarang
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Dipercaya oleh profesional untuk:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>• Investigasi Digital</span>
              <span>• Verifikasi Identitas</span>
              <span>• Monitoring Reputasi</span>
              <span>• Keamanan Data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
