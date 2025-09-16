"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Globe, Shield, Target } from "lucide-react"

export function AboutSection() {
  const methods = [
    {
      icon: Globe,
      title: "OSINT Web",
      description: "Pengumpulan informasi dari sumber terbuka dan publik",
    },
    {
      icon: Target,
      title: "OSINT Tools",
      description: "Menggunakan tools profesional untuk analisis mendalam",
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Analisis logis dan interpretasi data yang akurat",
    },
    {
      icon: Shield,
      title: "Cocoklogi",
      description: "Menghubungkan pola dan menemukan korelasi tersembunyi",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
              Tentang <span className="text-primary">ForenTel</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Tim investigasi digital berbasis OSINT yang berfokus pada pengumpulan, analisis, dan interpretasi data
              publik dengan pendekatan etis dan legal.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Metodologi Profesional</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kami menggunakan kombinasi teknologi canggih dan analisis manusia untuk memberikan hasil investigasi
                yang akurat dan dapat diandalkan. Setiap proses dilakukan dengan mematuhi standar etika dan legalitas
                tertinggi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tim kami terdiri dari profesional berpengalaman dalam bidang cybersecurity, digital forensics, dan open
                source intelligence yang berkomitmen untuk memberikan layanan terbaik.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Shield className="h-24 w-24 text-primary mx-auto" />
                  <h4 className="text-xl font-semibold text-foreground">Etika & Legalitas</h4>
                  <p className="text-muted-foreground px-4">
                    Setiap investigasi dilakukan dengan mematuhi hukum dan norma etika
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Methods Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methods.map((method, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <method.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{method.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Kasus Diselesaikan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Monitoring Tersedia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Legal & Etis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
