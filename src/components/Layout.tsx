import { ReactElement } from "react";
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";

import { Zen_Kaku_Gothic_New } from "next/font/google";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const zenkaku = Zen_Kaku_Gothic_New({
  weight: ["500"],
  subsets: ["latin"],
});

export const Layout = ({ children }: LayoutProps) => (
  <div className={zenkaku.className}>
    <Header />
    {children}
    <Footer />
  </div>
);
