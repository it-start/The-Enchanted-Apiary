import { LucideIcon } from "lucide-react";

export enum ElementType {
  AGGREGATE = "A",
  TRANSFORMATION = "T",
  CONNECTOR = "C",
  GENESIS = "G"
}

export interface HiveElement {
  id: ElementType;
  name: string;
  symbol: string;
  biology: string;
  chemistry: string;
  chemistryRole: string;
  tech: string;
  description: string;
  detailedDescription?: string;
  iconName: string; // Mapping string to icon in component
  color: string;
  gradientColor?: string;
  dnaBase: string;
  dnaDescription: string;
}

export interface CodonPattern {
  id: string;
  sequence: ElementType[];
  name: string;
  description: string;
  example: string;
}

export interface LearningPath {
  title: string;
  role: string;
  duration: string;
  focus: string;
  steps: string[];
}

export interface LifecycleStage {
  id: string;
  name: string;
  metaphor: string;
  techConfig: string;
  description: string;
  iconName: string;
}

export interface ArchLayer {
  id: string;
  name: string;
  role: string;
  analogy: string;
  components: string[];
  color: string;
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  state: string;
  html_url: string;
  labels: { name: string; color: string }[];
  created_at: string;
}

export interface ImmuneLog {
  timestamp: string;
  stage: ElementType;
  message: string;
  status: 'pending' | 'success' | 'error';
}