import van from "./van.js";
import { style } from "typestyle";

const { div, h1, img, p, pre, br } = van.tags;

const target = document.querySelector(".footer");

const _styleView = style({
    backgroundImage: "url('/assets/index/waveblue.png')",
    backgroundSize: "100vw",
    backgroundPositionY:  "calc(0vh)",
    background:  'red',
    bottom: 0,
    backgroundRepeat: "no-repeat",
    height: "300px",
});


const styleView = style ({
    background: "blue",
    position: "absolute",
    width: "100%",
    bottom: "3px"
  
})

const styleContent = style({
    color: "white",
    position: "relative",
    width: "100%",
    top: "150px"    
})

function View() {
  const view = div ({class:styleView},
    
    div ({class: styleContent},
        div("A"),
        div("B"),
        div("C")
    )
  );
  return view;
}

van.add(target, View());
