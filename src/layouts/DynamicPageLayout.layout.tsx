'use client';
import { useRouter } from "next/navigation"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/FooterSection"
import { ReactNode } from "react"

type HeaderFooterLayoutProps = {
  children: ReactNode;
  breadcrumbs?: boolean;
};
export default function DynamicPageLayout({ children, breadcrumbs = true,layoutData }: HeaderFooterLayoutProps &any) {


  const router = useRouter();

  const logotypeClick = () => router.push('/');


  return <>
    <Header {...layoutData?.attributes?.header?.data?.attributes} />
    <div className="">
      { children }
      <Footer onClickLogo={logotypeClick} {...layoutData?.attributes?.footer?.data}/>
    </div>
  </>
}