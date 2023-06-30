import { ReactElement } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type LayoutProps = Required<{
    readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);
