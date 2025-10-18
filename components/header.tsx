"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg md:text-xl font-bold hover:text-secondary transition-colors"
          >
            {"<Dev />"}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Habilidades
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 hover:text-secondary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left py-2 hover:text-secondary transition-colors"
              >
                Experiência
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left py-2 hover:text-secondary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left py-2 hover:text-secondary transition-colors"
              >
                Habilidades
              </button>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
