import { style } from "@vanilla-extract/css";
import { mediaQueryScreen } from "./queries";

export const container = style({
    width: "95%",
    margin: "0 auto",

    "@media": {
        [mediaQueryScreen("md")]: {
            maxWidth: "720px",
        },
    },
});
