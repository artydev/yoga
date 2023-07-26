import van from "./van.js";
import { style } from "typestyle";

const { div} = van.tags;

const target = document.querySelector(".footer");


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
