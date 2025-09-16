"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, FileText, Star, Users, Building, MessageSquare } from "lucide-react"

export function PackagesSection() {
  const packages = [
    {
      icon: CheckCircle,
      title: "Basic Checkup",
      price: "Rp120.000",
      duration: "1 hari kerja",
      description: "Paket pemeriksaan dasar untuk individu",
      features: ["Laporan email bocor", "Cek nomor telepon", "Social scan 3 platform", "Cek data publik"],
      method: "OSINT web, tools, dorking",
      popular: false,
      customPrice: false,
    },
    {
      icon: MessageSquare,
      title: "Monitoring Kasus",
      price: "Custom",
      duration: "By request",
      description: "Monitoring kasus tertentu dengan laporan mendalam",
      features: ["Monitoring real-time", "Laporan berkala", "Analisis mendalam", "Konsultasi langsung"],
      method: "Custom sesuai kebutuhan",
      popular: false,
      customPrice: true,
    },
    {
      icon: Star,
      title: "OSINT Profiling",
      price: "Rp1.800.000",
      duration: "3–5 hari kerja",
      description: "Profiling lengkap untuk investigasi mendalam",
      features: [
        "Profil lengkap akun publik",
        "Reverse image search",
        "Face recognition",
        "Aktivitas digital",
        "Laporan PDF 10–15 halaman",
      ],
      method: "OSINT tools, AI, analisis manual",
      popular: true,
      customPrice: false,
    },
    {
      icon: FileText,
      title: "Jejak Digital + Penghapusan",
      price: "Rp3.200.000",
      duration: "5–7 hari kerja",
      description: "Mapping dan penghapusan jejak digital negatif",
      features: [
        "Mapping jejak digital lengkap",
        "Identifikasi konten negatif",
        "Eksekusi take-down resmi",
        "Laporan hasil penghapusan",
        "Monitoring pasca-penghapusan",
      ],
      method: "OSINT tools, legal take-down, monitoring",
      popular: false,
      customPrice: false,
    },
    {
      icon: Users,
      title: "Kandidat Recruitment",
      price: "Rp1.200.000",
      duration: "3–5 hari kerja",
      description: "Background check untuk proses rekrutmen",
      features: [
        "Social footprint kandidat",
        "Email/NIK verification",
        "Digital presence analysis",
        "Risk score assessment",
        "Laporan PDF 6–12 halaman",
      ],
      method: "OSINT web, verification tools",
      popular: false,
      customPrice: false,
    },
    {
      icon: Building,
      title: "Profiling Perusahaan",
      price: "Rp1.000.000",
      duration: "3–5 hari kerja",
      description: "Due diligence untuk partnership atau investasi",
      features: [
        "Company identity verification",
        "Struktur publik perusahaan",
        "Digital presence analysis",
        "Operational red flags",
        "Laporan PDF 5–10 halaman",
      ],
      method: "OSINT web, business intelligence",
      popular: false,
      customPrice: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
              Paket <span className="text-primary">OSINT</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Paket layanan terintegrasi untuk kebutuhan investigasi yang lebih komprehensif dengan harga yang lebih
              efisien.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative ${
                  pkg.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Populer
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg ${
                        pkg.popular
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      } transition-colors`}
                    >
                      <pkg.icon className="h-6 w-6" />
                    </div>
                    {pkg.customPrice && (
                      <Badge variant="outline" className="text-xs">
                        Custom
                      </Badge>
                    )}
                  </div>

                  <CardTitle className="text-xl mb-2">{pkg.title}</CardTitle>
                  <div className="space-y-2">
                    <div className={`text-3xl font-bold ${pkg.popular ? "text-primary" : "text-foreground"}`}>
                      {pkg.price}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {pkg.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-4">
                      <strong>Metode:</strong> {pkg.method}
                    </p>
                    <Button
                      className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={pkg.customPrice ? "outline" : "default"}
                    >
                      {pkg.customPrice ? "Hubungi Admin" : "Pesan Sekarang"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-card border rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">Butuh Layanan Custom?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Kami juga menyediakan layanan investigasi digital custom sesuai kebutuhan spesifik Anda. Hubungi tim
                kami untuk konsultasi dan penawaran khusus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  Konsultasi Gratis
                </Button>
                <Button size="lg">Hubungi Admin</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
