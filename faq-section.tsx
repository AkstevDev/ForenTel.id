"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Apa itu OSINT dan bagaimana ForenTel menggunakannya?",
    answer:
      "OSINT (Open Source Intelligence) adalah metode pengumpulan informasi dari sumber-sumber publik yang tersedia secara legal. ForenTel menggunakan teknik OSINT untuk menganalisis jejak digital, profil media sosial, dan data publik lainnya dengan tools profesional dan metodologi yang terbukti.",
  },
  {
    question: "Apakah layanan ForenTel legal dan aman?",
    answer:
      "Ya, semua layanan ForenTel 100% legal karena hanya menggunakan sumber informasi publik. Kami mematuhi UU ITE dan regulasi perlindungan data. Semua proses dilakukan dengan enkripsi end-to-end dan data klien tidak disimpan setelah laporan diserahkan.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk mendapatkan hasil?",
    answer:
      "Waktu pengerjaan bervariasi tergantung jenis layanan: layanan basic (1-3 jam), layanan menengah (1-2 hari), dan paket lengkap (3-7 hari kerja). Estimasi waktu selalu dicantumkan di setiap layanan dan kami berkomitmen memenuhi deadline.",
  },
  {
    question: "Bagaimana cara memesan layanan dan metode pembayaran?",
    answer:
      "Anda bisa memesan melalui tombol 'Pesan Sekarang' di setiap layanan atau 'Hubungi Admin' untuk konsultasi. Pembayaran dapat dilakukan via transfer bank, e-wallet, atau cryptocurrency. Pembayaran dilakukan setelah konfirmasi pesanan.",
  },
  {
    question: "Apakah data saya aman dan terjaga kerahasiaannya?",
    answer:
      "Keamanan dan kerahasiaan adalah prioritas utama. Semua komunikasi dienkripsi, data klien tidak disimpan di server, dan tim ForenTel terikat kontrak kerahasiaan. Laporan hasil hanya dikirim ke klien dan dihapus dari sistem setelah delivery.",
  },
  {
    question: "Apa perbedaan layanan satuan dengan paket?",
    answer:
      "Layanan satuan cocok untuk kebutuhan spesifik (cek email, nomor, dll) dengan harga terjangkau. Paket bundling memberikan analisis komprehensif dengan harga lebih efisien dan laporan PDF lengkap untuk kebutuhan investigasi mendalam.",
  },
  {
    question: "Bisakah ForenTel membantu menghapus jejak digital negatif?",
    answer:
      "Ya, kami menyediakan layanan 'Penghapusan Jejak Digital' yang legal dan etis. Prosesnya meliputi mapping jejak digital, identifikasi konten negatif, dan eksekusi take-down request resmi ke platform terkait sesuai kebijakan masing-masing platform.",
  },
  {
    question: "Apakah ForenTel melayani klien korporat dan institusi?",
    answer:
      "Ya, kami melayani individual, korporat, dan institusi. Untuk klien korporat tersedia paket khusus seperti 'Kandidat Recruitment', 'Profiling Perusahaan', dan 'Monitoring Kasus' dengan SLA dan laporan yang disesuaikan kebutuhan bisnis.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan OSINT dan digital profiling ForenTel
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-primary/20">
              <CardHeader className="pb-3">
                <Button
                  variant="ghost"
                  className="w-full justify-between text-left p-0 h-auto"
                  onClick={() => toggleFAQ(index)}
                >
                  <CardTitle className="text-lg font-medium pr-4">{faq.question}</CardTitle>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </Button>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Masih ada pertanyaan?</h3>
              <p className="text-muted-foreground mb-4">Tim support kami siap membantu Anda 24/7</p>
              <Button asChild>
                <a href="#support">Hubungi Support</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
