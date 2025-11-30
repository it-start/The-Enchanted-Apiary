import { CodonPattern, ElementType, HiveElement, LearningPath } from "./types";

export const HIVE_ELEMENTS: HiveElement[] = [
  {
    id: ElementType.AGGREGATE,
    name: "Aggregate",
    symbol: "C",
    biology: "The Organs",
    chemistry: "Carbon",
    chemistryRole: "Structural Core",
    tech: "Business Logic Core",
    description: "The heart of the system where business rules live. Like organs in a body, they perform specific, vital functions.",
    detailedDescription: "The central Aggregate (Carbon) bonds with everything. It provides the structure for the logic molecule.",
    iconName: "Heart",
    color: "bg-red-100 border-red-300 text-red-800",
    gradientColor: "bg-gradient-to-br from-red-500 to-red-600 border-red-200",
    dnaBase: "Adenine (A)",
    dnaDescription: "The structural core. Like Adenine pairs in DNA, Aggregates pair with logic to form the backbone of the system."
  },
  {
    id: ElementType.TRANSFORMATION,
    name: "Transformation",
    symbol: "H",
    biology: "The Enzymes",
    chemistry: "Hydrogen",
    chemistryRole: "Single Bond",
    tech: "Pure Functions",
    description: "Stateless processing units that convert data from one form to another without side effects.",
    detailedDescription: "Transformations (Hydrogen) must follow the Law of Purity: Deterministic output based solely on input, with zero side effects. No database writes, no API calls, just pure logic.",
    iconName: "FlaskConical",
    color: "bg-blue-100 border-blue-300 text-blue-800",
    gradientColor: "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-200",
    dnaBase: "Thymine (T)",
    dnaDescription: "The processing unit. Like Thymine provides stability, Transformations provide pure, reliable logic processing."
  },
  {
    id: ElementType.CONNECTOR,
    name: "Connector",
    symbol: "O",
    biology: "The Senses/Limbs",
    chemistry: "Oxygen",
    chemistryRole: "Double Bond",
    tech: "Adapters & Ports",
    description: "Bridges to the outside world (APIs, Databases, UI). They translate external signals into internal language.",
    detailedDescription: "Connectors (Oxygen) form strong double bonds, bridging the internal logic to the external world securely.",
    iconName: "Network",
    color: "bg-amber-100 border-amber-300 text-amber-800",
    gradientColor: "bg-gradient-to-br from-amber-500 to-amber-600 border-amber-200",
    dnaBase: "Cytosine (C)",
    dnaDescription: "The bridge. Like Cytosine bonds across the strand, Connectors bond the internal core to the external world."
  },
  {
    id: ElementType.GENESIS,
    name: "Genesis Event",
    symbol: "N",
    biology: "Waggle Dance",
    chemistry: "Nitrogen",
    chemistryRole: "Ionic/Directional",
    tech: "Domain Events",
    description: "Significant moments of change. Events that trigger reactions across the hive or store state.",
    detailedDescription: "Genesis Events (Nitrogen) have a directional \"ionic\" charge. They trigger reactions that flow outwards or signal change.",
    iconName: "Zap",
    color: "bg-purple-100 border-purple-300 text-purple-800",
    gradientColor: "bg-gradient-to-br from-purple-500 to-purple-600 border-purple-200",
    dnaBase: "Guanine (G)",
    dnaDescription: "The energy spark. Like Guanine enables energy transfer, Genesis Events trigger reactions and state changes."
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