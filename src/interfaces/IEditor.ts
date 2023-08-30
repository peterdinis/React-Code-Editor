import { ReactNode } from "react";

export interface IEditorProps {
  heading: string;
  language: string;
  value: string;
  onChange: any;
  icon: ReactNode;
  color: string;
}