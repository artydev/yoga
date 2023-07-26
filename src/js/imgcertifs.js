import van from "./van.js";
import { style } from "typestyle";

const { div, img } = van.tags;

const target = document.querySelector(".certificats");

const cert0 = img({ src: "/assets/index/cert0.png" });
const cert1 = img({ src: "/assets/index/cert1.png" });
const cert2 = img({ src: "/assets/index/cert2.png" });
const cert3 = img({ src: "/assets/index/cert3.webp" });

cert1.style = "position:relative; top: -70px"

const styleView = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

const styleAllThree = style({
  display: "flex",
  gap: "50px",
  marginLeft: "30px",
});

const styleDiplome = style({
  transform: "scale(0.7)",
});

function View() {
  const view = div(
    { class: styleView },
    div({ class: styleAllThree }, div(cert0), div(cert1), div(cert2)),
    div({ class: styleDiplome }, div(cert3))
  );
  return view;
}

target.append(View());
