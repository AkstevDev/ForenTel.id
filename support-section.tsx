"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Clock, Send, Headphones, Phone, MapPin } from "lucide-react"

export function SupportSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Headphones className="w-4 h-4 mr-2" />
            Support
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dukungan & Bantuan</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tim support profesional kami siap membantu Anda untuk semua kebutuhan layanan OSINT
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email Support
                </CardTitle>
                <CardDescription>Untuk pertanyaan detail</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">support@forentel.com</p>
                <p className="text-xs text-muted-foreground">Respon dalam 2-4 jam kerja</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Phone Support
                </CardTitle>
                <CardDescription>Konsultasi langsung</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">+62 21-1234-5678</p>
                <p className="text-xs text-muted-foreground">Senin-Jumat, 09:00-17:00 WIB</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="text-primary">08:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu - Minggu</span>
                    <span className="text-primary">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency</span>
                    <span className="text-primary">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi form di bawah untuk konsultasi atau pertanyaan tentang layanan kami
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Nama Lengkap
                      </label>
                      <Input id="name" placeholder="Masukkan nama lengkap" />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="nama@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Nomor Telepon
                      </label>
                      <Input id="phone" placeholder="08xxxxxxxxxx" />
                    </div>
                    <div>
                      <label htmlFor="service" className="text-sm font-medium mb-2 block">
                        Layanan yang Diminati
                      </label>
                      <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                        <option value="">Pilih layanan</option>
                        <option value="basic">Basic Checkup</option>
                        <option value="profiling">OSINT Profiling</option>
                        <option value="monitoring">Monitoring Kasus</option>
                        <option value="removal">Penghapusan Jejak Digital</option>
                        <option value="recruitment">Kandidat Recruitment</option>
                        <option value="company">Profiling Perusahaan</option>
                        <option value="custom">Layanan Custom</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Pesan / Pertanyaan
                    </label>
                    <Textarea id="message" placeholder="Jelaskan kebutuhan atau pertanyaan Anda..." rows={4} />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center border-primary/20">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Respon Cepat</h3>
              <p className="text-sm text-muted-foreground">Rata-rata respon dalam 2 jam kerja</p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20">
            <CardContent className="p-6">
              <Headphones className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Support Profesional</h3>
              <p className="text-sm text-muted-foreground">Tim support berpengalaman di bidang OSINT</p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Konsultasi Gratis</h3>
              <p className="text-sm text-muted-foreground">Konsultasi awal gratis untuk semua layanan</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
