import cn from "classnames"
import { ReactNode } from "react"

type ContentFullLayoutProps = {
  classNames?: string;
  children: ReactNode;
};


export default function ContentFullLayout({ children, classNames } : ContentFullLayoutProps) {
  return <section className={cn("w-full justify-center", classNames)}>
    { children }
  </section>
}