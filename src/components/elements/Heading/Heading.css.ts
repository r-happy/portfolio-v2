import { style } from "@vanilla-extract/css";
import { Colors } from "@/styles/color";

export const main_style = style({
    borderBottom: `solid 1px ${Colors.border.sub}`,
    fontFamily: "var(--serif-font)"
});
