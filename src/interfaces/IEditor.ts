import { ReactNode } from "react";
import { SetterOrUpdater } from "recoil"; 

export interface ICodeEditorProps {
  heading: string;
  language: string;
  value: string;
  onChange: SetterOrUpdater<string>;
  icon: ReactNode;
  color: string;
}