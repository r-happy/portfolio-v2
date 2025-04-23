import { style } from "@vanilla-extract/css";

export const wrapper = style({
    width: "100%",
    height: "420px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
});

export const bottom_fade_gradient_container = style({
    position: "relative",
});

export const bottom_fade_gradient = style({
    "::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "100%",
        background: `linear-gradient(to bottom, #F6F1DE, transparent)`,
        pointerEvents: "none",
    },
});
