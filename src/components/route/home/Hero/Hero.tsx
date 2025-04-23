import clsx from "clsx";

import * as s from "./Hero.css";
import * as w from "@/styles/whole.css";

export const Hero = () => {
    return (
        <section className={clsx(s.wrapper, s.bottom_fade_gradient_container, s.bottom_fade_gradient)}>
            <div className={clsx(w.container)}>
                <h1>rhappy</h1>
                <p>webに強くなりたい</p>
            </div>
        </section>
    );
};
