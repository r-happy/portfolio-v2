import React from "react";
import clsx from "clsx";

import * as s from "./Heading.css";

export interface HeadingComponent {
    children: string;
}

export const Heading: React.FC<HeadingComponent> = ({ children }) => {
    return <h2 className={clsx(s.main_style)}>{children}</h2>;
};
