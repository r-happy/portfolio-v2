import { Colors } from "@/styles/color";
import { style } from "@vanilla-extract/css";

export const wrapper = style({});

export const image_wrapper = style({
    width: "100%",
    height: "240px",
    borderRadius: "0.6rem",
    border: `solid 2px ${Colors.border.main}`,
    overflow: "hidden",
});

export const image = style({
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "top",
    transition: "all .2s ease",
    ":hover": {
        transform: "scale(1.1)",
    },
});

export const name = style({
    padding: "0.6rem 0",
});
