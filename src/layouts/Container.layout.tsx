import cn from "classnames"
import { ReactNode } from "react"

type ContentLayoutProps = {
  classNames?: string;
  children: ReactNode;
};

export default function Container({ children, classNames } : ContentLayoutProps) {
  return <div className={cn("max-w-d-base mx-auto w-d-base:px-6 py-9", classNames)}>
    { children }
  </div>
}