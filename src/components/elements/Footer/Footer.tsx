import React from "react";
import clsx from "clsx";

import * as s from "./Footer.css";

export const Footer: React.FC = () => {
    return (
        <div className={clsx(s.wrapper)}>
            <p>copyright&copy;2024 rhappy</p>
        </div>
    );
};
