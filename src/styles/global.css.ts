import { globalStyle } from "@vanilla-extract/css";
import { Colors } from "./color";
import { mediaQueryScreen } from "./queries";

globalStyle(`body`, {
    backgroundColor: Colors.background.body,
    color: Colors.text.main,
});

globalStyle("p, button, td, th", {
    fontSize: "small",

    "@media": {
        [mediaQueryScreen("md")]: {
            fontSize: "medium",
        },
    },
});

globalStyle("h3", {
    fontSize: "medium",

    "@media": {
        [mediaQueryScreen("md")]: {
            fontSize: "large",
        },
    },
});

globalStyle("h2", {
    fontSize: "large",

    "@media": {
        [mediaQueryScreen("md")]: {
            fontSize: "x-large",
        },
    },
});

globalStyle("h1", {
    fontSize: "x-large",

    "@media": {
        [mediaQueryScreen("md")]: {
            fontSize: "xx-large",
        },
    },
});

globalStyle("body button", {
    cursor: "pointer",
});

globalStyle("tbody, table", {
    width: "100%",
});

globalStyle("td", {
    padding: "0.5rem"
})