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
  biology: string;
  chemistry: string;
  tech: string;
  description: string;
  iconName: string; // Mapping string to icon in component
  color: string;
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