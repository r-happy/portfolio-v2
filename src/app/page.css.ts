import { Colors } from "@/styles/color";
import { style } from "@vanilla-extract/css";

export const intro_wrapper = style({
    padding: "1.5rem",
    border: `solid 2px ${Colors.border.main}`,
    borderRadius: "0.6rem",
});

export const main_content_wrapper = style({
    padding: "3.5rem 0",
    display: "grid",
    gap: "2.5rem",
});

export const timeline = style({
    width: "95%",
    margin: "0 auto",
    borderLeft: `solid 2px ${Colors.border.sub}`,
    display: "grid",
    gap: "1.5rem"
});

export const timeline_time = style({
    display: "flex",
    alignItems: "center",
})

export const timeline_dot = style({
    height: "10px",
    width: "10px",
    borderRadius: "100%",
    background: Colors.border.sub,
    transform: "translateX(-6px)"
});

export const timeline_content_title = style({
    margin: "0.5rem 0"
})

export const timeline_content = style({
    padding: "0 1rem"
})

export const work_card_wrapper = style({
    display: "grid",
    gap: "0.6rem"
})