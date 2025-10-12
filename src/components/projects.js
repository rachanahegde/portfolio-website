import {
  Palette,
  Layout,
  Atom,
  Braces,
  Database,
  Sparkles,
  Server,
  Boxes,
  Code2,
  Cpu,
  Globe,
} from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "AI Content Generator",
    shortDescription:
      "An intelligent content creation platform powered by OpenAI",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Node.js", "React"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Built an AI-powered content generator that helps marketers and writers create engaging copy with contextual understanding and brand voice consistency.",
    features: [
      "Real-time AI content generation with custom prompts",
      "Brand voice customization and tone adjustment",
      "Multi-language support with automatic translation",
      "Content templates for various use cases",
      "Export functionality in multiple formats",
    ],
    techStack: [
      { name: "Next.js", icon: Atom },
      { name: "React", icon: Atom },
      { name: "OpenAI API", icon: Sparkles },
      { name: "Tailwind CSS", icon: Layout },
      { name: "Node.js", icon: Server },
    ],
    implementation:
      "Built with Next.js App Router and API routes for secure OpenAI integration. Implemented streaming responses for real-time content generation, with Redis caching to optimize API calls. Used Tailwind's utility-first workflow for responsive design.",
    challenges:
      "Learned how to optimize API calls and implement request queuing to prevent rate limiting. Developed a custom caching strategy that reduced API costs by 60% while maintaining response quality.",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    shortDescription: "Analytics dashboard for online retail businesses",
    technologies: ["React", "D3.js", "Firebase", "Material UI", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Designed and developed a comprehensive analytics dashboard for e-commerce businesses to track sales, inventory, and customer behavior in real-time.",
    features: [
      "Real-time sales and revenue tracking",
      "Interactive data visualizations with D3.js",
      "Inventory management and alerts",
      "Customer segmentation and behavior analysis",
      "Customizable reporting and export options",
    ],
    techStack: [
      { name: "React", icon: Atom },
      { name: "D3.js", icon: Boxes },
      { name: "Firebase", icon: Database },
      { name: "JavaScript", icon: Braces },
      { name: "Material UI", icon: Palette },
    ],
    implementation:
      "Leveraged Firebase Realtime Database for live updates and authentication. Created custom D3.js visualizations with smooth transitions. Implemented lazy loading and code splitting for optimal performance.",
    challenges:
      "Tackled complex state management for real-time data updates across multiple chart components. Learned advanced D3.js patterns for creating reusable, animated visualizations that perform well with large datasets.",
  },
  {
    id: 3,
    title: "Portfolio Builder SaaS",
    shortDescription:
      "No-code platform for creating stunning portfolio websites",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Created a SaaS platform that enables creative professionals to build and deploy beautiful portfolio websites without writing code, featuring drag-and-drop editing and professional templates.",
    features: [
      "Drag-and-drop visual editor with live preview",
      "Professional portfolio templates library",
      "Custom domain support and SSL",
      "Integrated payment processing with Stripe",
      "SEO optimization and analytics dashboard",
    ],
    techStack: [
      { name: "Next.js", icon: Atom },
      { name: "Prisma", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Stripe", icon: Code2 },
      { name: "Tailwind", icon: Layout },
    ],
    implementation:
      "Used Next.js ISR for fast page loads and dynamic content updates. Built a custom drag-and-drop editor with React DnD. Integrated Stripe for subscription management and Prisma for type-safe database operations.",
    challenges:
      "Architecting a flexible template system that allows user customization while maintaining design integrity was complex. Learned advanced Next.js patterns for multi-tenancy and implemented efficient database queries to handle concurrent users.",
  },
  {
    id: 4,
    title: "RAG Chatbot Assistant",
    shortDescription:
      "Context-aware chatbot using retrieval-augmented generation",
    technologies: ["Python", "LangChain", "Pinecone", "FastAPI", "React"],
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Developed an intelligent chatbot that uses RAG architecture to provide accurate, context-aware responses by retrieving relevant information from a custom knowledge base.",
    features: [
      "Semantic search with vector embeddings",
      "Multi-document context understanding",
      "Source citation and reference tracking",
      "Conversation memory and follow-up handling",
      "Custom knowledge base management interface",
    ],
    techStack: [
      { name: "Python", icon: Code2 },
      { name: "LangChain", icon: Cpu },
      { name: "Pinecone", icon: Database },
      { name: "FastAPI", icon: Server },
      { name: "React", icon: Atom },
    ],
    implementation:
      "Built with LangChain for orchestration and Pinecone for vector storage. Implemented semantic chunking strategies for optimal retrieval. Created FastAPI endpoints for efficient client-server communication.",
    challenges:
      "Optimizing retrieval relevance while maintaining response speed required careful tuning of embedding models and chunk sizes. Learned advanced prompt engineering techniques to reduce hallucinations and improve answer accuracy.",
  },
  {
    id: 5,
    title: "Design System Library",
    shortDescription: "Comprehensive component library for consistent UIs",
    technologies: ["React", "TypeScript", "Storybook", "CSS Modules"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Built a fully documented design system and component library to ensure consistency across multiple products, featuring accessible components with comprehensive documentation.",
    features: [
      "50+ customizable React components",
      "WCAG 2.1 AA accessibility compliance",
      "Interactive documentation with Storybook",
      "Theme customization and dark mode support",
      "TypeScript definitions for type safety",
    ],
    techStack: [
      { name: "React", icon: Atom },
      { name: "TypeScript", icon: Code2 },
      { name: "Storybook", icon: Boxes },
      { name: "CSS Modules", icon: Layout },
      { name: "Figma", icon: Palette },
    ],
    implementation:
      "Designed components in Figma first, then implemented with React and TypeScript for type safety. Used CSS Modules for scoped styling and Storybook for interactive documentation and testing.",
    challenges:
      "Creating truly reusable components that work across different contexts required careful API design. Learned best practices for accessibility implementation and how to balance flexibility with consistency in component APIs.",
  },
  {
    id: 6,
    title: "Real-Time Collaboration Tool",
    shortDescription: "Collaborative workspace with live editing capabilities",
    technologies: ["Next.js", "WebSockets", "Redis", "MongoDB", "React"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    overview:
      "Engineered a real-time collaborative workspace where teams can edit documents, share feedback, and work together seamlessly with live cursor tracking and instant updates.",
    features: [
      "Real-time collaborative text editing",
      "Live cursor and presence indicators",
      "Comment threads and mentions",
      "Version history and rollback",
      "Permission-based access control",
    ],
    techStack: [
      { name: "Next.js", icon: Atom },
      { name: "WebSockets", icon: Globe },
      { name: "Redis", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "React", icon: Atom },
    ],
    implementation:
      "Used WebSockets for real-time bidirectional communication and Redis for managing presence and temporary data. Implemented operational transformation for conflict-free concurrent editing.",
    challenges:
      "Handling concurrent edits without conflicts was the biggest technical challenge. Learned about CRDTs and operational transformation algorithms, ultimately implementing a hybrid approach that balanced simplicity with reliability.",
  },
];
