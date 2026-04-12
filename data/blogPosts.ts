import type { BlogPost } from "@/types"

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with AI Tools",
    slug: "getting-started-ai-tools",
    excerpt: "A practical introduction to the AI tools that are changing how we work and learn.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=300&width=400",
    category: "ai",
    date: "2024-01-15",
    author: "Moctar Datt",
  },
  {
    id: 2,
    title: "The Future of AI in Education",
    slug: "future-ai-education",
    excerpt: "How AI is reshaping learning and what it means for students and educators.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=300&width=400",
    category: "education",
    date: "2024-02-01",
    author: "Moctar Datt",
  },
]
