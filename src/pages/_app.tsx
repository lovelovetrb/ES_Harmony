import "@/styles/globals.css";
import "@/styles/destyle.css";

import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Layout>
                <Component key={router.asPath} {...pageProps} />
            </Layout>
        </AnimatePresence>
    );
}
