import { CodonPattern, ElementType, HiveElement, LearningPath } from "./types";

export const HIVE_ELEMENTS: HiveElement[] = [
  {
    id: ElementType.AGGREGATE,
    name: "Aggregate",
    biology: "The Organs",
    chemistry: "Carbon (Structure)",
    tech: "Business Logic Core",
    description: "The heart of the system where business rules live. Like organs in a body, they perform specific, vital functions.",
    iconName: "Heart",
    color: "bg-red-100 border-red-300 text-red-800"
  },
  {
    id: ElementType.TRANSFORMATION,
    name: "Transformation",
    biology: "The Enzymes",
    chemistry: "Hydrogen (Bonding)",
    tech: "Pure Functions",
    description: "Stateless processing units that convert data from one form to another without side effects.",
    iconName: "FlaskConical",
    color: "bg-blue-100 border-blue-300 text-blue-800"
  },
  {
    id: ElementType.CONNECTOR,
    name: "Connector",
    biology: "The Senses/Limbs",
    chemistry: "Oxygen (Reaction)",
    tech: "Adapters & Ports",
    description: "Bridges to the outside world (APIs, Databases, UI). They translate external signals into internal language.",
    iconName: "Network",
    color: "bg-amber-100 border-amber-300 text-amber-800"
  },
  {
    id: ElementType.GENESIS,
    name: "Genesis Event",
    biology: "Waggle Dance",
    chemistry: "Nitrogen (Life)",
    tech: "Domain Events",
    description: "Significant moments of change. Events that trigger reactions across the hive or store state.",
    iconName: "Zap",
    color: "bg-purple-100 border-purple-300 text-purple-800"
  }
];

export const SACRED_CODONS: CodonPattern[] = [
  {
    id: "command",
    sequence: [ElementType.CONNECTOR, ElementType.AGGREGATE, ElementType.GENESIS],
    name: "Command Processing",
    description: "The standard flow for changing state. The world asks for change, logic validates it, and an event records it.",
    example: "REST API → Order Logic → OrderPlaced Event"
  },
  {
    id: "query",
    sequence: [ElementType.CONNECTOR, ElementType.TRANSFORMATION, ElementType.CONNECTOR],
    name: "Data Pipeline",
    description: "A pure read flow. Data is fetched, transformed for the view, and returned.",
    example: "Database → Price Calculator → Pricing API"
  },
  {
    id: "reaction",
    sequence: [ElementType.GENESIS, ElementType.CONNECTOR, ElementType.AGGREGATE, ElementType.GENESIS],
    name: "Event Reaction",
    description: "Asynchronous processing. An event occurs, a listener picks it up, logic runs, and a new event is born.",
    example: "OrderPlaced → Payment Listener → Payment Logic → Paid Event"
  }
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    title: "The Architect's Path",
    role: "System Designer",
    duration: "60 min",
    focus: "Philosophy & Patterns",
    steps: ["Enchanted Apiary Tale", "Hexagonal Mapping", "Chemical Architecture"]
  },
  {
    title: "The Developer's Path",
    role: "Builder",
    duration: "2-4 hours",
    focus: "Implementation",
    steps: ["Sacred Codon Patterns", "Genesis Engine CLI", "Hello Hive Example"]
  },
  {
    title: "The Team Lead's Path",
    role: "Manager",
    duration: "45 min",
    focus: "Scaling & Adoption",
    steps: ["Core Philosophy", "Colony Building", "Success Metrics"]
  }
];