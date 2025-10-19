"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Skyline Drones",
      description: "Plataforma para mapeamento de rotas de drones, com reconhecimento de imagens para resgate de pessoas em casos de desastres.",
      image: "/skyline-drones.png",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Password Creator",
      description: "Aplicativo para geração de senhas seguras e personalizadas.",
      image: "/password-creator.png",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/gioschardong/Gerador-de-Senhas?tab=readme-ov-file",
      demo: "https://gioschardong.github.io/Gerador-de-Senhas/",
    },
    // {
    //   title: "Analytics Dashboard",
    //   description: "Dashboard interativo para visualização de dados com gráficos e relatórios customizáveis.",
    //   image: "/analytics-dashboard-charts.png",
    //   tags: ["React", "D3.js", "Express", "Redis"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
    // {
    //   title: "Social Media API",
    //   description: "API RESTful escalável para rede social com autenticação, posts e sistema de likes.",
    //   image: "/api-documentation-interface.png",
    //   tags: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="space-y-4 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Projetos em Destaque</h2>
            <div className="w-20 h-1 bg-secondary"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Alguns dos projetos que desenvolvi recentemente, demonstrando diferentes tecnologias e abordagens.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github size={16} />
                          Código
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                    </div>
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
