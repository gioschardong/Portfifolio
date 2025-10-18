import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold mb-2">{"<Dev />"}</p>
              <p className="text-sm text-muted-foreground">
                Desenvolvedor Full Stack apaixonado por criar experiências digitais.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/gioschardong"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/giovanni-schardong//"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a> */}
              <a
                href="mailto:giovanni.schardong@gmail.com"
                className="p-2 hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {currentYear} Todos os direitos reservados. Feito com Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
