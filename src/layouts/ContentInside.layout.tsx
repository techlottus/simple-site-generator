import cn from "classnames"
import { ReactNode } from "react"

type ContentInsideLayoutProps = {
  classNames?: string; 
  children: ReactNode;
};

export default function ContentInsideLayout({ classNames, children }: ContentInsideLayoutProps) {
  return <section className={cn("grid grid-cols-12 w-t:grid-cols-8 w-p:grid-cols-4", classNames)}>
    { children }
  </section>
};