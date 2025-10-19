"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      skills: [{ name: "React" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
    },
    {
      title: "Backend",
      skills: [{ name: "C#" }, { name: "Java" }, { name: ".NET" }, { name: "Python" }],
    },
    {
      title: "DevOps & Tools",
      skills: [{ name: "Git" }, { name: "Azure DevOps" }, { name: "AWS" }, { name: "CI/CD" }],
    },
  ]

  const otherSkills = [
    "REST APIs",
    "Responsive Design",
    "Testing (unit & integration)",
    "Agile/Scrum Methodologies",
    "UI/UX Basics",
    "Performance Optimization",
    "Version Control (Git, GitHub/GitLab)",
    "SQL & Database Design",
    "Microservices & API Integration",
    "Collaboration with International Teams",
  ];

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="space-y-4 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Habilidades Técnicas</h2>
            <div className="w-20 h-1 bg-secondary"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tecnologias e ferramentas que domino e utilizo no dia a dia para criar soluções robustas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 p-6 md:p-8 bg-card rounded-lg border"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Outras Competências</h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-muted text-sm font-medium rounded-full hover:bg-secondary/10 hover:text-primary transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
