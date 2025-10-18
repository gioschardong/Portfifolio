"use client"

import { Card } from "@/components/ui/card"
import { Code2, Rocket, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código mantível, testável e seguindo as boas práticas.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimizo aplicações para carregamento rápido e experiência fluida.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho bem em equipe e comunico ideias técnicas de forma clara.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="space-y-4 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Sobre Mim</h2>
            <div className="w-20 h-1 bg-secondary"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Sou um desenvolvedor apaixonado por criar soluções digitais que fazem a diferença. Com mais de 5 anos de
                experiência, trabalhei em projetos de diversos tamanhos e complexidades.
              </p>
              <p>
                Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje transformo essa
                curiosidade em produtos que impactam milhares de usuários.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                Acredito que bom código é aquele que resolve problemas reais de forma elegante. Estou sempre aprendendo
                novas tecnologias e compartilhando conhecimento com a comunidade.
              </p>
              <p>
                Quando não estou programando, você pode me encontrar contribuindo para projetos open source, escrevendo
                artigos técnicos ou explorando novas ferramentas de desenvolvimento.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="space-y-4">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="w-6 h-6 text-secondary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
