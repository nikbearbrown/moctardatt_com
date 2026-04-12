import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Intelligent AI Books",
    slug: "intelligent-ai-books",
    description:
      "Personalized conversational learning that adapts in real-time based on the user's background, learning style, and goals.",
    fullDescription:
      "An exploration of how AI can transform static educational content into dynamic, adaptive learning experiences.",
    image: "/placeholder.svg?height=400&width=600",
    category: "education",
    year: "2024",
    icon: "□",
  },
  {
    id: 2,
    title: "AI Tools Directory",
    slug: "ai-tools-directory",
    description: "A curated collection of interactive AI tools for learning and experimentation.",
    fullDescription:
      "A growing library of hands-on AI tools covering topics from prompt engineering to data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    category: "tools",
    year: "2024",
    icon: "■",
  },
  {
    id: 3,
    title: "AI Ethics Framework",
    slug: "ai-ethics-framework",
    description: "Open-source guidelines and tools for implementing ethical AI practices in organizations.",
    fullDescription:
      "A practical framework for teams building with AI, covering fairness, transparency, and accountability.",
    image: "/placeholder.svg?height=400&width=600",
    category: "research",
    year: "2023",
    icon: "○",
  },
  {
    id: 4,
    title: "Publication Rewriter",
    slug: "publication-rewriter",
    description: "AI-powered tool to rewrite articles in multiple publication voices and styles.",
    fullDescription:
      "Leverages large language models to adapt content for different audiences and publication formats.",
    image: "/placeholder.svg?height=400&width=600",
    category: "tools",
    year: "2024",
    icon: "◊",
  },
]
