import van from "./van.js";
import { style } from "typestyle";
import { HandWritenMessage } from "./tools.js";

const { div, p } = van.tags;

const target = document.querySelector(".temoignages");

const styleP = style({
    marginBottom: "30px",

})


const styleView = style({
    textAlign: "center",
    position: "relative",
    top: "30px"
})


const Titre = style({
    fontSize: "2rem"
})

const Content = style({
    maxWidth:"800px",
    margin: "0 auto",
    marginTop: "0px"
})


const Text = div(
    p({class:styleP}, `
« Je consulte régulièrement Françoise pour des problèmes physiques. Non seulement la douleur s’estompe, mais chaque
séance m’apporte un grand bien être, un apaisement joyeux et beaucoup de douceur. Elle sait rendre vivant et léger nos corps et
nos esprits fatigués, nous révèle avec simplicité notre « essentiel ». Françoise a une très belle énergie pleine d’humanité. »
`),
div(HandWritenMessage("Hélène", "0px", "20px", "32px"))
)



function View() {
    const view = div({class:styleView},
      div({class : Titre}, "TÉMOIGNAGES"),
      HandWritenMessage("Un grand bien-être"),
      div({class : Content}, [Text])
    );
    return view;
  }
  
  target.append(View());