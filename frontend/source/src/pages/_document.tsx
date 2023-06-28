import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ja">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Murecho:wght@700&family=Rubik:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
