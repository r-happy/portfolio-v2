import { Colors } from "@/styles/color";
import { mediaQueryScreen } from "@/styles/queries";
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
    width: "95%",
    maxWidth: "820px",
    padding: "0.5rem",
    backdropFilter: "blur(3px)",

    "@media": {
        [mediaQueryScreen("md")]: {
            width: "60%"
        }
    }
});

export const sub_wrapper = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem"
});
