import { style } from "@vanilla-extract/css";

export const main = style({
    textDecoration: "underline",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    ":hover": {
        textDecoration: "none",
    },
});
