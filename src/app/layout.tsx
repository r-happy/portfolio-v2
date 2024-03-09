import type { Metadata } from "next";

import "the-new-css-reset";
import "@/styles/global.css";

import clsx from "clsx";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import { Header } from "@/components/elements/Header/Header";
import { Footer } from "@/components/elements/Footer/Footer";

const myFont = localFont({
    src: "../assets/font/SourceHanSansJP-VF.otf.woff2",
});

const serifFont = EB_Garamond({
    weight: "variable",
    subsets: ["latin"],
    variable: "--serif-font"
})

export const metadata: Metadata = {
    title: "rhappy",
    description: "rhappy portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={clsx(myFont.className, serifFont.variable)}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
