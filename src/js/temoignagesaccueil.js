import van from "./van.js";
import { style } from "typestyle";
import { HandWritenMessage } from "./tools.js";

const { div, p } = van.tags;

const target = document.querySelector(".temoignages");

const styleP = style({
  marginBottom: "30px",
  fontSize: "1.3rem",
  fontFamily: "Tenor",
  background: "white",
  color: "#2c2c5f",
  margin: "0 auto",
});

const styleView = style({

});

const Titre = style({
  fontSize: "2rem",
});

const Content = style({
  maxWidth: "800px",
  margin: "0 auto",
  marginTop: "0px",
});

const Text = (content) =>
  div(
    p({ class: styleP }, content),
    div(
      { style: "text-align:right" },
      HandWritenMessage("Hélène", "0px", "20px", "32px")
    )
  );

function View(content) {
  const view = div(
    { class: styleView },
    div({ style: "text-align:center" }, div({ class: [Titre] }, "TÉMOIGNAGES")),
    div(
      { style: "text-align:center" },
      HandWritenMessage("Un grand bien-être")
    ),
    div({ class: Content }, [Text(content)])
  );
  return view;
}

function GetText(content) {
  target.append(View(content));
}

export { GetText };
