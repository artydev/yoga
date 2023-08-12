import van from "./van.js";
import { style } from "typestyle";
import { HandWritenMessage } from "./tools.js";

const { div, h1, img, p, pre, br } = van.tags;

const app = document.querySelector(".sectionsertificats");

const styleView = style({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "10px",
  position: "relative",
  top: "0px"
});

const styleViewSummary = style ({
    width: "50%"
})

const styleContentSummary = style({
  width:"70%",
  margin: "0 auto",
});

const styleBlocImage = style({
  backgroundImage: "url('/assets/index/splashblue.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPositionY: "100px",
  width: "50%",
  maxWidth: "600px",
  margin: "0 auto",
});

const styleImage = style({
  width: "100%",
   borderRadius: "50%",
   transform: "scale(0.65)",
  position: "relative",
  top: "-3rem"
});

const styleTitle = style({
  fontSize: "24px",
  letterSpacing: "0.2rem"
});

const stylePre = style({
  fontSize: "1.3rem",
  fontFamily: "Tenor",
  background: "white",
  color: "#2c2c5f",
  marginRight:"2rem"
});

const styleLogoImage = style({
  display: "block",
  width: "250px",
  marginTop: "32px",
});

const styleHandWrite = style({
  position:"relative", 
  left: "100px",
  color: "#F05907",
  fontFamily: 'Allura, cursive',
  fontWeight: "bold",
  fontSize:"28px",
  position: "relative",
  bottom: "10px"
})

function YogaImage() {
  return div(
    img({
      class: styleLogoImage,
      src: "/assets/index/logosyndicat.png",
    })
  );
}


function SummaryTitle() {
  return div (
    h1({ class: styleTitle }, "CERTIFICATS"),
    HandWritenMessage("Francoise Lefeuvre")
  );
}

function SummaryContent() {
  return pre(
    { class: stylePre },
    div(
      pre(
        { class: stylePre },
        `
Françoise Lefeuvre est Adhérente au Syndicat SNPER (Syndicat
National des Praticiens et Enseignants REIKI) et au SDMH (syndicat
des métiers de l'hypnose).`
      ),
      pre(
        { class: stylePre },
        `
Pour accéder aux codes de déontologie cliquez ici :`
      ),
      YogaImage(),
      pre(
        { class: stylePre },
        `
Les séances d'hypnose et les soins énergétiques ne se substituent
en aucun cas à la médecine allopathique. Ils restent
complémentaires d'un éventuel suivi médical.        
        `
      )
    )
  );
}

function Summary() {
  const view = div(
    div ({ class: styleContentSummary }, 
        SummaryTitle(), 
        SummaryContent()
    )
  );
  return view;
}

function View() {
  const view = div(
    { class: styleView },

    div(
      { class: styleBlocImage },
      img({ src: "/assets/index/portraitcircle.png", class: styleImage })
    ),
    div({ class: styleViewSummary }, 
        div(Summary())
    )
  );
  return view;
}

app.append(View());
