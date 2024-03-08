import React, { ReactNode } from "react";
import clsx from "clsx";

import * as s from "./HomeCard.css";
import { Heading } from "@/components/elements/Heading/Heading";

export interface HomeCardComponent {
    title: string;
    children?: ReactNode;
}

export const HomeCard: React.FC<HomeCardComponent> = ({ title, children }) => {
    return (
        <section>
            <Heading>{title}</Heading>
            <div className={clsx(s.content)}>{children}</div>
        </section>
    );
};
