"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Apps4Business",
    position: "Desenvolvedor Back-end",
    period: "Out. 2024 - Presente",
    description:
      "Criação de APIs RESTful, Desenvolvimento de integrações com sistemas de terceiros, utilizando C# e .NET.",
    current: true,
  },
  {
    company: "Dell Technologies",
    position: "Desenvolvedor Full Stack",
    period: "Mai. 2023 - Set. 2024",
    description: "Desenvolvimento de soluções de uso interno com next.js e Node.js. Colaboração em equipes ágeis.",
    current: false,
  },
  {
    company: "MaxiMaxiQuim Chemical Business & Intelligence",
    position: "Desenvolvedor Full Stack",
    period: "Jan. 2023 - Mai. 2023",
    description:
      "Desenvolvimento de aplicações web. Manutenção de sistemas legados e implementação de novas funcionalidades.",
    current: false,
  },
  {
    company: "Departamento de Informática - Brigada Militar RS",
    position: "Desenvolvedor de Banco de Dados",
    period: "Jun. 2022 - Jan. 2023",
    description:
      "Administração de bancos de dados SQL Server e Oracle. Otimização de consultas e manutenção de performance.",
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Experiência Profissional</h2>
          <p className="text-muted-foreground text-lg">Minha trajetória no desenvolvimento de software</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex gap-6">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      exp.current ? "bg-primary" : "bg-muted"
                    } transition-colors`}
                  >
                    <Briefcase
                      className={exp.current ? "text-primary-foreground" : "text-muted-foreground"}
                      size={24}
                    />
                  </motion.div>
                  {index < experiences.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 bg-card border border-border rounded-lg p-6 mb-4"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-semibold">
                          Atual
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
