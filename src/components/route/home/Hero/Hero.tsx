import clsx from "clsx";

import * as s from "./Hero.css";

export const Hero = () => {
    return (
        <section className={clsx(s.wrapper)}>
            <div>
                <h1>rhappy</h1>
                <p>webに強くなりたい</p>
            </div>
        </section>
    );
};
