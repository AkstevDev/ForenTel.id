"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Shield, Zap, ExternalLink, Instagram } from "lucide-react"

export function CollabSection() {
  return (
    <section id="collab" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Kolaborasi & Aliansi
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partner & Aliansi Strategis</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ForenTel berkolaborasi dengan komunitas dan organisasi terpercaya untuk memberikan layanan terbaik
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Partnership Info */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Aliansi Vuln4Fun
                </CardTitle>
                <CardDescription>Partnership strategis dengan komunitas cybersecurity Indonesia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  ForenTel bangga bermitra dengan <strong>Vuln4Fun</strong>, komunitas cybersecurity terdepan di
                  Indonesia yang fokus pada vulnerability research, penetration testing, dan edukasi keamanan siber.
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.instagram.com/vuln4fun.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="w-4 h-4" />
                      @vuln4fun.id
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Manfaat Kolaborasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Enhanced Security Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Kombinasi OSINT dan vulnerability assessment untuk analisis keamanan menyeluruh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Threat Intelligence</h4>
                      <p className="text-sm text-muted-foreground">
                        Sharing threat intelligence dan indicators of compromise (IoC) terkini
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Knowledge Sharing</h4>
                      <p className="text-sm text-muted-foreground">
                        Pertukaran knowledge dan best practices dalam cybersecurity dan OSINT
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Visual */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-semibold">ForenTel</p>
                    <p className="text-xs text-muted-foreground">OSINT & Profiling</p>
                  </div>
                  <div className="flex-1 h-px bg-primary/30 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background px-2">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-semibold">Vuln4Fun</p>
                    <p className="text-xs text-muted-foreground">Cybersecurity</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategic Alliance</h3>
                <p className="text-muted-foreground">
                  Menggabungkan kekuatan OSINT dan cybersecurity untuk solusi keamanan digital terdepan
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Layanan Kolaboratif</CardTitle>
                <CardDescription>Layanan khusus hasil kolaborasi ForenTel x Vuln4Fun</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Security Assessment</span>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Threat Hunting</span>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Digital Forensics</span>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Hubungi untuk Info Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
