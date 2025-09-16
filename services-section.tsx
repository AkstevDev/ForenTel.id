"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Users,
  ImageIcon,
  FileSearch,
  Building,
  User,
  Trash2,
  Clock,
  CheckCircle,
  AlertTriangle,
  Lock,
} from "lucide-react"

export function ServicesSection() {
  const greenServices = [
    {
      icon: Mail,
      title: "Cek Email Bocor",
      description: "Laporan apakah email pernah bocor, potensi risiko akun, rekomendasi keamanan.",
      method: "OSINT web, tools publik, dorking",
      duration: "1–2 jam",
      price: "Rp5.000 / email",
      category: "safe",
    },
    {
      icon: Phone,
      title: "Cek Nomor Kontak Publik",
      description: "Informasi publik terkait nomor, social footprint, potensi spam/scam.",
      method: "OSINT tools, web search, social media scan",
      duration: "1 jam",
      price: "Rp1.000 / nomor",
      category: "safe",
    },
    {
      icon: Users,
      title: "Quick Social Scan (3 Platform)",
      description: "Profil publik di 3 platform, aktivitas publik, indikasi risiko reputasi.",
      method: "OSINT tools, web search, API publik",
      duration: "2–3 jam",
      price: "Rp10.000 / 3 platform (+Rp3.000 / platform tambahan)",
      category: "safe",
    },
    {
      icon: ImageIcon,
      title: "Image Search (Reverse Image)",
      description: "Asal foto, metadata, kemungkinan reuse online.",
      method: "OSINT web tools, reverse image search engine",
      duration: "2–4 jam",
      price: "Rp15.000 / foto",
      category: "safe",
    },
    {
      icon: FileSearch,
      title: "Cek Data Publik",
      description: "Ringkasan eksposur publik data individu/perusahaan.",
      method: "OSINT web, tools publik, dorking",
      duration: "1–2 jam / query",
      price: "Rp10.000 / query",
      category: "safe",
    },
    {
      icon: Building,
      title: "Cek Identitas Perusahaan (Basic Legal)",
      description: "Validasi legalitas, digital presence, struktur publik perusahaan.",
      method: "OSINT web, tools publik, database resmi",
      duration: "1–2 hari",
      price: "Rp50.000 / perusahaan",
      category: "safe",
    },
    {
      icon: User,
      title: "Cek Identitas Nama (Basic)",
      description: "Profil publik individu, social footprint, potensi risiko.",
      method: "OSINT web, tools publik",
      duration: "1–2 jam",
      price: "Rp20.000 / nama",
      category: "safe",
    },
    {
      icon: Trash2,
      title: "Penghapusan Jejak Digital (Etis & Legal)",
      description: "Laporan mapping jejak digital, strategi penghapusan, eksekusi take-down resmi, sisa jejak digital.",
      method: "OSINT tools, web monitoring, reporting resmi platform",
      duration: "3–7 hari kerja (custom)",
      price: "mulai Rp500.000",
      category: "safe",
      isCustom: true,
    },
  ]

  const yellowServices = [
    {
      icon: User,
      title: "Pencarian Wajah (Face Recognition AI)",
      description: "Identifikasi wajah dari sumber publik legal.",
      method: "Face recognition AI, OSINT tools",
      duration: "2–3 jam",
      price: "Rp25.000 / wajah",
      category: "caution",
    },
    {
      icon: FileSearch,
      title: "Verifikasi Identitas NIK",
      description: "Cross-check NIK & nama dengan sumber publik resmi.",
      method: "OSINT web, tools resmi",
      duration: "1–2 jam",
      price: "Rp30.000 / NIK",
      category: "caution",
    },
    {
      icon: Users,
      title: "Social Profiling (Basic Investigasi)",
      description: "Ringkasan social footprint & aktivitas publik, indikasi risiko reputasi.",
      method: "OSINT web, tools publik, social scan",
      duration: "1–2 hari",
      price: "Rp250.000 / individu",
      category: "caution",
    },
  ]

  const deepServices = [
    {
      title: "Pelacakan titik koordinat nomor HP",
      category: "deep",
    },
    {
      title: "Lacak lokasi nomor HP (berdasarkan sinyal/operator)",
      category: "deep",
    },
    {
      title: "Cek plat kendaraan",
      category: "deep",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "safe":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "caution":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "deep":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "safe":
        return <CheckCircle className="h-4 w-4" />
      case "caution":
        return <AlertTriangle className="h-4 w-4" />
      case "deep":
        return <Lock className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
              Layanan <span className="text-primary">OSINT</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Pilih layanan sesuai kebutuhan Anda. Semua layanan dilakukan dengan standar etika dan legalitas tertinggi.
            </p>
          </div>

          {/* Green Services - Safe & Ethical */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Badge className={getCategoryColor("safe")}>
                {getCategoryIcon("safe")}
                <span className="ml-1">Aman & Etis</span>
              </Badge>
              <h3 className="text-2xl font-bold text-foreground">Layanan Standar</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {greenServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <Badge className={getCategoryColor(service.category)} variant="secondary">
                        {getCategoryIcon(service.category)}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Hasil:</strong> {service.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Metode:</strong> {service.method}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1 text-primary font-semibold">
                        <span className="text-sm">Rp.</span>
                        {service.price.replace("Rp", "")}
                      </div>
                    </div>
                    <Button className="w-full" variant={service.isCustom ? "outline" : "default"}>
                      {service.isCustom ? "Hubungi Admin" : "Pesan Sekarang"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Yellow Services - Caution */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Badge className={getCategoryColor("caution")}>
                {getCategoryIcon("caution")}
                <span className="ml-1">Layanan Khusus</span>
              </Badge>
              <h3 className="text-2xl font-bold text-foreground">Layanan Khusus</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yellowServices.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-yellow-200 dark:border-yellow-800"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <Badge className={getCategoryColor(service.category)} variant="secondary">
                        {getCategoryIcon(service.category)}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Hasil:</strong> {service.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Metode:</strong> {service.method}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400 font-semibold">
                        <span className="text-sm">Rp.</span>
                        {service.price.replace("Rp", "")}
                      </div>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline">
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Deep/Dark Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Badge className={getCategoryColor("deep")}>
                {getCategoryIcon("deep")}
                <span className="ml-1">Layanan Deep</span>
              </Badge>
              <h3 className="text-2xl font-bold text-foreground">Layanan Deep - Hubungi Admin</h3>
            </div>

            <Card className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <Lock className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Layanan Tingkat Lanjut</h4>
                    <div className="space-y-2 text-muted-foreground">
                      {deepServices.map((service, index) => (
                        <p key={index} className="text-sm">
                          • {service.title}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                    <p className="text-sm text-red-800 dark:text-red-200 mb-4">
                      Harga dan detail hanya tersedia melalui diskusi langsung dengan admin. Layanan ini memerlukan
                      verifikasi identitas dan tujuan penggunaan.
                    </p>
                    <Button variant="destructive">Hubungi Admin</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
