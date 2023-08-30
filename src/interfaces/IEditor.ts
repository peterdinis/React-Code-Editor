import { ReactNode } from "react";

export interface IEditorProps {
  heading: string;
  language: string;
  value: string;
  onChange: (...args: unknown[]) => void;
  icon: ReactNode;
  color: string;
}