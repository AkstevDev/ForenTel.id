"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Scale, Eye, Lock } from "lucide-react"

export function LegalSection() {
  return (
    <section id="legal" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Scale className="w-4 h-4 mr-2" />
            Legal & Ethics
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Komitmen Legal & Etika</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ForenTel beroperasi dengan standar etika tinggi dan kepatuhan penuh terhadap hukum yang berlaku
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Privasi & Keamanan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Data klien dienkripsi end-to-end</li>
                <li>• Tidak menyimpan data pribadi</li>
                <li>• Laporan dihapus setelah delivery</li>
                <li>• Kerahasiaan terjamin 100%</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Scale className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Kepatuhan Hukum</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Hanya menggunakan sumber publik</li>
                <li>• Tidak melanggar UU ITE</li>
                <li>• Sesuai regulasi perlindungan data</li>
                <li>• Transparansi metode kerja</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Eye className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Etika OSINT</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Tidak untuk tujuan ilegal</li>
                <li>• Menghormati privasi individu</li>
                <li>• Verifikasi sumber informasi</li>
                <li>• Objektif dan tidak bias</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Lock className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Layanan untuk tujuan legal</li>
                <li>• Klien bertanggung jawab atas penggunaan</li>
                <li>• Tidak menjamin 100% akurasi</li>
                <li>• Hasil berdasarkan data publik</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-card border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Syarat & Ketentuan</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">Penggunaan Layanan</h4>
              <p>
                Layanan ForenTel hanya boleh digunakan untuk tujuan yang legal dan etis. Klien wajib memastikan bahwa
                penggunaan informasi yang diperoleh tidak melanggar hukum yang berlaku.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Batasan Tanggung Jawab</h4>
              <p>
                ForenTel tidak bertanggung jawab atas penggunaan informasi oleh klien. Semua data bersumber dari
                informasi publik yang tersedia secara legal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
