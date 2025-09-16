"use client"

import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const footerLinks = {
    services: [
      { name: "Cek Email Bocor", href: "#services" },
      { name: "Social Profiling", href: "#services" },
      { name: "Verifikasi Identitas", href: "#services" },
      { name: "Penghapusan Jejak Digital", href: "#services" },
    ],
    packages: [
      { name: "Basic Checkup", href: "#pricing" },
      { name: "OSINT Profiling", href: "#pricing" },
      { name: "Kandidat Recruitment", href: "#pricing" },
      { name: "Profiling Perusahaan", href: "#pricing" },
    ],
    legal: [
      { name: "Kebijakan Privasi", href: "#legal" },
      { name: "Syarat & Ketentuan", href: "#legal" },
      { name: "Kode Etik", href: "#legal" },
      { name: "Disclaimer", href: "#legal" },
    ],
    support: [
      { name: "FAQ", href: "#faq" },
      { name: "Hubungi Kami", href: "#support" },
      { name: "Dokumentasi", href: "#support" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">ForenTel</span>
              </Link>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                Platform OSINT dan digital profiling profesional yang mengutamakan etika, legalitas, dan privasi dalam
                setiap investigasi digital.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contact@forentel.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>24/7 Support Available</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Layanan</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Paket</h4>
              <ul className="space-y-2">
                {footerLinks.packages.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="font-semibold text-foreground mb-2">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">
                Dapatkan update terbaru tentang layanan dan tips keamanan digital
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:max-w-md">
              <Input type="email" placeholder="Email address" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 ForenTel. All rights reserved. | Ethical OSINT & Digital Investigation Platform
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#legal" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#legal" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#legal" className="hover:text-primary transition-colors">
                Ethics Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
