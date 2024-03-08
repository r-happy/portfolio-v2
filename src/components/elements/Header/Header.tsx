import clsx from "clsx";
import Link from "next/link";
import React from "react";

import * as s from "./Header.css"

export const Header: React.FC = () => {
    return (
        <header className={clsx(s.wrapper)}>
            <Link href="/">
                <p>rhappy</p>
            </Link>
            <div className={clsx(s.sub_wrapper)}>
                {/* <Link href="/playground">
                    <p>Playground</p>
                </Link> */}
                <Link href="https://blog.rhappy.dev" target="_blank">
                    <p>Blog</p>
                </Link>
            </div>
        </header>
    );
};
