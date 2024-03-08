import { Colors } from "@/styles/color";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
    position: "fixed",
    top: "5px",
    left: "50%",
    transform: "translateX(-50%)",
    border: `solid 2px ${Colors.border.main}`,
    borderRadius: "0.6rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    maxWidth: "820px",
    padding: "0.5rem",
    backdropFilter: "blur(3px)"
});

export const sub_wrapper = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem"
});
